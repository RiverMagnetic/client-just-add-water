'use strict'

const getFormFields = require('../../../lib/get-form-fields')
// const journalEntryApi = require('./journalEntryApi.js')
// const journalEntryUi = require('./journalEntryUi.js')

const onCreateJournalEntry = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    console.log('hey, look at this ' + data)
    // could put some input validation here
    // message the user if validation fails
    // journalEntryApi.createJournalEntry(data)
      // .then(journalEntryUi.onCreateJournalEntrySuccess)
    //   .then(() => $('#create-journal-entry-content').trigger('reset'))
      // .catch(journalEntryUi.failure)
    $('#create-journal-entry').trigger('reset')
  }

  const addHandlers = () => {
    // Between the sets of single quotes,
    // add the HTML id, class, or element to attach an event to, and the event/s

    // optional: add a selector and/or data before the event/s:
 
  
    $('#create-journal-entry').on('submit', onCreateJournalEntry)
  }  

module.exports = {
    addHandlers
}
