import React, { useState, useEffect, useRef } from 'react';

const WatermarkedImage = ({ src, watermarkSrc, alt, className, style, onClick }) => {
  const [dataUrl, setDataUrl] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!src || !watermarkSrc) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const watermark = new Image();
      watermark.crossOrigin = "anonymous";
      watermark.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        
        ctx.drawImage(img, 0, 0);
        
        // Calculate watermark size: 25% of image width by default, scaled proportionally
        let watermarkWidth = canvas.width * 0.25;
        if (watermarkWidth > 500) watermarkWidth = 500;
        if (watermarkWidth < 120) watermarkWidth = 120;
        
        const watermarkHeight = (watermark.naturalHeight / watermark.naturalWidth) * watermarkWidth;
        
        const margin = Math.max(canvas.width * 0.03, 15); 
        
        const x = canvas.width - watermarkWidth - margin;
        const y = canvas.height - watermarkHeight - margin;
        
        ctx.globalAlpha = 0.9;
        
        // Add a slight drop shadow to the watermark on canvas
        ctx.shadowColor = "rgba(0,0,0,0.6)";
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        
        ctx.drawImage(watermark, x, y, watermarkWidth, watermarkHeight);
        ctx.globalAlpha = 1.0;
        
        try {
          const resultUrl = canvas.toDataURL("image/jpeg", 0.9);
          setDataUrl(resultUrl);
        } catch (e) {
          console.error("Canvas tainting error", e);
          setDataUrl(src); // fallback to original if CORS issues
        }
      };
      watermark.src = watermarkSrc;
    };
    img.src = src;
  }, [src, watermarkSrc]);

  if (!dataUrl) {
    return (
       <div className={`watermark-placeholder ${className}`} style={{...style, position: 'relative', background: '#f0f0f0', minHeight: '200px'}}>
          <canvas ref={canvasRef} style={{ display: 'none' }} />
       </div>
    );
  }

  return (
    <>
      <img 
        src={dataUrl} 
        alt={alt} 
        className={className} 
        style={style}
        onClick={onClick}
      />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </>
  );
};

export default WatermarkedImage;
