import { Button, Grid, FormControl, FormHelperText, Snackbar, Alert, OutlinedInput } from "@mui/material"
import { Formik } from "formik";
import { object, string } from 'yup';
import { useState, useEffect } from "react";
import "./home.css";

function UserForm() {

    const [status, setStatus] = useState("info");
    const [message, setMessage] = useState("Please submit your details");
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    const validationSchema = object().shape({
        email: string().label('Email').required().email(),
        userName: string().label('Name').required(),
    });
    const handleSubmit = (_values) => {
        console.log("Submitted.........", _values);
        setIsLoading(true);
        fetch(`https://my.api.mockaroo.com/Openauto_User/${_values['userName']}/${_values['email'].replace(".com", "")}?key=b1d91540&__method=POST`, {
            method: 'POST'
        })
            .then(res => {
                setIsLoading(false);
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Something went wrong');
            })
            .then(data => {
                console.log(data['first_name']);
                setStatus("success");
                setMessage("Details saved successfully");
                setOpenSnackbar(true);
            })
            .catch(err => {
                console.log(err);
                setStatus("error");
                setMessage("Something went wrong");
                setOpenSnackbar(true);
            });

    }
    return (
        <>
            <Formik
                initialValues={{ userName: '', email: '', }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit }) => (
                    <form
                        noValidate
                        onSubmit={evt => {
                            evt.preventDefault();
                            handleSubmit(values);
                        }}
                    >
                        <Grid container direction="column" >
                            <FormControl
                                fullWidth
                                focused={false}
                                error={errors.userName && touched.userName}
                            >
                                <OutlinedInput
                                    required
                                    name="userName"
                                    placeholder="Enter Your Name"
                                    value={values.userName}
                                    className="input-fields"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <FormHelperText style={{ paddingLeft: '8px' }}>
                                    {errors.userName && touched.userName
                                        ? errors.userName
                                        : ' '}
                                </FormHelperText>
                            </FormControl>
                            <FormControl
                                fullWidth
                                focused={false}
                                error={errors.email && touched.email}
                            >
                                <OutlinedInput
                                    required
                                    name="email"
                                    placeholder="Enter Your Email"
                                    type="email"
                                    value={values.email}
                                    className="input-fields"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <FormHelperText style={{ paddingLeft: '8px' }}>
                                    {errors.email && touched.email ? errors.email : ' '}
                                </FormHelperText>
                            </FormControl>
                            {isLoading ? <Button
                                className="submit"
                                variant="outlined"
                            >
                                <div className="loader"></div>Saving
                            </Button> : <Button className="submit" type="submit" variant="outlined" disabled={!!(errors.email || errors.userName)}>
                                Submit
                            </Button>}
                        </Grid>
                    </form>)}
            </Formik>
            <Snackbar
                anchorOrigin={{ horizontal: "right", vertical: "top" }}
                open={openSnackbar}
                autoHideDuration={1000}
            >
                <Alert onClose={() => { setOpenSnackbar(false) }} severity={status} >
                    {message}
                </Alert>
            </Snackbar>
        </>
    )

}

export default UserForm;