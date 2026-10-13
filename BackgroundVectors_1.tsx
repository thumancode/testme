
import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const BackgroundVectors: React.FC = () => {
  const frame = useCurrentFrame();
  const crescentShift = interpolate(frame, [0, 2700], [0, -80], {extrapolateRight: 'clamp'});
  return (
    <div style={{position: 'absolute', width: '100%', height: '100%', background: 'radial-gradient(120% 120% at 50% 20%, #1B2636 0%, #0A0F18 55%, #060A10 100%)', overflow: 'hidden'}}>
      {/* Golden Crescent - Vector */}
      <svg width="2160" height="3840" viewBox="0 0 2160 3840" style={{position: 'absolute', top: 0, left: 0}}>
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D4B678"/>
            <stop offset="100%" stopColor="#9C7C4A"/>
          </linearGradient>
        </defs>
        <path d={`M ${crescentShift + 1800} 420 Q 800 900 400 1900 Q 200 2600 600 3300`} 
          fill="none" stroke="url(#gold)" strokeWidth="42" strokeLinecap="round" opacity={0.9}/>
        {/* subtle geometric stars */}
        {Array.from({length: 30}).map((_,i)=>{
          const x = (i*173) % 2160;
          const y = (i*271) % 3840;
          const s = 1.2 + (i%3)*0.8;
          return <g key={i} transform={`translate(${x} ${y}) scale(${s})`} opacity={0.12}>
            <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill="#D4B678"/>
          </g>
        })}
        {/* Vector Kaaba + Green Dome silhouette as line art - inspired by logo */}
        <g transform="translate(1080 1120)" opacity={0.15}>
          <g transform="translate(-260 0)">
            <rect x="0" y="80" width="180" height="180" fill="#0E0E0E" stroke="#fff" strokeWidth="3"/>
            <rect x="0" y="140" width="180" height="8" fill="#fff"/>
            <path d="M30 0 L30 40 L50 40 L50 60 L30 60 L30 100 M110 0 L110 40 L130 40 L130 60 L110 60 L110 100" fill="none" stroke="#fff" strokeWidth="6"/>
          </g>
          <g transform="translate(-20 120)">
            <path d="M0 140 Q90 -20 180 140 Z" fill="#1A8A3A" stroke="#2FB95C" strokeWidth="3"/>
          </g>
        </g>
      </svg>
      {/* Vignette */}
      <div style={{position:'absolute', inset:0, background:'radial-gradient(60% 55% at 50% 45%, transparent 60%, rgba(0,0,0,0.55) 100%)'}}/>
    </div>
  );
};
