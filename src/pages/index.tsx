import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';

export default () => (
  <>
    <Helmet title="Home" />

    <Intro>
      Hello starter by Ueno, using opinionated dependencies 🤪, <Highlight>TypeScript</Highlight>,&nbsp;
      <Highlight>SCSS</Highlight>, <Highlight>CSS Modules</Highlight>, <Highlight>React Hooks</Highlight>,&nbsp;
      <Highlight>root resolver</Highlight>, <Highlight>code splitting</Highlight> and a lot of love.
    </Intro>

  </>
);
