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
      <div>
      <CSSTransition
        in={isVisible}
        timeout={200}
        classNames="message"
      >
        <p>This is test message for CSSTransition</p>
      </CSSTransition>
      <button onClick={() => setVisible(true)}>TRIGGER</button>
      </div>
    </div>
  )
};

export default SecondPage;
