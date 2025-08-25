import { Component } from 'react';
import './SubjectList.css'; 


type State = {
  subjects: string[];
};

export default class SubjectList extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      subjects: ['Toán', 'Văn', 'Anh', 'Hóa', 'Sinh'],
    };
  }

  render() {
    return (
      <div className="container">
        <h2 className="title">📚 Danh sách môn học</h2>
        <div className="button-list">
          {this.state.subjects.map((subject, index) => (
            <button key={index} className="subject-button">
              {subject}
            </button>
          ))}
        </div>
      </div>
    );
  }
} 