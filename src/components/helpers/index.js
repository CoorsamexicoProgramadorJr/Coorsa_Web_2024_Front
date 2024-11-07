export const formatDate = date => {
  const newDate = new Date(date);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };

  return newDate.toLocaleDateString('es-MX', options);
}

export function resetErrors(errors){
  Object.keys(errors).forEach(key => {
    delete errors[key]
  })
}

export function resetForm(form){
  Object.keys(form).forEach((key) => {
    form[key] = ''
  })
}

export function setUserId(variable){
  variable.user_id = localStorage.getItem('User_id')
  console.log('User id set...')
}