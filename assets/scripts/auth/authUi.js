'use strict'

const store = require('../store')

const signUpSuccess = function () {
    console.log('Signed up successfully')
    // $('#message').text('Signed up successfully')
    // $('#message').css('background-color', 'green')
    // $('#sign-up-modal').hide()
}

const signUpFailure = function () {
    console.error('sign-up failed, but signUpFailure ran!')
//     $('#message').text('Incorrect email or password')
//     $('#message').css('background-color', 'red')
}

const signInSuccess = function (data) {
    console.log('Signed in successfully')
    // $('#message').text("Welcome")
    // $('#message').css('background-color', 'green')
    // console.log('signInSuccess ran. Data is :', data)
    store.user = data.user
    // $('#logInModal').modal('hide')
    // $('#sign-in-modal').hide()
    // $('#sign-up-modal').hide()
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
    // $('#message').text('Signed out')
    // $('#message').css('background-color', 'green')
    console.log('signOutSuccess ran and nothing was returned!')
    store.user = null
    // $('#sign-in-modal').show()
    // $('#sign-up-modal').show()
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
