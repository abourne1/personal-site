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
        or <Link to="/contact">contact</Link> me, especially if you&apos;re looking to hire for roles in government, civic tech or progressive politics!
      </p>
      <p>If I don't respond immediately, I'm probably playing studying, jogging in Prospect Park, or listening to a history podcast. Current favorite is season three of the amazing <a href="https://thehistoryofrome.typepad.com/revolutions_podcast/">Revolutions podcast</a>.</p>
      { /*<p>I&apos;m always looking for new opportunities at the intersection of government and technology</p> */ }
      {/*<p>Especially if you&apos;re looking to hire for roles in government, civic tech or progressive politics!</p> */}
    </article>
  </Main>
);

export default Index;
