/*
// Form Component that allows a user to submit Goal values.
 */
import React, { useState } from 'react';

import Button from '../../UI/Button/Button';

// 9. Convert this to the module syntax and update the CSS filename.
import styles from './CourseInput.module.css';

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');

    // 4. We want to display feedback if user input is NOT valid, therefore
    //    we need to track CourseInput's state of validity.
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = event => {
        // 5b. Valid entries set the isValid state to true.
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        // 3. Break out if the submission is empty BEFORE adding the new Goal.
        // Now that the user can't submit an empty Goal, we need to give them feedback.
        if (enteredValue.trim().length === 0) {
            // 5a. Invalid entries set the isValid state to false.
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };

    // 6. Add the dynamic 'invalid' className. Now go to Button.js.
    // 10. Update className to Module syntax. Since an object can't have dashed
    //     property names, we can use the name as a string key. Then we add logic
    //     to only add the invalid property is isValid = false.
    return (
        <form onSubmit={formSubmitHandler}>
            <div
                className={`${styles['form-control']} ${!isValid && styles.invalid}`}
            >
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
