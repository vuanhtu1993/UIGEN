import React from 'react'
import * as Yup from 'yup'
import { withFormik } from 'formik';

const MyForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    dirty,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" style={{ display: 'block' }}>Email</label>
      <input
        id="email"
        placeholder="Enter your email"
        type="text"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.email && touched.email ? (
            'text-input error'
          ) : (
            'text-input'
          )
        }
      />
      {errors.email && touched.email && (
        <div className="input-feedback">{errors.email}</div>
      )}

      <label htmlFor="password" style={{ display: 'block' }}>Password</label>
      <input
        id="password"
        placeholder="Enter your password"
        type="text"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.password && touched.password ? (
            'text-input error'
          ) : (
            'text-input'
          )
        }
      />
      {errors.password && touched.password && (
      <div className="input-feedback">{errors.password}</div>
    )}
      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>

      <DisplayFormikState {...props} />
    </form>
  );
};

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required("Email is required."),
    password: Yup.string()
      .min(2, "C'mon, your password is longer than that")
      .required('Password is required.'),
  }),
  mapPropsToValues: ({ form }) => ({ ...form }),
  handleSubmit: (payload, { setSubmitting }) => {
    alert(payload.email);
    setSubmitting(false)
  },
  displayName: 'MyForm',
});

export const MyEnhancedForm = formikEnhancer(MyForm);


const DisplayFormikState = props =>
  <div style={{ margin: '1rem 0' }}>
    <h3 style={{ fontFamily: 'monospace' }} />
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: 20,
        padding: '.5rem',
      }}
    >
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>;