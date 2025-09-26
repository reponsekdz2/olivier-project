import React, { useState, useCallback } from 'react';
import { generateItinerary } from '../services/geminiService';
import type { ItineraryPlan, ItineraryDay } from '../types';
import LoadingSpinner from './LoadingSpinner';
import { CalendarIcon, MapPinIcon, SparklesIcon } from './icons/Icons';

// Sub-component for displaying a single day of the itinerary
const ItineraryDayView: React.FC<{ day: ItineraryDay, index: number }> = ({ day, index }) => (
    <div className="mb-6 border-l-2 border-emerald-500 pl-6 relative animate-fadeInUp" style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}>
        <div className="absolute -left-2.5 top-0 w-5 h-5 bg-emerald-500 rounded-full border-4 border-black"></div>
        <h4 className="text-xl font-semibold text-emerald-400">{`Day ${day.day}: ${day.title}`}</h4>
        <div className="mt-3 space-y-3">
            {day.activities.map((activity, index) => (
                <div key={index} className="pl-4">
                    <p className="font-semibold text-white">{activity.time}</p>
                    <p className="text-gray-400">{activity.description}</p>
                </div>
            ))}
        </div>
    </div>
);


const AITripPlanner: React.FC = () => {
    const [destination, setDestination] = useState('');
    const [duration, setDuration] = useState('');
    const [interests, setInterests] = useState('');
    const [itinerary, setItinerary] = useState<ItineraryPlan | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!destination || !duration || !interests) {
            setError('Please fill in all fields.');
            return;
        }
        setLoading(true);
        setError(null);
        setItinerary(null);

        try {
            const plan = await generateItinerary(destination, duration, interests);
            setItinerary(plan);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        } finally {
            setLoading(false);
        }
    }, [destination, duration, interests]);

    return (
        <section id="planner" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent">Craft Your Perfect Trip with AI</h3>
                    <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Tell us your travel dreams, and our AI will build a personalized itinerary just for you.</p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                    {/* Form Section */}
                    <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="destination" className="block text-sm font-medium text-gray-300 mb-2">Destination</label>
                                <div className="relative">
                                    <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                    <input type="text" id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="e.g., Paris, France" className="w-full bg-gray-900 border border-gray-700 rounded-md py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"/>
                                </div>
                            </div>
                             <div>
                                <label htmlFor="duration" className="block text-sm font-medium text-gray-300 mb-2">Duration (days)</label>
                                <div className="relative">
                                    <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                    <input type="number" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="e.g., 7" className="w-full bg-gray-900 border border-gray-700 rounded-md py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"/>
                                </div>
                            </div>
                             <div>
                                <label htmlFor="interests" className="block text-sm font-medium text-gray-300 mb-2">Interests</label>
                                 <div className="relative">
                                    <SparklesIcon className="absolute left-3 top-3.5 text-gray-500" />
                                    <textarea id="interests" value={interests} onChange={(e) => setInterests(e.target.value)} placeholder="e.g., museums, local food, hiking" rows={3} className="w-full bg-gray-900 border border-gray-700 rounded-md py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"></textarea>
                                </div>
                            </div>
                            <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-black font-bold py-3 rounded-md hover:from-emerald-400 hover:to-green-400 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                                {loading ? <LoadingSpinner /> : 'Generate Itinerary'}
                            </button>
                        </form>
                    </div>

                    {/* Results Section */}
                    <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 min-h-[400px]">
                         <h4 className="text-2xl font-bold mb-6 text-white">Your AI-Generated Plan</h4>
                         {loading && (
                            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                <LoadingSpinner />
                                <p className="mt-4">Crafting your adventure...</p>
                            </div>
                         )}
                         {error && <div className="text-red-400 bg-red-900/50 p-4 rounded-md">{error}</div>}
                         {!loading && !error && !itinerary && (
                            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                                <SparklesIcon size={8} />
                                <p className="mt-2">Your personalized itinerary will appear here.</p>
                            </div>
                         )}
                         {itinerary && (
                            <div className="max-h-[500px] overflow-y-auto pr-2">
                                {itinerary.map((day, index) => <ItineraryDayView key={day.day} day={day} index={index} />)}
                            </div>
                         )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AITripPlanner;