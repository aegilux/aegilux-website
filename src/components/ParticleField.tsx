import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 1200;
const CONNECTION_DISTANCE = 1.8;

const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);
    const siz = new Float32Array(PARTICLE_COUNT);
    const cyan = new THREE.Color("hsl(190, 100%, 55%)");
    const purple = new THREE.Color("hsl(263, 80%, 60%)");
    const pink = new THREE.Color("hsl(320, 80%, 60%)");

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Spread in a sphere-ish cluster
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 4 + Math.random() * 8;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const rand = Math.random();
      const c = rand < 0.5 ? cyan : rand < 0.8 ? purple : pink;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;

      siz[i] = 0.02 + Math.random() * 0.06;
    }
    return [pos, col, siz];
  }, []);

  // Pre-compute line geometry for neural network connections
  const lineGeometry = useMemo(() => {
    const linePositions: number[] = [];
    const lineColors: number[] = [];
    const cyan = new THREE.Color("hsl(190, 100%, 55%)");
    const purple = new THREE.Color("hsl(263, 80%, 60%)");

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DISTANCE) {
          linePositions.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
          const mixColor = Math.random() > 0.5 ? cyan : purple;
          lineColors.push(mixColor.r, mixColor.g, mixColor.b, mixColor.r, mixColor.g, mixColor.b);
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(lineColors, 3));
    return geo;
  }, [positions]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.05;
      pointsRef.current.rotation.x = Math.sin(t * 0.03) * 0.15;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = t * 0.05;
      linesRef.current.rotation.x = Math.sin(t * 0.03) * 0.15;
    }
  });

  return (
    <group>
      {/* Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} count={PARTICLE_COUNT} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} count={PARTICLE_COUNT} />
          <bufferAttribute attach="attributes-size" args={[sizes, 1]} count={PARTICLE_COUNT} />
        </bufferGeometry>
        <pointsMaterial
          size={0.07}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Neural network connection lines */}
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.15}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
};

export default ParticleField;
