import React from 'react'
import { connect } from 'react-redux'
import { inputChange, postQuiz } from '../state/action-creators'


export function Form(props) {
  const onChange = evt => {
    const {name , value} = evt.target;
      props.inputChange(name,value)
  }

  const onSubmit = evt => {
      evt.preventDefault(); 
      const quizObj = {
        question_text : props.formData.newQuestion,
        true_answer_text : props.formData.newTrueAnswer,
        false_answer_text : props.formData.newFalseAnswer,
      }
      props.postQuiz(quizObj)
  }
  const condition = props.formData.newQuestion.trim().length > 0 &&
  props.formData.newTrueAnswer.trim().length > 0 && 
  props.formData.newFalseAnswer.trim().length > 0 ? false : true; 

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={(evt)=> onChange(evt)} value = {props.formData.newQuestion}
       id="newQuestion" name = "newQuestion"
       placeholder="Enter question" />

      <input maxLength={50} onChange={(evt)=> onChange(evt)} value = {props.formData.newTrueAnswer}
       id="newTrueAnswer" name = "newTrueAnswer"
       placeholder="Enter true answer" />

      <input maxLength={50} onChange={(evt)=> onChange(evt)} value = {props.formData.newFalseAnswer}
       id="newFalseAnswer" name = "newFalseAnswer"
       placeholder="Enter false answer" />

      <button id="submitNewQuizBtn" disabled = {condition}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    formData : state.form,
  }
}

export default connect(mapStateToProps,{inputChange, postQuiz})(Form)
