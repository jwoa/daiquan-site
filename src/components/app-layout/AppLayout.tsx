import * as React from 'react';
import Helmet from 'react-helmet';
import Logo from 'assets/svg/daiquan.svg';
import Github from 'assets/svg/github.svg';
import { helmet } from 'utils/helmet';
import { Header } from 'components/header/Header';
import { Link as HeaderLink } from 'components/header/Link';
import { Footer } from 'components/footer/Footer';
import { Devtools } from 'components/devtools/Devtools';

import s from './AppLayout.scss';

interface IAppLayoutProps {
  children: React.ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

export default ({ children }: IAppLayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />

    <Header>
      <HeaderLink
        name="about"
        to="/about"
      />
      <HeaderLink
        name="process"
        to="/about"
      />
    </Header>

    {children}

    <Footer
      logo={<Logo />}
      social={[
        { icon: <Github />, to: 'https://github.com/jwoa/daiquan' },
      ]}
    />

    {isDev && <Devtools />}
  </div>
);
