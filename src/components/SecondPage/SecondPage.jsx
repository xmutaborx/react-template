import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

const SecondPage = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="container">
      <h1>Second page</h1>
      <p className="alert alert-warning">TODO: cssTransition</p>
      <Link to="/">Back to Main page</Link>

      <CSSTransition
        classNames="message"
        timeout={500}
        in={isVisible}
        onEnter={() => console.log(`Enter`)}
        onExited={() => console.log(`Exit`)}
      >
        <p className="alert alert-secondary">This is test message for CSSTransition</p>
      </CSSTransition>

      {!isVisible ?
        <button
          className="btn btn-primary"
          onClick={() => setVisible(true)}
        >SHOW</button> :
        <button
          className="btn btn-primary"
          onClick={() => setVisible(false)}
        >HIDE</button>
      }

    </div>
  )
};

export default SecondPage;
