/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import '../styles/index.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

function PostList({ posts, fetchPosts }) {
  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  return <div>PostList</div>;
}

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, { fetchPosts })(PostList);
