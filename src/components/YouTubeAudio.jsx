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
            autoplay: 0,
            controls: 0,
            loop: 1,
            playlist: videoId,
            playsinline: 1,
            origin: window.location.origin
          },
          events: {
            onReady: (event) => {
              event.target.unMute();
              event.target.setVolume(85);
              if (isPlaying) {
                event.target.playVideo();
              }
            },
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.seekTo(0, true);
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
