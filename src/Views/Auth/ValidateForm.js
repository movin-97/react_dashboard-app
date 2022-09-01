import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yap from "yup";
import React from "react";

const myValidateForm = yap.object().shape({
  name: yap.string().min(4).max(16).required("UserName is Required"),
  password: yap.string().min(8).required("Password is Required"),
  confirmPassword: yap
    .string()
    .oneOf([yap.ref("password"), null])
    .min(8)
    .required("Confirm Password is Required"),
});

const ValidateForm = () => {
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6 mt-5 p-5 bg-dark text-white rounded">
        <Formik
          initialValues={{
            name: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={myValidateForm}
          onSubmit={(values) => console.log(values)}
        >
          {(formikProps) => {
            const { values, errors, touched } = formikProps;
            return (
              <Form>
                <div className="mt-3">
                  <label htmlFor="username" className="form-label">
                    User Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="username"
                    placeholder="User Name"
                    className={`${errors.name && touched.name ? "form-control  border-danger " : ""}form-control`}
                  />
                  <ErrorMessage
                    component={"div"}
                    name="name"
                    className="text-danger"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className={`${errors.password && touched.password ? "form-control  border-danger " : ""}form-control`}
                  />
                  <ErrorMessage
                    component={"div"}
                    name="password"
                    className="text-danger"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    className={`${errors.confirmPassword && touched.confirmPassword ? "form-control  border-danger " : ""}form-control`}
                  />
                  <ErrorMessage
                    component={"div"}
                    name="confirmPassword"
                    className="text-danger"
                  />
                </div>
                <div className="mt-3 d-flex justify-content-between">
                  <button type="submit" className="btn btn-success mr-5">
                    Submit
                  </button>
                  <button type="reset" className="btn btn-danger">
                    Clear
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      <div className="col-3"></div>
    </div>
  );
};

export default ValidateForm;
