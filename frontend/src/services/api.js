//Calling the API
import {URL} from './servicesURL'

// Interfacing the backend with Remote Request (which would be the test's AJAX) 
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