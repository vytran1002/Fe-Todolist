import "./App.css";
import BoxColor from "./components/BoxColor";
import Counter from "./components/Counter";
import { Link, NavLink, Routes, Route } from "react-router-dom";
import TodoFeature from "./features/Todo/components/pages";

function App() {
  return (
    <div className="App">
      {/* <TodoFeature /> */}
      Home Page
      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/boxcolor">BoxColor</Link>
      </p>
      <p>
        <Link to="/counter">Counter</Link>
      </p>
      <hr></hr>
      <nav>
        <p>
          <NavLink to="/todos" activeClassName="active-menu">
            Todos
          </NavLink>
        </p>
        <p>
          <NavLink to="/boxcolor" activeClassName="active">
            BoxColor
          </NavLink>
        </p>
      </nav>
      <Link to="/todos">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
        {/* <Route path="*" element={<Navigate replace to="/counter" />} /> */}
        <Route
          path="/post-list/:postId"
          element={<Navigate replace to="/posts/:postId" exact />}
        />
        <Route path="/" element={<TodoFeature />} />
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/boxcolor" element={<BoxColor />} />
        <Route path="/counter" element={<Counter />} />
        {/* <Route path="/:id" children={<Child />} /> */}
      </Routes>
    </div>
  );
}

export default App;
