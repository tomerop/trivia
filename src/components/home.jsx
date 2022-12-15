import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <div style={{ height: 100 + "%" }}>
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1>Welcome!</h1>
        <br />
        <button
          type="button"
          className="btn btn-primary ms-4"
          onClick={() => {
            window.location = "/question";
          }}
        >
          Start Playing
        </button>
      </div>
    </div>
  );
};

export default Home;
