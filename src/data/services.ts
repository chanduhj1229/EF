
export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  price: {
    amount: number;
    currency: string;
    unit?: string;
  };
  image: string;
  category: string;
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "corporate",
    name: "Corporate Events",
    description: "Professional event management for business functions",
    icon: "briefcase"
  },
  {
    id: "social",
    name: "Social Gatherings",
    description: "Memorable celebrations for all your special moments",
    icon: "users"
  },
  {
    id: "weddings",
    name: "Weddings",
    description: "Create the perfect day with our wedding services",
    icon: "heart"
  },
  {
    id: "conferences",
    name: "Conferences",
    description: "Large-scale event organization and management",
    icon: "mic"
  }
];

export const services: Service[] = [
  {
    id: "corp-meeting",
    title: "Corporate Meeting Package",
    shortDescription: "Complete meeting solutions for your business",
    description: "Our Corporate Meeting Package provides everything you need for a successful business gathering. From state-of-the-art audiovisual equipment to catering services, we handle all aspects of your meeting logistics so you can focus on the content.",
    price: {
      amount: 1500,
      currency: "USD",
      unit: "per event"
    },
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    category: "corporate",
    features: [
      "Professional AV equipment",
      "Custom seating arrangements",
      "Catering options",
      "Digital presentation support",
      "On-site technical assistance"
    ]
  },
  {
    id: "annual-gala",
    title: "Annual Gala Production",
    shortDescription: "Glamorous and memorable corporate celebrations",
    description: "Make your annual company gathering an event to remember with our comprehensive gala production services. We cover every detail from elegant venue selection to entertainment booking, creating a sophisticated atmosphere that impresses attendees and celebrates your company's achievements.",
    price: {
      amount: 5000,
      currency: "USD",
      unit: "per event"
    },
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
    category: "corporate",
    features: [
      "Venue selection assistance",
      "Themed decoration",
      "Entertainment booking",
      "Red carpet experience",
      "Professional photography",
      "Custom awards ceremony setup"
    ]
  },
  {
    id: "birthday-party",
    title: "Premium Birthday Celebration",
    shortDescription: "Unforgettable birthday experiences",
    description: "Celebrate your special day with our Premium Birthday Package. We handle everything from venue decoration to entertainment and catering, creating a personalized experience that matches your style and preferences.",
    price: {
      amount: 800,
      currency: "USD",
      unit: "per event"
    },
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
    category: "social",
    features: [
      "Customized theme design",
      "Decoration setup",
      "Cake arrangement",
      "Entertainment options",
      "Party favor coordination",
      "Photography services"
    ]
  },
  {
    id: "wedding-full",
    title: "Complete Wedding Package",
    shortDescription: "End-to-end wedding planning and execution",
    description: "Our comprehensive wedding package covers every aspect of your special day, from venue selection and decoration to catering, entertainment, and photography. Our experienced wedding planners work closely with you to bring your vision to life.",
    price: {
      amount: 8000,
      currency: "USD",
      unit: "per event"
    },
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    category: "weddings",
    features: [
      "Full planning services",
      "Venue coordination",
      "Vendor management",
      "Custom decoration",
      "Day-of coordination",
      "Photography and videography",
      "Guest management"
    ]
  },
  {
    id: "tech-conference",
    title: "Tech Conference Organization",
    shortDescription: "Full-scale technology conference management",
    description: "Our Tech Conference service provides end-to-end management of technology-focused events. We handle speaker coordination, technical setup, attendee registration, and all logistics to ensure a successful and engaging conference experience.",
    price: {
      amount: 12000,
      currency: "USD",
      unit: "per event"
    },
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
    category: "conferences",
    features: [
      "Venue selection and management",
      "Speaker coordination",
      "Advanced AV setup",
      "Registration system",
      "Live streaming",
      "Breakout session management",
      "Networking event organization"
    ]
  },
  {
    id: "wedding-day",
    title: "Day-of Wedding Coordination",
    shortDescription: "Stress-free wedding day management",
    description: "Our Day-of Wedding Coordination ensures your wedding day runs smoothly without you having to worry about the details. Our experienced coordinators will handle the timeline, vendor coordination, and any last-minute issues that arise.",
    price: {
      amount: 1200,
      currency: "USD",
      unit: "per event"
    },
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    category: "weddings",
    features: [
      "Detailed timeline creation",
      "Vendor coordination",
      "Ceremony rehearsal assistance",
      "On-site management",
      "Guest assistance",
      "Emergency kit provision"
    ]
  },
  {
    id: "product-launch",
    title: "Product Launch Event",
    shortDescription: "Impactful product introduction events",
    description: "Make a lasting impression with our Product Launch Event services. We create an environment that highlights your product's features and benefits, generating excitement among attendees and media coverage for maximum market impact.",
    price: {
      amount: 3500,
      currency: "USD",
      unit: "per event"
    },
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17",
    category: "corporate",
    features: [
      "Strategic event planning",
      "Brand-aligned experience design",
      "Media coordination",
      "Product display setup",
      "Demonstration areas",
      "Press kit preparation"
    ]
  },
  {
    id: "graduation-party",
    title: "Graduation Celebration",
    shortDescription: "Celebrate academic achievements in style",
    description: "Honor your academic milestone with our Graduation Celebration package. We create a festive atmosphere that celebrates your achievements and creates lasting memories with family and friends.",
    price: {
      amount: 600,
      currency: "USD",
      unit: "per event"
    },
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
    category: "social",
    features: [
      "Themed decoration",
      "Custom banners and signage",
      "Photo area setup",
      "Catering coordination",
      "Entertainment planning",
      "Memory book setup"
    ]
  }
];

export const getServicesByCategory = (categoryId: string): Service[] => {
  return services.filter(service => service.category === categoryId);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const formatPrice = (price: Service['price']): string => {
  return `${price.currency} ${price.amount.toLocaleString()}${price.unit ? ` ${price.unit}` : ''}`;
};
