// import { useEffect, useState } from 'react'

const useFetch = data => {
  const url = 'http://localhost:3001/api/v1/user/login'

  fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(async res => {
    // window.location = '/profil'
    try {
      const content = await res.json()
      //const token = content.body.token
      console.log(content)
      //console.log(token)
    } catch (err) {
      console.log('Erreur :', err)
    }
  })
}

export default useFetch
