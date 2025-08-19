import React from 'react';

const ListCourse: React.FC = () => {
  const courses = ['HTML', 'CSS', 'JavaScript', 'ReactJS'];

  return (
    <div>
      <h2 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '16px' }}>
        Danh sách khóa học
      </h2>
      <ol>
        {courses.map((course, index) => (
          <li key={index} style={{ fontSize: '18px', marginBottom: '8px' }}>
            {course}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListCourse;

