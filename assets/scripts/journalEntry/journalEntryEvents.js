'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const journalEntryApi = require('./journalEntryApi.js')
// const journalEntryUi = require('./journalEntryUi.js')

const onCreateJournalEntry = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    // could put some input validation here
    // message the user if validation fails
    journalEntryApi.createJournalEntry(data)
      .then(journalEntryUi.onCreateJournalEntrySuccess)
    //   .then(() => $('#create-journal-entry-content').trigger('reset'))
      .catch(journalEntryUi.onError)
    $('#create-journal-entry').trigger('reset')
  }

  // const onUpdateJournalEntry = function (event) {
  //   event.preventDefault()
  //   console.log('running onUpdateJournalEntry')
  //   const data = getFormFields(event.target)
  //   const journalEntry = data.journalEntry
  //   if (journalEntry.id.length !== 0) {
  //       // console.log("the length of the journal entry id is", journalEntry.id.length)
  //       // console.log("we're in onUpdateJournalEntry and the data is:", data)
  //       journalEntryApi.updateJournalEntry(data)
  //           // .then(journalEntryUi.onUpdateJournalEntrySuccess)
  //           // .then(() => onClearJournalEntries(event))
  //           // .then(() => onGetJournalEntries(event))
  //           // .catch(journalEntryUi.onError)
  //   } else {
  //       // $('#message').html('Please provide an journalEntry id!')
  //       // $('#message').css('background-color', 'red')
  //       console.log('Please provide an journalEntry id!')
  //   }
  //   $('#update-journal-entry').trigger('reset')
  //   //  the native way to do this would be: document.querySelector('#update-journal-entry').reset()
// }

  const addHandlers = () => {
    // Between the sets of single quotes,
    // add the HTML id, class, or element to attach an event to, and the event/s

    // optional: add a selector and/or data before the event/s:
 
    $('#get-journal-entries').on('click', onGetJournalEntries)
    $('#create-journal-entry').on('submit', onCreateJournalEntry)
    // $('#update-journal-entry').on('submit', onUpdateJournalEntry)
  }  

module.exports = {
    addHandlers
}
