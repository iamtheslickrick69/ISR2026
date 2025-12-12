'use client';

import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import SimplexNoise from 'simplex-noise';

// Black Fabric Shader Material
const fabricVertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;
  varying float vWave;

  void main() {
    vUv = uv;

    // Create fabric-like waves
    vec3 pos = position;
    float frequency = 2.0;
    float amplitude = 0.08;

    // Multi-layered wave for fabric effect
    float wave = sin(pos.x * frequency + uTime * 0.3) * amplitude;
    wave += sin(pos.y * frequency * 0.7 + uTime * 0.2) * amplitude * 0.5;
    wave += sin((pos.x + pos.y) * frequency * 0.5 + uTime * 0.15) * amplitude * 0.3;

    // Mouse influence for subtle interaction
    float mouseDistance = distance(vUv, uMouse);
    wave += exp(-mouseDistance * 3.0) * 0.02 * sin(uTime * 2.0);

    pos.z = wave;
    vWave = wave;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fabricFragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;
  varying float vWave;

  void main() {
    // Base black with subtle variations
    vec3 black = vec3(0.0, 0.0, 0.0);
    vec3 darkGray = vec3(0.02, 0.02, 0.025);

    // Silk-like sheen based on wave position
    float sheen = smoothstep(-0.05, 0.05, vWave) * 0.15;

    // Subtle fabric texture
    float noise = fract(sin(dot(vUv.xy * 100.0, vec2(12.9898, 78.233))) * 43758.5453);
    noise = noise * 0.01;

    // Gradient for depth
    float gradient = 1.0 - distance(vUv, vec2(0.5, 0.5)) * 0.3;

    // Combine for final fabric color
    vec3 finalColor = mix(black, darkGray, sheen + noise) * gradient;

    // Very subtle orange highlight at peaks
    float orangeHighlight = smoothstep(0.04, 0.08, vWave) * 0.02;
    finalColor += vec3(orangeHighlight * 0.976, orangeHighlight * 0.451, orangeHighlight * 0.086);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// Fabric Mesh Component
function FabricMesh() {
  const mesh = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();

  const uniformsRef = useRef({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
  });

  useFrame((state) => {
    if (mesh.current) {
      uniformsRef.current.uTime.value = state.clock.elapsedTime;
      uniformsRef.current.uMouse.value.x = (mouse.x + 1) / 2;
      uniformsRef.current.uMouse.value.y = (mouse.y + 1) / 2;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 128, 128]} />
      <shaderMaterial
        uniforms={uniformsRef.current}
        vertexShader={fabricVertexShader}
        fragmentShader={fabricFragmentShader}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Minimalistic Firefly Particles
function MinimalFireflies() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 40; // Minimal amount
  const simplexRef = useRef(new SimplexNoise());

  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Spread particles across viewport
      positions[i3] = (Math.random() - 0.5) * 30;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 5;

      // Varying sizes for depth
      sizes[i] = Math.random() * 0.03 + 0.01;
    }

    return [positions, sizes];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.elapsedTime;
    const positionAttribute = pointsRef.current.geometry.attributes.position;
    const sizeAttribute = pointsRef.current.geometry.attributes.size;
    const simplex = simplexRef.current;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Gentle floating motion using simplex noise
      const noiseX = simplex.noise2D(i * 0.1, time * 0.1) * 0.005;
      const noiseY = simplex.noise2D(i * 0.1 + 100, time * 0.08) * 0.003;

      (positionAttribute.array as Float32Array)[i3] += noiseX;
      (positionAttribute.array as Float32Array)[i3 + 1] += noiseY + 0.001; // Slight upward drift

      // Wrap around edges smoothly
      if ((positionAttribute.array as Float32Array)[i3] > 15)
        (positionAttribute.array as Float32Array)[i3] = -15;
      if ((positionAttribute.array as Float32Array)[i3] < -15)
        (positionAttribute.array as Float32Array)[i3] = 15;
      if ((positionAttribute.array as Float32Array)[i3 + 1] > 10)
        (positionAttribute.array as Float32Array)[i3 + 1] = -10;

      // Subtle pulsing
      (sizeAttribute.array as Float32Array)[i] =
        (Math.sin(time * 2 + i) * 0.5 + 0.5) * 0.02 + 0.01;
    }

    positionAttribute.needsUpdate = true;
    sizeAttribute.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexShader={`
          attribute float size;
          varying float vSize;

          void main() {
            vSize = size;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * 300.0 / -mvPosition.z;
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          varying float vSize;

          void main() {
            float distance = length(gl_PointCoord - vec2(0.5));
            float alpha = 1.0 - smoothstep(0.0, 0.5, distance);

            // Soft orange glow
            vec3 color = vec3(0.976, 0.451, 0.086); // F97316 in RGB

            // Fade based on size (smaller = dimmer)
            alpha *= vSize * 15.0;

            gl_FragColor = vec4(color, alpha * 0.6);
          }
        `}
      />
    </points>
  );
}

// Main Background Component
export default function BlackFabricBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#000000',
        zIndex: 0,
      }}
    >
      {/* Gradient overlay for depth */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(ellipse at center top, rgba(10, 10, 10, 0.5) 0%, rgba(0, 0, 0, 1) 60%),
            radial-gradient(ellipse at 20% 80%, rgba(249, 115, 22, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(251, 146, 60, 0.03) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
        }}
      >
        <color attach="background" args={['#000000']} />

        {/* Black Fabric */}
        <FabricMesh />

        {/* Minimal Fireflies */}
        <MinimalFireflies />
      </Canvas>

      {/* Very subtle vignette */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle, transparent 40%, rgba(0, 0, 0, 0.4) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
