'use strict'

const store = require('../store')

const signUpSuccess = function () {
    console.log('Signed up successfully')
    $('#message').text('Come In!')
    $('#sign-up').trigger('reset')
    $('#sign-up-modal').hide()
}

const signUpFailure = function () {
    console.error('sign-up failed, but signUpFailure ran!')
    $('#sign-up').trigger('reset')
    $('#errorModal').modal('toggle')
}

const signInSuccess = function (data) {
    console.log('Signed in successfully')
    // $('#message').text("Welcome")
    // $('#message').css('background-color', 'green')
    // console.log('signInSuccess ran. Data is :', data)
    store.user = data.user
    // $('#logInModal').modal('hide')
    // $('#sign-in-modal').hide()
    $('#landing-screen').hide()
    // $('#create-journal-entry').hide()
    // $('#journal-entries-view').show()
    $('#logged-in-screen').show()
    // $('#change-password-modal').show()
}

const signInFailure = function () {
    // $('#logInModal').modal('hide')
    // $('#message').text('Incorrect Email or Password')
    console.error('sign-in failed, but signInFailure ran!')
    // $('#message').css('background-color', 'red')
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
//     $('#message').text('Changed password successfully')
//     // $('#message').css('background-color', 'green')
        console.log('changePasswordSuccess ran and nothing was returned!')
//     $('#changePasswordModal').hide()
}

const changePasswordFailure = function () {
    console.error('change-password failed, but changePasswordFailure ran!')
//     $('#message').text('Incorrect old or new password')
//     // $('#message').css('background-color', 'red')
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
