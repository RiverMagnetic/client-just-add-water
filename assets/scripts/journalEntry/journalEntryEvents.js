'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const journalEntryApi = require('./journalEntryApi.js')
const journalEntryUi = require('./journalEntryUi.js')
const store = require('../store')

const onClearJournalEntries = (event) => {
  event.preventDefault()
  journalEntryUi.clearJournalEntries()
}

const onGetAllJournalEntries = (event) => {
  event.preventDefault()
  Promise.resolve(journalEntryUi.clearJournalEntries)
      .then(journalEntryApi.getAllJournalEntries)
      .then(journalEntryUi.getAllJournalEntriesSuccess)
      .catch(journalEntryUi.onError)
      console.log('onGetAllJournalEntries')
}

// const showCreateJournalEntryForm = function (event) {
  
//   $('#create-journal-entry').show()
// }

const onCreateJournalEntry = function (event) {
  event.preventDefault()
  console.log('onCreateJournalEntry')
  const data = getFormFields(event.target)
//     // could put some input validation here
//     // message the user if validation fails
//     // journalEntryApi.createJournalEntry(data)
//       // .then(journalEntryUi.onCreateJournalEntrySuccess)
//       // .then(() => $('#create-journal-entry-content').trigger('reset'))
//       // .catch(journalEntryUi.onError)
//     // $('#create-journal-entry').trigger('reset')
  }

  const previousJournalEntry = (event) => {
    store.journal_entry = {
      id: $(event.target).closest('section').attr('data-journal-entry-id'),
      created_at: $(event.target).closest('section').attr('data-journal-entry-created-at'),
      journal_entry_content: $(event.target).closest('section').attr('data-journal-entry-content')
    }
    console.log(store.journal_entry)
    $('#previous-entries').hide()
    fillWithPreviousJournalEntry()
    console.log(store.journal_entry)
    console.log('previousJournalEntry ran.')
  }
  
  // fillWithPreviousJournalEntry fills the textarea of the create-journal-entry form with the closest journal_entry_content on 'edit' button click
  const fillWithPreviousJournalEntry = () => {
    $('#journal-entry').val(store.journal_entry.journal_entry_content)
    console.log('jounalentry content is', store.journal_entry.journal_entry_content)
    // the following line is psuedocode for an idea for handling UI for this feature
    //   $('#data-journal-entry-content').hide()
      $('#create-journal-entry').show()
      $('#create-journal-entry-button').hide()
      // $('#update-journal-entry-button').show()
    console.log('fillWithPreviousJournalEntry ran.')
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
  //           // .then(() => onGetAllJournalEntries(event))
  //           // .catch(journalEntryUi.onError)
  //   } else {
  //       // $('#message').html('Please provide an journalEntry id!')
  //       // $('#message').css('background-color', 'red')
  //       console.log('Please provide an journalEntry id!')
  //   }
  //   $('#update-journal-entry').trigger('reset')
    //  the native way to do this would be: document.querySelector('#update-journal-entry').reset()
// }
const onDeleteJournalEntry = (event) => {
  console.log('hey,this is onDeleteJournalEntry')
  event.preventDefault()
  console.log($(event.target))
  const journalEntryId = $(event.target).closest('section').attr('data-journal-entry-id')
  journalEntryApi.deleteJournalEntry(journalEntryId)
      // may need refactoring
      // .then(journalEntryUi.onDeleteJournalEntrySuccess)
      .then(() => onClearJournalEntries(event))
      .then(() => onGetAllJournalEntries(event))
      .catch(journalEntryUi.onError)
}
  const addHandlers = () => {
    // Between the sets of single quotes,
    // add the HTML id, class, or element to attach an event to, and the event/s

    // optional: add a selector and/or data before the event/s:
    // $('#show-create-journal-entry').on('click', showCreateJournalEntryForm)
    $('#get-all-journal-entries').on('click', onGetAllJournalEntries)
    // $('#get-all-journal-entries').on('click', console.log('onGetAllJournalEntries'))
    // $('#create-journal-entry').on('submit', '#create-journal-entry-button', onCreateJournalEntry)
    $('#create-journal-entry-button').on('submit', onCreateJournalEntry)
    // // $('#update-journal-entry-button').on('submit', onUpdateJournalEntry)
    // $('#update-journal-entry-button').on('submit', console.log('onUpdateJournalEntry'))
    $('.previous-entries').on('click', '#edit-journal-entry-button', previousJournalEntry)
    $('.previous-entries').on('click', '#erase-journal-entry-button', onDeleteJournalEntry)
  }  

module.exports = {
    addHandlers
}
