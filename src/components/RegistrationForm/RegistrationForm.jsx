import { ErrorMessage, Field, Formik, Form } from 'formik';

export default function RegistrationForm() {
  return (
    <Formik initialValues={{ name: '', email: '', password: '' }}>
      <Form>
        <label>Name</label>
        <Field type="text" name="name"></Field>
        <ErrorMessage name="name" component="span" />
        <label>Email</label>
        <Field type="email" name="email"></Field>
        <ErrorMessage name="email" component="span" />
        <label>Password</label>
        <Field type="password" name="password"></Field>
        <ErrorMessage name="password" component="span" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
