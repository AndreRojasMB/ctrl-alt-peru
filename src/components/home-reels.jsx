import React, { useState, useRef } from 'react';
import { Play, Volume2, VolumeX, Heart, Share2, Bookmark } from 'lucide-react';

const HomeReels = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [mutedVideos, setMutedVideos] = useState([true, true, true]);
  const videoRefs = useRef([]);

  const handleHover = (index, isHovering) => {
    if (isHovering && videoRefs.current[index]) {
      videoRefs.current[index].play();
      setPlayingVideo(index);
    } else if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      setPlayingVideo(null);
    }
  };

  const toggleMute = (index) => {
    const newMuted = [...mutedVideos];
    newMuted[index] = !newMuted[index];
    setMutedVideos(newMuted);
    
    if (videoRefs.current[index]) {
      videoRefs.current[index].muted = newMuted[index];
    }
  };

  const reels = [
    { id: 1, title: "Experiencia Cusco", likes: "2.5k", src: "/video/reel-cuzco.mp4" },
    { id: 2, title: "Experiencia Amazonas", likes: "3.2k", src: "/video/reel.mp4" },
    { id: 3, title: "Experiencia Nazca", likes: "4.1k", src: "/video/reel-lima.mp4" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#02288d] mb-16">
          Vive la experiencia en primera persona
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reels.map((reel, index) => (
            <div
              key={reel.id}
              className="relative group"
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
            >
              <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl aspect-[9/16] transform hover:scale-105 transition-transform duration-300">
                <video
                  ref={(el) => videoRefs.current[index] = el}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted={mutedVideos[index]}
                  loop
                  playsInline
                >
                  <source src={reel.src} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-4 right-4 space-y-4">
                  <button
                    onClick={() => toggleMute(index)}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                  >
                    {mutedVideos[index] ? 
                      <VolumeX className="w-5 h-5 text-white" /> : 
                      <Volume2 className="w-5 h-5 text-white" />
                    }
                  </button>
                  
                  <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors">
                    <Share2 className="w-5 h-5 text-white" />
                  </button>
                  
                  <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors">
                    <Bookmark className="w-5 h-5 text-white" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-2">{reel.title}</h3>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-white">
                      <Heart className="w-5 h-5 fill-white" />
                      <span className="text-sm">{reel.likes}</span>
                    </button>
                    <button className="bg-[#ff6201] text-white px-4 py-1 rounded-full text-sm hover:bg-[#e55500] transition-colors">
                      Ver más
                    </button>
                  </div>
                </div>

                {playingVideo === index && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Play className="w-16 h-16 text-white/50 animate-pulse" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeReels;
