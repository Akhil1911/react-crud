import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getAllLists } from "../Store/Thunk/thunk";
import {
  Card,
  Typography,
  CardContent,
  Grid,
  CardActions,
  Stack
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { showToast } from "./ShowToast";
import { clearHomeTodo } from "../Store/Thunk/todoList";
import { Link } from "react-router-dom";


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLists());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
      .unwrap()
      .then((res) => {
        if(res.dltTodo === "confirm"){
           dispatch(getAllLists())
        showToast("ERROR", "Todo Deleted Successfully")
        } else {
          ////
        }
        // dispatch(getAllLists())
        // showToast("ERROR", "Todo Deleted Successfully")
    })
  }

  useEffect(() => {
    return () => {
      dispatch(clearHomeTodo());
    }
  },[])

  const todoLists = useSelector((state) => state.todos.lists);
  console.log(todoLists);

  return (
    <>
      {todoLists ? (
        <Grid
          container
          direction={{
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          }}
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
          marginTop={5}
        >
          {todoLists.map((val) => {
            return (
              <Grid item xl={3} lg={3} sm={6} xs={12} key={val.id}>
                <Card
                  sx={{
                    maxWidth: 300,
                    minWidth: 300,
                    maxHeight: 300,
                    minHeight: 300,
                    backgroundColor: "#254061",
                    mb: 10,
                  }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      fontWeight={"bold"}
                      sx={{ wordWrap: "break-word" }}
                    >
                      Title: {val.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ wordWrap: "break-word" }}
                    >
                      Description: {val.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Typography variant="h6" color="text.secondary" m={"auto"}>
                      Date: {val.date}
                    </Typography>
                  </CardActions>{" "}
                  <br />
                  <Stack direction="row" justifyContent={"space-evenly"}>
                    <Link to={`/update/${val.id}`}>
                      <EditIcon
                        fontSize="large"
                        sx={{ cursor: "pointer", color: "black" }}
                      />
                    </Link>
                    <DeleteIcon
                      color="error"
                      fontSize="large"
                      onClick={() => handleDelete(val.id)}
                      sx={{ cursor: "pointer" }}
                    />
                  </Stack>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      ) : null}
    </>
  );
};

export default Home;
