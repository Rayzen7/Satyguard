import React, { useState, useEffect, useRef } from 'react';
import logo from '/image/logo/logo_satyguard.mp4';

const Boarding = () => {
  const [isFinished, setIsFinished] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      setIsFinished(true);
    };

    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white transition-transform duration-[2s] ${
        isFinished ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="w-full h-full flex justify-center items-center">
        <video
          ref={videoRef}
          className="w-[800px] h-auto object-cover"
          autoPlay
          muted
          src={logo}
        ></video>
      </div>
    </div>
  );
};

export default Boarding;
