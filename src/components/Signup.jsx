import styled from "@emotion/styled";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  TextField,
  Typography,
  capitalize,
} from "@mui/material";
import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";

const Signup = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "9%",
          paddingBottom: "10%",
        }}
      >
        <Box
          sx={{
            width: "404px",
            height: "638px",
            marginTop:"10%",
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "262px",
              height: "52px",
              marginBottom: "52px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <Typography variant="h5" sx={{fontWeight:"bold"}}>Get Started Now</Typography>
          </Box>
          <Box>
            <label htmlFor="Label">
              <b>Name</b>
            </label>
            <br />
            <TextField
              placeholder="Enter your name"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                style: {
                  borderRadius: "10px",
                  minWidth: "404px",
                  height: "32px",
                  marginTop: "5px",
                },
              }}
            />
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <label htmlFor="Label">
              <b>Email address</b>
            </label>
            <br />
            <TextField
              placeholder="Enter your email"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                style: {
                  borderRadius: "10px",
                  minWidth: "404px",
                  height: "32px",
                  marginTop: "5px",
                },
              }}
            />
          </Box>
          <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
            <label htmlFor="Label">
              <b>Password</b>
            </label>
            <br />
            <TextField
              placeholder="Name"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                style: {
                  borderRadius: "10px",
                  minWidth: "404px",
                  height: "32px",
                  marginTop: "5px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center", // Align items vertically center
              marginBottom: "20px",
              marginLeft: "-10px",
            }}
          >
            <Checkbox />
            <Typography>
              I agree to the{" "}
              <a href="" style={{ color: "#000000" }}>
                terms & policy
              </a>
            </Typography>
          </Box>

          <Box>
            <Button
              sx={{
                borderRadius: "10px",
                backgroundColor: "#3A5B22",
                color: "white",
                minWidth: "100%",
                textTransform: "capitalize"
              }}
            >
              <b>{capitalize("Signup")}</b>
            </Button>
          </Box>

          <Box sx={{ marginTop: "15%", marginBottom: "15%",fontSize:"15px" }}>
            <Divider>Or</Divider>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "190px", height: "32px" }}>
              <Button
                startIcon={<GoogleIcon />}
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "none",
                  color: "black",
                  fontSize: "12px",
                  border: "1px solid lightgrey",
                }}
              >
                Sign in with Google
              </Button>
            </Box>

            <Box sx={{ width: "190px", height: "32px" }}>
              <Button
                startIcon={<AppleIcon />}
                sx={{
                  borderRadius: "10px",
                  color: "black",
                  backgroundColor: "none",
                  fontSize: "12px",
                  border: "1px solid lightgrey",
                }}
              >
                Sign in with Apple
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: "404px",
              marginBottom: "20px", // Add some space between the "Get Started Now" box and the "Have an Account? Sign In" box
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
              }}
            >
              <p>
                <b>
                  Have an account?{" "}
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#0F3DDE" }}
                  >
                    Sign In
                  </a>
                </b>
              </p>
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Signup;
