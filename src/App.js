import "./App.css";

function App() {
  return (
    <div className="mt-3 navbar navbar-light bg-light">
      <div className="container-fluid justify-content-evenly">
        <a href="#" className="navbar-brand">
          <img
            src="https://i0.wp.com/unaaldia.hispasec.com/wp-content/uploads/2021/04/github.png?fit=1150%2C465&ssl=1"
            className="logo img-thumbnail rounded-pill "
          />
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item text-uppercase text-primary fw-bold fs-2">Github</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
