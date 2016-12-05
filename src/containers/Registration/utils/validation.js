const validate = (values) => {
  const errors = {}
  function isNumeric (n) {
    return n && !/[^a-zA-Z]/.test(n)
  }
  function isnumeric (n) {
    return n && /^[0-9 ]+$/g.test(n)
  }
  // Statement of Compliance validation
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  } else if (values.email.length > 50) {
    errors.email = 'Email must not exceed 50 characters'
  }

  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (!isNumeric(values.firstName)) {
    errors.firstName = 'Must not contain a number'
  } else if (values.firstName.length > 50) {
    errors.firstName = 'First name must not exceed 50 characters'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (!isNumeric(values.lastName)) {
    errors.lastName = 'Must not contain a number'
  } else if (values.lastName.length > 50) {
    errors.lastName = 'Last name must not exceed 50 characters'
  }

  if (values.securityLevel === '0') {
    errors.securityLevel = 'Required'
  } else if (values.securityLevelOther !== '' && values.securityLevel !== '4') {
    errors.securityLevel = 'Please clear text field or select "other"'
  } else if (isNumeric(values.securityLevel)) {
    errors.securityLevel = 'Must choose security level'
  }

  if (!values.isConfirmed) {
    errors.isConfirmed = 'Required'
  } else if (!isNumeric(values.isConfirmed)) {
    errors.isConfirmed = 'Must confirm'
  }

  if (!values.isDeclared) {
    errors.isDeclared = 'Required'
  } else if (!isNumeric(values.isDeclared)) {
    errors.isDeclared = 'Must declare'
  }
  if (!values.isCertified) {
    errors.isCertified = 'Required'
  } else if (!isNumeric(values.isDeclared)) {
    errors.isCertified = 'Must certify'
  }


  // School Details validation

  if (!values.reviewed) {
    errors.reviewed = 'Must declare'
  }
  if (!values.phone) {
    errors.phone = 'Required'
  } else if (!isnumeric(values.phone)) {
    errors.phone = 'Must be a number'
  } else if (values.phone.length > 50) {
    errors.phone = 'Must not exceed 50 characters'
  }
  if (!values.fax) {
    errors.fax = 'Required'
  } else if (!isnumeric(values.fax)) {
    errors.fax = 'Must be a number'
  } else if (values.fax.length > 50) {
    errors.fax = 'Must not exceed 50 characters'
  }
  return errors
}

export default validate
