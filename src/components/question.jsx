const Question = (props) => {
  const {
    currentQuestion,
    questions,
    handleAnswerButtonClick,
    handleGiveUp,
    hearts,
  } = props;
  return (
    <div className="container-fluid" style={{ height: 100 + "%" }}>
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="container-fluid mb-3">
          <button
            className="btn btn-danger position-absolute translate-middle"
            onClick={handleGiveUp}
          >
            give up
          </button>
          <br />
          <div style={{ fontFamily: "Martian Mono, monospace" }}>
            <span>Question {currentQuestion + 1} </span>/20
          </div>
          <br />
          <div style={{ fontFamily: "Kanit, sans-serif" }}>
            {questions[currentQuestion].questionText}
          </div>
        </div>
        <div>
          {questions[currentQuestion].answerOptions.map(
            (answerOption, index) => (
              <button
                className="btn btn-outline-primary ms-1 me-1 mb-3"
                key={index}
                onClick={(e) =>
                  handleAnswerButtonClick(e, answerOption.isCorrect)
                }
              >
                {answerOption.answerText}
              </button>
            )
          )}
          <div className="position-absolute top-25 start-50 translate-middle">
            {hearts.heart1 + hearts.heart2 + hearts.heart3}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
