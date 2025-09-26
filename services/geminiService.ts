import { GoogleGenAI, Type } from "@google/genai";
import type { ItineraryPlan, ItineraryDay } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const itinerarySchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      day: {
        type: Type.INTEGER,
        description: 'The day number of the itinerary, starting from 1.',
      },
      title: {
        type: Type.STRING,
        description: 'A catchy and descriptive title for the day\'s plan.',
      },
      activities: {
        type: Type.ARRAY,
        description: 'A list of activities planned for the day.',
        items: {
          type: Type.OBJECT,
          properties: {
            time: {
              type: Type.STRING,
              description: 'The suggested time for the activity (e.g., "9:00 AM", "Afternoon").',
            },
            description: {
              type: Type.STRING,
              description: 'A detailed description of the activity.',
            },
          },
          required: ['time', 'description'],
        },
      },
    },
    required: ['day', 'title', 'activities'],
  },
};

export const generateItinerary = async (destination: string, duration: string, interests: string): Promise<ItineraryPlan> => {
  const prompt = `Create a detailed travel itinerary for a trip to ${destination} for ${duration} days. The traveler is interested in ${interests}. Focus on providing a mix of popular attractions and unique local experiences. For each day, provide a title and a list of activities with suggested times and descriptions.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: itinerarySchema,
      },
    });

    const jsonText = response.text.trim();
    const parsedJson = JSON.parse(jsonText);
    return parsedJson as ItineraryPlan;
  } catch (error) {
    console.error("Error generating itinerary with Gemini:", error);
    throw new Error("Failed to generate itinerary. The model may be unable to provide a plan for the requested location or interests.");
  }
};
