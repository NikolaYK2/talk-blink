export const textFill = 'Fill in the field'

export const pattern = {
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: 'Enter a valid e-mail address',
  }
}

export const minLength = {
  minLength: {value: 4, message: 'min length is 4'}
}

export const fnValidPas = (watch: (text: string) => string) => {
  return {
    validate:
      (value: string) => value === watch('password') || "Passwords do not match"
  }
}
