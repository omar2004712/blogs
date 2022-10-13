import '../styles/index.css';
import React from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line no-shadow, react/prop-types
function UserHeader({ user }) {
  if (!user) {
    return null;
  }

  return <div className="font-semibold text-gray-400">{user.name}</div>;
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find((user) => user.id === ownProps.userId),
});

export default connect(mapStateToProps)(UserHeader);
