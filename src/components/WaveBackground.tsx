import { useEffect, useRef } from 'react';

interface Wave {
  frequency: number;
  amplitude: number;
  phase: number;
  speed: number;
  color: string;
}

interface MousePosition {
  x: number;
  y: number;
}

const WaveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0 });
  const animationFrameIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let waves: Wave[] = [];

    // Set canvas size
    const setCanvasSize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initWaves = () => {
      waves = [
        {
          frequency: 0.02,
          amplitude: 50,
          phase: 0,
          speed: 0.02,
          color: 'rgba(0, 184, 187, 0.1)' // Cyan
        },
        {
          frequency: 0.015,
          amplitude: 70,
          phase: 0,
          speed: 0.025,
          color: 'rgba(21, 163, 199, 0.08)' // Cyan Blue
        },
        {
          frequency: 0.01,
          amplitude: 90,
          phase: 0,
          speed: 0.03,
          color: 'rgba(0, 152, 138, 0.06)' // Blue-Green
        }
      ];
    };

    // Draw single wave
    const drawWave = (wave: Wave) => {
      if (!canvas || !ctx) return;

      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let x = 0; x < canvas.width; x++) {
        const distanceFromMouse = Math.abs(x - mouseRef.current.x);
        const mouseFactor = Math.max(0, 1 - distanceFromMouse / 200);
        const amplitudeBoost = mouseFactor * 30;
        
        const y = Math.sin(x * wave.frequency + wave.phase) * 
                 (wave.amplitude + amplitudeBoost) + 
                 canvas.height / 2;
        
        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fillStyle = wave.color;
      ctx.fill();
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach(wave => {
        wave.phase += wave.speed;
        drawWave(wave);
      });

      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    // Event handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleResize = () => {
      setCanvasSize();
      initWaves();
    };

    // Initialize
    setCanvasSize();
    initWaves();
    animate();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameIdRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
    </>
  );
};

export default WaveBackground;