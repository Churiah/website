import React, { useState, useRef } from "react";
import { Layout, List, Button, Typography, Slider } from "antd";
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  StepForwardOutlined,
  StepBackwardOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

// Dummy playlist
const playlist = [
  {
    title: "Song 1",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Song 2",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    title: "Song 3",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

const Player: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = playlist[currentTrackIndex];

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    setPlaying(false);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setPlaying(false);
    setProgress(0);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const percentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(percentage || 0);
    }
  };

  const handleSeek = (value: number) => {
    if (audioRef.current) {
      const seekTime = (audioRef.current.duration * value) / 100;
      audioRef.current.currentTime = seekTime;
      setProgress(value);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "white", fontSize: "20px", textAlign: "center" }}>
        🎵 Media Player
      </Header>

      <Content style={{ padding: "2rem", textAlign: "center" }}>
        {/* Audio Element */}
        <audio
          ref={audioRef}
          src={currentTrack.src}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleNext}
          autoPlay={playing}
        />

        {/* Now Playing */}
        <Title level={2}>{currentTrack.title}</Title>

        {/* Controls */}
        <div style={{ margin: "2rem 0" }}>
          <Button
            icon={<StepBackwardOutlined />}
            size="large"
            onClick={handlePrev}
            style={{ marginRight: 20 }}
          />
          <Button
            icon={playing ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
            size="large"
            type="primary"
            shape="circle"
            onClick={handlePlayPause}
            style={{ marginRight: 20 }}
          />
          <Button
            icon={<StepForwardOutlined />}
            size="large"
            onClick={handleNext}
          />
        </div>

        {/* Progress Slider */}
        <Slider
          value={progress}
          onChange={handleSeek}
          style={{ width: "80%", margin: "0 auto" }}
        />

        {/* Playlist below */}
        <div style={{ marginTop: "3rem" }}>
          <Title level={3}>Playlist</Title>
          <List
            itemLayout="horizontal"
            dataSource={playlist}
            renderItem={(item, index) => (
              <List.Item
                style={{
                  backgroundColor: index === currentTrackIndex ? "#e6f7ff" : "transparent",
                  cursor: "pointer",
                  borderRadius: 8,
                  padding: "0.5rem 1rem",
                }}
                onClick={() => {
                  setCurrentTrackIndex(index);
                  setPlaying(false);
                  setProgress(0);
                }}
              >
                {item.title}
              </List.Item>
            )}
            style={{ maxWidth: 600, margin: "1rem auto" }}
          />
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} Minh Chủ - Media Player
      </Footer>
    </Layout>
  );
};

export default Player;
