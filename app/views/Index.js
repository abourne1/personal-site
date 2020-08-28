import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Welcome to my website</Link></h2>
        </div>
      </header>
      <p>Please feel free to read more <Link to="/about">about me</Link>,
        check out my {' '}
        <Link to="/resume">resume</Link> {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      { /*<p>I&apos;m always looking for new opportunities at the intersection of government and technology</p> */ }
      <p>Include another line here!</p>
    </article>
  </Main>
);

export default Index;
