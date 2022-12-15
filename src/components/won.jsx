const Won = (props) => {
  return (
    <div style={{ height: 100 + "%" }}>
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1>You Won!</h1>
        <br />
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              window.location = "/question";
            }}
          >
            Play Again
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              window.location = "/";
            }}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Won;
