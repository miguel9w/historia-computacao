import React from 'react';
import { Slide, Text, Notes } from 'spectacle';
import Icon from './Icon';
import { colors, fonts } from '../theme';

export default function GenerationCard({ index, eyebrow, genNumber, genName, period, summary, image, imageCaption, bullets, notes }) {
  return (
    <Slide backgroundColor={colors.bg}>
      <div style={{ padding: '40px 50px', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {eyebrow && (
          <span style={{
            fontFamily: fonts.mono, fontSize: '11px', color: colors.accentCyan,
            textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '4px'
          }}>
            {eyebrow}
          </span>
        )}

        <span style={{
          fontFamily: fonts.mono, fontSize: '40px', fontWeight: 700, color: colors.accent, lineHeight: 1
        }}>
          {genNumber}
        </span>
        <h2 style={{ fontFamily: fonts.header, fontSize: '30px', fontWeight: 700, color: colors.white, margin: '4px 0 2px 0' }}>
          {genName}
        </h2>
        <span style={{ fontFamily: fonts.mono, fontSize: '12px', color: colors.accentCyan, marginBottom: '6px' }}>
          {period}
        </span>
        <Text fontFamily={fonts.text} fontSize="15px" color={colors.muted} lineHeight={1.6} margin="0 0 20px 0">
          {summary}
        </Text>

        <div style={{ display: 'flex', gap: '24px', flex: 1 }}>
          <div style={{ flex: 1 }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '8px',
                    background: colors.bgPanel, border: `1px solid ${colors.line}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <Icon name={b.icon} size={14} color={colors.accent} />
                  </div>
                  <span style={{ fontFamily: fonts.text, fontSize: '14px', color: colors.muted, lineHeight: 1.5 }}>
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {image && (
            <div style={{ flex: '0 0 280px' }}>
              <img src={image} alt={genName}
                style={{ width: '100%', borderRadius: '12px', border: `1px solid ${colors.line}` }}
              />
              {imageCaption && (
                <p style={{ fontFamily: fonts.mono, fontSize: '10px', color: colors.muted, marginTop: '6px', textAlign: 'center' }}>
                  {imageCaption}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {notes && <Notes>{notes}</Notes>}
    </Slide>
  );
}
