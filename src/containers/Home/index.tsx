import React, { Suspense, useEffect, forwardRef, Ref } from 'react';
import { Box, Button, Input, Typography, FormLabel } from '@mui/joy';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Text, Html } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';
import { Vector3 } from 'three';

const Model = forwardRef(({ path }: { path: string }, ref: any) => {
  const { scene } = useGLTF(path);
  const handlePointerUp = (e) => {
    console.log(e)
  };
  const animationRef = React.useRef<any>();
  useFrame((state, delta)=>{
      animationRef.current.rotation.y += delta/4;
  })
  return (
    <mesh ref={animationRef}
      position={[0.5, 0, 2]}
      onPointerUp={handlePointerUp}>
      <primitive object={scene} />
    </mesh>
  );
});

const Home: React.FC = (): JSX.Element => {
  const meshRef = React.useRef();

  useEffect(() => {
    if (meshRef.current) {
      console.log('Mesh reference:', meshRef.current);
      // You can access the mesh and perform any actions, like modifying its position or rotation
      // meshRef.current.position.set(0, 1, 0);
    }
  });
  return (
    <Box sx={{ height: 720, backgroundColor: '#e6eced' }}>
      <Canvas camera={{ position: [5, 2, 5], fov: 35, }} shadows>
        {/* Ambient light for overall brightness */}
        {/* <ambientLight intensity={0.7} /> */}

        {/* Key directional light (mimicking sunlight) */}
        <directionalLight
          position={[1, 2, 5]}
          intensity={4}
          color={'0xff0033'}
          castShadow

        />

        {/* Spotlight to enhance focus on the model */}
        {/* <spotLight
          position={[10, 8, 6]}
          angle={0.4}
          intensity={1.5}
          penumbra={1}
          castShadow
        /> */}

        {/* A soft point light from the front */}
        {/* <pointLight position={[0, 3, 5]} intensity={0.8} /> */}

        <Suspense fallback={null}>
          <Model ref={meshRef} path='/glb/koifishbond.glb' />
        </Suspense>
        <Html position={[1, 2, 0]} distanceFactor={8}>
          <Box sx={{ backgroundColor: 'white', padding: 2 }}>
            <Typography>Enter your information</Typography>
            <FormLabel>Your name</FormLabel>
            <Input placeholder="Type in here…" variant="soft" />
            <FormLabel>Birthday</FormLabel>
            <Input placeholder="Type in here…" variant="soft" />
            <FormLabel>Gender</FormLabel>
            <Input placeholder="Type in here…" variant="soft" />
          </Box>
        </Html>
        <OrbitControls target={[0, 0, 0]} enableZoom={false} minDistance={5} maxDistance={10} enablePan={false}  />
        {/* <axesHelper></axesHelper> */}
      </Canvas>
      <Typography>Hello anh em</Typography>
    </Box>
  );
};

export default Home;
