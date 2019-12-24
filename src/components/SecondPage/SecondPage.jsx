import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import Navbar from '../Navbar/Navbar.jsx';


const SecondPage = () => {
    const [isVisible, setVisible] = useState(false);

    return (
        <main>
            <Navbar />
            <div className="container">
                <h1>Second page</h1>
                <p className="alert alert-warning">TODO: cssTransition</p>

                <CSSTransition
                    in={isVisible}
                    timeout={500}
                    classNames="message"
                    mountOnEnter
                    unmountOnExit
                >
                    <p className="alert alert-secondary">This is test message for CSSTransition</p>
                </CSSTransition>

                <button
                    className="btn btn-primary"
                    onClick={() => setVisible(!isVisible)}
                >
                    {isVisible ? `Hide` : `Show`}
                </button>

            </div>
        </main>
    )
};

export default SecondPage;
