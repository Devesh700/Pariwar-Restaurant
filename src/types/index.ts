// ─── TYPES & INTERFACES ────────────────────────────────────────────────────────

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  desc: string;
  tag: "Veg" | "Non-Veg";
  img: string;
  rating: number;
  time: string;
  qty?: number;
}

export interface CartItem extends MenuItem {
  qty: number;
}

export interface Table {
  id: number;
  name: string;
  seats: number;
  type: "Romantic" | "Family" | "Cozy" | "Group" | "Event" | "Trendy";
  floor: string;
  available: boolean;
}

export interface Review {
  name: string;
  rating: number;
  text: string;
  avatar: string;
  date: string;
}

export interface Toast {
  msg: string;
  type: "success" | "error";
}

export interface BookingForm {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  requests: string;
}

export interface AddressForm {
  name: string;
  phone: string;
  addr: string;
  pincode: string;
  instructions: string;
}

export interface EventForm {
  name: string;
  phone: string;
  email: string;
  event: string;
  date: string;
  guests: string;
  notes: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface Event {
  icon: string;
  title: string;
  freq: string;
  desc: string;
  tag: "Weekly" | "Monthly" | "Private";
}
