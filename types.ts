export interface Activity {
  time: string;
  description: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: Activity[];
}

export type ItineraryPlan = ItineraryDay[];

export interface Destination {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  coords: { cx: string; cy: string };
}
