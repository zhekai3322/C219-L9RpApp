import React, { useState } from 'react';

const diplomas = [
  {
    id: 'R47',
    name: 'Information Technology',
    courses: [
      {
        code: 'C218',
        name: 'UI/UX Design for Apps',
        description:
          'Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.',
        lecturer: 'Azhar Kamar',
        title: 'Lecturer',
      },
      {
        code: 'C346',
        name: 'Mobile App Development',
        description: 'In this module, students will learn the basics of creating Android Applications.',
        lecturer: 'Derek Lee',
        title: 'Lecturer',
      },
    ],
  },
  {
    id: 'R18',
    name: 'Financial Technology',
    courses: [
      {
        code: 'C237',
        name: 'Software Application Development',
        description:
          'This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.',
        lecturer: 'Hannah Lim',
        title: 'Lecturer',
      },
      {
        code: 'C372',
        name: 'Payment Technologies',
        description:
          'This module introduces students to different payment technologies and systems.',
        lecturer: 'Magdalene Lim',
        title: 'Senior Lecturer',
      },
    ],
  },
];

function DiplomaList() {
  const [activeDiploma, setActiveDiploma] = useState('R18');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleTabClick = (diplomaId) => {
    setActiveDiploma(diplomaId);
    setSelectedCourse(null);
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="container">
      <h1>Schools</h1>
      <ul className="categories">
        {diplomas.map((diploma) => (
          <li key={diploma.id}>
            <a
              href={`/diplomas/${diploma.id}`}
              className={activeDiploma === diploma.id ? 'nav-active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick(diploma.id);
              }}
            >
              {diploma.name}
            </a>
          </li>
        ))}
      </ul>

      <div>
        <h1>{diplomas.find((diploma) => diploma.id === activeDiploma).name} Diploma</h1>
        <ul className="session-list">
          {diplomas
            .find((diploma) => diploma.id === activeDiploma)
            .courses.map((course) => (
              <li className="session" key={course.code}>
                <a
                  href={`/diplomas/${activeDiploma}/${course.code}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCourseClick(course);
                  }}
                >
                  <p className="session-name">{`${course.code} | ${course.name}`}</p>
                </a>
              </li>
            ))}
        </ul>
      </div>

      {selectedCourse && (
        <div className="course-details">
          <h2>Module</h2>
          <h3>{selectedCourse.name}</h3>
          <p>{selectedCourse.description}</p>
          <h4>{selectedCourse.lecturer}</h4>
          <span>{selectedCourse.title}</span>
        </div>
      )}
    </div>
  );
}

export default DiplomaList;
