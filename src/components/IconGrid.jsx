import React from 'react';
import { Slide, Text, Notes } from 'spectacle';
import Icon from './Icon';
import { colors, fonts } from '../theme';

export default function IconGrid({ index, eyebrow, title, summary, columns = 3, items, notes, children }) {
  return (
    <Slide backgroundColor={colors.bg}>
      <div style={{ padding: '40px 50px', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {eyebrow && (
          <span style={{
            fontFamily: fonts.mono, fontSize: '11px', color: colors.accentCyan,
            textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '6px'
          }}>
            {eyebrow}
          </span>
        )}
        <h2 style={{ fontFamily: fonts.header, fontSize: '32px', fontWeight: 700, color: colors.white, margin: '0 0 6px 0' }}>
          {title}
        </h2>
        <Text fontFamily={fonts.text} fontSize="15px" color={colors.muted} lineHeight={1.6} margin="0 0 28px 0">
          {summary}
        </Text>

        <div style={{
          display: 'grid', gridTemplateColumns: `repeat(${Math.min(columns, 5)}, 1fr)`, gap: '16px', flex: 1
        }}>
          {items.map((item, i) => (
            <div key={i} style={{
              background: colors.bgPanel, border: `1px solid ${colors.line}`,
              borderRadius: '12px', padding: '18px 16px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'
            }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'rgba(79, 139, 255, 0.1)', border: `1px solid ${colors.line}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px'
              }}>
                <Icon name={item.icon} size={18} color={colors.accent} />
              </div>
              <span style={{ fontFamily: fonts.header, fontWeight: 600, fontSize: '14px', color: colors.white, display: 'block', marginBottom: '4px' }}>
                {item.title}
              </span>
              <span style={{ fontFamily: fonts.text, fontSize: '12px', color: colors.muted, lineHeight: 1.5 }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
        {children}
      </div>

      {notes && <Notes>{notes}</Notes>}
    </Slide>
  );
}
