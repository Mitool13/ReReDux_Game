import PropTypes from 'prop-types';
import React from 'react';

function App({ message }) {
  return (
    <div className='App'>
      <h1>{message}</h1>
    </div>
  );
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;

