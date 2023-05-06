import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Card.module.css';

function Card(props) {
    return (
        <div title={props.title}>
            <CSSTransition 
                in={props.onTransition}
                timeout={200} 
                classNames={{
                    enter: styles.beforeSlideIn,
                    enterActive: styles.slideIn,
                    exit: styles.beforeSlideOut,
                    exitActive: styles.slideOut
                }}
                mountOnEnter
                unmountOnExit
            >
                <div className={styles.card}>
                    {props.children}
                </div>
            </CSSTransition>
        </div>
    );
}

export default Card;