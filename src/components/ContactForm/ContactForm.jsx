import { Formik, Form, Field } from 'formik'
import { useId } from 'react'
import css from './ContactForm.module.css'

const ContactForm = () => {
  const initialValues = {
  username: '',
  number: ''
}

  const usernameId = useId()
  const telId = useId()

  const handleSubmit = (values, action) => {
    console.log(values)
    action.reset()
  }

  return (
    <div className={css.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
  
        <Form className={css.form}>
          <label className={css.label} htmlFor={usernameId}>Name</label>
          <Field className={css.field} type='text' name='username'></Field>
  
          <label className={css.label} htmlFor={telId}>Number</label>
          <Field className={css.field} type='tel' name='number'></Field>
          
          <button className={css.btn} type='submit'>Add contact</button>
        </Form>
      </Formik>
    </div>
  )
}

export default ContactForm