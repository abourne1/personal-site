import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/headshot.jpg`} alt="" />
      </Link>
      <header>
        <h2>Andrew Bourne</h2>
        <p><a href="mailto:andrew.graham.bourne@gmail.com">andrew.graham.bourne@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Andrew. Formerly of startup world, now trying to make government work for the people. I'm a  <a href="https://marxe.baruch.cuny.edu/">Baruch College public policy student</a> and University of Chicago alumni. Before becoming a fulltime student, I was at the <a href="https://www1.nyc.gov/site/opportunity/index.page">NYC Mayor's Office for Economic Opportunity</a> and Uber.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        website template courtesy of <a href="https://github.com/mldangelo/personal-site">Michael D&apos;Angelo</a>
      </p>
    </section>
  </section>
);

export default Nav;
