import React, { Suspense, useEffect, forwardRef, Ref } from "react";
import { Box, Button, Input, Typography, FormLabel, Grid } from "@mui/joy";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Text, Html } from "@react-three/drei";
import BlogCard from "../../components/blogs/BlogCard";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/organism/Header";
import { selectUserInfo } from "../../features/auth/auth.selectors";
import "./Home.css";

const Model = forwardRef(({ path }: { path: string }, ref: any) => {
  const { scene } = useGLTF(path);
  const animationRef = React.useRef<any>();
  useFrame((state, delta) => {
    animationRef.current.rotation.y += delta / 4;
  });
  return (
    <mesh ref={animationRef} position={[0, -0.5, -1]}>
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
    <React.Fragment>
      <Header></Header>
      <Box sx={{ height: 720, backgroundColor: "#e6eced" }}>
        <Canvas camera={{ position: [5, 2, 5], fov: 25 }} shadows>
          <directionalLight
            position={[1, 2, 5]}
            intensity={4}
            color={"0xff0033"}
            castShadow
          />
          <Suspense fallback={null}>
            <Model ref={meshRef} path="/glb/koifishbond.glb" />
          </Suspense>
          <Html position={[-5, 1.5, 1]} distanceFactor={8}>
            <Box sx={{ backgroundColor: "white", padding: 2 }}>
              <Typography
                color="danger"
                level="h1"
                noWrap={false}
                variant="outlined"
              >
                Welcome to Feng Shui world
                <Button color="danger" variant="outlined">
                  Explore
                </Button>
              </Typography>
            </Box>
          </Html>
          <OrbitControls
            target={[0, 0.2, 0]}
            enableZoom={false}
            minDistance={5}
            maxDistance={10}
            enablePan={false}
            enableRotate={false}
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
          <Grid xs={12} sm={6} md={4} sx={{ padding: "30px" }}>
            <BlogCard
              title="Color Meaning of Koi Fish in Feng Shui"
              imageUrl="https://fengshuibeginner.com/wp-content/uploads/2022/10/Yin-Yang-Symbol-Meaning.jpg"
              onClickUrl="/blog/koi-color-meaning"
            />
          </Grid>

          <Grid xs={12} sm={6} md={4} sx={{ padding: "30px" }}>
            <BlogCard
              title="Symbolism of Koi Fish in Feng Shui"
              imageUrl="https://fengshuibeginner.com/wp-content/uploads/2023/01/chinese-new-year-foods-nian-gao.jpg"
              onClickUrl="/blog/symbolism"
            />
          </Grid>

          <Grid xs={12} sm={6} md={4} sx={{ padding: "30px" }}>
            <BlogCard
              title="Feng Shui Koi Fish and Home Décor"
              imageUrl="https://fengshuibeginner.com/wp-content/uploads/2019/07/feng-shui-centre-of-home.jpg"
              onClickUrl="/blog/home-decor"
            />
          </Grid>

          <Grid xs={12} sm={6} md={4} sx={{ padding: "30px" }}>
            <BlogCard
              title="Koi Fish in Feng Shui: Meaning & Benefits"
              imageUrl="https://fengshuibeginner.com/wp-content/uploads/2019/01/Chinese-New-Year-Lanterns.jpg"
              onClickUrl="/blog/meaning-and-benefits"
            />
          </Grid>

          <Grid xs={12} sm={6} md={4} sx={{ padding: "30px" }}>
            <BlogCard
              title="Seasonal Koi Pond Care Tips"
              imageUrl="https://fengshuibeginner.com/wp-content/uploads/2019/04/koi-fish-feng-shui.jpg"
              onClickUrl="/blog/seasonal-koi"
            />
          </Grid>

          <Grid xs={12} sm={6} md={4} sx={{ padding: "30px" }}>
            <BlogCard
              title="Koi Care for Good Feng Shui"
              imageUrl="https://fengshuibeginner.com/wp-content/uploads/2022/07/koi-fish-feng-shui.jpg"
              onClickUrl="/blog/koi-care-for-feng-shui"
            />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Home;
