import React, { useEffect, useRef } from 'react';

/**
 * Robust YouTube Audio Player using the official YouTube IFrame Player API.
 * Video: PGer5XYPaPk (Kudmayi)
 * Automatically plays with sound on user action and loops forever.
 */
export default function YouTubeAudio({ videoId = "PGer5XYPaPk", isPlaying }) {
  const playerRef = useRef(null);
  const containerId = "yt-wedding-audio-player-global";

  useEffect(() => {
    // 1. Ensure YouTube IFrame API script is inserted
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const createPlayer = () => {
      if (window.YT && window.YT.Player && !playerRef.current) {
        playerRef.current = new window.YT.Player(containerId, {
          height: '200',
          width: '200',
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            start: 10, // Start directly at 10 seconds into the melody
            controls: 0,
            loop: 1,
            playlist: videoId,
            playsinline: 1,
            origin: window.location.origin
          },
          events: {
            onReady: (event) => {
              // Unmute, seek directly to 10s and play immediately on load
              event.target.unMute();
              event.target.setVolume(85);
              event.target.seekTo(10, true);
              if (isPlaying) {
                event.target.playVideo();
              }
            },
            onStateChange: (event) => {
              // Loop back to 10s when ended
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.seekTo(10, true);
                event.target.playVideo();
              }
            }
          }
        });
      }
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
    }

    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
          playerRef.current = null;
        } catch (e) {}
      }
    };
  }, [videoId]);

  // Sync play / pause with isPlaying
  useEffect(() => {
    if (!playerRef.current || typeof playerRef.current.playVideo !== 'function') return;

    try {
      if (isPlaying) {
        playerRef.current.unMute();
        if (typeof playerRef.current.getCurrentTime === 'function' && playerRef.current.getCurrentTime() < 10) {
          playerRef.current.seekTo(10, true);
        }
        playerRef.current.playVideo();
      } else {
        playerRef.current.pauseVideo();
      }
    } catch (e) {
      console.warn("YouTube player control exception:", e);
    }
  }, [isPlaying]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: '1px',
        height: '1px',
        opacity: 0.001,
        pointerEvents: 'none',
        zIndex: -10
      }}
    >
      <div id={containerId} />
    </div>
  );
}
