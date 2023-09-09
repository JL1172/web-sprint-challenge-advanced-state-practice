import React from 'react'
import { connect } from 'react-redux'
import { fetchQuiz, selectAnswer } from '../state/action-creators'

function Quiz(props) {
  console.log(props.quizState)
  return (
    <div id="wrapper">
      {

        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quizState ? (
          <>
            <h2>{props.quizState.question}</h2>

            <div id="quizAnswers">
              {/* <div className={props.selectedAnswerState ? "answer selected" : "answer"}>
                A function
                <button onClick={()=> props.selectAnswer(true)}>
                {props.selectedAnswerState ? "SELECTED" : "select"}
                </button>
              </div>

              <div className={!props.selectedAnswerState ? "answer selected" : "answer"}>
                An elephant
                <button onClick={()=> props.selectAnswer(false)}>
                {!props.selectedAnswerState ? "SELECTED" : "select"}
                </button>
              </div> */}
              {props.quizState.answers.map(n => {
                return <div className={props.selectedAnswerState ? "answer selected" : "answer"}
                  key={n.answer_id}>{n.text}
                  <button onClick={() => props.selectAnswer(n.answer_id)}>
                    {props.selectedAnswerState ? "SELECTED" : "select"}
                  </button>
                </div>
              })}
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : <div>
          {props.fetchQuiz()}
          Loading next quiz...
        </div>
      }
    </div>
  )
}
const mapStateToProps = state => {
  return {
    selectedAnswerState: state.selectedAnswer,
    quizState: state.quiz,
  }
}

export default connect(mapStateToProps, { selectAnswer, fetchQuiz })(Quiz)