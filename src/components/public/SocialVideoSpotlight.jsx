import React, { useState, useEffect, useRef } from "react";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  RotateCcw, 
  Heart, 
  Share2, 
  MessageCircle, 
  Sparkles, 
  Bookmark, 
  ExternalLink 
} from "lucide-react";

export default function SocialVideoSpotlight({
  videoUrl = "/tani-modi-video.mp4.mp4",
  posterUrl = "/hero-section-images/background-14.webp",
  title = "How we stack our legendary Gluten-Free Pancakes",
  hashtag = "#StackedDifferent",
  description = "Freshly prepared from scratch, 100% coeliac-safe, and served daily on Hanover Street."
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [likesCount, setLikesCount] = useState(384);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);
  const [showShareNotification, setShowShareNotification] = useState(false);

  // Sync state with HTML video element parameters on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Autoplay was blocked by browser policies, gracefully keep paused
          setIsPlaying(false);
        });
      }
    }
  }, []);

  // Sync time tracking
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 0;
      setCurrentTime(current);
      setDuration(total);
      setProgress(total > 0 ? (current / total) * 100 : 0);
    }
  };

  // Play/Pause toggler
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.error("Playback error", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Mute/Unmute toggler
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Timeline scrubber adjustment
  const handleScrubChange = (e) => {
    const value = parseFloat(e.target.value);
    if (videoRef.current && duration > 0) {
      const newTime = (value / 100) * duration;
      videoRef.current.currentTime = newTime;
      setProgress(value);
      setCurrentTime(newTime);
    }
  };

  // Fullscreen trigger
  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch((err) => {
          console.error("Fullscreen request failed", err);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  // Handle video ending loops
  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => setIsPlaying(false));
    }
  };

  // Safe clipboard sharing
  const copyShareLink = () => {
    const shareText = `Check out Tani Modi Edinburgh: ${hashtag} - https://www.tanimodi.co.uk/`;
    navigator.clipboard.writeText(shareText);
    setShowShareNotification(true);
    setTimeout(() => setShowShareNotification(false), 3000);
  };

  // Formatter for media durations (e.g., 0:14)
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-12 font-sans selection:bg-[#D97706]/20">
      
      {/* Decorative Outer Glows */}
      <div className="absolute left-[-10%] top-[20%] w-[350px] h-[350px] bg-[#D97706]/[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-[-5%] bottom-[10%] w-[400px] h-[400px] bg-[#D97706]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container Wrapper */}
      <div 
        ref={containerRef}
        className="relative bg-[#171513] rounded-[40px] shadow-2xl overflow-hidden border border-[#D97706]/15 aspect-[16/9] flex items-center justify-center group"
      >
        
        {/* ================= VIDEO ELEMENT LAYER ================= */}
        {!videoError ? (
          <video
            ref={videoRef}
            src={videoUrl}
            poster={posterUrl}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnded}
            onError={() => setVideoError(true)}
            onClick={togglePlay}
            className="w-full h-full object-cover cursor-pointer relative z-10"
          />
        ) : (
          /* High-Fidelity Static fallback photo if offline/unreachable */
          <div className="absolute inset-0 z-10">
            <img
              src={posterUrl}
              alt="Culinary preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
              <Sparkles className="w-10 h-10 text-[#D97706] mb-3 animate-pulse" />
              <p className="text-[#FAF7F2] font-serif text-lg font-bold">Behind the Scenes at Hanover Street</p>
              <p className="text-stone-300 text-xs mt-1.5 max-w-md">Our social video clip is preparing. Stop by our dining rooms to experience the action live!</p>
            </div>
          </div>
        )}

        {/* Ambient Dark Gradient overlays for clean HUD readable text */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none z-20" />
        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-20" />

        {/* ================= HUD TOP BAR OVERLAYS ================= */}
        <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-center z-30 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-ping" />
            <span className="text-[10px] tracking-[0.2em] font-extrabold uppercase text-white/90 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              Kitchen Story
            </span>
          </div>

          <div className="text-right flex items-center gap-2">
            <span className="text-[10px] font-bold text-white/80 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* ================= HUD INTERACTIVE SIDEBAR (Social actions) ================= */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-30 items-center">
          
          {/* Heart button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setHasLiked(!hasLiked);
              setLikesCount(prev => hasLiked ? prev - 1 : prev + 1);
            }}
            className="group/btn flex flex-col items-center gap-1 focus:outline-none cursor-pointer"
            title="Like this video"
          >
            <div className={`p-3 rounded-full border transition-all duration-300 ${
              hasLiked 
                ? "bg-red-500 border-transparent text-white scale-110 shadow-lg shadow-red-500/30" 
                : "bg-black/40 border-white/10 hover:border-[#D97706]/50 text-white hover:bg-[#D97706]/10"
            }`}>
              <Heart className={`w-4 h-4 transition-transform group-hover/btn:scale-110 ${hasLiked ? 'fill-current' : ''}`} />
            </div>
            <span className="text-[10px] font-extrabold text-white/80 drop-shadow">{likesCount}</span>
          </button>

          {/* Comment/Enquire mock button */}
          <a
            href="mailto:hello@tanimodi.co.uk?subject=Inquiry about pancakes video"
            className="group/btn flex flex-col items-center gap-1 cursor-pointer"
            title="Send an enquiry"
          >
            <div className="p-3 rounded-full bg-black/40 border border-white/10 hover:border-[#D97706]/50 text-white hover:bg-[#D97706]/10 transition-all duration-300">
              <MessageCircle className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
            </div>
            <span className="text-[10px] font-extrabold text-white/80 drop-shadow">Ask</span>
          </a>

          {/* Save / Bookmark button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setHasSaved(!hasSaved);
            }}
            className="group/btn flex flex-col items-center gap-1 focus:outline-none cursor-pointer"
            title="Save video"
          >
            <div className={`p-3 rounded-full border transition-all duration-300 ${
              hasSaved 
                ? "bg-amber-500 border-transparent text-white scale-110 shadow-lg shadow-amber-500/30" 
                : "bg-black/40 border-white/10 hover:border-[#D97706]/50 text-white hover:bg-[#D97706]/10"
            }`}>
              <Bookmark className={`w-4 h-4 transition-transform group-hover/btn:scale-110 ${hasSaved ? 'fill-current' : ''}`} />
            </div>
            <span className="text-[10px] font-extrabold text-white/80 drop-shadow">Save</span>
          </button>

          {/* Share button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              copyShareLink();
            }}
            className="group/btn flex flex-col items-center gap-1 focus:outline-none cursor-pointer"
            title="Share with friends"
          >
            <div className="p-3 rounded-full bg-black/40 border border-white/10 hover:border-[#D97706]/50 text-white hover:bg-[#D97706]/10 transition-all duration-300">
              <Share2 className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
            </div>
            <span className="text-[10px] font-extrabold text-white/80 drop-shadow">Share</span>
          </button>

        </div>

        {/* ================= HUD BOTTOM INFO & DESCRIPTION ================= */}
        <div className="absolute bottom-6 left-6 right-24 z-30 pointer-events-none text-left">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-serif text-lg font-bold text-[#FAF7F2] drop-shadow-sm">
              {title}
            </h4>
            <span className="text-xs font-semibold text-[#D97706] bg-[#D97706]/15 px-2.5 py-0.5 rounded border border-[#D97706]/20">
              {hashtag}
            </span>
          </div>
          <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed max-w-lg drop-shadow">
            {description}
          </p>

          {/* Quick Book Button in HUD */}
          <div className="mt-4 pointer-events-auto">
            <a
              href="/bookings"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#D97706] hover:bg-white hover:text-stone-900 rounded-full text-[10px] font-bold uppercase tracking-widest text-white transition-all duration-300 shadow shadow-[#D97706]/20"
            >
              Reserve Brunch Table
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* ================= HUD BOTTOM BAR TIMELINE CONTROLS ================= */}
        <div className="absolute bottom-0 inset-x-0 px-6 py-2 bg-black/40 backdrop-blur-sm border-t border-white/5 z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-4">
          
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="p-1.5 text-white hover:text-[#D97706] transition-colors focus:outline-none cursor-pointer"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-4.5 h-4.5" /> : <Play className="w-4.5 h-4.5 fill-current" />}
          </button>

          {/* Timeline Scrubber Slider */}
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleScrubChange}
            className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-[#D97706]"
            style={{ outline: "none" }}
          />

          {/* Quick Reset Replay Button */}
          <button
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
                setCurrentTime(0);
                setProgress(0);
              }
            }}
            className="p-1.5 text-white hover:text-[#D97706] transition-colors focus:outline-none cursor-pointer"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Volume Control Button */}
          <button
            onClick={toggleMute}
            className="p-1.5 text-white hover:text-[#D97706] transition-colors focus:outline-none cursor-pointer"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4.5 h-4.5" /> : <Volume2 className="w-4.5 h-4.5" />}
          </button>

          {/* Maximize Button */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 text-white hover:text-[#D97706] transition-colors focus:outline-none cursor-pointer"
            title="Fullscreen"
          >
            <Maximize className="w-4.5 h-4.5" />
          </button>

        </div>

      </div>

      {/* Copy notification banner */}
      {showShareNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#171513] text-white border border-[#D97706]/20 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-xs animate-fade-in">
          <span className="text-[#D97706] font-bold">✨ Link Copied!</span> Shared details copied to your clipboard.
        </div>
      )}

      {/* Global CSS for Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

    </div>
  );
}