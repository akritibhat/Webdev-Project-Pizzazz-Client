let _singleton = Symbol();

const SALON_API_CONST ='https://pizzazz-db-server.herokuapp.com/';
const SALON_API_URL = 'https://pizzazz-db-server.herokuapp.com/api/salon';

class SalonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new SalonService(_singleton);
        return this[_singleton]
    }
    findAllSalons() {
        return fetch(SALON_API_URL)
            .then(function(response){
                return response.json();
            });
    }

    findSalonById(salonId){
        return fetch('https://pizzazz-db-server.herokuapp.com/api/salon/' + salonId, {
            method: 'get',
            credentials : 'include',
            headers: {
                'Content-type': 'application/json'
            },
        }).then(function (response) {
            return response.json();
        })
    }

    findSalonByUserId(userId){
        return fetch('https://pizzazz-db-server.herokuapp.com/api/' + userId +'/salonOwner/', {
            method: 'get',
            credentials : 'include',
            headers: {
                'content-type': 'application/json'
            },
        }).then(function (response) {
            return response.json();
        })
    }

    deleteSalon(salonId) {
        return fetch('https://pizzazz-db-server.herokuapp.com' + '/api/'+ salonId+'/salon' , {
            method: 'delete'
        })
    }

    findSalonByYelpId(salonId){

        return fetch('https://pizzazz-db-server.herokuapp.com/api/salonApi/' + salonId, {
            method: 'get',
            credentials : 'include',
            headers: {
                'Content-type': 'application/json'
            },
        }).then(function (response) {
            return response.json();
        })
    }

    findCurrentSalon(){
        return fetch('https://pizzazz-db-server.herokuapp.com/api/checkSalon', {
            method: 'get',
            credentials : 'include',
            headers: {
                'Content-type': 'application/json'
            },
        }).then(function (response) {
            return response.json();
        })}

    createSalon(salon) {
                return fetch(SALON_API_URL, {
                    body: JSON.stringify(salon),
                    credentials : 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST'
                }).then(function (response) {
                    return response.json();
        })}


    createApiSalonFromScreen(ownerId, salon) {
        return fetch('https://pizzazz-db-server.herokuapp.com/api/' + ownerId + '/salonFromAdmin' , {
            body: JSON.stringify(salon),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })}


    createApiSalon(salonId, name) {
        return fetch(SALON_API_CONST+'api/salonforApi/' + salonId + '/' + name, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })}


    updateSalon(salon, salonId) {
        return fetch(SALON_API_URL + '/' + salonId, {
            body: JSON.stringify(salon),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        }).then(function (response) {
            return response.json();
        })}

    createAppointment(appt) {
        return fetch('https://pizzazz-db-server.herokuapp.com/api/appointment',{
            body: JSON.stringify(appt),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response){
            return response.json();
        })
    }

    createReview(review) {
        return fetch('https://pizzazz-db-server.herokuapp.com/api/review',{
            body: JSON.stringify(review),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response){
            return response.json();
        })
    }

    getSalonApp(salonId) {
        return fetch('https://pizzazz-db-server.herokuapp.com/api/salon/' + salonId + '/appointments', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    }

    getSalonReviews(salonId) {
        return fetch('https://pizzazz-db-server.herokuapp.com/api/salon/' + salonId + '/reviews', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    }

    updateAppointments(appts){
        return fetch('https://pizzazz-db-server.herokuapp.com/api/appointments',{
            method: 'put',
            body: JSON.stringify(appts),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    }

    validateOwner(salonOwnerId){
        return fetch('https://pizzazz-db-server.herokuapp.com/api/'+salonOwnerId+'/ownerValidation',{
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    }

    updateReviews(reviews){
        return fetch('https://pizzazz-db-server.herokuapp.com/api/reviews',{
            method: 'put',
            body: JSON.stringify(reviews),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    }
}
export default SalonService;
