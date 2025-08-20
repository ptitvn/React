import  { Component } from 'react';

interface User {
  id: number;
  name: string;
  age: number;
}

interface Exercise03State {
  users: User[];
}

export default class Exercise03 extends Component<object, Exercise03State> {
  constructor(props: object) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Mary', age: 25 },
        { id: 3, name: 'Jane', age: 20 },
      ],
    };
  }

  render() {
    return (
      <div>
        <table border={1} cellPadding={8} style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

