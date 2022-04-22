interface Errors {
  [key: string]: string
}

const errors: Errors = {
  'auth/user-not-found': 'User not found.',
  'auth/email-already-in-use': 'User already exists'
}

export default errors