/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import '../styles/index.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

function PostList({ fetchPosts }) {
  useEffect(() => {
    fetchPosts();
  }, []);

  return <div>PostList</div>;
}

export default connect(null, { fetchPosts })(PostList);
