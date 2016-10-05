'use strict'

const expect = require('chai').expect
const App = require('../app')

describe('Given an app to check if a meetup will be rained off', () => {

  describe('When making a call to the meetup.com api', () => {
    it('Then a response is received', (done) => {
        var app = new App()
        app.checkMeetup( (response) =>  {
          expect(response.statusCode).to.equal(200)
          done()
        })
    })
  })

  describe('When making a call to the openweathermap.org api', () => {
    it('Then a response is received', (done) => {
      var app = new App()
      app.checkWeather( (response) => {
        expect(response.statusCode).to.equal(200)
        done()
      })
    })
  })

})
