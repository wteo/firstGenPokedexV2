import React from 'react';

import styles from './Data.module.css';
import Card from '../../UI/Card';

function Data(props) {

  const typeOne = <p className={styles.type}>Type(s): {props.type1}</p>;
  const typeOneAndTwo = <p className={styles.type}>Type(s): {props.type1} / {props.type2}</p>;

  return (
    <Card onTransition={props.onTransition} title='data'>
      {props.type2 === undefined ? typeOne : typeOneAndTwo }
      <p>Height: {`${(props.height / 10).toFixed(1)}`} M</p>
      <p>Weight: {`${(props.weight / 10).toFixed(1)}`} Kg</p>
    </Card>
  );
}

export default Data;