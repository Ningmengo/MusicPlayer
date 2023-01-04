import React, { useEffect, useRef, useState } from "react";
import "../cssFiles/AudioPlayer.css";
import Controls from "./Controls";
import ProgressCircle from "./ProgressCircle";
import WaveAnimation from "./WaveAnimation";

const AudioPlayer = ({
  currentTrack,
  currentIndex,
  setCurrentIndex,
  total,
}) => {
  //push all artists name to one array
  const artists = [];
  currentTrack?.artists?.forEach((artist) => {
    artists.push(artist?.name);
  });

  const [isPlaying, setIsPlaying] = useState(false);

  //state that stores current playing time
  const [trackProgress, setTrackProgress] = useState(0);
  var audioSrc = total[currentIndex]?.track.preview_url;
  const audioRef = useRef(new Audio(total[0]?.track.preview_url));

  const intervalRef = useRef();
  const isReady = useRef(false);

  //Returns the duration in seconds of the current media resource
  const { duration } = audioRef.current;

  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  const startTimer = () => {
    //built in fuction that clears ...
    clearInterval(intervalRef.current);

    //if the time of the song ends,
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  //play and pause function
  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (!isPlaying) {
        audioRef.current = new Audio(audioRef);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const handleNext = () => {
    // if the current song is not the last song in the queue, then set the index to next song
    if (currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 < 0) {
      setCurrentIndex(total.length - 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const addZeros = (n) => {
    return n > 9 ? "" + n : "0" + n;
  };
  return (
    <div className="player-body flex">
      <div className="player-left-body">
        <ProgressCircle
          percentage={currentPercentage}
          isPlaying={true}
          image={currentTrack?.images[0]?.url}
          size={300}
          color="orange"
        />
      </div>
      <div className="player-right-body flex">
        <p className="song-title">{currentTrack?.name}</p>
        <p className="song-artists">{artists.join(" & ")}</p>
        <div className="player-right-bottom flex">
          <div className="song-duration flex">
            <p className="duration">0:{addZeros(Math.round(trackProgress))}</p>
            {/* <WaveAnimation isPlaying={true} /> */}
            <p className="duration">0:30</p>
          </div>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
