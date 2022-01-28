
class Api {
  constructor() {
    this.summaryUrl = "https://api.covid19api.com/summary"
  }
  
  _onResponse(res){
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`>>> Ошибка: ${ res.status }`)
  }
  
  getCountries() {
    return fetch(this.summaryUrl).then(this._onResponse)
  }
}

const api = new Api()

export default api
