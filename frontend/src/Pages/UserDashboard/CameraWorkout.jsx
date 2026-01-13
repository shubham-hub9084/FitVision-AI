import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CameraWorkout = ({ onClose }) => {
    const videoRef = useRef(null);
    const [permissionGranted, setPermissionGranted] = useState(false);
    const [repCount, setRepCount] = useState(0);
    const [feedback, setFeedback] = useState("Ready to start");
    const [isCalibrating, setIsCalibrating] = useState(true);

    useEffect(() => {
        startCamera();
        return () => {
            stopCamera();
        };
    }, []);

    // Simulate AI Analysis
    useEffect(() => {
        if (!permissionGranted || isCalibrating) return;

        const interval = setInterval(() => {
            // Mock AI feedback
            const feedbacks = ["Great form!", "Lower your hips", "Keep back straight", "Good pace"];
            setFeedback(feedbacks[Math.floor(Math.random() * feedbacks.length)]);

            // Mock rep counting
            if (Math.random() > 0.7) {
                setRepCount(prev => prev + 1);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [permissionGranted, isCalibrating]);

    // Calibration timer
    useEffect(() => {
        if (permissionGranted) {
            const timer = setTimeout(() => {
                setIsCalibrating(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [permissionGranted]);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                setPermissionGranted(true);
            }
        } catch (err) {
            console.error("Error accessing camera:", err);
            setFeedback("Camera access required");
        }
    };

    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = videoRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop());
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            >
                <div className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mx-4">
                    {/* Header */}
                    <div className="absolute top-0 left-0 right-0 p-4 z-10 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
                        <div className="flex items-center gap-3">
                            <span className="bg-red-500 w-3 h-3 rounded-full animate-pulse"></span>
                            <span className="text-white font-semibold">Live AI Analysis</span>
                        </div>
                        <button
                            onClick={onClose}
                            className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
                        >
                            <i className="ri-close-line text-2xl"></i>
                        </button>
                    </div>

                    {/* Video Feed */}
                    <div className="relative aspect-video bg-gray-800">
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className="w-full h-full object-cover transform scale-x-[-1]"
                        />

                        {!permissionGranted && (
                            <div className="absolute inset-0 flex items-center justify-center text-white">
                                <div className="text-center">
                                    <i className="ri-camera-off-line text-4xl mb-2 text-gray-400"></i>
                                    <p>Waiting for camera access...</p>
                                </div>
                            </div>
                        )}

                        {/* AI Overlay */}
                        {permissionGranted && (
                            <div className="absolute inset-0 pointer-events-none">
                                {/* Pose Skeleton Mockup */}
                                <div className="absolute inset-0 border-4 border-emerald-500/30 rounded-lg m-4"></div>

                                {/* HUD */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <h3 className="text-emerald-400 font-bold mb-1">CURRENT STATUS</h3>
                                            <p className="text-2xl text-white font-bold">{feedback}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-4xl font-bold text-white mb-1">{repCount}</div>
                                            <div className="text-gray-400 text-sm font-medium">REPS COMPLETED</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Calibration Overlay */}
                                {isCalibrating && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
                                        <div className="text-center text-white p-6 bg-black/60 rounded-xl">
                                            <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                            <h3 className="text-xl font-bold mb-2">Calibrating...</h3>
                                            <p className="text-gray-300">Stand in the center of the frame</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Controls */}
                    <div className="p-4 bg-gray-900 border-t border-gray-800 flex justify-between items-center">
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <i className="ri-time-line"></i>
                                <span>00:45</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <i className="ri-fire-line"></i>
                                <span>12 cal</span>
                            </div>
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                            Stop Workout
                        </button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CameraWorkout;
