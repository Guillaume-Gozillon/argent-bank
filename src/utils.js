export const BASE_URL = 'http://localhost:3001/api/v1/user'

export const validEmail = email => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}
export const data = [
  {
    key: 0,
    kind: 'Checking',
    nb: 8349,
    available: 2082.79,
    type: 'Available Balance'
  },
  {
    key: 1,
    kind: 'Savings',
    nb: 6712,
    available: 10928.42,
    type: 'Available Balance'
  },
  {
    key: 2,
    kind: 'Credit Card',
    nb: 8349,
    available: 184.3,
    type: 'Current Balance'
  }
]
