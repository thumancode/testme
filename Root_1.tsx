
import React from 'react';
import {Composition, staticFile} from 'remotion';
import {HadithVideo} from './HadithVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HadithStory"
        component={HadithVideo}
        durationInFrames={2702}
        fps={30}
        width={2160}
        height={3840}
        defaultProps={{}}
      />
    </>
  );
};
