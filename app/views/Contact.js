import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Main from '../layouts/Main';

import data from '../data/contact';

const Contact = () => {

  return (
    <Main>
      <Helmet title="Contact" />
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2><Link to="/contact">Contact</Link></h2>
          </div>
        </header>
        <p>Feel free to get in touch. You can email me at: <a href="mailto:andrew.graham.bourne@gmail.com">andrew.graham.bourne@gmail.com</a></p>
      </article>
    </Main>
  );
};

export default Contact;
