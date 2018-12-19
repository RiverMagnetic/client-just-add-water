'use strict'

// const store = require('../store')
const moment = require('moment');
// this line connects my js to my handlebars
const showJournalEntriesTemplate = require('../templates/entry-listing.handlebars')

const getAllJournalEntriesSuccess = (data) => {
  // console.log(data)
  $('#previous-entries').empty()
  data.journal_entries.forEach(function (entry) {
    entry.created_at = moment(entry.created_at).format('MMM Do YYYY, h:mm a');
    // new Date(entry.created_at).toLocaleDateString('en-US', {
    //   day: '2-digit',
    //   month: '2-digit',
    //   year: '2-digit'
    // }
    // )
  })
  const showJournalEntriesHtml = showJournalEntriesTemplate({
    journal_entries: data.journal_entries
  })
  $('#previous-entries').append(showJournalEntriesHtml)
  $('#previous-entries').show()
  $('#todays-entry').hide()
  // $('#create-journal-entry').hide()
}

const clearJournalEntries = () => {
  $('#previous-entries').empty()
  // console.log("clearJournalEntries Ran")
}

const onCreateJournalEntrySuccess = function () {
  // console.log('JournalEntry added!')
}

const onDeleteJournalEntrySuccess = function () {
  // console.log(`JournalEntry deleted!`)
}

// const onUpdateJournalEntrySuccess = function () {
// $('#successModal').modal('toggle')
// }

// This failure function is for any errors, not tied to specific requests
const onError = function (error) {
  $('#errorModal').modal('toggle')
}

module.exports = {
  onCreateJournalEntrySuccess,
  getAllJournalEntriesSuccess,
  clearJournalEntries,
  onDeleteJournalEntrySuccess,
  // onUpdateJournalEntrySuccess,
  onError
}
