'use strict'

const store = require('../store')

const signUpSuccess = function () {
    // console.log('Signed up successfully')
    $('#message').text('Come In!')
    $('#sign-up-modal').hide()
}

const signUpFailure = function () {
    $('#errorModal').modal('toggle')
}

const signInSuccess = function (data) {
    store.user = data.user
    $('#landing-screen').hide()
    $('#logged-in-screen').show()
}

const signInFailure = function () {
    $('#errorModal').modal('toggle')
}

const signOutSuccess = function () {
    $('#message').text('')
    // console.log('signOutSuccess ran and nothing was returned!')
    store.user = null
    $('#sign-up-modal').show()
    $('#landing-screen').show()
    $('#logged-in-screen').hide()
}

const signOutFailure = function () {
    // console.error('sign-out failed, but signOutFailure ran!')
}

const changePasswordSuccess = function () {
    $('#successModal').modal('toggle')
}

const changePasswordFailure = function () {
    $('#errorModal').modal('toggle')
}

module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    changePasswordSuccess,
    changePasswordFailure
}
