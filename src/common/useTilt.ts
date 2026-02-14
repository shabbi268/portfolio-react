import { useRef, useEffect, useState } from 'react';

export interface TiltPosition {
  rotateX: number;
  rotateY: number;
}

export const useTilt = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltPosition>({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = (e.clientX - rect.left) - centerX;
      const mouseY = (e.clientY - rect.top) - centerY;

      const rotateX = (mouseY / centerY) * 10; // Max 10 degrees
      const rotateY = (mouseX / centerX) * -10; // Max -10 degrees

      setTilt({ rotateX, rotateY });
    };

    const handleMouseLeave = () => {
      setTilt({ rotateX: 0, rotateY: 0 });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { ref, tilt };
};
