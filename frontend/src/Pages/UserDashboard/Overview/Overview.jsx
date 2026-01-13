import React from 'react';

const Overview = ({ currentData, setShowCameraWorkout, recommendations, achievements }) => {
    return (
        <div className="space-y-6 sm:space-y-8" data-aos="fade-up">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                        <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                            <i className="ri-fire-line text-emerald-600 dark:text-emerald-400"></i>
                        </div>
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                            This Week
                        </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {currentData.workouts}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Workouts</div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                            <i className="ri-time-line text-blue-600 dark:text-blue-400"></i>
                        </div>
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                            Total
                        </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {currentData.totalTime}m
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Training Time</div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                            <i className="ri-flashlight-line text-orange-600 dark:text-orange-400"></i>
                        </div>
                        <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                            Burned
                        </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {currentData.caloriesBurned}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Calories</div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                            <i className="ri-check-line text-purple-600 dark:text-purple-400"></i>
                        </div>
                        <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                            Average
                        </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {currentData.avgFormScore}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Form Score</div>
                </div>
            </div>

            {/* AI Camera Features */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-slate-700">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    AI Camera Features
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-100 dark:border-emerald-800/50">
                        <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center mb-3">
                            <i className="ri-eye-line text-white"></i>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Real-time Pose Detection
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Advanced computer vision analyzes your form and provides
                            instant feedback.
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800/50">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                            <i className="ri-refresh-line text-white"></i>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Automatic Rep Counting
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            AI automatically counts your repetitions with high accuracy.
                        </p>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800/50 sm:col-span-2 lg:col-span-1">
                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-3">
                            <i className="ri-shield-check-line text-white"></i>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Form Correction
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Get instant alerts when your form needs adjustment to
                            prevent injuries.
                        </p>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={() => setShowCameraWorkout(true)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer inline-flex items-center gap-2"
                    >
                        <i className="ri-camera-line"></i>
                        Try AI Camera Workout
                    </button>
                </div>
            </div>

            {/* Custom Recommendations */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-slate-700">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Custom Recommendations
                </h2>
                <div className="space-y-4">
                    {recommendations.map((rec, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg"
                        >
                            <div
                                className={`w-10 h-10 rounded-lg flex items-center justify-center ${rec.priority === "high" ? "bg-red-100 dark:bg-red-900/30" : "bg-yellow-100 dark:bg-yellow-900/30"
                                    }`}
                            >
                                <i
                                    className={`${rec.type === "workout"
                                        ? "ri-run-line"
                                        : rec.type === "nutrition"
                                            ? "ri-restaurant-line"
                                            : "ri-heart-line"
                                        } ${rec.priority === "high"
                                            ? "text-red-600 dark:text-red-400"
                                            : "text-yellow-600 dark:text-yellow-400"
                                        }`}
                                ></i>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">
                                        {rec.title}
                                    </h3>
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${rec.priority === "high"
                                            ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                                            }`}
                                    >
                                        {rec.priority} priority
                                    </span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                    {rec.description}
                                </p>
                                <button className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium text-sm cursor-pointer">
                                    {rec.action} →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-slate-700">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Recent Achievements
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    {achievements
                        .filter((a) => a.earned)
                        .slice(0, 2)
                        .map((achievement) => (
                            <div
                                key={achievement.id}
                                className="flex items-center gap-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800/50"
                            >
                                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                                    <i
                                        className={`${achievement.icon} text-white text-lg`}
                                    ></i>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        {achievement.description}
                                    </p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                                            +{achievement.points} points
                                        </span>
                                        <span className="text-gray-400 text-xs">•</span>
                                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                                            {achievement.date}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Overview;
