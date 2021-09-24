import { clickButton } from '../Redux/Actions/editButton'
import { editName } from '../Redux/Actions/editName'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const EditButton = () => {
  const dispatch = useDispatch()
  const [firstNameToUpdate, lastNameToUpdate] = useSelector(state => [
    state.firstName,
    state.lastName
  ])

  const [firstName, setUpdateFirstName] = useState(null)
  const [lastName, setUpdateLastName] = useState(null)

  const handleFirstName = e => setUpdateFirstName(e.target.value)
  const lastNameEvent = e => setUpdateLastName(e.target.value)

  const cancelButton = () => dispatch(clickButton(false))

  const submitEdit = e => {
    e.preventDefault()
    dispatch(editName(firstName, lastName))
    dispatch(clickButton(false))
  }

  return (
    <form className='edit-form'>
      <div className='edit-input'>
        <input
          type='text'
          name='firstname'
          id='firstname'
          className='edit-input-handler'
          onChange={handleFirstName}
          placeholder={firstNameToUpdate}
        />
        <input
          type='text'
          name='lastname'
          id='lastname'
          className='edit-input-handler'
          onChange={lastNameEvent}
          placeholder={lastNameToUpdate}
        />
      </div>
      <div className='edit-button-container'>
        <button
          className='edit-button-change'
          type='submit'
          value='Submit'
          onClick={submitEdit}
        >
          Save
        </button>
        <button className='edit-button-change' onClick={cancelButton}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default EditButton
