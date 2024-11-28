import api from "@/api/axios"

const headers = {
  headers: {
    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('Bearer Token'))
  }
}

export default {
  getCategories(){return api('/categories')},
  getCategory(id){return api('/categories/' + id)},
  postCategory(data){
    return api.post('categories', data, {
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('Bearer Token'))
      }
    })
  },
  updateCategory(id, data){
    return api.put('categories/' + id, data, {
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('Bearer Token'))
      }
    })
  },
  // Vacancies endpoints
  getVacancies(){
    return api('/vacancies')
  },
  getVacanciesByCategory(id){
    return api('/categories/' + id + '/vacancies')
  },
  getVacancyById(id){
    return api('/vacancies/' + id)
  },
  postNewVacancy(data){
    return api.post('vacancies', data, {
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('Bearer Token'))
      }
    })
  },
  updateVacancy(id, data){
    return api.put('vacancies/' + id, data, {
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('Bearer Token'))
      }
    })
  },
  deleteVacancy(id){
    return api.post('vacancies/' + id, {
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('Bearer Token'))
      }
    })
  },
  //* States
  getStates(){
    return api('/fullStates')
  },
  getServices(){
    return api('/services')
  },
  // Consults
  getConsults(){
    return api('/consults', {
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('Bearer Token'))
      }
    })
  },
  postConsult(data){
    return api.post('/consults', data)
  },
  postCv(data){
    return api.post('/curriculums', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  getApplications(){
    return api('/applications', {
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('Bearer Token'))
      }
    })
  },
  postApplication(data){
    return api.post('/applications', data)
  },
  attempLogin(data){
    return api.post('user/login', data)
  },
  attemptLogOut(){
    return api.post('user/logout', null, {
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('Bearer Token'))
      }
    })
  },
  getUser(id){
    return api('user/' + id, {
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('Bearer Token'))
      }
    })
  },
  getDirectives(){
    return api('directives', headers)
  },
  getDirective(id){
    return api(`directives/${id}`, headers)
  },
  postDirective(data){
    return api.post('directives', data, {
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('Bearer Token')),
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  postNewDirectiveImage(data, id){
    return api.post(`directives/${id}/image`, data, {
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('Bearer Token')),
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  postActivateDirective(id){
    return api.post(`directives/${id}`, null, headers)
  },
  putDirective(data, id){
    return api.put(`directives/${id}`, data, headers)
  },
  deleteDirective(id){
    return api.delete(`directives/${id}`, headers)
  }
}