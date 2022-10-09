import '../styles/index.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

// eslint-disable-next-line no-shadow, react/prop-types
function UserHeader({ userId, fetchUser }) {
  useEffect(() => {
    fetchUser(userId);
  }, []);

  return <div>User Header</div>;
}

export default connect(null, { fetchUser })(UserHeader);
