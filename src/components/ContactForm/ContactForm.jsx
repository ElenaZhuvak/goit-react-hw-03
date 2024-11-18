import { Formik, Form, Field } from 'formik'
import { useId } from 'react'
import * as Yup from 'yup'

import css from './ContactForm.module.css'

const ContactForm = ({onAdd}) => {
  const initialValues = {
  username: '',
  number: ''
}

  const usernameId = useId()
  const telId = useId()

  const handleSubmit = (values, actions) => {
    onAdd({

    })
    console.log(values)
    actions.resetForm()
  }

  const contactsSchema = Yup.object().shape({
    username: Yup.string().min(2, 'Too short').max(20, 'Too long').required('Required')
    number: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format')
    .required('Phone number is required'),
  })

  return (
    <div className={css.wrapper}>
      <Formik validationSchema={contactsSchema} initialValues={initialValues} onSubmit={handleSubmit}>
  
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