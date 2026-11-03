import type { ImageMetadata } from 'astro';
import retail from '../assets/industries/retail.png';
import hardware from '../assets/industries/hardware.png';
import pharmacy from '../assets/industries/pharmacy.png';
import restaurant from '../assets/industries/restaurant.png';
import cosmetics from '../assets/industries/cosmetics.png';
import electronics from '../assets/industries/electronics.png';
import agrovet from '../assets/industries/features/agrovet/1.jpg';
import supermarket from '../assets/industries/supermarket.png';

// Card photo for each industry (by slug): the "Who is SalesZote for?" slider and the Industries menus.
export const industryPhotos: Record<string, ImageMetadata> = {
  'retail-shops': retail,
  'hardware-stores': hardware,
  pharmacies: pharmacy,
  'restaurants-cafes': restaurant,
  'cosmetics-beauty': cosmetics,
  'electronics-shops': electronics,
  agrovet,
  'mini-supermarkets': supermarket,
};
