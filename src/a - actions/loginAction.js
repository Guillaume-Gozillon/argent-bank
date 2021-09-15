export const POST_LOGIN = 'POST_LOGIN'

export const postLogin = url => async dispatch => {
    dispatch({
        type: POST_LOGIN
    })
}
