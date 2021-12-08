/*
// Form Component that allows a user to submit Goal values.
 */
import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');

    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = event => {
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        // 3. Break out if the submission is empty BEFORE adding the new Goal.
        // Now that the user can't submit an empty Goal, we need to give them feedback.
        if (enteredValue.trim().length === 0) {
            return;
        }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
