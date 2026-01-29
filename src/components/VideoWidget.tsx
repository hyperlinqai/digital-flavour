"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

interface VideoWidgetProps {
    videoUrl: string;
    avatarUrl?: string; // Optional custom avatar
}

const VideoWidget = ({ videoUrl, avatarUrl = "/df-logo.png" }: VideoWidgetProps) => {
    const [isOpen, setIsOpen] = useState(false);

    // Helper to determine embed URL
    const getEmbedUrl = (url: string) => {
        if (url.includes("instagram.com")) {
            // Remove query params and add embed
            const baseUrl = url.split("?")[0];
            return `${baseUrl.endsWith("/") ? baseUrl : baseUrl + "/"}embed`;
        }
        return url;
    };

    const embedUrl = getEmbedUrl(videoUrl);
    const isInstagram = videoUrl.includes("instagram.com");
    // Check if it's a local file or direct MP4 link
    const isLocalOrDirect = videoUrl.startsWith("/") || videoUrl.endsWith(".mp4") || videoUrl.endsWith(".webm");

    // Dimensions: Mobile Real Size (Vertical)
    const containerClasses = (isInstagram || isLocalOrDirect)
        ? 'aspect-[9/16] h-[600px] max-h-[80vh] w-[340px]'
        : 'aspect-video w-[320px]';

    return (
        <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20, x: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20, x: -20 }}
                        className={`mb-4 bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 relative ${containerClasses}`}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {isLocalOrDirect ? (
                            <video
                                src={videoUrl}
                                className="w-full h-full object-cover"
                                autoPlay
                                controls
                                playsInline
                            />
                        ) : (
                            <iframe
                                src={embedUrl}
                                title="Video Message"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                                style={{ border: 0 }}
                            />
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {!isOpen && (
                <motion.button
                    onClick={() => setIsOpen(true)}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-xl overflow-hidden flex items-center justify-center bg-black"
                >
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${avatarUrl})` }} />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-4 h-4 text-primary fill-primary ml-0.5" />
                        </div>
                    </div>

                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-full ring-4 ring-primary/50 animate-pulse" />
                </motion.button>
            )}
        </div>
    );
};

export default VideoWidget;
