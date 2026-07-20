export interface IndustryFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface IndustryFaq {
  question: string;
  answer: string;
}

export interface Industry {
  slug: string;
  name: string;
  cardTitle: string;
  cardBlurb: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSub: string;
  intro: string;
  painPoints: string[];
  features: IndustryFeature[];
  faqs: IndustryFaq[];
}

export const industries: Industry[] = [
  {
    slug: 'retail-shops',
    name: 'Retail Shops',
    cardTitle: 'Retail Shops',
    cardBlurb: 'From clothing stores to general shops',
    image: '/images/industries/Image1.jpg',
    metaTitle: 'POS System for Retail Shops in Kenya | SalesZote',
    metaDescription:
      'A simple POS and inventory system for retail shops in Kenya. Sell with M-Pesa, track stock in real time, and see your best-sellers. Start free for 14 days.',
    h1: 'POS & Inventory System for Retail Shops in Kenya',
    heroSub:
      'Ring up sales in seconds, keep stock accurate, and know exactly what is selling — all from your phone or the counter.',
    intro:
      'Running a retail shop means juggling fast-moving stock, walk-in customers, and a counter that never slows down. SalesZote gives clothing stores, general shops, and boutiques one place to sell, track inventory, and understand what earns the most.',
    painPoints: [
      'Guessing what is in stock and running out of your best-sellers',
      'Counting cash and M-Pesa separately at the end of a long day',
      'No clear picture of which products actually make you money',
    ],
    features: [
      { icon: 'shopping-bag-02', title: 'Fast counter checkout', desc: 'Scan or search, add to the sale, and take M-Pesa or cash in a few taps. Even during a queue.' },
      { icon: 'container', title: 'Real-time stock', desc: 'Every sale updates your stock instantly, so what you see on screen is what is on the shelf.' },
      { icon: 'bar-chart-10', title: 'Best-seller reports', desc: 'See top products, slow movers, and daily takings so you reorder the right things.' },
      { icon: 'credit-card-plus', title: 'M-Pesa & cash in one place', desc: 'Record every payment method together and reconcile your day in minutes, not hours.' },
    ],
    faqs: [
      { question: 'Can I use SalesZote for a small general shop?', answer: '<p>Yes. SalesZote works for a single-counter duka just as well as a larger store. You can start free and add products as you go.</p>' },
      { question: 'Does it work with a barcode scanner?', answer: '<p>Yes. You can scan barcodes to add items to a sale, or search by name if a product has no barcode.</p>' },
      { question: 'Can I see which products sell best?', answer: '<p>Yes. Your reports show best-sellers, slow movers, and daily sales so you always know what to restock.</p>' },
    ],
  },
  {
    slug: 'hardware-stores',
    name: 'Hardware Stores',
    cardTitle: 'Hardware Stores',
    cardBlurb: 'Track bulky stock and multiple suppliers',
    image: '/images/industries/Image2.jpg',
    metaTitle: 'POS & Inventory System for Hardware Stores in Kenya | SalesZote',
    metaDescription:
      'Inventory and POS software built for hardware stores in Kenya. Track bulky stock, manage suppliers, sell in units or bulk, and accept M-Pesa. Try it free.',
    h1: 'POS & Inventory System for Hardware Stores in Kenya',
    heroSub:
      'Track cement, steel, tools, and fittings across suppliers, sell by the piece or in bulk, and never lose a sale to a stockout.',
    intro:
      'Hardware stores carry hundreds of items across many suppliers, and a single stockout can send a customer to the shop next door. SalesZote helps you keep bulky and fast-moving stock accurate, buy from the right suppliers, and price bulk orders with confidence.',
    painPoints: [
      'Losing track of stock spread across many suppliers and categories',
      'Selling the same item in pieces, dozens, and bulk without clear pricing',
      'Finding out an item is finished only when a customer asks for it',
    ],
    features: [
      { icon: 'container', title: 'Track bulky & varied stock', desc: 'Manage cement, steel, paint, and small fittings side by side, each with its own units and reorder level.' },
      { icon: 'server-04', title: 'Multiple suppliers', desc: 'Record who you buy from and their prices, so you always reorder from the right supplier.' },
      { icon: 'bank-note-01', title: 'Bulk & unit pricing', desc: 'Sell by the piece or in bulk with pricing that stays consistent for every customer.' },
      { icon: 'bar-chart-10', title: 'Low-stock alerts', desc: 'Get warned before fast-moving items run out so you reorder in time.' },
    ],
    faqs: [
      { question: 'Can I sell items in both pieces and bulk?', answer: '<p>Yes. You can set up products with different units and prices, so a bulk buyer and a walk-in customer are both handled correctly.</p>' },
      { question: 'Can I track stock from different suppliers?', answer: '<p>Yes. SalesZote lets you record suppliers and their prices so you know where to reorder each item.</p>' },
      { question: 'Will it warn me before stock runs out?', answer: '<p>Yes. Set a reorder level for each item and SalesZote alerts you when stock falls low.</p>' },
    ],
  },
  {
    slug: 'pharmacies',
    name: 'Pharmacies & Chemists',
    cardTitle: 'Pharmacies & Chemists',
    cardBlurb: 'Manage sensitive inventory with ease',
    image: '/images/industries/Image3.jpg',
    metaTitle: 'POS & Inventory System for Pharmacies in Kenya | SalesZote',
    metaDescription:
      'POS and inventory software for pharmacies and chemists in Kenya. Track batches, watch expiry dates, manage stock, and sell with M-Pesa. Start free for 14 days.',
    h1: 'POS & Inventory System for Pharmacies & Chemists in Kenya',
    heroSub:
      'Keep sensitive stock accurate, stay ahead of expiry dates, and serve customers quickly at the counter.',
    intro:
      'A pharmacy cannot afford to sell expired stock or run out of essential medicines. SalesZote helps chemists and pharmacies track inventory carefully, keep an eye on expiry dates, and move customers through the counter without delay.',
    painPoints: [
      'Discovering expired stock only when it is too late to return it',
      'Running out of essential items with no warning',
      'Slow service when the shop is busy and a queue builds up',
    ],
    features: [
      { icon: 'container', title: 'Expiry & batch awareness', desc: 'Track stock closely so you can act on items nearing their expiry date before they become a loss.' },
      { icon: 'bar-chart-10', title: 'Low-stock alerts', desc: 'Get notified before essential medicines run out so you can reorder in good time.' },
      { icon: 'shopping-bag-02', title: 'Fast, accurate counter', desc: 'Find items quickly and complete each sale with the correct price every time.' },
      { icon: 'users-02', title: 'Customer records', desc: 'Keep track of regular customers and their purchases to serve them better.' },
    ],
    faqs: [
      { question: 'Can SalesZote help me manage expiry dates?', answer: '<p>Yes. You can track stock closely and monitor quantities so you act on items nearing expiry before they become a loss.</p>' },
      { question: 'Is my pharmacy data secure?', answer: '<p>Yes. SalesZote stores your data securely in the cloud with encryption and regular backups.</p>' },
      { question: 'Can more than one staff member use it?', answer: '<p>Yes. You can add staff with their own access so several people can serve customers at once.</p>' },
    ],
  },
  {
    slug: 'restaurants-cafes',
    name: 'Restaurants & Cafés',
    cardTitle: 'Restaurants & Cafés',
    cardBlurb: 'Handle dine-in, takeout and daily expenses',
    image: '/images/industries/Image4.jpg',
    metaTitle: 'POS System for Restaurants & Cafés in Kenya | SalesZote',
    metaDescription:
      'A POS system for restaurants and cafés in Kenya. Take orders fast, track ingredients, manage daily expenses, and accept M-Pesa. Try SalesZote free for 14 days.',
    h1: 'POS System for Restaurants & Cafés in Kenya',
    heroSub:
      'Take orders quickly, keep track of ingredients and daily expenses, and see which dishes bring in the most.',
    intro:
      'Restaurants and cafés move fast, from dine-in orders to takeout and daily supplies. SalesZote helps you serve customers quickly, keep an eye on ingredient stock, and understand which menu items and days earn the most.',
    painPoints: [
      'Orders slowing down when the place is full',
      'Running out of key ingredients mid-service',
      'No clear view of daily takings against daily expenses',
    ],
    features: [
      { icon: 'shopping-bag-02', title: 'Fast order taking', desc: 'Ring up dine-in and takeout orders quickly and take payment by M-Pesa or cash.' },
      { icon: 'container', title: 'Ingredient stock', desc: 'Track key ingredients and supplies so you know what to restock before you run out.' },
      { icon: 'bank-note-01', title: 'Daily expense tracking', desc: 'Record purchases and expenses so you can see real profit at the end of each day.' },
      { icon: 'bar-chart-10', title: 'Best-selling dishes', desc: 'See which menu items sell most so you plan your menu and stock around demand.' },
    ],
    faqs: [
      { question: 'Can I handle both dine-in and takeout?', answer: '<p>Yes. SalesZote lets you take orders and payments quickly for both dine-in and takeout customers.</p>' },
      { question: 'Can I track daily expenses?', answer: '<p>Yes. You can record purchases and expenses so your reports show real profit, not just sales.</p>' },
      { question: 'Can I see my best-selling items?', answer: '<p>Yes. Your reports show which dishes and drinks sell best so you can plan around demand.</p>' },
    ],
  },
  {
    slug: 'cosmetics-beauty',
    name: 'Cosmetics & Beauty Stores',
    cardTitle: 'Cosmetics & Beauty Stores',
    cardBlurb: 'Manage fast-moving and seasonal stock',
    image: '/images/industries/Image5.jpg',
    metaTitle: 'POS & Inventory System for Cosmetics & Beauty Shops in Kenya | SalesZote',
    metaDescription:
      'POS and inventory software for cosmetics and beauty stores in Kenya. Track fast-moving stock, manage variants, reward regulars, and sell with M-Pesa. Try it free.',
    h1: 'POS & Inventory System for Cosmetics & Beauty Stores in Kenya',
    heroSub:
      'Keep fast-moving and seasonal stock accurate, track shades and variants, and keep your regulars coming back.',
    intro:
      'Cosmetics and beauty stores sell fast-moving products in many shades, sizes, and brands. SalesZote helps you keep every variant in stock, spot seasonal trends early, and build loyalty with the customers who return again and again.',
    painPoints: [
      'Running out of popular shades and sizes while others gather dust',
      'Losing track of many similar products and brands',
      'No easy way to reward and keep loyal customers',
    ],
    features: [
      { icon: 'container', title: 'Track variants', desc: 'Manage shades, sizes, and brands as separate items so your stock counts stay accurate.' },
      { icon: 'bar-chart-10', title: 'Spot trends early', desc: 'See what is selling this season so you stock up before demand peaks.' },
      { icon: 'users-02', title: 'Customer loyalty', desc: 'Keep records of regular customers and their favourites to serve them better.' },
      { icon: 'credit-card-plus', title: 'M-Pesa & card', desc: 'Accept the payments your customers prefer and reconcile everything in one place.' },
    ],
    faqs: [
      { question: 'Can I track different shades and sizes?', answer: '<p>Yes. You can set up each shade or size as its own item so your stock counts stay accurate.</p>' },
      { question: 'Can I keep track of loyal customers?', answer: '<p>Yes. SalesZote lets you record customers and their purchases so you can serve and reward your regulars.</p>' },
      { question: 'Does it work on my phone?', answer: '<p>Yes. SalesZote works on phones, tablets, and computers so you can manage your shop from anywhere.</p>' },
    ],
  },
  {
    slug: 'electronics-shops',
    name: 'Electronics Shops',
    cardTitle: 'Electronics Shops',
    cardBlurb: 'Monitor sales, repairs and warranties',
    image: '/images/industries/Image6.jpg',
    metaTitle: 'POS & Inventory System for Electronics Shops in Kenya | SalesZote',
    metaDescription:
      'POS and inventory software for electronics shops in Kenya. Track high-value stock, record sales and customers, manage suppliers, and accept M-Pesa. Try it free.',
    h1: 'POS & Inventory System for Electronics Shops in Kenya',
    heroSub:
      'Track high-value stock accurately, record every sale and customer, and manage suppliers with confidence.',
    intro:
      'Electronics shops carry high-value stock where every unit counts. SalesZote helps you track phones, accessories, and appliances precisely, keep clear records of sales and customers, and stay on top of what you owe your suppliers.',
    painPoints: [
      'Losing money when high-value stock is miscounted',
      'No clear record of who bought what and when',
      'Struggling to track supplier stock and payments',
    ],
    features: [
      { icon: 'container', title: 'Precise stock control', desc: 'Track every high-value unit so your counts stay accurate down to the last item.' },
      { icon: 'users-02', title: 'Sales & customer records', desc: 'Keep a clear record of each sale and customer for follow-ups and after-sales service.' },
      { icon: 'server-04', title: 'Supplier management', desc: 'Record suppliers and prices so you always reorder from the right place.' },
      { icon: 'bar-chart-10', title: 'Sales insights', desc: 'See what is selling and what is slow so you invest your money in the right stock.' },
    ],
    faqs: [
      { question: 'Can I track high-value items individually?', answer: '<p>Yes. SalesZote lets you track stock precisely so every high-value unit is accounted for.</p>' },
      { question: 'Can I keep customer records for after-sales?', answer: '<p>Yes. You can record each sale and customer, which makes follow-ups and after-sales service easier.</p>' },
      { question: 'Can I manage my suppliers?', answer: '<p>Yes. You can record suppliers and their prices so reordering is quick and accurate.</p>' },
    ],
  },
  {
    slug: 'agrovet',
    name: 'Agrovet & Farm Supply Stores',
    cardTitle: 'Agrovet & Farm Supply Stores',
    cardBlurb: 'Manage seeds, feeds and farm inputs',
    image: '/images/industries/agrovet.jpg',
    metaTitle: 'POS & Inventory System for Agrovet Shops in Kenya | SalesZote',
    metaDescription:
      'POS and inventory software for agrovet and farm supply stores in Kenya. Track feeds, seeds, and inputs, watch expiry, and sell with M-Pesa. Start free for 14 days.',
    h1: 'POS & Inventory System for Agrovet & Farm Supply Stores in Kenya',
    heroSub:
      'Track feeds, seeds, and farm inputs, stay ahead of expiry, and serve farmers quickly during the busy season.',
    intro:
      'Agrovet shops stock feeds, seeds, chemicals, and equipment that move with the seasons. SalesZote helps you keep sensitive inputs accurate, watch expiry dates, and be ready for the rush when planting and harvest seasons arrive.',
    painPoints: [
      'Sensitive inputs expiring before they are sold',
      'Running short of feeds and seeds during peak season',
      'No clear view of which inputs actually sell',
    ],
    features: [
      { icon: 'container', title: 'Track sensitive inputs', desc: 'Manage feeds, seeds, and chemicals with reorder levels so nothing runs out unexpectedly.' },
      { icon: 'bar-chart-10', title: 'Seasonal planning', desc: 'See what sells in each season so you stock up before planting and harvest peaks.' },
      { icon: 'bank-note-01', title: 'Bulk & unit sales', desc: 'Sell by the sack, litre, or piece with pricing that stays consistent for every farmer.' },
      { icon: 'credit-card-plus', title: 'M-Pesa & cash', desc: 'Accept M-Pesa and cash and reconcile the whole day in one place.' },
    ],
    faqs: [
      { question: 'Can I track expiry on chemicals and feeds?', answer: '<p>Yes. You can track stock closely and monitor quantities so you act on items nearing expiry in good time.</p>' },
      { question: 'Can I sell in bulk and in units?', answer: '<p>Yes. Set up products with different units and prices so bulk buyers and walk-in farmers are both handled correctly.</p>' },
      { question: 'Will it help me prepare for peak season?', answer: '<p>Yes. Your reports show what sells each season so you can stock up before demand rises.</p>' },
    ],
  },
  {
    slug: 'mini-supermarkets',
    name: 'Mini Supermarkets',
    cardTitle: 'Mini Supermarkets',
    cardBlurb: 'Streamline checkout and inventory across aisles',
    image: '/images/industries/Image8.jpg',
    metaTitle: 'POS & Inventory System for Mini Supermarkets in Kenya | SalesZote',
    metaDescription:
      'POS and inventory software for mini supermarkets and minimarts in Kenya. Speed up checkout, track thousands of items, manage staff, and accept M-Pesa. Try it free.',
    h1: 'POS & Inventory System for Mini Supermarkets in Kenya',
    heroSub:
      'Speed up checkout, keep thousands of items accurate across aisles, and manage staff from one dashboard.',
    intro:
      'A mini supermarket carries thousands of items and serves a steady stream of customers. SalesZote keeps checkout fast, stock accurate across every aisle, and gives you one dashboard to manage staff and see how the whole shop is performing.',
    painPoints: [
      'Slow checkout lines during busy hours',
      'Losing track of stock across many aisles and categories',
      'No easy way to see staff performance and daily takings',
    ],
    features: [
      { icon: 'shopping-bag-02', title: 'Fast multi-till checkout', desc: 'Scan and take payment quickly so lines keep moving even at peak hours.' },
      { icon: 'container', title: 'Stock across aisles', desc: 'Track thousands of items with reorder levels so shelves stay stocked.' },
      { icon: 'users-02', title: 'Staff management', desc: 'Give each staff member their own access and see who sold what.' },
      { icon: 'bar-chart-10', title: 'Whole-shop reports', desc: 'See daily takings, best-sellers, and performance across the store at a glance.' },
    ],
    faqs: [
      { question: 'Can several tills use SalesZote at once?', answer: '<p>Yes. You can add staff with their own access so several people can serve customers at the same time.</p>' },
      { question: 'Can I track thousands of products?', answer: '<p>Yes. SalesZote is built to handle large catalogues with reorder levels to keep shelves stocked.</p>' },
      { question: 'Can I see how each staff member is doing?', answer: '<p>Yes. Sales are recorded per staff member so you can see who sold what and how the shop is performing.</p>' },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
