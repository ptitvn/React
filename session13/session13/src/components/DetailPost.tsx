import { Component } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface DetailPostProps {
  posts: Post[];
}

export default class DetailPost extends Component<DetailPostProps> {
  render() {
    const { posts } = this.props;

    return (
      <div>
        <h2>Danh sách bài viết</h2>
        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: '16px' ,borderBottom: '1px solid #66646471', paddingBottom: '16px' }}>
            <p><strong>Id: {post.id}</strong> </p>
            <p><strong>Title: {post.title}</strong> </p>
            <p><strong>Content: {post.content}</strong> </p>
            <p><strong>Author: {post.author}</strong> </p>
          </div>
        ))}
      </div>
    );
  }
}
