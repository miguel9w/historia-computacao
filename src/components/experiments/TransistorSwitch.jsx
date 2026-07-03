import React, { useState, useRef, useEffect } from 'react';

export default function TransistorSwitch() {
  const canvasRef = useRef(null);
  const [vBase, setVBase] = useState(0);
  const animRef = useRef(null);
  const partsRef = useRef([]);

  const W = 380, H = 320;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    if (partsRef.current.length === 0) {
      partsRef.current = Array.from({ length: 20 }, () => ({
        x: 260, y: 170 + Math.random() * 40,
        vx: -0.5 - Math.random() * 2, vy: (Math.random() - 0.5) * 0.8,
        life: Math.random()
      }));
    }

    const render = () => {
      ctx.clearRect(0, 0, W, H);

      // Transistor state
      const cutoffV = 0.55;
      const satV = 0.75;
      const isCutoff = vBase < cutoffV;
      const isSaturated = vBase >= satV;
      const intensity = Math.max(0, Math.min(1, (vBase - cutoffV) / (satV - cutoffV)));

      let stateLabel = 'CORTE (OFF)';
      let stateColor = '#ef5350';
      if (isSaturated) { stateLabel = 'SATURAÇÃO (ON)'; stateColor = '#34d399'; }
      else if (!isCutoff) { stateLabel = 'ATIVO (amplificando)'; stateColor = '#ff9800'; }

      // ---- Title ----
      ctx.fillStyle = '#94a3b8';
      ctx.font = '9px "Space Mono", monospace';
      ctx.textAlign = 'left';
      ctx.fillText('Circuito: Chave com Transistor NPN', 10, 18);

      // ---- POWER SUPPLY (Vcc) ----
      // Battery
      ctx.strokeStyle = '#555';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(18, 30, 34, 50);
      ctx.fillStyle = '#34d399';
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('+', 35, 45);
      ctx.fillText('−', 35, 70);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '9px "Space Mono", monospace';
      ctx.fillText('Vcc=9V', 35, 96);

      // Wire from battery+ to collector resistor
      ctx.strokeStyle = intensity > 0.1 ? 'rgba(0, 229, 255, 0.6)' : 'rgba(100,120,180,0.3)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(52, 40);
      ctx.lineTo(110, 40);
      ctx.stroke();

      // Collector resistor Rc
      ctx.fillStyle = '#94a3b8';
      ctx.font = '9px "Space Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('Rc 1kΩ', 95, 26);
      ctx.strokeStyle = '#666';
      ctx.strokeRect(100, 28, 30, 24);

      // Wire: resistor → collector
      ctx.strokeStyle = intensity > 0.1 ? 'rgba(0, 229, 255, 0.6)' : 'rgba(100,120,180,0.3)';
      ctx.beginPath();
      ctx.moveTo(130, 40);
      ctx.lineTo(170, 40);
      ctx.lineTo(170, 110);
      ctx.stroke();
      ctx.fillStyle = '#7c4dff';
      ctx.font = '9px "Space Mono", monospace';
      ctx.fillText('C', 160, 106);

      // ---- TRANSISTOR BODY ----
      const tx = 170, ty = 120;

      // Circle
      const grad = ctx.createRadialGradient(tx, ty, 5, tx, ty, 38);
      grad.addColorStop(0, intensity > 0.3 ? 'rgba(79, 139, 255, 0.25)' : 'rgba(79, 139, 255, 0.08)');
      grad.addColorStop(1, 'rgba(79, 139, 255, 0.02)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(tx, ty, 38, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#4f8bff';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(tx, ty, 38, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = '#4f8bff';
      ctx.font = 'bold 10px "Space Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('NPN', tx, ty + 4);

      // Collector (top)
      ctx.strokeStyle = '#7c4dff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(tx, ty - 35);
      ctx.lineTo(tx, ty - 20);
      ctx.stroke();

      // Base (left)
      ctx.strokeStyle = '#4fc3f7';
      ctx.beginPath();
      ctx.moveTo(tx - 35, ty);
      ctx.lineTo(tx - 20, ty);
      ctx.stroke();

      // Arrow (emitter, bottom)
      ctx.strokeStyle = '#ff6b35';
      ctx.beginPath();
      ctx.moveTo(tx, ty + 20);
      ctx.lineTo(tx, ty + 50);
      ctx.lineTo(tx + 10, ty + 40);
      ctx.moveTo(tx, ty + 50);
      ctx.lineTo(tx - 10, ty + 40);
      ctx.stroke();

      // Transistor labels
      ctx.fillStyle = '#7c4dff';
      ctx.font = '9px "Space Mono", monospace';
      ctx.textAlign = 'left';
      ctx.fillText('Coletor', tx + 12, ty - 23);
      ctx.fillStyle = '#4fc3f7';
      ctx.fillText('Base', tx - 70, ty + 4);
      ctx.fillStyle = '#ff6b35';
      ctx.fillText('Emissor', tx + 12, ty + 48);

      // ---- BASE CIRCUIT ----
      // Wire from base to ground
      ctx.strokeStyle = vBase > 0.1 ? 'rgba(79, 195, 247, 0.5)' : 'rgba(100,120,180,0.3)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(tx - 35, ty);
      ctx.lineTo(50, ty);
      ctx.stroke();
      ctx.setLineDash([]);

      // Base voltage source
      ctx.fillStyle = '#94a3b8';
      ctx.font = '9px "Space Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('Vbase', 35, ty - 28);
      ctx.strokeStyle = '#4fc3f7';
      ctx.lineWidth = 1;
      ctx.strokeRect(18, ty - 18, 34, 36);
      ctx.fillStyle = '#4fc3f7';
      ctx.font = '10px "Space Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`${vBase.toFixed(2)}V`, 35, ty + 6);

      // Ground symbol
      ctx.strokeStyle = '#555';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(35, ty + 18);
      ctx.lineTo(35, ty + 30);
      ctx.moveTo(25, ty + 30);
      ctx.lineTo(45, ty + 30);
      ctx.moveTo(30, ty + 35);
      ctx.lineTo(40, ty + 35);
      ctx.moveTo(33, ty + 40);
      ctx.lineTo(37, ty + 40);
      ctx.stroke();

      // ---- EMITTER TO GROUND ----
      ctx.strokeStyle = intensity > 0.1 ? 'rgba(0, 229, 255, 0.6)' : 'rgba(100,120,180,0.3)';
      ctx.beginPath();
      ctx.moveTo(tx, ty + 50);
      ctx.lineTo(tx, ty + 75);
      ctx.lineTo(tx + 100, ty + 75);
      ctx.stroke();

      // ---- LOAD (LED) ----
      const lx = 270, ly = 40;
      ctx.strokeStyle = intensity > 0.1 ? 'rgba(0, 229, 255, 0.6)' : 'rgba(100,120,180,0.3)';
      ctx.beginPath();
      ctx.moveTo(tx, ty - 35);
      ctx.lineTo(lx, ly);
      ctx.stroke();

      // LED body
      const ledBright = intensity;
      ctx.fillStyle = ledBright > 0.05 ? `rgba(255, 23, 68, ${0.15 + ledBright * 0.6})` : 'rgba(30,30,30,0.5)';
      ctx.beginPath();
      ctx.arc(lx + 25, ly + 18, 18, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = ledBright > 0.3 ? '#ff1744' : '#444';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(lx + 7, ly, 36, 36);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '8px "Space Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('LED', lx + 25, ly + 48);

      // Light rays from LED
      if (ledBright > 0.1) {
        ctx.save();
        ctx.strokeStyle = `rgba(255, 23, 68, ${ledBright * 0.4})`;
        ctx.lineWidth = 1;
        for (let a = 0; a < 8; a++) {
          const ang = (a / 8) * Math.PI * 2 + Date.now() * 0.001;
          ctx.beginPath();
          ctx.moveTo(lx + 25 + Math.cos(ang) * 20, ly + 18 + Math.sin(ang) * 20);
          ctx.lineTo(lx + 25 + Math.cos(ang) * 30, ly + 18 + Math.sin(ang) * 30);
          ctx.stroke();
        }
        ctx.restore();
      }

      // ---- CURRENT PARTICLES ----
      const parts = partsRef.current;
      parts.forEach(p => {
        if (intensity > 0.02) {
          p.x += p.vx * intensity;
          p.y += p.vy * intensity;
          p.life -= 0.03 * intensity;
          if (p.life <= 0 || p.x < 100 || p.x > 300 || p.y < 30 || p.y > 300) {
            p.x = 240; p.y = 155 + Math.random() * 30;
            p.life = 1;
          }
        }
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life * 0.5 * intensity);
        ctx.fillStyle = intensity > 0.3 ? '#00e5ff' : '#4fc3f7';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5 + p.life, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // ---- STATE BOX ----
      const sbx = W - 140, sby = 10;
      ctx.fillStyle = 'rgba(255,255,255,0.04)';
      ctx.strokeStyle = stateColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(sbx, sby, 130, 50, 6);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = stateColor;
      ctx.font = 'bold 12px "Space Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(stateLabel, sbx + 65, sby + 22);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '9px "Space Mono", monospace';
      ctx.fillText(`Ic = ${Math.round(intensity * 100)}%`, sbx + 65, sby + 42);

      // ---- CURRENT BAR ----
      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      ctx.fillRect(50, H - 16, W - 100, 8);
      ctx.fillStyle = stateColor;
      ctx.fillRect(50, H - 16, (W - 100) * Math.min(1, intensity * 1.2), 8);

      // Bar label
      ctx.fillStyle = '#94a3b8';
      ctx.font = '8px "Space Mono", monospace';
      ctx.textAlign = 'left';
      ctx.fillText('0%', 50, H - 20);
      ctx.textAlign = 'right';
      ctx.fillText('100%', W - 50, H - 20);

      // Voltage threshold markers
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      ctx.font = '7px "Space Mono", monospace';
      ctx.textAlign = 'center';
      // Mark cutoff threshold
      const cutoffX = 50 + (W - 100) * (cutoffV / 1.5);
      ctx.fillStyle = '#ef5350';
      ctx.fillText('0.55V', cutoffX, H - 24);
      ctx.beginPath();
      ctx.moveTo(cutoffX, H - 16);
      ctx.lineTo(cutoffX, H - 8);
      ctx.stroke();
    };

    const loop = () => {
      render();
      animRef.current = requestAnimationFrame(loop);
    };
    loop();
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [vBase]);

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <canvas ref={canvasRef} style={{ width: W, height: H, borderRadius: '12px', background: '#0d1117', border: '1px solid rgba(255,255,255,0.08)' }} />

      <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
        <span style={{ color: '#94a3b8', fontFamily: '"Space Mono", monospace', fontSize: '11px' }}>
          Tensão na Base (Vbe):
        </span>
        <input type="range" min={0} max={1.5} step={0.01} value={vBase}
          onChange={e => setVBase(parseFloat(e.target.value))}
          style={{ width: '180px', accentColor: '#4fc3f7' }}
        />
        <span style={{
          color: vBase < 0.55 ? '#ef5350' : vBase < 0.75 ? '#ff9800' : '#34d399',
          fontFamily: '"Space Mono", monospace', fontSize: '12px', fontWeight: 700, minWidth: '48px'
        }}>
          {vBase.toFixed(2)}V
        </span>
      </div>

      <div style={{ marginTop: '6px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
        <span style={{ color: '#ef5350', fontFamily: '"Space Mono", monospace', fontSize: '9px' }}>
          ● Corte (&lt; 0.55V)
        </span>
        <span style={{ color: '#ff9800', fontFamily: '"Space Mono", monospace', fontSize: '9px' }}>
          ● Ativo (0.55–0.75V)
        </span>
        <span style={{ color: '#34d399', fontFamily: '"Space Mono", monospace', fontSize: '9px' }}>
          ● Saturação (&gt; 0.75V)
        </span>
      </div>
      <p style={{ color: '#94a3b8', fontSize: '10px', marginTop: '4px', fontFamily: '"DM Sans", sans-serif' }}>
        A corrente da base (Vbe) controla a corrente do coletor (Ic) · Ganho típico β = Ic/Ib ≈ 100–800
      </p>
    </div>
  );
}
