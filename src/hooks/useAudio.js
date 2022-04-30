import { useState, useEffect } from "react";

export const useAudio = (url, velocity = 1) => {
  const [audio] = useState(new Audio(url));
  audio.playbackRate = velocity;
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [toggle];
};
