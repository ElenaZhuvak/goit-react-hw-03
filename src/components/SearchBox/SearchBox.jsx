import { useState } from "react"

const SearchBox = () => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (evt) => {
    setInputValue(evt.target.value)
  }

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={inputValue} onChange={handleChange} />
    
    </div>
  )
}

export default SearchBox