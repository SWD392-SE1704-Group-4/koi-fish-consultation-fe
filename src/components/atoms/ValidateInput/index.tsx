import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';

const validationSchema = yup.object({
  inputField: yup
    .string()
    .required('This field is required')
    .min(3, 'Must be at least 3 characters')
    .max(20, 'Must be 20 characters or less'),
});

function ValidatedInput() {
  const formik = useFormik({
    initialValues: {
      inputField: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        id="inputField"
        name="inputField"
        placeholder="Type in here…"
        value={formik.values.inputField}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.inputField && Boolean(formik.errors.inputField)}
      />
      {formik.touched.inputField && formik.errors.inputField ? (
        <Typography color="danger">{formik.errors.inputField}</Typography>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ValidatedInput;
