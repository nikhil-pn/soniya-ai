"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";


const VideoPlayer = () => {
    const videoRef = useRef(null);
    const controls = useAnimation();
    // animate-pulse
    const [hover, setHover] = useState("")
    useEffect(() => {
        const videoElement: any = videoRef.current;

        const handleMouseEnter = () => {
            if (videoElement.paused) {
                videoElement.muted = false; // Unmute the video
                videoElement.play();
                setHover("")
            }
        };

        const handleMouseLeave = () => {
            if (!videoElement.paused) {
                videoElement.pause();
                videoElement.currentTime = 0; // Reset the video to the beginning
                // setHover("animate-pulse")
            }
        };

        videoElement.addEventListener("mouseenter", handleMouseEnter);
        videoElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            videoElement.removeEventListener("mouseenter", handleMouseEnter);
            videoElement.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div className="absolute z-10">
            <section className="flex justify-center items-center w-full">
                <div className={`${hover}`}>
                    <div className=" md:w-[500px] lg:w-[800px] w-full">
                        <motion.video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            animate={controls}
                        >
                            <source src="/Intro.mp4" type="video/mp4" />
                        </motion.video>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default VideoPlayer;