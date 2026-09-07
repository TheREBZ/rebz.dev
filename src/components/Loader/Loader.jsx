import "../../styles/Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-content">

        <h1 className="loader-logo">
          [REBZ]
        </h1>

        <p className="loader-quote">
          Building interfaces that feel as good as they look.
        </p>

        <p className="loader-message">
          Welcome. Taking you to my work...
        </p>

        <div className="loader-track">
          <span className="loader-progress"></span>
        </div>

      </div>
    </div>
  );
};

export default Loader;