'use strict'

const store = require('../store')

const signUpSuccess = function () {
    console.log('Signed up successfully')
    $('#message').text('Come In!')
    $('#sign-up-modal').hide()
}

const signUpFailure = function () {
    $('#errorModal').modal('toggle')
}

const signInSuccess = function (data) {
    store.user = data.user
    $('#landing-screen').hide()
    // $('#create-journal-entry').hide()
    // $('#journal-entries-view').show()
    $('#logged-in-screen').show()
    // $('#change-password-modal').show()
}

const signInFailure = function () {
    $('#errorModal').modal('toggle')
}

const signOutSuccess = function () {
    $('#message').text('')
    // $('#message').css('background-color', 'green')
    console.log('signOutSuccess ran and nothing was returned!')
    store.user = null
    $('#sign-up-modal').show()
    $('#landing-screen').show()
    // $('#journal-entries-view').hide()
    $('#logged-in-screen').hide()
    // $('#change-password-modal').hide()
    // $('#signOutModal').modal('hide')
}

const signOutFailure = function () {
    console.error('sign-out failed, but signOutFailure ran!')
//     $('#message').text('Error on sign out')
//     // $('#message').css('background-color', 'red')
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
