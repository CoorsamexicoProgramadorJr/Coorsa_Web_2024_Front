import api from "@/api/axios"

export default {
  getCategories(){
    return api.get('/categories')
  },
  getVacancies(){
    return api.get('/vacancies')
  },
  getVacanciesByCategory(id){
    return api.get('/categories/' + id + '/vacancies')
  },
  getVacancyById(id){
    return api.get('/vacancies/' + id)
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
  postApplication(data){
    return api.post('/applications', data)
  }
}