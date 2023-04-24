import { useFormik } from "formik";
import basicSchema from "../schemas";

const BasicForm = () => {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
       value={values.email}
       onChange={handleChange}
       onBlur={handleBlur}
       id="email" 
       type="email" 
       placeholder="Enter your email" />
       <label htmlFor="age">Age</label>
      <input
       value={values.age}
       onChange={handleChange}
       onBlur={handleBlur}
       id="age" 
       type="number" 
       placeholder="Enter your age" />
       <label htmlFor="password">Password</label>
      <input
       value={values.password}
       onChange={handleChange}
       onBlur={handleBlur}
       id="password" 
       type="password" 
       placeholder="Enter your password" />
       <label htmlFor="confirmPassword">Confirm Password</label>
      <input
       value={values.confirmPassword}
       onChange={handleChange}
       onBlur={handleBlur}
       id="confirmPassword" 
       type="password" 
       placeholder="Confirm password" />
       <button type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;
