import css from './Contact.module.css'

const Contact = ({data: {id, name, number}, onDelete}) => {
  return (
    <div className={css.item}>
        <div className={css.itemInfo}>
          <p className={css.p}>{name}</p>
          <p className={css.p}>{number}</p>
        </div>
        <button onClick={() => {onDelete(id)}}>Delete</button>
    </div>
  )
}

export default Contact