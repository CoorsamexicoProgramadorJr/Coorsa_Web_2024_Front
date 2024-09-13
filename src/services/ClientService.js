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
  }
}