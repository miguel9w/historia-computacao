import React from 'react';
import { Slide, Text, FlexBox, Notes } from 'spectacle';
import Icon from './Icon';
import { colors, fonts } from '../theme';

export default function ContentSlide({ index, eyebrow, title, summary, image, imageCaption, bullets, notes, children }) {
  return (
    <Slide template={null} backgroundColor={colors.bg}>
      <FlexBox style={{ height: '100%', padding: '40px 60px' }}>

        <div style={{ flex: 1, paddingRight: image ? '40px' : '0' }}>
          {eyebrow && (
            <span style={{
              fontFamily: fonts.mono, fontSize: '11px', color: colors.accentCyan,
              textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '8px'
            }}>
              {eyebrow}
            </span>
          )}
          <h2 style={{
            fontFamily: fonts.header, fontSize: '34px', fontWeight: 700, color: colors.white,
            margin: '0 0 10px 0', lineHeight: 1.2
          }}>
            {title}
          </h2>
          <Text fontFamily={fonts.text} fontSize="16px" color={colors.muted} lineHeight={1.6} margin="0 0 24px 0">
            {summary}
          </Text>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {bullets.map((b, i) => (
              <li key={i} style={{ display: 'flex', gap: '14px', marginBottom: '18px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: colors.bgPanel, border: `1px solid ${colors.line}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon name={b.icon} size={16} color={colors.accent} />
                </div>
                <div>
                  <span style={{ fontFamily: fonts.header, fontWeight: 600, fontSize: '15px', color: colors.white, display: 'block' }}>
                    {b.title}
                  </span>
                  <span style={{ fontFamily: fonts.text, fontSize: '13px', color: colors.muted, lineHeight: 1.5 }}>
                    {b.text}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          {children}
        </div>

        {image && (
          <div style={{ flex: '0 0 360px', maxWidth: '380px' }}>
            <img src={image} alt={title}
              style={{ width: '100%', borderRadius: '12px', border: `1px solid ${colors.line}` }}
            />
            {imageCaption && (
              <p style={{ fontFamily: fonts.mono, fontSize: '10px', color: colors.muted, marginTop: '6px', textAlign: 'center' }}>
                {imageCaption}
              </p>
            )}
          </div>
        )}
      </FlexBox>

      {notes && <Notes>{notes}</Notes>}
    </Slide>
  );
}
