import React, { useEffect } from "react";
import { ErrorMessage, Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Button, Container, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo, getAllLists } from "../Store/Thunk/thunk";
import { showToast } from "./ShowToast";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Formik
          initialValues={{
            title: "",
            description: "",
          }}
          validationSchema={Yup.object({
            title: Yup.string("Enter Valid Data")
              .max(20, "Title is too long")
              .required("Title is required"),
            description: Yup.string("Enter Valid Data")
              .max(30, "Entered Data is too long")
              .required("Description is required"),
          })}
          onSubmit={(values) => {
            dispatch(addTodo(values))
              .unwrap()
              .then((res) => {
                if (res === 201) {
                  showToast("SUCCESS", " 😎 List Added successfully");
                  navigate("/");
                }
              })
              .catch((err) =>
                showToast("ERROR", " 🚫 ERROR! Please Try Again...")
              );
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit} style={{ marginTop: "3rem" }}>
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
                Add To List
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default AddTodo;
