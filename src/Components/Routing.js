import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import UpdateTodo from './UpdateTodo'
import AddTodo from './AddTodo'
import Error404 from './Error404'
import Header from './Header'
const Routing = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path={"/"} element={<Home />} ></Route>
        <Route exact path={"/update/:id"} element={<UpdateTodo />} ></Route>
        <Route exact path={"/addTodo"} element={<AddTodo/>} />
        <Route exact path={"*"} element={<Error404/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Routing