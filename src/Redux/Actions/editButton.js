export const clickButton = button => dispatch => {
  dispatch({
    type: 'CLICK_BUTTON',
    payload: { button }
  })
}
