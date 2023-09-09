// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE } from './action-types'

const initialWheelState = 0
export const wheel = (state = initialWheelState, action) => {
  switch(action.type) {
    case(MOVE_CLOCKWISE) :
    if (action.payload === 5) {
      return(0)
    } else {
      return(action.payload + 1)
    }
    case(MOVE_COUNTERCLOCKWISE) : 
      if (action.payload === 0) {
        return(5)
      } else {
        return(action.payload - 1)
      } 
    default : 
      return(state); 
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
