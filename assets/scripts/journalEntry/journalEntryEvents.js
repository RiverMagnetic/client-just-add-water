'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const journalEntryApi = require('./journalEntryApi.js')
const journalEntryUi = require('./journalEntryUi.js')
const store = require('../store')


const onGetAllJournalEntries = (event) => {
  event.preventDefault()
  Promise.resolve(journalEntryUi.clearJournalEntries)
      .then(journalEntryApi.getAllJournalEntries)
      .then(journalEntryUi.getAllJournalEntriesSuccess)
      .catch(journalEntryUi.onError)
      // console.log('onGetAllJournalEntries')
}

const onClearJournalEntries = (event) => {
  event.preventDefault()
  // console.log("running onClearJournalEntries")
  journalEntryUi.clearJournalEntries()
  
}

const showCreateJournalEntryForm = function () {
  const d = new Date();
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  document.getElementById("date").innerHTML = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
  $('#update-journal-entry-button').hide()
  $('#create-journal-entry').show()
  $('#create-journal-entry-button').show()
}

const onCreateJournalEntry = function (event) {
  event.preventDefault()
  // console.log('onCreateJournalEntry')
  const data = getFormFields(document.getElementById('create-journal-entry'))
    // could put some input validation here
    // message the user if validation fails
  journalEntryApi.createJournalEntry(data)
    .then(journalEntryUi.onCreateJournalEntrySuccess)
    .catch(journalEntryUi.onError)
  $('#create-journal-entry').trigger('reset')
  $('#create-journal-entry').hide()
}

const previousJournalEntry = (event) => {
  store.journal_entry = {
    id: $(event.target).closest('section').attr('data-journal-entry-id'),
    created_at: $(event.target).closest('section').attr('data-journal-entry-created-at'),
    journal_entry_content: $(event.target).closest('section').attr('data-journal-entry-content')
  }
  // console.log(store.journal_entry)
  $('#previous-entries').hide()
  fillWithPreviousJournalEntryContent()
  // console.log(store.journal_entry)
  // console.log('previousJournalEntry ran.')
}
  
// fillWithPreviousJournalEntryContent fills the textarea of the create-journal-entry form with the closest journal_entry_content on 'edit' button click
const fillWithPreviousJournalEntryContent = () => {
  $('#journal-entry').val(store.journal_entry.journal_entry_content)
  // console.log('jounalentry content is', store.journal_entry.journal_entry_content)
    $('#create-journal-entry').show()
    $('#create-journal-entry-button').hide()
    $('#update-journal-entry-button').show()
  // console.log('fillWithPreviousJournalEntryContent ran.')
}

const onUpdateJournalEntry = function (event) {
  event.preventDefault()
  // console.log('running onUpdateJournalEntry')
  const data = getFormFields(document.getElementById('create-journal-entry'))
  journalEntryApi.updateJournalEntry(data, store.journal_entry.id)
        // .then(journalEntryUi.onUpdateJournalEntrySuccess)
      .then(() => onClearJournalEntries(event))
      .catch(journalEntryUi.onError)
  $('#create-journal-entry').trigger('reset')
  $('#create-journal-entry').hide()

}
const onDeleteJournalEntry = (event) => {
  // console.log('hey,this is onDeleteJournalEntry')
  event.preventDefault()
  // console.log($(event.target))
  const journalEntryId = $(event.target).closest('section').attr('data-journal-entry-id')
  journalEntryApi.deleteJournalEntry(journalEntryId)
      // may need refactoring
      // .then(journalEntryUi.onDeleteJournalEntrySuccess)
      .then(() => onClearJournalEntries(event))
      .then(() => onGetAllJournalEntries(event))
      .catch(journalEntryUi.onError)
}
const addHandlers = () => {
  $('#show-create-journal-entry').on('click', showCreateJournalEntryForm)
  $('#get-all-journal-entries').on('click', onGetAllJournalEntries)
  $('#create-journal-entry-button').on('click', onCreateJournalEntry)
  // $('#create-journal-entry').on('submit', onCreateJournalEntry)
  $('#update-journal-entry-button').on('click', onUpdateJournalEntry)
  $('.previous-entries-class').on('click', '#edit-journal-entry-button', previousJournalEntry)
  $('.previous-entries-class').on('click', '#erase-journal-entry-button', onDeleteJournalEntry)
}  

module.exports = {
    addHandlers
}
