import { useEffect, useRef } from "react";

export default function VideoPlayer({ src, isPlaying }) {
  const refVideo = useRef();
  useEffect(() => {
    if (isPlaying) {
      refVideo.current.play();
      console.log("video palying");
    } else {
      refVideo.current.pause();
      console.log("video pause");
    }
  }, [isPlaying]);
  return <video ref={refVideo} src={src} />;
}
