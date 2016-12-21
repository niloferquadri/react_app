import React, { PropTypes } from 'react';

const App = (props) => {
  let containerStyle = {};
  containerStyle = {
    padding: '0'
  };
  return (
    <div className="container" style={containerStyle}>
      {props.children && React.cloneElement(props.children, {})}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
