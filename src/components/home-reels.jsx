import React, { useState, useRef } from 'react';
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
  const videoRefs = useRef([]);
  const modalVideoRef = useRef(null);

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
    // start with unmuted (or keep modalMuted state)
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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Botón título: mantuve tu estructura, solo lo estilizo */}
        <button
          onClick={openModal}
          className="group mx-auto block mb-16 relative"
          aria-label="Abrir modal con experiencias"
        >
          <h2 className="text-4xl font-bold text-center text-[#02288d] transition-all duration-200 group-hover:scale-105">
            Vive la experiencia en primera persona
          </h2>

          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-[#ff6201] opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-semibold">Ver +72 programas</span>
            <ChevronRight className="w-5 h-5 animate-bounce" />
          </div>
        </button>

        {/* Grid de reels (igual a tu estructura original) */}
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
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted={mutedVideos[index]}
                  loop
                  playsInline
                >
                  <source src={reel.src} type="video/mp4" />
                </video>

                {/* overlay para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* controles pequeños en la esquina (solo mute y share/bookmark visual) */}
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

                {/* icono Play sutil cuando está en hover */}
                {playingVideo === index && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Play className="w-16 h-16 text-white/50 animate-pulse" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver Más creativo (mantengo tu idea) */}
        <div className="mt-16 flex justify-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#02288d] to-[#0a3eb8] text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff6201] to-[#ff8534] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-5 h-5 animate-pulse" />
              Ver más experiencias
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* Modal: video con controles mínimos (play/pause + mute/unmute) */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* overlay */}
          <div className="absolute inset-0 bg-black/80" onClick={closeModal} />

          <div className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
            {/* header */}
            <div className="bg-gradient-to-r from-[#02288d] to-[#0a3eb8] p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-2xl">
                  <Sparkles className="w-7 h-7 text-white animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">+72 Programas</h3>
                  <p className="text-white/80 text-sm">Vive el reinicio desde adentro</p>
                </div>
              </div>

              <button onClick={closeModal} className="bg-white/20 p-2 rounded-full">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* video area */}
            <div className="p-6">
              <div className="relative bg-black rounded-2xl overflow-hidden aspect-video">
                {/* NOTE: no 'controls' attribute — usamos controles propios */}
                <video
                  ref={modalVideoRef}
                  className="w-full h-full object-cover"
                  src="/video/reelPrincipal.mp4"
                  playsInline
                />

                {/* Controles mínimos: play/pause + mute */}
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

              {/* mini stats below */}
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-[#02288d]/10 to-[#0a3eb8]/10 p-4 rounded-xl border border-[#02288d]/20">
                  <p className="text-2xl font-bold text-[#02288d]">72+</p>
                  <p className="text-sm text-gray-600">Programas disponibles</p>
                </div>
                <div className="bg-gradient-to-br from-[#ff6201]/10 to-[#ff8534]/10 p-4 rounded-xl border border-[#ff6201]/20">
                  <p className="text-2xl font-bold text-[#ff6201]">15K+</p>
                  <p className="text-sm text-gray-600">Participantes</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-4 rounded-xl border border-green-500/20">
                  <p className="text-2xl font-bold text-green-600">4.8★</p>
                  <p className="text-sm text-gray-600">Calificación promedio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* small CSS for tiny animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.25s ease-out; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: translateY(0) } }
        .animate-slideUp { animation: slideUp 0.3s ease-out; }
      `}</style>
    </section>
  );
};

export default HomeReels;
