export const connectAPI = (email, password, token) => dispatch => {
  dispatch({
    type: 'USER_LOGIN',
    payload: { email, password, token }
  })
}

export const fetchAPI = (firstName, lastName) => dispatch => {
  dispatch({
    type: 'USER_PROFIL',
    payload: { firstName, lastName }
  })
}

export const updateName = (handlefirstName, handleLastName) => dispatch => {
  dispatch({
    type: 'UPDATE_NAME',
    payload: {
      handlefirstName: handlefirstName,
      handleLastName: handleLastName
    }
  })
}

export const updateButton = showButton => dispatch => {
  dispatch({
    type: 'UPDATE_BUTTON',
    payload: { showButton: !showButton }
  })
}
