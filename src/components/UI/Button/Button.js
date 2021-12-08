import React from 'react';

// 7. We're using Modules in our dynamic styling which requires us to use the
//    following syntax update, then update the CSS's file name to: Button.module.css.
//    This turns each className into a callable property scoped to this Component.
import styles from './Button.module.css';

// 8. Update the className to call the button property.
// Do the Same to CourseInput.
const Button = props => {
  return (
    <button type={props.type} className={ styles.button } onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
