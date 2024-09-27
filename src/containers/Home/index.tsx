import React, { Suspense, useEffect, forwardRef, Ref } from 'react';
import { Box, Button, Input, Typography, FormLabel } from '@mui/joy';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Text, Html } from '@react-three/drei';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/organism/Header';
import { selectUserInfo } from '../../features/auth/auth.selectors';

const Model = forwardRef(({ path }: { path: string }, ref: any) => {
  const { scene } = useGLTF(path);
  const animationRef = React.useRef<any>();
  useFrame((state, delta) => {
    animationRef.current.rotation.y += delta / 4;
  })
  return (
    <mesh ref={animationRef} position={[0, -0.5, -1]}>
      <primitive object={scene} />
    </mesh>
  );
});

const Home: React.FC = (): JSX.Element => {
  const meshRef = React.useRef();
  return (
    <React.Fragment>
      <Header></Header>
      <Box sx={{ height: 720, backgroundColor: '#e6eced' }}>
        <Canvas camera={{ position: [5, 2, 5], fov: 25 }} shadows>
          <directionalLight
            position={[1, 2, 5]}
            intensity={4}
            color={'0xff0033'}
            castShadow
          />
          <Suspense fallback={null}>
            <Model ref={meshRef} path='/glb/koifishbond.glb' />
          </Suspense>
          <Html position={[-5, 1.5, 1]} distanceFactor={8}>
            <Box sx={{ backgroundColor: 'white', padding: 2 }}>
              <Typography
                color="danger"
                level="h1"
                noWrap={false}
                variant="outlined"
              >
                Welcome to Feng Shui world
                <Button color="danger" variant="outlined">Explore</Button>
              </Typography>
              
            </Box>
          </Html>
          <OrbitControls target={[0, 0.2, 0]} enableZoom={false} minDistance={5} maxDistance={10} enablePan={false} enableRotate={false} />
        </Canvas>
        <Typography>Hello anh em</Typography>
      </Box>
    </React.Fragment>

  );
};

export default Home;
