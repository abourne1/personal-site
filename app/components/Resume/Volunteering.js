import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Volunteering = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="volunteering" />
    <div className="title">
      <h3>Volunteering & Other</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Volunteering.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Volunteering.defaultProps = {
  data: [],
};


export default Volunteering;
