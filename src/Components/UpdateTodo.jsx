import React, { useState, useEffect } from "react";
import { ErrorMessage, Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Button, Container, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  getSingleTodo,
  updateTodo,
} from "../Store/Thunk/thunk";
import { showToast } from "./ShowToast";
import { useNavigate, useParams } from "react-router-dom";
import { clearHomeTodo } from "../Store/Thunk/todoList";

const UpdateTodo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setupdateData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    // alert(id)
    dispatch(getSingleTodo(id))
      .unwrap()
      .then((res) => setupdateData(res))
      .catch((err) => navigate("/"));
    
    return () => {
      dispatch(clearHomeTodo());
    }
    
  }, []);




  return (
    <>
      <Container>
        {updateData.title != "" ? (
          <Formik
            initialValues={updateData}
            validationSchema={Yup.object({
              title: Yup.string("Enter Valid Data")
                .max(20, "Title is too long")
                .required("Title is required"),
              description: Yup.string("Enter Valid Data")
                .max(30, "Entered Data is too long")
                .required("Description is required"),
            })}
            onSubmit={(values) => {
              if (updateData === values) {
                showToast("ERROR", "Please Update Something...");
              } else {
                dispatch(updateTodo(values))
                  .unwrap()
                  .then((res) => {
                    navigate("/");
                    showToast("SUCCESS", "Updated Successfully");
                  });
              }
            }}
          >
            {(formik) => (
              <Form
                onSubmit={formik.handleSubmit}
                style={{ marginTop: "3rem" }}
              >
                <Field
                  as={TextField}
                  label="Title"
                  variant="standard"
                  name="title"
                  fullWidth
                  helperText={<ErrorMessage name="title" />}
                  sx={{ mb: 1 }}
                />
                <Field
                  as={TextField}
                  label="Description"
                  variant="standard"
                  name="description"
                  fullWidth
                  helperText={<ErrorMessage name="description" />}
                  sx={{ mb: 1 }}
                />
                <Button sx={{ mt: 3 }} variant="contained" type="submit">
                  Update List
                </Button>
              </Form>
            )}
          </Formik>
        ) : null}
      </Container>
    </>
  );
};

export default UpdateTodo;
