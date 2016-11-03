export function validate (values) {
  const errors = {}
  const requiredFields = [ 'name', 'email', 'driver', 'when' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.pizzas > 15) {
    errors.pizzas = 'Are you mad?'
  }
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}
