import React, { useState, useRef, useEffect } from 'react';

export default function QuantumBloch() {
  const canvasRef = useRef(null);
  const [theta, setTheta] = useState(45);
  const [phi, setPhi] = useState(0);
  const animRef = useRef(null);

  const W = 340, H = 290;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    // State labels at top
    const render = () => {
      ctx.clearRect(0, 0, W, H);

      const cx = W / 2 + 10, cy = H / 2 - 10;
      const r = 100;

      const th = (theta * Math.PI) / 180;
      const ph = (phi * Math.PI) / 180;

      const p0 = Math.cos(th / 2) ** 2;
      const p1 = Math.sin(th / 2) ** 2;

      // ---- Sphere ----
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(79, 139, 255, 0.06)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(79, 139, 255, 0.2)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Latitude lines
      for (let lat = 30; lat < 90; lat += 30) {
        const rad = r * Math.sin((lat * Math.PI) / 180);
        const yOff = r * Math.cos((lat * Math.PI) / 180);
        ctx.beginPath();
        ctx.ellipse(cx, cy - yOff, rad, rad * 0.35, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255,255,255,0.04)';
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(cx, cy + yOff, rad, rad * 0.35, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Longitude lines
      for (let lon = 0; lon < 180; lon += 30) {
        const a = (lon * Math.PI) / 180;
        ctx.beginPath();
        for (let t = 0; t <= Math.PI * 2; t += 0.05) {
          const x2 = r * Math.sin(t) * Math.cos(a);
          const y2 = r * Math.cos(t);
          const px = cx + x2;
          const py = cy + y2 * 0.55;
          t === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.strokeStyle = 'rgba(255,255,255,0.04)';
        ctx.stroke();
      }

      // ---- Z axis ----
      ctx.strokeStyle = 'rgba(79, 195, 247, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(cx, cy - r - 15);
      ctx.lineTo(cx, cy + r + 15);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#4fc3f7';
      ctx.font = 'bold 13px "Space Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('|0⟩', cx, cy - r - 22);
      ctx.fillStyle = '#ff6b35';
      ctx.fillText('|1⟩', cx, cy + r + 30);

      // ---- X axis ----
      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(cx - r - 15, cy);
      ctx.lineTo(cx + r + 15, cy);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px "Space Mono", monospace';
      ctx.fillText('X', cx + r + 22, cy + 4);

      // State vector
      const vx = r * Math.sin(th) * Math.cos(ph);
      const vy = -r * Math.cos(th);
      const endX = cx + vx;
      const endY = cy + vy * 0.55;

      // Glow
      const glow = ctx.createRadialGradient(endX, endY, 2, endX, endY, 22);
      glow.addColorStop(0, 'rgba(52, 211, 153, 0.35)');
      glow.addColorStop(1, 'rgba(52, 211, 153, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(endX, endY, 22, 0, Math.PI * 2);
      ctx.fill();

      // Vector line
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      // Arrowhead
      const ang = Math.atan2(endY - cy, endX - cx);
      ctx.fillStyle = '#34d399';
      ctx.beginPath();
      ctx.moveTo(endX, endY);
      ctx.lineTo(endX - 9 * Math.cos(ang - 0.35), endY - 9 * Math.sin(ang - 0.35));
      ctx.lineTo(endX - 9 * Math.cos(ang + 0.35), endY - 9 * Math.sin(ang + 0.35));
      ctx.closePath();
      ctx.fill();

      // Tip dot
      ctx.fillStyle = '#f8fafc';
      ctx.beginPath();
      ctx.arc(endX, endY, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // ---- State equation ----
      ctx.fillStyle = '#94a3b8';
      ctx.font = '9px "Space Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('|ψ⟩ = cos(θ/2)|0⟩ + e^(iφ) sin(θ/2)|1⟩', W / 2, H - 6);

      // ---- Probabilities ----
      ctx.textAlign = 'left';
      ctx.font = '11px "Space Mono", monospace';

      // |0⟩ bar
      ctx.fillStyle = '#4fc3f7';
      ctx.fillText(`P(|0⟩) = ${(p0 * 100).toFixed(1)}%`, 8, 20);
      ctx.fillStyle = 'rgba(79, 195, 247, 0.15)';
      ctx.fillRect(8, 26, 120 * p0, 6);
      ctx.fillStyle = 'rgba(79, 195, 247, 0.5)';
      ctx.fillRect(8, 26, 120 * p0, 6);

      // |1⟩ bar
      ctx.fillStyle = '#ff6b35';
      ctx.fillText(`P(|1⟩) = ${(p1 * 100).toFixed(1)}%`, 8, 46);
      ctx.fillStyle = 'rgba(255, 107, 53, 0.15)';
      ctx.fillRect(8, 52, 120 * p1, 6);
      ctx.fillStyle = 'rgba(255, 107, 53, 0.5)';
      ctx.fillRect(8, 52, 120 * p1, 6);

      // Angles
      ctx.textAlign = 'right';
      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px "Space Mono", monospace';
      ctx.fillText(`θ=${theta.toFixed(0)}°  φ=${phi.toFixed(0)}°`, W - 8, 18);

      // Superposition indicator
      const sup = (1 - Math.abs(p0 - p1)) * 100;
      ctx.textAlign = 'center';
      ctx.fillStyle = '#94a3b8';
      ctx.font = '9px "Space Mono", monospace';
      ctx.fillText(`Superposição: ${sup.toFixed(0)}%`, W / 2, 72);

      // Superposition bar
      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      ctx.fillRect(W / 2 - 60, 77, 120, 4);
      ctx.fillStyle = sup > 80 ? '#34d399' : sup > 40 ? '#ff9800' : '#ef5350';
      ctx.fillRect(W / 2 - 60, 77, 120 * (sup / 100), 4);
    };

    const loop = () => {
      render();
      animRef.current = requestAnimationFrame(loop);
    };
    loop();
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [theta, phi]);

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <canvas ref={canvasRef} style={{ width: W, height: H, borderRadius: '12px', background: '#0d1117', border: '1px solid rgba(255,255,255,0.08)' }} />
      <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: '#94a3b8', fontFamily: '"Space Mono", monospace', fontSize: '10px' }}>θ (teta):</span>
          <input type="range" min={0} max={180} step={1} value={theta}
            onChange={e => setTheta(parseFloat(e.target.value))}
            style={{ width: '100px', accentColor: '#34d399' }}
          />
          <span style={{ color: '#34d399', fontFamily: '"Space Mono", monospace', fontSize: '11px', minWidth: '30px' }}>{theta}°</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: '#94a3b8', fontFamily: '"Space Mono", monospace', fontSize: '10px' }}>φ (fase):</span>
          <input type="range" min={0} max={360} step={1} value={phi}
            onChange={e => setPhi(parseFloat(e.target.value))}
            style={{ width: '100px', accentColor: '#7c4dff' }}
          />
          <span style={{ color: '#7c4dff', fontFamily: '"Space Mono", monospace', fontSize: '11px', minWidth: '30px' }}>{phi}°</span>
        </div>
      </div>
      <p style={{ color: '#94a3b8', fontSize: '10px', marginTop: '4px', fontFamily: '"DM Sans", sans-serif' }}>
        θ controla a probabilidade |0⟩ vs |1⟩ · φ controla a fase relativa entre os estados
      </p>
    </div>
  );
}
