import React from 'react';
import './app.less';
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "../reducers/reposReducer";
import { BrowserRouter, Route, Routes, redirect } from 'react-router-dom'
import Main from "./main/Main";
import Card from "./card/card";
import NotFoundPage from "./notFound/notFoundPage";
import Error from "./error";


const App = () => {
  const dispatch =useDispatch();

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/card/:username/:reponame' element={<Card/>}/>
          <Route path='/error' element={<Error/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;