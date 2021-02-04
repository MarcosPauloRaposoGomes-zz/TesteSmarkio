//Chamar a api
import {URL} from './servicesURL'

//Interfaceamento do backend somando ao "AJAX"
export default class Api {
    
    static async createComment(body) {
        try {
          const res = await fetch(URL + '/createComment', body, {
              method: 'POST'
          })  
          return res;
        } 
        catch (error) {
            return error;
        }
    }

    static async getAllComments() {
        try {
          const res = await fetch(URL + '/listComments', {
              method: 'GET'
          })  
          return res;
        } 
        catch (error) {
            return error;
        }
    }

    static async listenAudio() {
        try {//Devo criar 
            const res = await fetch(URL + '/listenAudio', {
                method: 'GET'
            })  
            return res;
          } 
          catch (error) {
              return error;
          }

    }

}