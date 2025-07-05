"use client";

import React, { useRef, useState, useMemo, useEffect } from "react";
import VerticalTabs from "./VerticalTab";
import VehicalPart from "./VehicalPart";
import HeroVideoSlideMobile from "./HeroVideoSlideMobile";

const carPartImages = [
  {
    title: "Complete Body",
    img: "/assets/complete-body.png",
    video: "/assets/Passenger-Alpha.mp4",
  },
  { title: "Front", img: "/assets/front.png", video: "/assets/Front.mp4" },
  { title: "Cabin", img: "/assets/cabin.png", video: "/assets/Cabin.mp4" },
  { title: "Trunk", img: "/assets/trunk.png", video: "/assets/Trunk.mp4" },
  {
    title: "Exterior",
    img: "/assets/exterior.png",
    video: "/assets/Exterior.mp4",
  },
];

const truckPartImages = [
  {
    title: "Complete Body",
    img: "/assets/commercial-body.svg",
    video: "/assets/Commercial-Alpha.mp4",
  },
  {
    title: "Engine",
    img: "/assets/commercial-engine.svg",
    video: "/assets/Commercial-Engine.mp4",
  },
  {
    title: "Cabin",
    img: "/assets/commercial-cabin.svg",
    video: "/assets/Commercial-Cabin.mp4",
  },
];

const HeroVideoSlide = () => {
  const videoRef = useRef(null);
  const [activeTab, setActiveTab] = useState("passenger");
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const partImages = useMemo(
    () => (activeTab === "passenger" ? carPartImages : truckPartImages),
    [activeTab]
  );

  const [selectedPart, setSelectedPart] = useState(partImages[0].title);
  const selectedVideo = useMemo(
    () => partImages.find((p) => p.title === selectedPart)?.video || "",
    [partImages, selectedPart]
  );

  const radius = 23;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  useEffect(() => {
    setSelectedPart(partImages[0].title);
  }, [partImages]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    setProgress(0);
    video
      .play()
      .then(() => setIsPaused(false))
      .catch(() => setIsPaused(true));
  }, [selectedVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(video.ended ? 100 : percent || 0);
      if (video.ended) setIsPaused(true);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, []);

  return (
    <section className="bg-black w-full flex flex-col items-center justify-center text-center gap-10 py-15 lg:py-40 px-4">
      <h1 className="text-white text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-light text-center leading-10 lg:leading-15">
        Evolving the drive with <span className="font-bold">360-degree</span>
        <br className="hidden md:block" /> comprehensive solutions
      </h1>

      <div className="hidden w-full lg:grid grid-cols-[35%_65%] relative">
        <VerticalTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="relative">
          <video
            ref={videoRef}
            className="w-auto mx-auto max-h-[360px] min-h-[230px] 2xl:h-[40vh] h-24"
            autoPlay
            playsInline
            muted
          >
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="hidden w-full lg:flex justify-end px-6 max-w-[1536px] ml-auto">
        <VehicalPart
          partImages={partImages}
          selectedPart={selectedPart}
          isPaused={isPaused}
          setSelectedPart={setSelectedPart}
          togglePlayPause={togglePlayPause}
          radius={radius}
          circumference={circumference}
          offset={offset}
        />
      </div>

      <HeroVideoSlideMobile
        carPartImages={carPartImages}
        truckPartImages={truckPartImages}
      />
    </section>
  );
};

export default HeroVideoSlide;
