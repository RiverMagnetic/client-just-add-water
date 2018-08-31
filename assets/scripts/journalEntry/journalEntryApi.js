'use strict'

const config = require('../config')
const store = require('../store')

// const getJournalEntries = function () {
//     return $.ajax({
//         url: config.apiUrl + '/journal_entries',
//         headers: {
//             Authorization: 'Token token=' + store.user.token
//         },
//     })
// }

// const deleteJournalEntry = (journalEntryId) => {
//     return $.ajax({
//         url: config.apiUrl + '/journal-entries/' + journalEntryId,
//         method: 'DELETE',
//         headers: {
//             Authorization: 'Token token=' + store.user.token
//         },
//     })
// }

// const updateJournalEntry = function (data) {
//     // console.log(data)
//     // console.log(data.journalEntry.id)
//     // console.log(store.user.token)
//     return $.ajax({

//         url: config.apiUrl + '/journal_entries/' + data.journalEntry.id, 
//         //did I format the middle pats of this right: data.journalEntry.id ?
//         method: 'PATCH',
//         headers: {
//             Authorization: 'Token token=' + store.user.token
//         },
//         data
//     })
// }

const createJournalEntry = function (data) {
    console.log('running createJournalEntry and here is some data:', data)
    console.log('running createJournalEntry and here is a user token', store.user.token)
    return $.ajax({
        url: config.apiUrl + '/journal_entries',
        method: 'POST',
        headers: {
            Authorization: 'Token token=' + store.user.token
        },
        data
    })
}

module.exports = {
    // getJournalEntries,
    // deleteJournalEntry,
    createJournalEntry
    // ,
    // updateJournalEntry
}