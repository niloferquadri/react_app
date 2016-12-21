import React, { PropTypes } from 'react';

const User = (props) => {
  const user = props.user;
  return (
    <div>
      <h3>{user.name}</h3>
      <h5>{user.age}</h5>
      <div>{user.email}</div>
      <div>{user.job}</div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object
};

export default User;
