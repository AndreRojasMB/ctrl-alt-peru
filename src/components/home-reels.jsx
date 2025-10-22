import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Heart,
  Share2,
  Bookmark,
  X,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const HomeReels = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [mutedVideos, setMutedVideos] = useState([true, true, true]);
  const [showModal, setShowModal] = useState(false);
  const [modalPlaying, setModalPlaying] = useState(true);
  const [modalMuted, setModalMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleReels, setVisibleReels] = useState([false, false, false]);
  const [showButton, setShowButton] = useState(false);
  
  const videoRefs = useRef([]);
  const modalVideoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Animación secuencial de los reels
          setTimeout(() => setVisibleReels([true, false, false]), 150);
          setTimeout(() => setVisibleReels([true, true, false]), 350);
          setTimeout(() => setVisibleReels([true, true, true]), 550);
          setTimeout(() => setShowButton(true), 750);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.muted = modalMuted;
        modalVideoRef.current.play().catch(() => {});
        setModalPlaying(!modalVideoRef.current.paused);
      }
    }, 50);
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  };

  const toggleModalPlay = () => {
    if (!modalVideoRef.current) return;
    if (modalVideoRef.current.paused) {
      modalVideoRef.current.play();
      setModalPlaying(true);
    } else {
      modalVideoRef.current.pause();
      setModalPlaying(false);
    }
  };

  const toggleModalMute = () => {
    if (!modalVideoRef.current) return;
    modalVideoRef.current.muted = !modalVideoRef.current.muted;
    setModalMuted(modalVideoRef.current.muted);
  };

  const reels = [
    { id: 1, title: "Experiencia Cusco", likes: "2.5k", src: "/video/reel-cuzco.mp4" },
    { id: 2, title: "Experiencia Amazonas", likes: "3.2k", src: "/video/reel.mp4" },
    { id: 3, title: "Experiencia Nazca", likes: "4.1k", src: "/video/reel-lima.mp4" }
  ];

  return (
    <section ref={sectionRef} className="py-2 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Botón principal con animación al scroll */}
        <button
          onClick={openModal}
          className={`relative group mx-auto block mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-[20px] opacity-0 scale-95'
          }`}
          aria-label="Abrir modal con experiencias"
        >
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#0033A0] drop-shadow-lg transform transition-all duration-300 group-hover:-translate-y-1">
              Vive la experiencia en primera persona
            </h2>
            <span className="mt-3 block w-40 h-1 rounded-full overflow-hidden">
              <span className="block h-1 w-full bg-gradient-to-r from-transparent via-[#ff6201] to-transparent animate-shimmer" />
            </span>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-[#ff6201] opacity-0 group-hover:opacity-100 transition-all duration-350">
              <svg className="w-5 h-5 animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 8H9L12 2Z" fill="#FFB37A"/>
              </svg>
              <span className="text-sm font-semibold">Ver +24 programas</span>
              <svg className="w-5 h-5 animate-bounce" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="#ff6201" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="mt-6">
              <span className="relative inline-block">
                <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#02288d] to-[#0a3eb8] opacity-80 blur-sm group-hover:scale-[1.04] transition-transform duration-300" />
                <button
                  type="button"
                  onClick={openModal}
                  className="relative px-8 py-4 bg-gradient-to-r from-[#ff7a00] to-[#ffb66b] text-[#06283d] font-semibold rounded-full shadow-2xl transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#ff8a00]/30"
                >
                  Explorar programas
                </button>
              </span>
            </div>
          </div>
        </button>

        {/* Grid de reels con animación escalonada */}
        <div className="grid md:grid-cols-3 gap-8">
          {reels.map((reel, index) => (
            <div
              key={reel.id}
              className={`relative group transition-all duration-700 ease-out ${
                visibleReels[index] 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-[40px] opacity-0 scale-95'
              }`}
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
            >
              <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl aspect-[9/16] transform hover:scale-105 transition-transform duration-300">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
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
                    aria-label={mutedVideos[index] ? "activar sonido" : "silenciar"}
                  >
                    {mutedVideos[index] ? (
                      <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white" />
                    )}
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors" aria-hidden>
                    <Share2 className="w-5 h-5 text-white" />
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors" aria-hidden>
                    <Bookmark className="w-5 h-5 text-white" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-2">{reel.title}</h3>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-white" aria-hidden>
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

        {/* Botón Ver Más con animación al scroll */}
        <div className={`mt-4 py-10 flex justify-center transition-all duration-700 ease-out ${
          showButton ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-[20px] opacity-0 scale-95'
        }`}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#02288d] to-[#0a3eb8] text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff6201] to-[#ff8534] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-7 h-7 animate-pulse" />
              Ver más experiencias
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* Modal sin cambios */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="absolute inset-0 bg-black/80" onClick={closeModal} />
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden animate-slideUp">
            <div className="bg-gradient-to-r from-[#02288d] to-[#0a3eb8] p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-2xl">
                  <Sparkles className="w-7 h-7 text-white animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">+24 Programas</h3>
                  <p className="text-white/80 text-sm">Vive el reinicio desde adentro</p>
                </div>
              </div>
              <button onClick={closeModal} className="bg-white/20 p-2 rounded-full">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="p-6">
              <div className="relative bg-black rounded-2xl overflow-hidden aspect-video">
                <video
                  ref={modalVideoRef}
                  className="w-full h-full object-cover"
                  src="/video/reelPrincipal.mp4"
                  playsInline
                />
                <div className="absolute bottom-4 right-4 flex items-center gap-3 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-full">
                  <button
                    onClick={toggleModalPlay}
                    aria-label={modalPlaying ? "Pausar video" : "Reproducir video"}
                    className="text-white hover:text-[#ff6201] transition-colors"
                  >
                    {modalPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </button>
                  <button
                    onClick={toggleModalMute}
                    aria-label={modalMuted ? "Activar sonido" : "Silenciar"}
                    className="text-white hover:text-[#ff6201] transition-colors"
                  >
                    {modalMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                  </button>
                </div>
              </div>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-[#02288d]/10 to-[#0a3eb8]/10 p-4 rounded-xl border border-[#02288d]/20">
                  <p className="text-2xl font-bold text-[#02288d]">24+</p>
                  <p className="text-sm text-gray-600">Programas disponibles</p>
                </div>
                <div className="bg-gradient-to-br from-[#ff6201]/10 to-[#ff8534]/10 p-4 rounded-xl border border-[#ff6201]/20">
                  <p className="text-2xl font-bold text-[#ff6201]">90</p>
                  <p className="text-sm text-gray-600">Participantes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-110%); opacity: 0; }
          10% { opacity: 0.6; }
          50% { transform: translateX(0%); opacity: 1; }
          90% { opacity: 0.6; }
          100% { transform: translateX(110%); opacity: 0; }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent 0%, rgba(255,98,1,0.95) 50%, transparent 100%);
          animation: shimmer 2.2s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.25s ease-out; }
        @keyframes slideUp { 
          from { opacity: 0; transform: translateY(18px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-slideUp { animation: slideUp 0.3s ease-out; }
      `}</style>
    </section>
  );
};

export default HomeReels;