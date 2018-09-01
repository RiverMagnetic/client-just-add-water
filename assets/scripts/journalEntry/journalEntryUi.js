'use strict'

// const store = require('../store')

// this line connects my js to my handlebars
const showJournalEntriesTemplate = require('../templates/entry-listing.handlebars')

const getJournalEntriesSuccess = (data) => {
    // console.log(data)
    const showJournalEntriesHtml = showJournalEntriesTemplate({ journal_entries: data.journal_entries })
    $('.previous-entries').append(showJournalEntriesHtml)
}

// const clearJournalEntries = () => {
//     $('.content').empty()
// }

const onCreateJournalEntrySuccess = function () {
    console.log('JournalEntry added!')
    // $('#message').text(`JournalEntry added!`)
    // $('#message').css('background-color', 'green')
}

// const onDeleteJournalEntrySuccess = function () {
//     $('#message').text(`JournalEntry deleted!`)
//     $('#message').css('background-color', 'green')
// }

// const onUpdateJournalEntrySuccess = function () {
//     $('#message').text(`JournalEntry updated!`)
//     $('#message').css('background-color', 'green')
    
// }

// This failure function is for any errors, not tied to specific requests
const onError = function (error) {
    console.error('error is ', error)
}

module.exports = {
    onCreateJournalEntrySuccess,
    getJournalEntriesSuccess,
    // clearJournalEntries,
    // onDeleteJournalEntrySuccess,
    // onUpdateJournalEntrySuccess,
    onError
}
