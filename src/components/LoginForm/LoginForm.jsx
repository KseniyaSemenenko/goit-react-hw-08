import { ErrorMessage, Field, Formik, Form } from 'formik';

export default function LoginForm() {
  return (
    <Formik initialValues={{ email: '', password: '' }}>
      <Form>
        <label>Email</label>
        <Field type="email" name="email"></Field>
        <ErrorMessage name="email" component="span" />
        <label>Password</label>
        <Field type="password" name="password"></Field>
        <ErrorMessage name="password" component="span" />
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
