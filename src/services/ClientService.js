import api from "@/api/axios"

const headers = {
  headers: {
    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('Bearer Token'))
  }
}

export default {
  getCategories(){return api('/categories')},
  postCategory(data){return api.post('categories', data, headers)},
  updateCategory(id, data){return api.put('categories/' + id, data, headers)},
  getVacanciesByCategory(id){return api('/categories/' + id + '/vacancies')},
  //* Vacancies endpoints
  getVacancies(){return api('/vacancies')},
  getVacancyById(id){return api('/vacancies/' + id)},
  postNewVacancy(data){return api.post('vacancies', data, headers)},
  updateVacancy(id, data){return api.put('vacancies/' + id, data, headers)},
  deleteVacancy(id){return api.post('vacancies/' + id, headers)},   // ? Suspecting it is not used, so in mind to remove it.
  //* States
  getStates(){return api('/fullStates')},
  getServices(){return api('/services')},
  //* Consults
  getConsults(){return api('/consults', headers)},
  postConsult(data){return api.post('/consults', data)},
  postCv(data){
    return api.post('/curriculums', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  getApplications(){return api('/applications', headers)},
  postApplication(data){return api.post('/applications', data)},
  attempLogin(data){return api.post('user/login', data)},
  attemptLogOut(){return api.post('user/logout', null, headers)},
  getUser(id){return api('user/' + id, headers)},
  getDirectives(){return api('directives', headers)},
  getDirective(id){return api(`directives/${id}`, headers)},
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
  postActivateDirective(id){return api.post(`directives/${id}`, null, headers)},
  putDirective(data, id){return api.put(`directives/${id}`, data, headers)},
  deleteDirective(id){return api.delete(`directives/${id}`, headers)}
}