import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styled, { css } from 'styled-components'
import styles from './CourseInput.module.css'
// import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    ${props => props.invalid && css`
      color: red
    `}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;

    ${props => props.invalid && css`
      background-color : #f18387
    `}
  }

  & input:focus {
    outline: none;
    border-color: #8b005d;
  }
`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0)
      setIsValid(true)

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
      setIsValid(false)
      return
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/**
       * This way we can add conditional style and classes to the html syntax
       
      <div className={`form-control ${!isValid && 'inValid'}`} style={{color: !isValid ? 'red' : ''}}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      
      END */ }

      {/**
       * This way we can use CSS module styles with conditonal statements
       */}
      
      <div className={styles['form-control'] + `${!isValid && ' '+styles.inValid}`} > {/** styles.className  or style['className']*/}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>

      {/** END */}

      {/**
       * In Here we are using Styled Component package to manage in component styling
       */}

      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>

      {/** END */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
