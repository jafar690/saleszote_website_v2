import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, string>;

  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ message: 'Invalid request body.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { first_name, last_name, email, phone, message } = body;

  const errors: string[] = [];
  if (!first_name?.trim()) errors.push('First name is required.');
  if (!last_name?.trim()) errors.push('Last name is required.');
  if (!email?.trim()) errors.push('Email is required.');
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Please enter a valid email address.');
  if (!phone?.trim()) errors.push('Phone number is required.');
  if (!message?.trim()) errors.push('Message is required.');

  if (errors.length > 0) {
    return new Response(
      JSON.stringify({ message: 'Please fix the errors below.', errors }),
      { status: 422, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const webhookUrl = import.meta.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    return new Response(
      JSON.stringify({ message: 'Server configuration error.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const slackPayload = {
    text: `*New Contact Form Submission*\n*Name:* ${first_name} ${last_name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Message:* ${message}`,
  };

  try {
    const slackRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slackPayload),
    });

    if (!slackRes.ok) {
      throw new Error(`Slack responded with ${slackRes.status}`);
    }
  } catch (err) {
    console.error('Slack webhook error:', err);
    return new Response(
      JSON.stringify({ message: 'Failed to send message. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return new Response(
    JSON.stringify({ success: true, message: 'Your message has been sent! We\'ll get back to you shortly.' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
