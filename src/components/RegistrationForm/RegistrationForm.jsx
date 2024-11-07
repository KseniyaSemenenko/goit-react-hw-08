import { ErrorMessage, Field, Formik, Form } from 'formik';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (event, actions) => {
    dispatch(register(event));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form className={css.formRegistration}>
        <label className={css.textRegistration}>Username</label>
        <Field
          className={css.inputRegistration}
          type="text"
          name="name"
        ></Field>
        <ErrorMessage name="name" component="span" />
        <label className={css.textRegistration}>Email</label>
        <Field
          className={css.inputRegistration}
          type="email"
          name="email"
        ></Field>
        <ErrorMessage name="email" component="span" />
        <label className={css.textRegistration}>Password</label>
        <Field
          className={css.inputRegistration}
          type="password"
          name="password"
        ></Field>
        <ErrorMessage name="password" component="span" />
        <button className={css.btnRegistration} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
