import * as React from 'react';

import { Container } from 'components/container/Container';

import s from './Footer.scss';

interface ISocial {
  icon: React.ReactNode;
  to: string;
}

interface IFooterProps {
  logo: React.ReactNode;
  social: ISocial[];
}

export const Footer = ({ logo, social }: IFooterProps) => (
  <div className={s.footer}>
    <Container>
      <div className={s.footer__content}>
        <a
          href="https://jwa.codes/project/daiquan"
          target="_blank"
          rel="noopener noreferrer"
        >
          {logo}
        </a>

      </div>
    </Container>
  </div>
);
