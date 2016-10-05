'use strict'

const http = require('http')

class App {

  checkMeetup(callback) {

    var url = 'http://api.meetup.com/find/groups?&sign=true&photo-host=public&country=United%20Kingdon&location=Belfast&page=20&key='
    var apiKey = '501750241b6161263d6ad276e7f714'

    var meetings = http.get(url + apiKey, (response) => {
      console.log(response.statusCode);
      callback(response)
    })

  }

  checkWeather(callback)  {

    var url = 'http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID='
    var apiKey = 'e8141d99d8ebda6b63c11036009e4bcb'

    var weather = http.get(url + apiKey, (response) => {
      console.log(response.statusCode);
      callback(response)
    })

  }



}

module.exports = App
