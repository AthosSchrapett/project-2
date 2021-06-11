import P from 'prop-types';
import { useReducer } from 'react';
import { PostsContex } from './context';
import { data } from './data';
import { reducer } from './reducer';

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);

  return <PostsContex.Provider value={{ postsState, postsDispatch }}>{children}</PostsContex.Provider>;
};

PostsProvider.propTypes = {
  children: P.node.isRequired,
};
