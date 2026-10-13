
import React from 'react';
import {interpolate, useCurrentFrame, Easing} from 'remotion';
import {captions} from './Captions';

export const SubtitleEngine: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;
  const time = frame / fps;

  const active = captions.find(c => time >= c.start && time < c.end);
  if (!active) return null;

  const progress = (time - active.start) / (active.end - active.start);
  const scale = interpolate(progress, [0, 0.15, 1], [0.92, 1, 1], {easing: Easing.out(Easing.cubic)});
  const y = interpolate(progress, [0, 0.15], [40, 0], {easing: Easing.out(Easing.cubic)});
  const opacity = interpolate(progress, [0, 0.12, 0.85, 1], [0, 1, 1, 0]);

  return (
    <div style={{
      position: 'absolute',
      bottom: 1080,
      left: 96,
      right: 96,
      display: 'flex',
      justifyContent: 'center',
      opacity
    }}>
      <div style={{
        background: 'rgba(15,22,33,0.88)',
        border: '1.5px solid rgba(212,182,120,0.35)',
        borderLeft: '10px solid #D4B678',
        borderRadius: 32,
        padding: '54px 52px',
        transform: `translateY(${y}px) scale(${scale})`,
        boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
        maxWidth: 1900
      }}>
        <p style={{
          margin: 0,
          fontFamily: 'Noto Sans Bengali, Hind Siliguri, sans-serif',
          fontSize: active.text.length > 120 ? 54 : 64,
          lineHeight: 1.55,
          fontWeight: 600,
          color: '#F6F1E6',
          textAlign: 'left',
          letterSpacing: 0.2,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word'
        }}>{active.text}</p>
        {/* Arabic highlight detection - vector underline */}
        {(active.text.includes('আহিয়ানান') || active.text.includes('ওয়া আহিয়ানান')) && (
          <div style={{marginTop: 18, display: 'flex', alignItems: 'center', gap: 12}}>
            <svg width="36" height="36" viewBox="0 0 36 36"><circle cx="18" cy="18" r="12" fill="none" stroke="#D4B678" strokeWidth="2.5"/><path d="M12 18 L22 18 M18 12 L18 24" stroke="#D4B678" strokeWidth="2"/></svg>
            <span style={{color: '#D4B678', fontSize: 34, fontFamily: 'sans-serif'}}>আরবি হাদিসের অংশ</span>
          </div>
        )}
      </div>
    </div>
  );
};
