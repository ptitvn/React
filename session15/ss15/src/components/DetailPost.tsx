import { Component } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface Props {
  post: Post;
}

export default class DetailPost extends Component <Props> {
  render() {
    const { post } = this.props;
    return (
      <div style={{ marginBottom: '16px', borderBottom: '1px solid #ccc', paddingBottom: '8px' ,width: '50%'}}>
        <p><strong>Id:  {post.id}</strong></p>
        <p><strong>Title:  {post.title}</strong></p>
        <p><strong>Content:  {post.content}</strong></p>
        <p><strong>Author:  {post.author}</strong></p>
      </div>
    );
  }
}

