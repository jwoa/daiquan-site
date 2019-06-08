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
      to create a simple AI system* that understands black culture. It aims to serve as a
      framework for creatives and artists to make work with. It covers different areas
      such as <Highlight>Image Recognition</Highlight>,&nbsp; <Highlight>Natural Language Processing</Highlight>,
      <Highlight>Facial Recognition</Highlight>, <Highlight>Tone Analysis</Highlight>,&nbsp;
      and a lot of love.
    </Intro>

    <BlockText
      heading="Clarification"
      description={(
        <>
        I know there's no such thing as a simple AI. Chill.
        </>
      )}
    />
  </>
);
