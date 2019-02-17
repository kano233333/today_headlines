import ajaxLib from './lib/ajax'
const ajax = ajaxLib.ajax
class Api {
  //hello world
  static async hello() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('hello world!')
      }, 1000)
    })
    return promise
  }
  static async getData (url) {
    return new Promise((resolve, reject) => {
      ajax(url)
        .then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
    })
  }
  static async sendData (url, data) {
    let form = new FormData();
    for(let a in data){
      form.append(a,data[a])
    }
    return new Promise((resolve, reject) => {
      ajax.post(url, form)
        .then(response => {
          resolve(response);
        }).catch(error => {
          reject(error);
        })
    })
  }
}
export default {
  install(Vue) {
    Vue.prototype.$api = Api
  }
}
