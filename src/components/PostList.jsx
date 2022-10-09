/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import '../styles/index.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import profilePhoto from '../images/profile-photo.png';
import { fetchPosts } from '../actions';

function PostList({ posts, fetchPosts }) {
  useEffect(() => {
    fetchPosts();
  }, []);

  const renderList = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    posts.map((post) => (
      <div
        className="flex p-4 rounded hover:bg-gray-200 transition-all ease-in duration-200 bg-gray-50 items-center gap-3 shadow-md"
        key={post.id}
      >
        <img src={profilePhoto} alt="" className="w-12 h-12 rounded-full" />
        <div>
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </div>
    ));

  return (
    <div className="flex flex-col max-w-[500px] w-[100vw] m-auto gap-2 px-6 py-3">
      {renderList()}
    </div>
  );
}

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, { fetchPosts })(PostList);
