const request = require('request');
module.exports = new class {
    constructor () {
        this.userApi = {
            endPoint: 'https://jsonplaceholder.typicode.com/users',
            todoEndPoint: 'todos'
        }
    }
    getUsers () {
        return new Promise((resolve, reject) => {
            request(this.userApi.endPoint, (err, response, body) => {
                console.log('api res', {err, response, body})
                if (err) {
                    return reject(err)
                }
                return resolve(JSON.parse(body))
            })
        })
    }
    getUserTodo (uid) {
        return new Promise((resolve, reject) => {
            request(`${this.userApi.endPoint}/${uid}/${this.userApi.todoEndPoint}`, (err, response, body) => {
                console.log('api res', {err, response, body})
                if (err) {
                    return reject(err)
                }
                return resolve(JSON.parse(body))
            })
        })
    }
}