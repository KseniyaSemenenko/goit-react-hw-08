import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { AddContactSchema } from '../../utils/schemas';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const finalContact = {
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(finalContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={AddContactSchema}
    >
      <Form className={css.formBlock}>
        <label className={css.formLabel}>Name</label>
        <Field className={css.formInput} type="text" name="name"></Field>
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="span"
        />
        <label className={css.formLabel}>Number</label>
        <Field className={css.formInput} type="text" name="number"></Field>
        <ErrorMessage
          className={css.errorMessage}
          name="number"
          component="span"
        />
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
