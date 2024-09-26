import React, { Suspense, useEffect, forwardRef } from "react";
import { Box, Button, Input, Typography, FormLabel } from "@mui/joy";
import { Grid } from "@mui/material";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import BlogCard from "../../components/blogs/BlogCard";
import "./index.css"; // Import the new CSS file

const Model = forwardRef(({ path }: { path: string }, ref: any) => {
  const { scene } = useGLTF(path);
  const handlePointerUp = (e) => {
    console.log(e);
  };
  const animationRef = React.useRef<any>();
  useFrame((state, delta) => {
    animationRef.current.rotation.y += delta / 4;
  });
  return (
    <mesh
      ref={animationRef}
      position={[0.5, 0, 2]}
      onPointerUp={handlePointerUp}
    >
      <primitive object={scene} />
    </mesh>
  );
});

const Home: React.FC = (): JSX.Element => {
  const meshRef = React.useRef();

  useEffect(() => {
    if (meshRef.current) {
      console.log("Mesh reference:", meshRef.current);
    }
  });

  return (
    <Box className="model-container">
      <Canvas camera={{ position: [5, 2, 5], fov: 35 }} shadows>
        <directionalLight
          position={[1, 2, 5]}
          intensity={4}
          color={"0xff0033"}
          castShadow
        />
        <Suspense fallback={null}>
          <Model ref={meshRef} path="/glb/koifishbond.glb" />
        </Suspense>
        <Html position={[1, 2, 0]} distanceFactor={8}>
          <Box className="overlay-box">
            <Typography>Enter your information</Typography>
            <FormLabel>Your name</FormLabel>
            <Input placeholder="Type in here…" variant="soft" />
            <FormLabel>Birthday</FormLabel>
            <Input placeholder="Type in here…" variant="soft" />
            <FormLabel>Gender</FormLabel>
            <Input placeholder="Type in here…" variant="soft" />
          </Box>
        </Html>
        <OrbitControls
          target={[0, 0, 0]}
          enableZoom={false}
          minDistance={5}
          maxDistance={10}
          enablePan={false}
        />
      </Canvas>
      <Typography className="header-content-blog"> Our Blogs </Typography>
      <Typography className="under-content-blog">
        Discover the harmony between Koi Fish and Feng Shui.
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ mt: 4, padding: "30px", paddingLeft: "50px" }}
      >
        <Grid item xs={12} sm={6} md={4} sx={{ padding: "30px" }}>
          <BlogCard
            title="Color Meaning of Koi Fish in Feng Shui"
            imageUrl="https://fengshuibeginner.com/wp-content/uploads/2022/10/Yin-Yang-Symbol-Meaning.jpg"
            onClickUrl="/your-blog-url-1"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ padding: "30px" }}>
          <BlogCard
            title="Symbolism of Koi Fish in Feng Shui"
            imageUrl="https://fengshuibeginner.com/wp-content/uploads/2023/01/chinese-new-year-foods-nian-gao.jpg"
            onClickUrl="/your-blog-url-2"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ padding: "30px" }}>
          <BlogCard
            title="Feng Shui Koi Fish and Home Décor"
            imageUrl="https://fengshuibeginner.com/wp-content/uploads/2019/07/feng-shui-centre-of-home.jpg"
            onClickUrl="/your-blog-url-3"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ padding: "30px" }}>
          <BlogCard
            title="Koi Fish in Feng Shui: Meaning & Benefits"
            imageUrl="https://fengshuibeginner.com/wp-content/uploads/2019/01/Chinese-New-Year-Lanterns.jpg"
            onClickUrl="/your-blog-url-3"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ padding: "30px" }}>
          <BlogCard
            title="Seasonal Koi Pond Care Tips"
            imageUrl="https://fengshuibeginner.com/wp-content/uploads/2019/04/koi-fish-feng-shui.jpg"
            onClickUrl="/your-blog-url-3"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ padding: "30px" }}>
          <BlogCard
            title="Koi Care for Good Feng Shui"
            imageUrl="https://fengshuibeginner.com/wp-content/uploads/2022/07/koi-fish-feng-shui.jpg"
            onClickUrl="/your-blog-url-3"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
