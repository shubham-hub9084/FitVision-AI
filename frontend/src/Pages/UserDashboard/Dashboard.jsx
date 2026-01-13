import React, { useState, useEffect } from 'react';
import BackButton from '../../components/BackButton';
import CameraWorkout from './CameraWorkout';
import Overview from './Overview/Overview';
import Progress from './Progress/Progress';
import Achievements from './Achievements/Achievements';
import Nutrition from './Nutrition/Nutrition';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const [showCameraWorkout, setShowCameraWorkout] = useState(false);
    const [activeTab, setActiveTab] = useState("overview");
    const [selectedTimeframe, setSelectedTimeframe] = useState("week");
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    console.log("Dashboard rendering. User:", user);

    // MOCK DATA - To be replaced with real data from backend/context later
    const currentData = {
        workouts: 12,
        totalTime: 450, // minutes
        caloriesBurned: 3200,
        avgFormScore: 85,
        improvements: [
            { exercise: "Squats", improvement: "+15%" },
            { exercise: "Pushups", improvement: "+10%" },
        ]
    };

    const recommendations = [
        {
            title: "Increase Protein Intake",
            description: "Based on your recent workouts, consider increasing your protein intake for better recovery.",
            priority: "high",
            type: "nutrition",
            action: "View Meal Plans"
        },
        {
            title: "Rest Day Needed",
            description: "You've been training hard! Take a rest day to let your muscles recover.",
            priority: "medium",
            type: "wellness",
            action: "See Recovery Tips"
        }
    ];

    const achievements = [
        {
            id: 1,
            title: "Early Bird",
            description: "Completed 5 morning workouts",
            points: 50,
            earned: true,
            date: "2023-10-25",
            icon: "ri-sun-line",
            progress: 5,
            total: 5
        },
        {
            id: 2,
            title: "Iron Man",
            description: "Lift a total of 1000kg",
            points: 100,
            earned: false,
            date: "",
            icon: "ri-weight-line",
            progress: 450,
            total: 1000
        },
        {
            id: 3,
            title: "Consistency King",
            description: "Work out 7 days in a row",
            points: 150,
            earned: true,
            date: "2023-11-01",
            icon: "ri-calendar-check-line",
            progress: 7,
            total: 7
        }
    ];

    const nutritionTips = [
        {
            title: "Hydration is Key",
            category: "Hydration",
            tip: "Drink at least 3 liters of water a day to stay hydrated during workouts.",
            icon: "ri-drop-line"
        },
        {
            title: "Pre-Workout Carb",
            category: "Energy",
            tip: "Eat a banana or some oatmeal 30 mins before your workout for sustained energy.",
            icon: "ri-flashlight-line"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
            {showCameraWorkout && <CameraWorkout onClose={() => setShowCameraWorkout(false)} />}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <BackButton />
                {/* Header */}
                <div className="mb-6 sm:mb-8 mt-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                Welcome back, {user?.full_name || 'User'}!
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400">
                                Here's your fitness progress and personalized recommendations.
                            </p>
                        </div>
                        <div className="mt-4 sm:mt-0 flex gap-3">
                            <button
                                onClick={() => setShowCameraWorkout(true)}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
                            >
                                <i className="ri-camera-line text-lg"></i>
                                Start AI Workout
                            </button>
                            <button className="border-2 border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2">
                                <i className="ri-play-line"></i>
                                Quick Start
                            </button>
                        </div>
                    </div>
                </div>

                {/* Camera Access Feature Card */}
                <div className="mb-6 sm:mb-8" data-aos="fade-up">
                    <div className="bg-gradient-to-r from-emerald-500 to-blue-500 dark:from-emerald-600 dark:to-blue-600 rounded-xl p-6 sm:p-8 text-white">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                            <div className="mb-4 lg:mb-0">
                                <h2 className="text-xl sm:text-2xl font-bold mb-2">
                                    Real-Time AI Workout Tracking
                                </h2>
                                <p className="text-emerald-100 dark:text-emerald-50 mb-4 lg:mb-0">
                                    Enable camera access for intelligent pose detection, form
                                    correction, and automatic rep counting during your workouts.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => setShowCameraWorkout(true)}
                                    className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2 justify-center"
                                >
                                    <i className="ri-camera-line"></i>
                                    Enable Camera
                                </button>
                                <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2 justify-center">
                                    <i className="ri-information-line"></i>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="mb-6 sm:mb-8">
                    <div className="border-b border-gray-200 dark:border-slate-700">
                        <nav className="-mb-px flex space-x-8 overflow-x-auto">
                            {[
                                {
                                    id: "overview",
                                    label: "Overview",
                                    icon: "ri-dashboard-line",
                                },
                                {
                                    id: "progress",
                                    label: "Progress",
                                    icon: "ri-bar-chart-line",
                                },
                                {
                                    id: "achievements",
                                    label: "Achievements",
                                    icon: "ri-trophy-line",
                                },
                                {
                                    id: "nutrition",
                                    label: "Nutrition",
                                    icon: "ri-restaurant-line",
                                },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap cursor-pointer ${activeTab === tab.id
                                        ? "border-emerald-500 text-emerald-600 dark:text-emerald-400"
                                        : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-slate-600"
                                        }`}
                                >
                                    <i className={`${tab.icon} text-lg`}></i>
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Tab Content */}
                {activeTab === "overview" && (
                    <Overview
                        currentData={currentData}
                        setShowCameraWorkout={setShowCameraWorkout}
                        recommendations={recommendations}
                        achievements={achievements}
                    />
                )}

                {activeTab === "progress" && (
                    <Progress
                        selectedTimeframe={selectedTimeframe}
                        setSelectedTimeframe={setSelectedTimeframe}
                        currentData={currentData}
                    />
                )}

                {activeTab === "achievements" && (
                    <Achievements achievements={achievements} />
                )}

                {activeTab === "nutrition" && (
                    <Nutrition nutritionTips={nutritionTips} />
                )}
            </div>
        </div>
    );
};

export default UserDashboard;
