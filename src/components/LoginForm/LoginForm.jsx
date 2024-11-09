import { ErrorMessage, Field, Formik, Form } from 'formik';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (user, actions) => {
    dispatch(login(user));
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
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
