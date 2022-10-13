import '../styles/index.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

// eslint-disable-next-line no-shadow, react/prop-types
function UserHeader({ user, userId, fetchUser }) {
  useEffect(() => {
    fetchUser(userId);
  }, []);

  if (!user) {
    return null;
  }

  return <div className="font-semibold text-gray-400">{user.name}</div>;
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find((user) => user.id === ownProps.userId),
});

export default connect(mapStateToProps, { fetchUser })(UserHeader);
