import React from "react";
import { BrowserRouter as Rohmad, Route, Link } from "react-router-dom";
import App from "./components/home/App";
import Contact from "./components/page/Contact"

const AppRouter = () => (
  <Rohmad>
    <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link style={
                { color:"yellow",
                  backgroundColor:"green"
                }
              } to="halaman-kontak">Kontak</Link>
            </li>
          </ul>
      </nav>
        <Route path= "/" exact component= {App} />
        <Route path= "/halaman-kontak" component = {Contact} />
    </div>
  </Rohmad>
);

export default AppRouter;
