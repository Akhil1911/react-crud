import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = "http://localhost:3001";

export const getAllLists = createAsyncThunk("todos/getAllLists", async () => {
  try {
    const res = await axios.get(`${URL}/lists`);
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const addTodo = createAsyncThunk("todos/addTodo", async (data) => {
  console.log(data)
  try {
    const res = await axios.post(
     `${URL}/lists`, 
      data = {
        title: data.title,
        description: data.description,
        date: new Date().toLocaleDateString()
      },
    );
    return res.status;
  } catch (err) {
    throw err;
  }
});

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id) => {
    try {
      const confirm = window.confirm("Are you sure you want to delete This todo?");
      if (confirm) {
        const res = await axios.delete(`${URL}/lists/${id}`);
        return {dltTodo:"confirm"}
      } else {
        return { dltTodo: "cancel" };
      }
    } catch (err) {
      throw err;
    }
  }
)

export const getSingleTodo = createAsyncThunk(
  "todos/getSingleTodo",
  async (id) => {
    try {
      const res = await axios.get(`${URL}/lists/${id}`)
      // console.log(res.data)
      return res.data
    } catch (err) {
      throw err;
    }
  }
)

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (data) => {
    try {
      const res2 = await axios.put(`${URL}/lists/${data.id}`, data)
      return true;

    } catch (err) {
      throw err;
    }
  }
)
