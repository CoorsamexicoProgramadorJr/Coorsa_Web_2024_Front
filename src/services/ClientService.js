import api from "@/api/axios"

export default {
  getCategories(){
    return api('/categories')
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
  //States
  getStates(){
    return api.get('/fullStates')
  },
  getServices(){
    return api.get('/services')
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
  }
}