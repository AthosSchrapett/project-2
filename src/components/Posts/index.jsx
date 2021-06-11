import { useContext } from 'react';
import { PostsContex } from '../../contexts/PostsProvider/context';

export const Posts = () => {
  const postsContext = useContext(PostsContex);
  const { postsState, postsDispatch } = postsContext;

  return (
    <div>
      <h1>Posts</h1>
      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};
