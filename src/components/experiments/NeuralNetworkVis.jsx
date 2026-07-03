import React, { useState, useRef, useCallback, useEffect } from 'react';

const LAYERS = [
  { label: 'Entrada', count: 3, color: '#4fc3f7' },
  { label: 'Oculta', count: 4, color: '#7c4dff' },
  { label: 'Saída', count: 2, color: '#34d399' }
];

const W = 380, H = 250;

function sigmoid(x) { return 1 / (1 + Math.exp(-x)); }

const W_IN_HID = [
  [0.8, -0.5, 0.3], [-0.6, 0.9, 0.2],
  [0.4, 0.7, -0.8], [-0.3, -0.4, 0.6]
];
const W_HID_OUT = [
  [0.5, -0.7, 0.9, -0.2], [0.3, 0.6, -0.5, 0.8]
];

export default function NeuralNetworkVis() {
  const [inputs, setInputs] = useState([0.5, 0.3, 0.8]);
  const [activations, setActivations] = useState({ hidden: [0, 0, 0, 0], output: [0, 0] });
  const canvasRef = useRef(null);

  const compute = useCallback(() => {
    const h = W_IN_HID.map(w => sigmoid(w.reduce((a, wi, j) => a + wi * inputs[j], 0)));
    const o = W_HID_OUT.map(w => sigmoid(w.reduce((a, wi, j) => a + wi * h[j], 0)));
    setActivations({ hidden: h, output: o });
  }, [inputs]);

  useEffect(() => { compute(); }, [compute]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const lx = [40, 170, 300];
    const colors = ['#4fc3f7', '#7c4dff', '#34d399'];

    const getY = (li, ni) => {
      const c = LAYERS[li].count;
      const spacing = (H - 40) / (c + 1);
      return 20 + spacing * (ni + 1);
    };

    const render = () => {
      ctx.clearRect(0, 0, W, H);

      const h = activations.hidden;
      const o = activations.output;

      // Connections: Input → Hidden
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
          const w = W_IN_HID[j][i];
          const a = inputs[i] > 0.2 && h[j] > 0.2;
          ctx.beginPath();
          ctx.moveTo(lx[0] + 25, getY(0, i));
          ctx.lineTo(lx[1] - 25, getY(1, j));
          ctx.strokeStyle = a ? `rgba(52, 211, 153, ${0.15 + Math.abs(w) * 0.35})` : 'rgba(79, 139, 255, 0.08)';
          ctx.lineWidth = 1 + Math.abs(w) * 2.5;
          ctx.stroke();
        }
      }

      // Connections: Hidden → Output
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 2; j++) {
          const w = W_HID_OUT[j][i];
          const a = h[i] > 0.2 && o[j] > 0.2;
          ctx.beginPath();
          ctx.moveTo(lx[1] + 25, getY(1, i));
          ctx.lineTo(lx[2] - 25, getY(2, j));
          ctx.strokeStyle = a ? `rgba(52, 211, 153, ${0.15 + Math.abs(w) * 0.35})` : 'rgba(79, 139, 255, 0.08)';
          ctx.lineWidth = 1 + Math.abs(w) * 2.5;
          ctx.stroke();
        }
      }

      // Neurons
      [0, 1, 2].forEach(li => {
        const c = LAYERS[li].count;
        for (let ni = 0; ni < c; ni++) {
          const x = lx[li];
          const y = getY(li, ni);

          let val = li === 0 ? inputs[ni] : li === 1 ? h[ni] : o[ni];

          const radius = 10 + val * 10;
          const col = colors[li];

          // Glow
          if (val > 0.25) {
            const g = ctx.createRadialGradient(x, y, 3, x, y, radius + 12);
            g.addColorStop(0, `rgba(52, 211, 153, ${val * 0.25})`);
            g.addColorStop(1, 'rgba(52, 211, 153, 0)');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(x, y, radius + 12, 0, Math.PI * 2);
            ctx.fill();
          }

          // Fill
          ctx.fillStyle = val > 0.5 ? 'rgba(52, 211, 153, 0.3)' : col;
          ctx.globalAlpha = 0.15 + val * 0.55;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;

          // Stroke
          ctx.strokeStyle = val > 0.5 ? '#34d399' : col;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.stroke();

          // Value
          ctx.fillStyle = '#f8fafc';
          ctx.font = `${(8 + val * 4)}px "Space Mono", monospace`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(val.toFixed(2), x, y);

          // Input label
          if (li === 0) {
            ctx.fillStyle = '#94a3b8';
            ctx.font = '8px "Space Mono", monospace';
            ctx.textAlign = 'right';
            ctx.textBaseline = 'middle';
            ctx.fillText(`x${ni + 1}`, x - radius - 8, y);
          }
        }

        // Layer label
        ctx.fillStyle = '#94a3b8';
        ctx.font = '9px "Space Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillText(LAYERS[li].label, lx[li], H - 4);
      });

      // Output labels
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.font = '9px "Space Mono", monospace';
      o.forEach((v, i) => {
        ctx.fillStyle = v > 0.5 ? '#34d399' : '#94a3b8';
        ctx.fillText(`y${i + 1}`, lx[2] + 40, getY(2, i));
      });
    };

    render();
  }, [inputs, activations]);

  const update = (idx, val) => {
    const next = [...inputs];
    next[idx] = val;
    setInputs(next);
  };

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <canvas ref={canvasRef} style={{ width: W, height: H, borderRadius: '12px', background: '#0d1117', border: '1px solid rgba(255,255,255,0.08)' }} />
      <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'center', gap: '16px' }}>
        {inputs.map((v, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ color: '#94a3b8', fontFamily: '"Space Mono", monospace', fontSize: '9px' }}>x{i + 1}:</span>
            <input type="range" min={0} max={1} step={0.05} value={v}
              onChange={e => update(i, parseFloat(e.target.value))}
              style={{ width: '70px', accentColor: '#4fc3f7' }}
            />
            <span style={{ color: '#4fc3f7', fontFamily: '"Space Mono", monospace', fontSize: '10px', minWidth: '28px' }}>{v.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '4px', display: 'flex', justifyContent: 'center', gap: '24px' }}>
        {activations.output.map((v, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: v > 0.5 ? '#34d399' : '#555', display: 'inline-block'
            }} />
            <span style={{ color: '#94a3b8', fontFamily: '"Space Mono", monospace', fontSize: '10px' }}>
              y{i + 1}: <strong style={{ color: v > 0.5 ? '#34d399' : '#94a3b8' }}>{v.toFixed(3)}</strong>
            </span>
          </div>
        ))}
      </div>
      <p style={{ color: '#94a3b8', fontSize: '9px', marginTop: '2px', fontFamily: '"DM Sans", sans-serif' }}>
        Pesos fixos (pré-treinados) · Cada neurônio: Σ(wi × xi) → sigmoide → ativação
      </p>
    </div>
  );
}
