import { Property } from '../types.ts';

/**
 * ============================================================================
 * URBANKEYS PROPERTY INVENTORY (PLACEHOLDER DATA)
 * ============================================================================
 * NOTE FOR URBANKEYS TEAM:
 * This file contains realistic sample properties structured for easy replacement.
 * When ready to display live inventory, replace the items in this array or hook
 * this data source to your database / CMS.
 * ============================================================================
 */

export const PROPERTIES_DATA: Property[] = [
  {
    id: 'uk-01',
    title: 'Modern 2 BHK Family Home',
    type: 'Apartment',
    location: 'Morabadi, Ranchi',
    subLocality: 'Morabadi',
    price: '₹17,500 / month',
    priceRange: '10k-20k',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,240 sq.ft',
    category: 'family',
    description: 'A serene and well-ventilated 2 BHK home located in the green belt of Morabadi. Designed with open-plan family spaces, natural sunlight throughout the day, and immediate access to walking grounds and family conveniences.',
    highlights: [
      'Spacious living room with private balcony',
      'Peaceful residential neighborhood in Morabadi',
      'Close to schools, parks & grocery hubs',
      '24/7 water supply & power backup provision'
    ],
    amenities: [
      'Gated Security',
      'Balcony View',
      'Covered Parking',
      'Elevator Access',
      'Water Storage',
      'Modular Kitchen'
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    available: true,
    featured: true,
    suitableFor: 'Family Living',
    furnishing: 'Semi-Furnished',
    parking: 'Car & Bike',
    isPlaceholder: true,
  },
  {
    id: 'uk-02',
    title: 'Premium 3 BHK Residence',
    type: 'Apartment',
    location: 'Kanke Road, Ranchi',
    subLocality: 'Kanke Road',
    price: '₹28,000 / month',
    priceRange: '20k-30k',
    bedrooms: 3,
    bathrooms: 3,
    area: '1,820 sq.ft',
    category: 'family',
    description: 'An expansive modern 3 BHK residence situated along prime Kanke Road. Crafted for families prioritizing spacious bedrooms, high-end woodwork, and scenic hilltop ventilation.',
    highlights: [
      'Three oversized ensuite bedrooms with storage',
      'East-facing panoramic morning light',
      'Proximity to reputed schools & healthcare',
      'Double reserved parking spaces'
    ],
    amenities: [
      '24/7 Security & CCTV',
      'Twin Balconies',
      'Reserved Stilt Parking',
      'High-Speed Elevators',
      'Clubhouse / Community Hall',
      'Intercom Facility'
    ],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ],
    available: true,
    featured: true,
    suitableFor: 'Family Living',
    furnishing: 'Semi-Furnished',
    parking: 'Dedicated Stilt',
    isPlaceholder: true,
  },
  {
    id: 'uk-03',
    title: 'Modern Bachelor Apartment',
    type: 'Apartment',
    location: 'Lalpur, Ranchi',
    subLocality: 'Lalpur',
    price: '₹12,500 / month',
    priceRange: '10k-20k',
    bedrooms: 1,
    bathrooms: 1,
    area: '620 sq.ft',
    category: 'bachelor',
    description: 'A hassle-free, bachelor-friendly modern 1 BHK apartment situated right in the energetic center of Lalpur. Zero landlord interference, high-speed internet ready, and walkable to cafes, transit, and coaching centers.',
    highlights: [
      '100% bachelor friendly with fair terms',
      'Heart of Lalpur hub: walk to cafes and transit',
      'Low maintenance and quick move-in ready',
      'High-speed fiber connectivity compatible'
    ],
    amenities: [
      'Private Entrance',
      'Bike Parking',
      'Continuous Water Supply',
      'Kitchenette Setup',
      'Separate Utility Meter',
      'CCTV Monitoring'
    ],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80'
    ],
    available: true,
    featured: true,
    suitableFor: 'Bachelor Living',
    furnishing: 'Fully Furnished',
    parking: 'Bike Only',
    isPlaceholder: true,
  },
  {
    id: 'uk-04',
    title: 'Independent Urban Home',
    type: 'House',
    location: 'Ashok Nagar, Ranchi',
    subLocality: 'Ashok Nagar',
    price: '₹34,000 / month',
    priceRange: '30k-plus',
    bedrooms: 4,
    bathrooms: 3,
    area: '2,400 sq.ft',
    category: 'family',
    description: 'A prestigious independent single-floor bungalow home in the dignified lanes of Ashok Nagar. Offers expansive courtyards, private terrace space, and quiet tree-lined privacy.',
    highlights: [
      'Independent compound with garden boundary',
      'Quiet, distinguished Ashok Nagar residential street',
      'Spacious private rooftop terrace',
      'Ample space for multi-generational families'
    ],
    amenities: [
      'Private Compound',
      'Gated Driveway',
      'Solar Water Heating',
      'Terrace Access',
      'Staff Room / Utility Area',
      'Borewell & Municipal Water'
    ],
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80'
    ],
    available: true,
    featured: true,
    suitableFor: 'Family Living',
    furnishing: 'Semi-Furnished',
    parking: 'Car & Bike',
    isPlaceholder: true,
  },
  {
    id: 'uk-05',
    title: 'Premium City Apartment',
    type: 'Apartment',
    location: 'Argora, Ranchi',
    subLocality: 'Argora',
    price: '₹15,000 / month',
    priceRange: '10k-20k',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,050 sq.ft',
    category: 'professional',
    description: 'Ideal for IT and corporate professionals commuting to government offices, Ring Road, or Doranda. High aesthetic finish, dedicated home-office corner, and seamless connectivity.',
    highlights: [
      'Designed with remote-work corner & modern lighting',
      'Quick access to Argora Chowk and Ring Road',
      'Peaceful society with professional community',
      'Power backup for uninterruptible work'
    ],
    amenities: [
      'Power Backup',
      'Covered Car Parking',
      'Gymnasium Access',
      'Intercom',
      '24/7 Security Guard',
      'Modern Kitchen Chimney'
    ],
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1200&q=80'
    ],
    available: true,
    featured: true,
    suitableFor: 'Working Professionals',
    furnishing: 'Semi-Furnished',
    parking: 'Car & Bike',
    isPlaceholder: true,
  },
  {
    id: 'uk-06',
    title: 'Contemporary Residence',
    type: 'Apartment',
    location: 'Bariatu, Ranchi',
    subLocality: 'Bariatu',
    price: '₹21,000 / month',
    priceRange: '20k-30k',
    bedrooms: 3,
    bathrooms: 2,
    area: '1,560 sq.ft',
    category: 'family',
    description: 'An airy contemporary apartment close to RIMS and Bariatu Road. Boasts wide balconies, ample parking, and an active family community with landscaped outdoor walking paths.',
    highlights: [
      'Large sunlit balcony overlooking greenery',
      'Family-centric society with play zone for kids',
      'Near leading medical facilities & schools',
      'Wide approach road with easy visitor parking'
    ],
    amenities: [
      'Children Play Area',
      'Landscaped Garden',
      'Elevator',
      '24/7 Security & Fire Safety',
      'Rooftop Clubhouse',
      'Rainwater Harvesting'
    ],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80'
    ],
    available: true,
    featured: true,
    suitableFor: 'Family Living',
    furnishing: 'Unfurnished',
    parking: 'Car & Bike',
    isPlaceholder: true,
  },
  {
    id: 'uk-07',
    title: 'Compact Studio Space for Bachelors',
    type: 'Studio',
    location: 'Harmu Housing Colony, Ranchi',
    subLocality: 'Harmu Housing Colony',
    price: '₹8,500 / month',
    priceRange: 'under-10k',
    bedrooms: 1,
    bathrooms: 1,
    area: '450 sq.ft',
    category: 'bachelor',
    description: 'Affordable, well-maintained studio unit with independent entry. Specially arranged for single students or working bachelors seeking an organized, budget-conscious stay in Ranchi.',
    highlights: [
      'Budget-friendly rental under ₹10,000',
      'Direct main road connectivity via Harmu Bypass',
      'Independent entry and peaceful ambience',
      'Water and basic utility ready'
    ],
    amenities: [
      'Independent Entry',
      'Attached Bathroom',
      'Bike Parking',
      'Water Geyser',
      'Fan & Tube Lights Fitted'
    ],
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
    ],
    available: true,
    featured: false,
    suitableFor: 'Bachelor Living',
    furnishing: 'Semi-Furnished',
    parking: 'Bike Only',
    isPlaceholder: true,
  },
  {
    id: 'uk-08',
    title: 'Executive Villa Floor',
    type: 'Villa',
    location: 'Doranda / Hinoo, Ranchi',
    subLocality: 'Doranda',
    price: 'Contact for pricing',
    priceRange: 'contact',
    bedrooms: 4,
    bathrooms: 4,
    area: '3,100 sq.ft',
    category: 'family',
    description: 'An elite ground-and-first villa floor close to Ranchi Airport and civic administration hubs. Custom marble finishes, private lawn frontage, and total confidentiality.',
    highlights: [
      'Exclusive high-profile residential zone',
      '10 minutes to Birsa Munda Airport',
      'Private garden lawn & servant quarter',
      'Triple vehicle parking'
    ],
    amenities: [
      'Private Garden',
      'Air Conditioning Wiring',
      'Modular Italian Kitchen',
      'CCTV & Video Door Phone',
      'Dual Generator Backup',
      'Perimeter Security Wall'
    ],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80'
    ],
    available: true,
    featured: false,
    suitableFor: 'Family Living',
    furnishing: 'Semi-Furnished',
    parking: 'Dedicated Stilt',
    isPlaceholder: true,
  }
];
