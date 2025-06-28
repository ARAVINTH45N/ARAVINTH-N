
import { useEffect, useRef } from "react";

const ProfessionalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Cosmic elements
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      twinkleSpeed: number;
      brightness: number;
      color: string;
    }> = [];

    const nebulaClouds: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      opacity: number;
      driftX: number;
      driftY: number;
    }> = [];

    const cosmicDust: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const shootingStars: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      length: number;
      opacity: number;
      active: boolean;
    }> = [];

    // Initialize stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        brightness: Math.random(),
        color: ['#ffffff', '#b3d9ff', '#ffb3ba', '#ffffba', '#baffc9'][Math.floor(Math.random() * 5)]
      });
    }

    // Initialize nebula clouds
    for (let i = 0; i < 6; i++) {
      nebulaClouds.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 150 + 80,
        color: ['#4c1d95', '#7c3aed', '#a855f7', '#ec4899', '#06b6d4'][Math.floor(Math.random() * 5)],
        opacity: Math.random() * 0.2 + 0.1,
        driftX: (Math.random() - 0.5) * 0.1,
        driftY: (Math.random() - 0.5) * 0.1
      });
    }

    // Initialize cosmic dust
    for (let i = 0; i < 100; i++) {
      cosmicDust.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2
      });
    }

    // Initialize shooting stars
    for (let i = 0; i < 3; i++) {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 5 + 3,
        vy: Math.random() * 3 + 1,
        length: Math.random() * 50 + 30,
        opacity: 0,
        active: false
      });
    }

    let time = 0;

    const animate = () => {
      time += 0.016;
      
      // Create deep space gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, '#0a0a23');
      gradient.addColorStop(0.3, '#1a0033');
      gradient.addColorStop(0.6, '#0d001a');
      gradient.addColorStop(1, '#000000');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw nebula clouds
      nebulaClouds.forEach(cloud => {
        cloud.x += cloud.driftX;
        cloud.y += cloud.driftY;

        // Wrap around edges
        if (cloud.x < -cloud.radius) cloud.x = canvas.width + cloud.radius;
        if (cloud.x > canvas.width + cloud.radius) cloud.x = -cloud.radius;
        if (cloud.y < -cloud.radius) cloud.y = canvas.height + cloud.radius;
        if (cloud.y > canvas.height + cloud.radius) cloud.y = -cloud.radius;

        const nebulaGradient = ctx.createRadialGradient(
          cloud.x, cloud.y, 0,
          cloud.x, cloud.y, cloud.radius
        );
        nebulaGradient.addColorStop(0, cloud.color + '60');
        nebulaGradient.addColorStop(0.4, cloud.color + '30');
        nebulaGradient.addColorStop(0.7, cloud.color + '15');
        nebulaGradient.addColorStop(1, cloud.color + '00');

        ctx.fillStyle = nebulaGradient;
        ctx.fillRect(cloud.x - cloud.radius, cloud.y - cloud.radius, cloud.radius * 2, cloud.radius * 2);
      });

      // Draw stars with twinkling effect
      stars.forEach(star => {
        star.brightness += star.twinkleSpeed;
        const twinkle = (Math.sin(star.brightness) + 1) * 0.5;
        const alpha = Math.floor((twinkle * 0.8 + 0.2) * 255).toString(16).padStart(2, '0');
        
        // Star glow
        const glowSize = star.size * (1.5 + twinkle * 0.5);
        const glowGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, glowSize);
        glowGradient.addColorStop(0, star.color + alpha);
        glowGradient.addColorStop(0.5, star.color + '40');
        glowGradient.addColorStop(1, star.color + '00');
        
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Star core
        ctx.fillStyle = star.color + alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw cosmic dust particles
      cosmicDust.forEach(dust => {
        dust.x += dust.vx;
        dust.y += dust.vy;

        // Wrap around edges
        if (dust.x < 0) dust.x = canvas.width;
        if (dust.x > canvas.width) dust.x = 0;
        if (dust.y < 0) dust.y = canvas.height;
        if (dust.y > canvas.height) dust.y = 0;

        ctx.fillStyle = `rgba(100, 149, 237, ${dust.opacity})`;
        ctx.beginPath();
        ctx.arc(dust.x, dust.y, dust.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw shooting stars
      shootingStars.forEach(star => {
        if (!star.active && Math.random() < 0.001) {
          star.active = true;
          star.opacity = 1;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height / 2;
        }

        if (star.active) {
          star.x += star.vx;
          star.y += star.vy;
          star.opacity -= 0.02;

          if (star.opacity <= 0) {
            star.active = false;
          }

          // Draw shooting star trail
          const trailGradient = ctx.createLinearGradient(
            star.x, star.y,
            star.x - star.vx * 10, star.y - star.vy * 10
          );
          trailGradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
          trailGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

          ctx.strokeStyle = trailGradient;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(star.x - star.vx * 10, star.y - star.vy * 10);
          ctx.stroke();
        }
      });

      // Add cosmic energy waves
      for (let i = 0; i < 2; i++) {
        const waveY = canvas.height * (0.3 + i * 0.4);
        const amplitude = 30 + Math.sin(time + i) * 10;
        
        ctx.strokeStyle = `rgba(138, 43, 226, ${0.15 + Math.sin(time + i) * 0.05})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        for (let x = 0; x < canvas.width; x += 3) {
          const y = waveY + Math.sin((x + time * 80) * 0.008 + i * Math.PI) * amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Add distant galaxies
      if (Math.sin(time * 0.5) > 0.8) {
        const galaxyX = canvas.width * 0.8;
        const galaxyY = canvas.height * 0.2;
        const galaxyRadius = 30;

        const galaxyGradient = ctx.createRadialGradient(
          galaxyX, galaxyY, 0,
          galaxyX, galaxyY, galaxyRadius
        );
        galaxyGradient.addColorStop(0, 'rgba(255, 182, 193, 0.4)');
        galaxyGradient.addColorStop(0.5, 'rgba(138, 43, 226, 0.2)');
        galaxyGradient.addColorStop(1, 'rgba(138, 43, 226, 0)');

        ctx.fillStyle = galaxyGradient;
        ctx.beginPath();
        ctx.arc(galaxyX, galaxyY, galaxyRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(45deg, #0a0a23, #1a0033, #0d001a)' }}
    />
  );
};

export default ProfessionalBackground;
