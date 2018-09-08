'use strict'
const authEvents = require('./auth/authEvents')
const journalEntryEvents = require('./journalEntry/journalEntryEvents')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#logged-in-screen').hide()
  $('#create-journal-entry').hide()

  // function to hold event handlers
  // const addHandlers = () => {
  //   $('#all-entries').on('submit', function (event) {
  //     event.preventDefault()
  //   })
  // }
  // call the addHandlers function that was just defined
  // addHandlers()

  authEvents.addHandlers()
  journalEntryEvents.addHandlers()
})
