import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./style.scss";

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <h1 className="logo">
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <ul>
          {/* <li><Link to="/getting-started/">getting started</Link></li>
          <li><Link to="/libraries/">libraries</Link></li> */}
          <li><a href="https://jwa.codes/projects/daiquan/" target="_blank" rel="noopener noreferrer">original process</a></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
