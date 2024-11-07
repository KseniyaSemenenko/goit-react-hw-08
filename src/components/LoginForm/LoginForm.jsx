import { ErrorMessage, Field, Formik, Form } from 'formik';
import css from './LoginForm.module.css';

export default function LoginForm() {
  return (
    <Formik initialValues={{ email: '', password: '' }}>
      <Form className={css.formLogin}>
        <label className={css.textLogin}>Email</label>
        <Field className={css.inputLogin} type="email" name="email"></Field>
        <ErrorMessage name="email" component="span" />
        <label className={css.textLogin}>Password</label>
        <Field
          className={css.inputLogin}
          type="password"
          name="password"
        ></Field>
        <ErrorMessage name="password" component="span" />
        <button className={css.btnLogin} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}
