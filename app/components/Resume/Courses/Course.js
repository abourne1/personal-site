import React from 'react';
import PropTypes from 'prop-types';

const CourseContent = ({ data }) => (
  <span>
    <h4 className="course-number">{data.number}:</h4>
    <p className="course-name">{' ' + data.title}</p>
  </span>
);

const Course = ({ data, last }) => (
  <li className="course-container">
    {data.link ? 
      <a href={data.link}>
        <CourseContent data={data}/>
      </a>
    : 
      <CourseContent data={data}/> 
    }
    {!last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
  </li>
);

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

Course.defaultProps = {
  last: false,
};


export default Course;
