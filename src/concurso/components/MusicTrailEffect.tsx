import React, { useEffect } from 'react';

export const MusicTrailEffect: React.FC = () => {
  useEffect(() => {
    // Only activate on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const SYMBOLS = ['♪', '♫', '♩', '✦', '★', '⚡'];
    const COLORS = ['#FF4D2E', '#FFB800', '#F4E8C1', '#FFFFFF', '#FF8C33'];

    let lastTime = 0;
    const throttleMs = 45; // Emit particle every ~45ms for smooth performance

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < throttleMs) return;
      lastTime = now;

      const particle = document.createElement('span');
      const symbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const size = Math.floor(Math.random() * 12) + 12; // 12px to 24px
      const rotate = Math.floor(Math.random() * 60) - 30; // -30deg to +30deg
      const driftX = (Math.random() - 0.5) * 40; // horizontal drift

      particle.textContent = symbol;
      particle.className = 'fixed pointer-events-none z-50 transition-all unselectable';
      
      // Inline styles for particle placement and animation
      Object.assign(particle.style, {
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        color: color,
        fontSize: `${size}px`,
        fontWeight: '900',
        textShadow: `0 0 10px ${color}aa, 0 0 20px ${color}66`,
        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
        opacity: '0.9',
        userSelect: 'none',
        willChange: 'transform, opacity',
      });

      document.body.appendChild(particle);

      // Animate floating up & fading out
      const duration = 900 + Math.random() * 400; // 0.9s to 1.3s
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out quadratic
        const easeOut = 1 - Math.pow(1 - progress, 2);
        
        const translateY = -40 * easeOut;
        const translateX = driftX * easeOut;
        const currentOpacity = (1 - progress) * 0.95;
        const scale = 1 + progress * 0.4;

        particle.style.transform = `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px)) rotate(${rotate + progress * 20}deg) scale(${scale})`;
        particle.style.opacity = `${currentOpacity}`;

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          particle.remove();
        }
      };

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};
