export const textFill = ': Fill in the field'


export type PatternType = {
  pattern: {
    value: RegExp,
    message: string
  },
}
export const pattern = {
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: ': Enter a valid e-mail address',
  }
}

export type MinLengthType = {
  minLength: {
    value: number,
    message: string
  }
}
export const minLength = {
  minLength: {value: 4, message: ': min length is 4'}
}

export type FnValidPasType = {
  validate: (value: string) => string | boolean
}
export const fnValidPas = (watch: (text: string) => string) => {
  return {
    validate:
      (value: string) => value === watch('password') || ": Passwords do not match"
  }
}

export type SettingAuthType = PatternType | MinLengthType | FnValidPasType
