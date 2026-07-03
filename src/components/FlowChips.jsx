import React from 'react';
import { Slide, Text, Notes } from 'spectacle';
import Icon from './Icon';
import { colors, fonts } from '../theme';

export default function FlowChips({ index, eyebrow, title, summary, items, notes }) {
  return (
    <Slide backgroundColor={colors.bg}>
      <div style={{ padding: '50px 60px', height: '100%', display: 'flex', flexDirection: 'column' }}>
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
        <Text fontFamily={fonts.text} fontSize="15px" color={colors.muted} lineHeight={1.6} margin="0 0 36px 0">
          {summary}
        </Text>

        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center',
          alignItems: 'center', flex: 1, maxWidth: '900px', margin: '0 auto'
        }}>
          {items.map((item, i) => (
            <React.Fragment key={item.label}>
              <div style={{
                background: colors.bgPanel, border: `1px solid ${colors.line}`,
                borderRadius: '30px', padding: '16px 24px',
                display: 'flex', alignItems: 'center', gap: '12px',
                transition: 'border-color 0.2s'
              }}>
                <Icon name={item.icon} size={20} color={colors.accent} />
                <span style={{ fontFamily: fonts.header, fontWeight: 600, fontSize: '15px', color: colors.white }}>
                  {item.label}
                </span>
                {item.sub && (
                  <span style={{ fontFamily: fonts.mono, fontSize: '10px', color: colors.muted, marginLeft: '4px' }}>
                    {item.sub}
                  </span>
                )}
              </div>
              {i < items.length - 1 && (
                <span style={{ fontFamily: fonts.mono, fontSize: '18px', color: colors.line }}>→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {notes && <Notes>{notes}</Notes>}
    </Slide>
  );
}
