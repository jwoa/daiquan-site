import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';

export default () => (
  <>
    <Helmet title="Home" />

    <Intro>
      Hey, Daiquan is an on going research project that aims to use machine learning
      to create a simple AI* system that understands black culture. It covers different areas
      such as <Highlight>Image Recognition</Highlight>,&nbsp; <Highlight>Music</Highlight>,
      <Highlight>Facial Recognition</Highlight>, <Highlight>Tone Analysis</Highlight>,&nbsp;
      and a lot of love.
    </Intro>

    <BlockText
      heading="Who we are"
      description={(
        <>
        I know there's no such thing as a simple AI. I meant more like an open framework that
        can be used for creative purposes. <a href="https://ueno.co" target="_blank" rel="noopener noreferrer">ueno.co</a>.
        </>
      )}
    />
  </>
);
