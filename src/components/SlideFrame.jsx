import React from 'react';
import { Slide, Notes } from 'spectacle';
import { colors } from '../theme';

export default function SlideFrame({ index, eyebrow, notes, children }) {
  return (
    <Slide backgroundColor={colors.bg}>
      <div style={{ padding: '50px 60px', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {eyebrow && (
          <span style={{
            fontFamily: '"Space Mono", monospace', fontSize: '11px',
            color: '#34d399', textTransform: 'uppercase', letterSpacing: '2px',
            marginBottom: '8px'
          }}>
            {eyebrow}
          </span>
        )}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {children}
        </div>
      </div>

      {notes && <Notes>{notes}</Notes>}
    </Slide>
  );
}
