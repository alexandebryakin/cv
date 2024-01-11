import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/cv">
      <div>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<>TODO: Home Page</>} />
        <Route path="/about" element={<>TODO: other route</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
