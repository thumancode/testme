
import React from 'react';
import {AbsoluteFill, Audio, Img, staticFile, useCurrentFrame, interpolate, Sequence} from 'remotion';
import {BackgroundVectors} from './BackgroundVectors';
import {SubtitleEngine} from './SubtitleEngine';

export const HadithVideo: React.FC = () => {
  const frame = useCurrentFrame();

  const logoScale = interpolate(frame, [0, 30], [0.8, 1], {extrapolateRight: 'clamp'});
  const logoOpacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'});

  const badgeOpacity = interpolate(frame, [2280, 2400], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const badgeY = interpolate(frame, [2280, 2400], [80, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  // Audio visualizer bars - vector, no emoji
  const bars = Array.from({length: 48});

  return (
    <AbsoluteFill style={{width: 2160, height: 3840, background: '#060A10'}}>
      <BackgroundVectors/>

      {/* Audio - user must replace audio.mp3 with real audio */}
      <Audio src={staticFile('audio.mp3')} volume={1}/>

      {/* Top Header with Logo */}
      <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 620, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', opacity: logoOpacity, transform: `scale(${logoScale})`}}>
        <div style={{width: 420, height: 420, borderRadius: 110, background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 6px rgba(212,182,120,0.5)', overflow: 'hidden'}}>
          <Img src={staticFile('logo.png')} style={{width: 380, height: 380, objectFit: 'contain'}}/>
        </div>
        <div style={{marginTop: 28, padding: '12px 36px', borderRadius: 100, background: 'rgba(212,182,120,0.12)', border: '1px solid rgba(212,182,120,0.35)'}}>
          <span style={{fontFamily: 'Noto Sans Bengali, sans-serif', fontSize: 38, color: '#D4B678', fontWeight: 700, letterSpacing: 1}}>ইসলামী বিশ্বকোষ ও আল হাদিস</span>
        </div>
      </div>

      {/* Vector Audio Wave - bottom area */}
      <div style={{position: 'absolute', bottom: 620, left: 96, right: 96, height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, opacity: 0.9}}>
        {bars.map((_, i) => {
          const seed = Math.sin((frame/8) + i*0.6);
          const h = interpolate(seed, [-1, 1], [18, 110]);
          return (
            <div key={i} style={{
              width: 18,
              height: h,
              borderRadius: 12,
              background: i % 7 === 0 ? '#D4B678' : 'rgba(255,255,255,0.85)',
              transition: 'height 0.1s',
              boxShadow: i % 7 === 0 ? '0 0 12px rgba(212,182,120,0.8)' : 'none'
            }}/>
          );
        })}
      </div>

      {/* Progress bar - vector */}
      <div style={{position: 'absolute', bottom: 560, left: 96, right: 96, height: 10, background: 'rgba(255,255,255,0.15)', borderRadius: 10, overflow: 'hidden'}}>
        <div style={{width: `${(frame/2700)*100}%`, height: '100%', background: 'linear-gradient(90deg, #D4B678, #F3E1B7)', borderRadius: 10}}/>
      </div>

      <SubtitleEngine/>

      {/* Hadith Reference Card at time 40-42s */}
      <Sequence from={40*30} durationInFrames={5*30}>
        <div style={{position: 'absolute', bottom: 840, left: 96, right: 96, display: 'flex', justifyContent: 'center'}}>
          <div style={{background: '#D4B678', color: '#1A1205', padding: '18px 42px', borderRadius: 100, fontSize: 42, fontWeight: 800, fontFamily: 'sans-serif', letterSpacing: 1}}>
            সহীহ বুখারি — হাদিস নং ২
          </div>
        </div>
      </Sequence>

      {/* Final CTA - Google Play Badge */}
      <div style={{position: 'absolute', bottom: 140, left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: badgeOpacity, transform: `translateY(${badgeY}px)`}}>
        <div style={{fontFamily: 'Noto Sans Bengali, sans-serif', fontSize: 46, color: 'white', fontWeight: 700, marginBottom: 24, textShadow: '0 2px 20px rgba(0,0,0,0.8)'}}>অ্যাপটি ডাউনলোড করুন</div>
        <div style={{background: 'white', borderRadius: 18, padding: 8, boxShadow: '0 18px 50px rgba(0,0,0,0.6)'}}>
          <Img src={staticFile('google-play-badge.png')} style={{width: 680, height: 200, objectFit: 'contain'}}/>
        </div>
        <div style={{marginTop: 22, fontSize: 36, color: 'rgba(255,255,255,0.65)', fontFamily: 'sans-serif'}}>ইসলামী বিশ্বকোষ ও আল হাদিস</div>
      </div>

      {/* Top safe shadow */}
      <div style={{position: 'absolute', top:0, left:0, right:0, height: 220, background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, transparent 100%)', pointerEvents: 'none'}}/>
    </AbsoluteFill>
  );
};
