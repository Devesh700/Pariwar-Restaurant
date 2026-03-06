import type { MenuItem, Table, Review, Feature, Event } from "../types";

// ─── MENU DATA ────────────────────────────────────────────────────────────────

export const MENU: Record<string, MenuItem[]> = {
  Breakfast: [
    { id: 1, name: "Masala Dosa", price: 120, desc: "Crispy dosa with spiced potato filling", tag: "Veg", img: "🥞", rating: 4.8, time: "15 min" },
    { id: 2, name: "Poha Platter", price: 90, desc: "Flattened rice with onions & tempering", tag: "Veg", img: "🍛", rating: 4.6, time: "10 min" },
    { id: 3, name: "Aloo Paratha", price: 100, desc: "Stuffed wheat bread with pickle & curd", tag: "Veg", img: "🫓", rating: 4.9, time: "20 min" },
  ],
  Lunch: [
    { id: 4, name: "Pariwar Thali", price: 299, desc: "Complete meal: dal, sabzi, roti, rice, dessert", tag: "Veg", img: "🍱", rating: 4.9, time: "25 min" },
    { id: 5, name: "Butter Chicken", price: 320, desc: "Tender chicken in rich tomato-butter gravy", tag: "Non-Veg", img: "🍗", rating: 4.8, time: "30 min" },
    { id: 6, name: "Dal Makhani", price: 220, desc: "Slow-cooked black lentils in buttery sauce", tag: "Veg", img: "🫘", rating: 4.7, time: "20 min" },
  ],
  Dinner: [
    { id: 7, name: "Tandoori Platter", price: 480, desc: "Mixed grill with naan & mint chutney", tag: "Non-Veg", img: "🍢", rating: 4.9, time: "35 min" },
    { id: 8, name: "Shahi Paneer", price: 280, desc: "Cottage cheese in royal cream sauce", tag: "Veg", img: "🧀", rating: 4.7, time: "25 min" },
    { id: 9, name: "Biryani Royal", price: 350, desc: "Dum-cooked fragrant rice with raita", tag: "Non-Veg", img: "🍚", rating: 5.0, time: "40 min" },
  ],
  Dessert: [
    { id: 10, name: "Gulab Jamun", price: 80, desc: "Soft milk dumplings in rose syrup", tag: "Veg", img: "🟤", rating: 4.9, time: "5 min" },
    { id: 11, name: "Rasmalai", price: 110, desc: "Cottage cheese patties in saffron cream", tag: "Veg", img: "🥛", rating: 4.8, time: "5 min" },
    { id: 12, name: "Chocolate Lava", price: 150, desc: "Warm chocolate cake with vanilla ice cream", tag: "Veg", img: "🍫", rating: 4.7, time: "15 min" },
  ],
};

// ─── TABLES DATA ───────────────────────────────────────────────────────────────

export const TABLES: Table[] = [
  { id: 1, name: "Window Nook", seats: 2, type: "Romantic", floor: "Ground", available: true },
  { id: 2, name: "Garden View", seats: 4, type: "Family", floor: "Ground", available: true },
  { id: 3, name: "Fireplace Corner", seats: 2, type: "Cozy", floor: "Ground", available: false },
  { id: 4, name: "Rooftop Terrace A", seats: 6, type: "Group", floor: "Rooftop", available: true },
  { id: 5, name: "Rooftop Terrace B", seats: 4, type: "Family", floor: "Rooftop", available: true },
  { id: 6, name: "Private Dining", seats: 10, type: "Event", floor: "First", available: true },
  { id: 7, name: "Bar Side", seats: 2, type: "Trendy", floor: "Ground", available: false },
  { id: 8, name: "Central Hall", seats: 8, type: "Group", floor: "Ground", available: true },
];

// ─── REVIEWS DATA ──────────────────────────────────────────────────────────────

export const REVIEWS: Review[] = [
  { name: "Priya Sharma", rating: 5, text: "The Pariwar Thali is absolutely divine! Every dish tasted like home-cooked perfection. Will definitely return.", avatar: "PS", date: "Feb 2026" },
  { name: "Arjun Mehta", rating: 5, text: "Rooftop seating on a winter evening with live music and the Tandoori Platter — an unforgettable experience!", avatar: "AM", date: "Jan 2026" },
  { name: "Sneha Patel", rating: 4, text: "Lovely ambiance, great coffee, and the kids loved the menu. The staff was incredibly welcoming.", avatar: "SP", date: "Jan 2026" },
  { name: "Rohit Gupta", rating: 5, text: "Celebrated our anniversary in the private dining room. The decorations, food, and service were all top-notch!", avatar: "RG", date: "Dec 2025" },
];

// ─── FEATURES DATA ────────────────────────────────────────────────────────────

export const FEATURES: Feature[] = [
  { icon: "🔥", title: "Fireplace Dining", desc: "Cozy up by our warm fireplace for an intimate dining experience" },
  { icon: "🌿", title: "Rooftop Garden", desc: "Al fresco dining under the stars with panoramic city views" },
  { icon: "🎵", title: "Live Music", desc: "Weekend evenings feature live performances by local artists" },
  { icon: "🥂", title: "Private Events", desc: "Host birthdays, anniversaries & corporate events in style" },
];

// ─── EVENTS DATA ───────────────────────────────────────────────────────────────

export const EVENTS: Event[] = [
  { icon: "🎵", title: "Live Music Nights", freq: "Every Friday & Saturday", desc: "Enjoy soulful performances by local artists every weekend evening from 7 PM to 11 PM.", tag: "Weekly" },
  { icon: "🍷", title: "Wine & Dine Special", freq: "Every 1st Saturday", desc: "A curated 5-course dinner paired with handpicked wines. Limited seats — book early!", tag: "Monthly" },
  { icon: "🎂", title: "Birthday Celebrations", freq: "By Reservation", desc: "Let us make your special day unforgettable with custom decorations, cake, and more.", tag: "Private" },
  { icon: "👨‍👩‍👧‍👦", title: "Sunday Family Brunch", freq: "Every Sunday 9AM–2PM", desc: "All-you-can-eat brunch buffet with live dosa station, dessert bar, and kids' corner.", tag: "Weekly" },
  { icon: "💼", title: "Corporate Events", freq: "By Reservation", desc: "Private dining room available for team lunches, client dinners, and business meetings.", tag: "Private" },
  { icon: "🌅", title: "Rooftop Sundowner", freq: "Every Sat & Sun", desc: "Happy hour cocktails and small plates on our scenic rooftop from 5 PM to 7 PM.", tag: "Weekly" },
];

// ─── CONTACT DATA ──────────────────────────────────────────────────────────────

export const RESTAURANT_INFO = {
  name: "Pariwar Restaurant",
  address: "123 Civil Lines, Lucknow, UP 226001",
  phone: "+91 98765 43210",
  email: "hello@pariwarrestaurant.com",
  hours: [
    { day: "Mon – Fri", time: "7:00 AM – 11:00 PM" },
    { day: "Saturday", time: "7:00 AM – 12:00 AM" },
    { day: "Sunday", time: "8:00 AM – 11:00 PM" },
  ],
  wifi: "Pariwar_Guest",
};

export const FEATURES_STRIP = [
  "🆓 Free Wi-Fi",
  "🅿️ Free Parking",
  "♿ Wheelchair Access",
  "🍷 Full Bar",
  "🎵 Live Music Weekends",
  "🌿 Veg & Non-Veg",
  "🚗 Drive-through",
  "🚴 Delivery",
];
