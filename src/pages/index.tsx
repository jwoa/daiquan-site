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
      to create a library that understands black culture*. It aims to serve as a
      framework for creatives and artists to make work with.
      <br/><br/>
      It'll cover areas such as <Highlight>Image Recognition</Highlight>,&nbsp; <Highlight>Natural Language&nbsp; Processing</Highlight>,&nbsp;
      <Highlight>Facial Recognition</Highlight>, and other things we don't know yet.
    </Intro>

    <BlockText
      heading="Clarification*"
      description={(
        <>
        Working on a way to stop this from being misused.
        </>
      )}
    />
  </>
);
