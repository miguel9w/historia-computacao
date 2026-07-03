import React, { useState, useRef, useEffect, useCallback } from 'react';

const COLS = 6;
const BEADS_TOP = 1;
const BEADS_BOT = 4;

const COLORS = {
  frame: '#5c3a1e',
  rod: '#8b6b3d',
  beadTop: '#2a2a2a',
  beadTopActive: '#e63946',
  beadBot: '#c4975a',
  beadBotActive: '#e63946',
  bg: '#1a140e',
  text: '#94a3b8'
};

export default function Abacus() {
  const canvasRef = useRef(null);
  const [beads, setBeads] = useState(() =>
    Array.from({ length: COLS }, () => ({
      top: Array.from({ length: BEADS_TOP }, () => true),
      bot: Array.from({ length: BEADS_BOT }, () => false)
    }))
  );
  const dragRef = useRef(null);
  const [value, setValue] = useState(0);

  const W = 480, H = 280;
  const padX = 30, padY = 20;
  const availW = W - padX * 2;
  const colSpacing = availW / (COLS + 1);
  const rodLen = H - padY * 2 - 40;

  const getColX = useCallback((col) => padX + colSpacing * (col + 1), [colSpacing]);

  const render = useCallback((ctx, beadsState, highlight) => {
    ctx.clearRect(0, 0, W, H);

    // Frame
    ctx.fillStyle = COLORS.frame;
    ctx.beginPath();
    ctx.roundRect(8, 8, W - 16, H - 16, 8);
    ctx.fill();

    ctx.strokeStyle = '#7a5230';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(8, 8, W - 16, H - 16, 8);
    ctx.stroke();

    // Inner frame
    ctx.fillStyle = '#4a2e14';
    ctx.beginPath();
    ctx.roundRect(18, 18, W - 36, H - 36, 4);
    ctx.fill();

    // Divider bar (between heaven and earth)
    const divY = padY + rodLen * 0.35;
    ctx.fillStyle = '#3a2210';
    ctx.fillRect(padX - 5, divY - 3, W - padX * 2 + 10, 6);
    ctx.strokeStyle = '#5c3a1e';
    ctx.lineWidth = 1;
    ctx.strokeRect(padX - 5, divY - 3, W - padX * 2 + 10, 6);

    // Rods & beads
    for (let c = 0; c < COLS; c++) {
      const cx = getColX(c);
      const topY0 = padY + 18;
      const topSpacing = (divY - padY - 30) / (BEADS_TOP + 1);
      const botY0 = divY + 12;
      const botSpacing = (H - padY * 2 - 40 - divY - 16) / (BEADS_BOT + 1);

      // Rod
      ctx.strokeStyle = COLORS.rod;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, padY + 16);
      ctx.lineTo(cx, H - padY - 16);
      ctx.stroke();

      // Top beads
      for (let t = 0; t < BEADS_TOP; t++) {
        const isUp = beadsState[c].top[t];
        const by = isUp ? padY + 16 + topSpacing * (t + 1) : divY - 12 - (BEADS_TOP - 1 - t) * 0;
        const isHL = highlight && highlight.col === c && highlight.row === `t${t}`;
        const size = 10;

        const grad = ctx.createRadialGradient(cx - 2, by - 2, 1, cx, by, size + 2);
        if (isUp) {
          grad.addColorStop(0, isHL ? '#ff6b6b' : '#444');
          grad.addColorStop(1, isHL ? '#c0392b' : COLORS.beadTop);
        } else {
          grad.addColorStop(0, isHL ? '#ffaaaa' : '#dbb87a');
          grad.addColorStop(1, isHL ? '#c0392b' : COLORS.beadBotActive);
        }
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(cx, by, size, size * 0.7, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = isUp ? '#555' : '#b08850';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.ellipse(cx, by, size, size * 0.7, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Bottom beads
      for (let b = 0; b < BEADS_BOT; b++) {
        const isDown = beadsState[c].bot[b];
        const by = isDown ? H - padY - 18 - (BEADS_BOT - 1 - b) * 0 : divY + 12 + botSpacing * (b + 1);
        const isHL = highlight && highlight.col === c && highlight.row === `b${b}`;

        const size = 10;
        const grad = ctx.createRadialGradient(cx - 2, by - 2, 1, cx, by, size + 2);
        if (!isDown) {
          grad.addColorStop(0, isHL ? '#ffaaaa' : '#dbb87a');
          grad.addColorStop(1, isHL ? '#c0392b' : COLORS.beadBotActive);
        } else {
          grad.addColorStop(0, isHL ? '#ff6b6b' : '#444');
          grad.addColorStop(1, isHL ? '#c0392b' : COLORS.beadTop);
        }
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(cx, by, size, size * 0.7, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = !isDown ? '#b08850' : '#555';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.ellipse(cx, by, size, size * 0.7, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Column value
      let colVal = 0;
      colVal += beadsState[c].top.filter(Boolean).length * 5;
      colVal += beadsState[c].bot.filter(Boolean).length * 1;
      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 13px "Space Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(colVal, cx, H - padY + 2);

      // Column header
      const place = ['', '10⁵', '10⁴', '10³', '10²', '10¹', '10⁰'];
      ctx.fillStyle = '#6b7b9b';
      ctx.font = '9px "Space Mono", monospace';
      ctx.fillText(place[c + 1] || '', cx, padY - 2);
    }

    // Total
    let total = 0;
    for (let c = 0; c < COLS; c++) {
      let cv = 0;
      cv += beadsState[c].top.filter(Boolean).length * 5;
      cv += beadsState[c].bot.filter(Boolean).length * 1;
      total += cv * Math.pow(10, COLS - 1 - c);
    }

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 16px "Space Mono", monospace';
    ctx.textAlign = 'right';
    ctx.fillText(`= ${total.toLocaleString('pt-BR')}`, W - 30, H - 48);

    return total;
  }, [getColX]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const total = render(ctx, beads, null);
    setValue(total);
  }, [beads, render]);

  const handlePointerDown = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (W / rect.width);
    const my = (e.clientY - rect.top) * (H / rect.height);

    const divY = padY + rodLen * 0.35;

    for (let c = 0; c < COLS; c++) {
      const cx = getColX(c);
      if (Math.abs(mx - cx) > 16) continue;

      const topSpacing = (divY - padY - 30) / (BEADS_TOP + 1);
      const botSpacing = (H - padY * 2 - 40 - divY - 16) / (BEADS_BOT + 1);

      // Check top beads
      for (let t = 0; t < BEADS_TOP; t++) {
        const isUp = beads[c].top[t];
        const by = isUp ? padY + 16 + topSpacing * (t + 1) : divY - 12;
        if (Math.abs(my - by) < 14) {
          setBeads(prev => {
            const next = prev.map(col => ({
              top: [...col.top],
              bot: [...col.bot]
            }));
            next[c].top[t] = !next[c].top[t];
            // If a top bead moves down, all other top beads go up
            if (next[c].top[t] === false) {
              for (let tt = 0; tt < BEADS_TOP; tt++) next[c].top[tt] = false;
            } else {
              for (let tt = 0; tt < BEADS_TOP; tt++) next[c].top[tt] = true;
            }
            return next;
          });
          return;
        }
      }

      // Check bottom beads
      for (let b = 0; b < BEADS_BOT; b++) {
        const isDown = beads[c].bot[b];
        const by = isDown ? H - padY - 18 : divY + 12 + botSpacing * (b + 1);
        if (Math.abs(my - by) < 14) {
          setBeads(prev => {
            const next = prev.map(col => ({
              top: [...col.top],
              bot: [...col.bot]
            }));
            next[c].bot[b] = !next[c].bot[b];

            // Ensure bottom beads are contiguous from the divider
            const activeBot = [];
            for (let bb = 0; bb < BEADS_BOT; bb++) {
              if (next[c].bot[bb]) activeBot.push(bb);
            }
            // Reset to have contiguous active beads from top
            for (let bb = 0; bb < BEADS_BOT; bb++) {
              next[c].bot[bb] = bb < activeBot.length;
            }
            return next;
          });
          return;
        }
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <canvas ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{ width: W, height: H, borderRadius: '10px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.08)' }}
      />
      <p style={{ color: COLORS.text, fontSize: '11px', marginTop: '6px', fontFamily: '"DM Sans", sans-serif' }}>
        Clique nas contas para movê-las · Cada coluna = casa decimal · Conta superior = 5, inferiores = 1
      </p>
    </div>
  );
}
