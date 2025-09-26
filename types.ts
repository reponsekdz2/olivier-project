export interface Destination {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  coords: {
    cx: string;
    cy: string;
  };
}

// FIX: Added missing Itinerary types to resolve compilation errors.
export interface ItineraryActivity {
  time: string;
  description: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: ItineraryActivity[];
}

export type ItineraryPlan = ItineraryDay[];
