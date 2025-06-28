
import { useEffect, useRef } from "react";

const UltraCosmicBackground = () => {
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

    // Cosmic entities and phenomena
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
      color: string;
      life: number;
    }> = [];

    const quantumPortals: Array<{
      x: number;
      y: number;
      radius: number;
      rotation: number;
      pulsePhase: number;
      energy: number;
    }> = [];

    const dimensionalRifts: Array<{
      x: number;
      y: number;
      width: number;
      height: number;
      angle: number;
      intensity: number;
      phase: number;
    }> = [];

    // Initialize cosmic phenomena
    for (let i = 0; i < 300; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.5,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        brightness: Math.random(),
        color: ['#ffffff', '#b3d9ff', '#ffb3ba', '#ffffba', '#baffc9'][Math.floor(Math.random() * 5)]
      });
    }

    for (let i = 0; i < 8; i++) {
      nebulaClouds.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 200 + 100,
        color: ['#4c1d95', '#7c3aed', '#a855f7', '#ec4899', '#06b6d4'][Math.floor(Math.random() * 5)],
        opacity: Math.random() * 0.3 + 0.1,
        driftX: (Math.random() - 0.5) * 0.2,
        driftY: (Math.random() - 0.5) * 0.2
      });
    }

    for (let i = 0; i < 150; i++) {
      cosmicDust.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        color: ['#06b6d4', '#8b5cf6', '#f59e0b', '#10b981'][Math.floor(Math.random() * 4)],
        life: Math.random()
      });
    }

    for (let i = 0; i < 4; i++) {
      quantumPortals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 80 + 40,
        rotation: 0,
        pulsePhase: Math.random() * Math.PI * 2,
        energy: Math.random() * 0.8 + 0.2
      });
    }

    for (let i = 0; i < 6; i++) {
      dimensionalRifts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: Math.random() * 300 + 100,
        height: Math.random() * 5 + 2,
        angle: Math.random() * Math.PI,
        intensity: Math.random() * 0.6 + 0.4,
        phase: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const animate = () => {
      time += 0.016;
      
      // Create deep space gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, '#000011');
      gradient.addColorStop(0.3, '#001122');
      gradient.addColorStop(0.6, '#000033');
      gradient.addColorStop(1, '#000000');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw nebula clouds with complex gradients
      nebulaClouds.forEach(cloud => {
        cloud.x += cloud.driftX;
        cloud.y += cloud.driftY;

        if (cloud.x < -cloud.radius) cloud.x = canvas.width + cloud.radius;
        if (cloud.x > canvas.width + cloud.radius) cloud.x = -cloud.radius;
        if (cloud.y < -cloud.radius) cloud.y = canvas.height + cloud.radius;
        if (cloud.y > canvas.height + cloud.radius) cloud.y = -cloud.radius;

        const nebulaGradient = ctx.createRadialGradient(
          cloud.x, cloud.y, 0,
          cloud.x, cloud.y, cloud.radius
        );
        nebulaGradient.addColorStop(0, cloud.color + '80');
        nebulaGradient.addColorStop(0.4, cloud.color + '40');
        nebulaGradient.addColorStop(0.7, cloud.color + '20');
        nebulaGradient.addColorStop(1, cloud.color + '00');

        ctx.fillStyle = nebulaGradient;
        ctx.fillRect(cloud.x - cloud.radius, cloud.y - cloud.radius, cloud.radius * 2, cloud.radius * 2);
      });

      // Draw dimensional rifts
      dimensionalRifts.forEach(rift => {
        rift.phase += 0.05;
        const pulseIntensity = (Math.sin(rift.phase) + 1) * 0.5;
        
        ctx.save();
        ctx.translate(rift.x, rift.y);
        ctx.rotate(rift.angle);
        
        const riftGradient = ctx.createLinearGradient(0, -rift.height / 2, 0, rift.height / 2);
        riftGradient.addColorStop(0, `rgba(139, 92, 246, 0)`);
        riftGradient.addColorStop(0.5, `rgba(139, 92, 246, ${rift.intensity * pulseIntensity})`);
        riftGradient.addColorStop(1, `rgba(139, 92, 246, 0)`);
        
        ctx.fillStyle = riftGradient;
        ctx.fillRect(-rift.width / 2, -rift.height / 2, rift.width, rift.height);
        
        // Add energy crackling effect
        for (let i = 0; i < 3; i++) {
          ctx.strokeStyle = `rgba(236, 72, 153, ${pulseIntensity * 0.8})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(-rift.width / 2 + Math.random() * rift.width, 0);
          ctx.lineTo(-rift.width / 2 + Math.random() * rift.width, (Math.random() - 0.5) * rift.height);
          ctx.stroke();
        }
        
        ctx.restore();
      });

      // Draw quantum portals
      quantumPortals.forEach(portal => {
        portal.rotation += 0.02;
        portal.pulsePhase += 0.08;
        const pulse = (Math.sin(portal.pulsePhase) + 1) * 0.5;
        const currentRadius = portal.radius * (0.8 + pulse * 0.4);

        // Portal outer ring
        ctx.save();
        ctx.translate(portal.x, portal.y);
        ctx.rotate(portal.rotation);

        for (let ring = 0; ring < 3; ring++) {
          const ringRadius = currentRadius * (1 - ring * 0.15);
          const ringOpacity = portal.energy * (0.8 - ring * 0.2) * pulse;
          
          ctx.strokeStyle = `rgba(6, 182, 212, ${ringOpacity})`;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Portal core
        const coreGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, currentRadius * 0.6);
        coreGradient.addColorStop(0, `rgba(139, 92, 246, ${portal.energy * pulse * 0.6})`);
        coreGradient.addColorStop(0.7, `rgba(6, 182, 212, ${portal.energy * pulse * 0.3})`);
        coreGradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
        
        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(0, 0, currentRadius * 0.6, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      // Draw cosmic dust with trails
      cosmicDust.forEach(dust => {
        dust.x += dust.vx;
        dust.y += dust.vy;
        dust.life += 0.01;

        if (dust.x < 0 || dust.x > canvas.width) dust.vx *= -1;
        if (dust.y < 0 || dust.y > canvas.height) dust.vy *= -1;

        const alpha = Math.sin(dust.life) * 0.5 + 0.5;
        
        // Draw trail
        ctx.strokeStyle = dust.color + '40';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(dust.x - dust.vx * 10, dust.y - dust.vy * 10);
        ctx.lineTo(dust.x, dust.y);
        ctx.stroke();

        // Draw particle
        ctx.fillStyle = dust.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
        ctx.beginPath();
        ctx.arc(dust.x, dust.y, dust.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw enhanced stars
      stars.forEach(star => {
        star.brightness += star.twinkleSpeed;
        const twinkle = (Math.sin(star.brightness) + 1) * 0.5;
        const alpha = Math.floor((twinkle * 0.8 + 0.2) * 255).toString(16).padStart(2, '0');
        
        // Star glow
        const glowSize = star.size * (2 + twinkle);
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

      // Add cosmic energy waves
      for (let i = 0; i < 3; i++) {
        const waveY = canvas.height * (0.2 + i * 0.3);
        const amplitude = 50 + Math.sin(time + i) * 20;
        
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 + Math.sin(time + i * 2) * 0.05})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let x = 0; x < canvas.width; x += 5) {
          const y = waveY + Math.sin((x + time * 100) * 0.01 + i * Math.PI) * amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
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
      style={{ background: 'linear-gradient(45deg, #000011, #001122, #000033)' }}
    />
  );
};

export default UltraCosmicBackground;
