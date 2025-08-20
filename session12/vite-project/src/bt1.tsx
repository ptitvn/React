import { Component } from 'react'

export default class bt1 extends Component {
  courses = [
    'ReactJS',
    'NodeJS',
    'TypeScript',
    'MongoDB'
  ];

  render() {
    return (
       <div>
      <h2 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '16px' }}>
        Danh sách khóa học
      </h2>
      <ol>
        {this.courses.map((course, index) => (
          <li key={index} style={{ fontSize: '18px', marginBottom: '8px' }}>
            {course}
          </li>
        ))}
      </ol>
    </div>
    )
  }
}


