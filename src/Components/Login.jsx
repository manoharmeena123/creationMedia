import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import { useFormik } from "formik"; // Import Formik for form validation
import * as Yup from "yup"; // Import Yup for schema validation
import profile from "../Assets/profile-img.png";
import Spinner from "../utils/Spinner";
import { toast } from "react-toastify";

const Login = () => {
  const [session, setSession] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false); // State to manage spinner visibility

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Initialize Formik useFormik hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setShowSpinner(true); // Show spinner on form submission
      setTimeout(() => {
        setShowSpinner(false); // Hide spinner after 2 seconds
        console.log("Form submitted with values:", values);
        setSession(true);
        toast.error('Session Timeout ,please login again!');
    }, 2000);
    resetForm();
    },
  });

  const handleInputChange = () => {
    // Reset session when user starts typing
    setSession(false);
  };

  return (
    <React.Fragment>
      {/* Show spinner if showSpinner is true */}
      {showSpinner ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Spinner />
        </Box>
      ) : (
        <div className="account-pages my-5 pt-sm-5">
          <Container sx={{ mt: 10 }}>
            <Grid container justifyContent="center">
              <Grid item xs={12} md={8} lg={6} xl={5} bgcolor="#fe9e0d">
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="h5" color="primary">
                          Welcome Back
                        </Typography>
                        <Typography paragraph>
                          Login into Creation Media.
                        </Typography>
                      </Grid>
                      {session && (
                        <Grid item xs={12}>
                          <Typography
                            variant="h6"
                            color="crimson"
                            sx={{ textAlign: "center" }}
                          >
                            Session timeout, please login again
                          </Typography>
                        </Grid>
                      )}
                      <Grid item xs={12}>
                        <Avatar
                          alt="Logo"
                          src={profile}
                          sx={{ width: 200, height: 100, mx: "auto", my: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <form onSubmit={formik.handleSubmit}>
                          <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formik.values.email}
                            onChange={(e) => {
                              formik.handleChange(e);
                              handleInputChange();
                            }}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.email &&
                              Boolean(formik.errors.email)
                            }
                            helperText={
                              formik.touched.email && formik.errors.email
                            }
                          />
                          <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            value={formik.values.password}
                            onChange={(e) => {
                              formik.handleChange(e);
                              handleInputChange();
                            }}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.password &&
                              Boolean(formik.errors.password)
                            }
                            helperText={
                              formik.touched.password && formik.errors.password
                            }
                            sx={{ mt: 2 }}
                          />
                          <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                            sx={{ mt: 2 }}
                          >
                            Log In
                          </Button>
                        </form>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          align="center"
                          variant="body2"
                          color="textSecondary"
                        >
                          <Link to="#" >
                            Forgot your password?
                          </Link>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          align="center"
                          variant="body2"
                          color="textSecondary"
                        >
                          <Link to="/" >
                         Back to home page
                          </Link>
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
      )}
    </React.Fragment>
  );
};

export default Login;
