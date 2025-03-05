"use client";

import { useEffect, useRef } from "react";

export default function NoiseTexture() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    function generateNoise() {
      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.floor(Math.random() * 20);
        data[i] = noise;
        data[i + 1] = noise;
        data[i + 2] = noise;
        data[i + 3] = 15;
      }
      ctx.putImageData(imageData, 0, 0);
      requestAnimationFrame(generateNoise);
    }

    generateNoise();

    return () => {};
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width="256"
      height="256"
      className="fixed inset-0 w-full h-full pointer-events-none opacity-30 mix-blend-overlay z-[1]"
      style={{ transform: "scale(5)" }}
    />
  );
}
