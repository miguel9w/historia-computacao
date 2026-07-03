import React, { useRef, useEffect, useState } from 'react';

export default function VacuumTubeSim() {
  const canvasRef = useRef(null);
  const [gridV, setGridV] = useState(2);
  const [heaterOn, setHeaterOn] = useState(true);
  const animRef = useRef(null);
  const electronsRef = useRef([]);

  const W = 340, H = 430;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const NUM = 50;
    if (electronsRef.current.length === 0) {
      electronsRef.current = Array.from({ length: NUM }, () => ({
        x: 150 + (Math.random() - 0.5) * 30,
        y: 300 + Math.random() * 25,
        vx: (Math.random() - 0.5) * 1.2,
        vy: -(0.5 + Math.random() * 2.5),
        r: 1.5 + Math.random() * 2
      }));
    }

    let frame = 0;
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, W, H);

      const bias = heaterOn ? gridV : -10;
      const emission = heaterOn ? Math.max(0, Math.min(1, (bias + 2) / 8)) : 0;

      // ---- Outer envelope (glass) ----
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(80, 20);
      ctx.quadraticCurveTo(20, 20, 20, 80);
      ctx.lineTo(20, 340);
      ctx.quadraticCurveTo(20, 390, 80, 390);
      ctx.lineTo(260, 390);
      ctx.quadraticCurveTo(320, 390, 320, 340);
      ctx.lineTo(320, 80);
      ctx.quadraticCurveTo(320, 20, 260, 20);
      ctx.closePath();
      ctx.fillStyle = 'rgba(200, 220, 255, 0.04)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(180, 210, 255, 0.18)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Glass highlight
      ctx.beginPath();
      ctx.moveTo(40, 60);
      ctx.quadraticCurveTo(60, 30, 100, 30);
      ctx.strokeStyle = 'rgba(255,255,255,0.04)';
      ctx.lineWidth = 8;
      ctx.stroke();

      // ---- Base ----
      ctx.fillStyle = '#1c1c30';
      ctx.fillRect(100, 380, 140, 25);
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.lineWidth = 1;
      ctx.strokeRect(100, 380, 140, 25);
      ctx.fillStyle = '#b0b0b0';
      for (let i = 0; i < 5; i++) {
        ctx.fillRect(113 + i * 24, 405, 4, 18);
      }

      // ---- Labels ----
      ctx.font = 'bold 10px "Space Mono", monospace';
      ctx.textAlign = 'center';

      // ---- Filament / Heater ----
      if (heaterOn) {
        const gl = ctx.createRadialGradient(170, 330, 3, 170, 330, 25);
        gl.addColorStop(0, 'rgba(255, 130, 50, 0.5)');
        gl.addColorStop(1, 'rgba(255, 130, 50, 0)');
        ctx.fillStyle = gl;
        ctx.fillRect(135, 310, 70, 45);

        // Filament zigzag
        ctx.beginPath();
        ctx.moveTo(145, 340);
        for (let i = 0; i < 6; i++) {
          ctx.lineTo(155 + i * 8, i % 2 === 0 ? 310 : 340);
        }
        ctx.strokeStyle = '#ff8a50';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Glow dots
        for (let i = 0; i < 4; i++) {
          const fx = 155 + i * 12;
          const fy = i % 2 === 0 ? 312 : 338;
          ctx.fillStyle = frame % 30 < 20 ? '#ffaa00' : '#ff6600';
          ctx.beginPath();
          ctx.arc(fx, fy, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.fillStyle = '#ff8a50';
      ctx.fillText('FILAMENTO', 170, 358);

      // ---- Cathode sleeve ----
      ctx.strokeStyle = '#ffd700';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 3]);
      ctx.strokeRect(140, 295, 60, 50);
      ctx.setLineDash([]);
      ctx.fillStyle = '#ffd700';
      ctx.fillText('CATODO', 170, 288);

      // ---- Grid ----
      const gY = 195;
      ctx.strokeStyle = '#4fc3f7';
      ctx.lineWidth = 1.2;
      for (let x = 110; x <= 230; x += 9) {
        ctx.beginPath();
        ctx.moveTo(x, gY - 35);
        ctx.lineTo(x, gY + 35);
        ctx.stroke();
      }
      ctx.strokeRect(108, gY - 37, 124, 74);
      ctx.fillStyle = '#4fc3f7';
      ctx.fillText('GRADE', 170, gY - 46);
      ctx.font = '11px "Space Mono", monospace';
      ctx.fillStyle = bias < 0 ? '#ef5350' : '#4fc3f7';
      ctx.fillText(`${bias > 0 ? '+' : ''}${bias.toFixed(1)}V`, 170, gY + 55);

      // ---- Plate (Anode) ----
      ctx.fillStyle = 'rgba(124, 77, 255, 0.15)';
      ctx.fillRect(90, 40, 160, 80);
      ctx.strokeStyle = '#7c4dff';
      ctx.lineWidth = 2;
      ctx.strokeRect(90, 40, 160, 80);
      ctx.fillStyle = '#7c4dff';
      ctx.font = 'bold 10px "Space Mono", monospace';
      ctx.fillText('ANODO (PLACA)', 170, 72);
      ctx.font = '9px "Space Mono", monospace';
      ctx.fillText('+HV', 255, 66);

      // ---- Electrons ----
      const els = electronsRef.current;
      els.forEach(e => {
        if (emission > 0.01 && heaterOn) {
          e.x += e.vx + (Math.random() - 0.5) * emission * 1.5;
          e.y += e.vy * emission * 0.4;

          // Grid modulation: negative voltage pushes electrons back
          if (bias < 0) {
            e.y += bias * 0.05;
          }

          if (e.y < 50 || e.y > 380 || e.x < 60 || e.x > 280) {
            e.x = 150 + (Math.random() - 0.5) * 30;
            e.y = 300 + Math.random() * 25;
          }
        }

        const bright = emission * 0.85 + 0.15;
        ctx.save();
        ctx.globalAlpha = bright;
        ctx.fillStyle = '#00e5ff';
        ctx.shadowColor = '#00e5ff';
        ctx.shadowBlur = emission > 0.3 ? 6 : 2;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r * emission + 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // ---- Info panel ----
      ctx.save();
      ctx.globalAlpha = 1;
      ctx.fillStyle = 'rgba(255,255,255,0.04)';
      ctx.roundRect(30, 10, 280, 0, 0);
      ctx.fill();

      // Meter
      ctx.fillStyle = 'rgba(255,255,255,0.08)';
      ctx.fillRect(50, 415, 240, 8);
      const barW = 240 * emission;
      const barColor = emission > 0.6 ? '#34d399' : emission > 0.2 ? '#4fc3f7' : '#ef5350';
      ctx.fillStyle = barColor;
      ctx.fillRect(50, 415, barW, 8);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px "Space Mono", monospace';
      ctx.textAlign = 'left';
      ctx.fillText('Corrente de placa:', 50, 405);
      ctx.fillStyle = barColor;
      ctx.font = 'bold 11px "Space Mono", monospace';
      ctx.textAlign = 'right';
      ctx.fillText(`${Math.round(emission * 100)}%`, 290, 405);

      // Region label
      ctx.textAlign = 'center';
      ctx.font = 'bold 11px "Space Mono", monospace';
      let region = 'CORTE';
      let regColor = '#ef5350';
      if (emission > 0.7) { region = 'SATURAÇÃO'; regColor = '#34d399'; }
      else if (emission > 0.15) { region = 'REGIÃO ATIVA'; regColor = '#ff9800'; }
      ctx.fillStyle = regColor;
      ctx.fillText(region, 170, 395);

      ctx.restore();
    };

    const loop = () => {
      render();
      animRef.current = requestAnimationFrame(loop);
    };
    loop();
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [gridV, heaterOn]);

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <canvas ref={canvasRef} style={{ width: W, height: H, borderRadius: '12px', background: '#0d1117', border: '1px solid rgba(255,255,255,0.08)' }} />

      <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8', fontFamily: '"Space Mono", monospace', fontSize: '10px', cursor: 'pointer' }}>
          <input type="checkbox" checked={heaterOn} onChange={e => setHeaterOn(e.target.checked)} style={{ accentColor: '#ff8a50' }} />
          Filamento
        </label>
        <span style={{ color: '#94a3b8', fontFamily: '"Space Mono", monospace', fontSize: '11px' }}>Tensão da Grade:</span>
        <input type="range" min={-4} max={8} step={0.1} value={gridV}
          onChange={e => setGridV(parseFloat(e.target.value))}
          style={{ width: '160px', accentColor: '#4fc3f7' }}
        />
        <span style={{ color: gridV < 0 ? '#ef5350' : '#4fc3f7', fontFamily: '"Space Mono", monospace', fontSize: '12px', fontWeight: 700, minWidth: '48px' }}>
          {gridV > 0 ? '+' : ''}{gridV.toFixed(1)}V
        </span>
      </div>
      <p style={{ color: '#94a3b8', fontSize: '11px', marginTop: '6px', fontFamily: '"DM Sans", sans-serif' }}>
        Grade negativa → repele elétrons (corte). Grade positiva → acelera elétrons para o ânodo. Desligue o filamento para ver o efeito.
      </p>
    </div>
  );
}
