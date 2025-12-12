'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

// Mouse follower with orange glow
function MouseGlow() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        mouse.current.x * viewport.width * 0.5,
        0.1
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        mouse.current.y * viewport.height * 0.5,
        0.1
      );
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshBasicMaterial color="#F97316" transparent opacity={0.15} />
    </mesh>
  );
}

// Firefly particles
function Fireflies({ count = 150 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * viewport.width * 3,
        (Math.random() - 0.5) * viewport.height * 3,
        (Math.random() - 0.5) * 10
      );
      const speed = 0.2 + Math.random() * 0.5;
      const offset = Math.random() * Math.PI * 2;
      temp.push({ position, speed, offset });
    }
    return temp;
  }, [count, viewport.width, viewport.height]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime();

    particles.forEach((particle, i) => {
      const matrix = new THREE.Matrix4();
      const newPos = particle.position.clone();

      // Gentle floating motion
      newPos.y += Math.sin(time * particle.speed + particle.offset) * 0.3;
      newPos.x += Math.cos(time * particle.speed * 0.5 + particle.offset) * 0.2;

      matrix.setPosition(newPos);
      meshRef.current!.setMatrixAt(i, matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#FAFAFA" transparent opacity={0.4} />
    </instancedMesh>
  );
}

// Subtle microgrid
function Microgrid() {
  const gridRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const vertices = [];
    const gridSize = 40;
    const spacing = 2;

    // Horizontal lines
    for (let i = -gridSize; i <= gridSize; i += spacing) {
      vertices.push(-gridSize, i, -5, gridSize, i, -5);
    }
    // Vertical lines
    for (let i = -gridSize; i <= gridSize; i += spacing) {
      vertices.push(i, -gridSize, -5, i, gridSize, -5);
    }

    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.05) * 0.02;
    }
  });

  return (
    <lineSegments ref={gridRef} geometry={geometry}>
      <lineBasicMaterial color="#FAFAFA" transparent opacity={0.03} />
    </lineSegments>
  );
}

// Main scene component
function Scene() {
  return (
    <>
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 10, 30]} />

      <MouseGlow />
      <Fireflies count={150} />
      <Microgrid />

      <EffectComposer>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <Vignette offset={0.3} darkness={0.9} blendFunction={BlendFunction.NORMAL} />
        <Noise opacity={0.02} blendFunction={BlendFunction.OVERLAY} />
      </EffectComposer>
    </>
  );
}

export default function WorldClassBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 bg-black -z-10" />;
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
