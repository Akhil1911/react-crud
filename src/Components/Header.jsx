import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box>
      <AppBar position="static" style={{ backgroundColor: "#254061" }}>
        <Toolbar>
          <Typography
            as={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "white",
              letterSpacing: "0.3rem",
              fontSize: "larger",
              fontWeight: "bolder",
            }}
          >
            TODO
          </Typography>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button sx={{ mr: 2, color: "white" }}>Home</Button>
          </Link>
          <Link
            to="/addTodo"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button sx={{ color: "white" }}>Add Todo</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
