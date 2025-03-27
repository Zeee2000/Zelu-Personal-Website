import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Plane = ({ isMobile }) => {
  const plane = useGLTF("/airplanemodel/scene.gltf");
  const { animations } = plane;
  const { actions, mixer } = useAnimations(animations, plane.scene);

  useEffect(() => {
    // Log available animations to console so you can see their names
    console.log("Available animations:", Object.keys(actions));
    
    // Play all animations
    Object.values(actions).forEach((action) => {
      action.play();
    });
    
    // Or play a specific animation by name
    // if (actions.yourAnimationName) {
    //   actions.yourAnimationName.play();
    // }
  }, [actions]);

  // Add smooth hovering animation
  useFrame((state) => {
    // Increased speed by multiplying elapsedTime by 2.0
    const hoverOffset = Math.sin(state.clock.elapsedTime * 2.0) * 0.1;
    plane.scene.position.y = hoverOffset;
    
    // Update animations
    mixer.update(state.clock.getDelta());
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={plane.scene}
        scale={isMobile ? 0.1 : 0.12}
        position={[0, 0, 0]}
        rotation={[0, 0.5, 0]}
      />
    </mesh>
  );
};

const PlaneCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always" // Changed to "always" to ensure smooth animation
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        <Plane isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default PlaneCanvas; 