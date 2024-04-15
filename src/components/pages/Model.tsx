import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
    const book = useGLTF('scene.gltf');
    return (
        <Canvas className="cursor-pointer" frameloop="demand" camera={{ position: [10, 10, 10], fov: 45, near: 0.5, far: 50 }}>
            <ambientLight intensity={3.0} />
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 3} minPolarAngle={Math.PI / 3} enablePan={false} />
        <primitive object={book.scene} scale={0.1} />
      </Canvas>
    );
  };
  
  export default Model;