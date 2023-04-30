import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { Howl, Howler } from 'howler';
import { guitarsound } from '../../assets';

const Desktop = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight
        intensity={0.15}
        groundColor='black'
      />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.25]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const Guitar = ({ isMobile }) => {
  const guitar = useGLTF('./guitar/acoustic_guitar.gltf');
  const [isPlaying, setIsPlaying] = useState(false);
  const guitarSoundRef = useRef(null);

  useEffect(() => {
    guitarSoundRef.current = new Howl({
      src: [guitarsound],
      loop: true,
      volume: 0.5,
    });

    return () => {
      guitarSoundRef.current.stop();
      guitarSoundRef.current.unload();
    };
  }, []);

  const handleGuitarClick = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      guitarSoundRef.current.play();
      console.log(isPlaying);
    } else if (guitarSoundRef.current.playing() && !isPlaying) {
      guitarSoundRef.current.seek(guitarSoundRef.current.seek());
      guitarSoundRef.current.play();
      console.log(isPlaying);
    } else {
      guitarSoundRef.current.pause();
      console.log(isPlaying);
    }
  };

  return (
    <mesh onClick={handleGuitarClick}>
      <primitive
        object={guitar.scene}
        scale={isMobile ? 4.85 : 4.9}
        position={isMobile ? [2.5, -2.8, 0] : [0.5, -2.9, 4.35]}
        rotation={[1.6, 3.07, -1.5]}
      />
    </mesh>
  );
};

const ComputersCanvas = ({ onMobileChange }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);
    onMobileChange(mediaQuery.matches);

    const handleMediaQueryChange = event => {
      setIsMobile(event.matches);
      onMobileChange(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Desktop isMobile={isMobile} />
        <Guitar isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
