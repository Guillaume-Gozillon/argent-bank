import { updateName, updateButton } from '../Redux/Actions/loginAction'
import { BASE_URL } from '../utils'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'

const EditButton = ({ firstNameUpdate, lastNameUpdate }) => {
  const token = useSelector(state => state.token)
  const button = useSelector(state => state.showButton)
  const dispatch = useDispatch()

  const [handlefirstName, setHandlefirstName] = useState(null)
  const [handleLastName, setHandleLastName] = useState(null)
  const [cancelButton, setCancelButton] = useState(false)

  const data = { firstName: handlefirstName, lastName: handleLastName }
  //const [newFirstName, setNewFirstName] = useState(null)
  //const [newLastNameName, setNewLastNameName] = useState(null)

  const firstNameEvent = e => setHandlefirstName(e.target.value)
  const lastNameEvent = e => setHandleLastName(e.target.value)

  const showEditButton = () => setCancelButton(!button)

  useEffect(() => {
    dispatch(updateButton(cancelButton))
  }, [cancelButton])

  const submitEdit = e => {
    e.preventDefault()

    axios
      .put(`${BASE_URL}/profile`, data, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .catch(err => console.log(err))
    //.then(res => {
    //  setNewFirstName(res.data.body.firstName)
    //  setNewLastNameName(res)
    //})

    dispatch(updateName(handlefirstName, handleLastName))
  }

  return (
    <form className='edit-form'>
      <div className='edit-input'>
        <input
          type='text'
          name='firstname'
          id='firstname'
          className='edit-input-handler'
          onChange={firstNameEvent}
          placeholder={firstNameUpdate}
        />
        <input
          type='text'
          name='lastname'
          id='lastname'
          className='edit-input-handler'
          onChange={lastNameEvent}
          placeholder={lastNameUpdate}
        />
      </div>
      {button === true && (
        <div className='edit-button-container'>
          <button className='edit-button-change' onClick={submitEdit}>
            Save
          </button>
          <button className='edit-button-change' onClick={showEditButton}>
            Cancel
          </button>
        </div>
      )}
    </form>
  )
}

export default EditButton
