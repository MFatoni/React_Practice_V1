import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import App from "./components/home/App";
import Contact from "./components/page/Contact";

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/halaman-kontak">Kontak</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={App} />
      <Route path="/halaman-kontak" component={Contact} />
    </div>
  </Router>
);
export default AppRouter;
