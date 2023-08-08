import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "./layouts";
import Home from "./pages/home/Home";

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
