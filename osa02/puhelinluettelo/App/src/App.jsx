import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // Creates a filtered list
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  // Handles adding a new name to the array
  const addName = (e) => {
    e.preventDefault()
    // Check if the name exists already
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  // Handles changes for input value
  const handleNameChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    console.log(e.target.value)
    setNewNumber(e.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input
          type="text"
          placeholder="search"
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {filteredPersons.map(person =>
            <li key={person.name}>{person.name} {person.number}</li>
          )}
        </ul>
    </div>
  )

}

export default App