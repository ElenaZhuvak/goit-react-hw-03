import css from './Contact.module.css'

const Contact = ({data: {id, name, number}, onDelete}) => {
  return (
    <div className={css.item}>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={() => {onDelete(id)}}>Delete</button>
    </div>
  )
}

export default Contact