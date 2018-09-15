'use strict'

// const store = require('../store')

// this line connects my js to my handlebars
const showJournalEntriesTemplate = require('../templates/entry-listing.handlebars')

const getAllJournalEntriesSuccess = (data) => {
    // console.log(data)
    $('#previous-entries').empty()
    const showJournalEntriesHtml = showJournalEntriesTemplate({ journal_entries: data.journal_entries })
    $('#previous-entries').append(showJournalEntriesHtml)
    $('#previous-entries').show()

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
