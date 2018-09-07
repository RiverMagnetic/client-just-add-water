'use strict'

const config = require('../config')
const store = require('../store')

const getAllJournalEntries = function () {
    return $.ajax({
        url: config.apiUrl + '/journal_entries',
        headers: {
            Authorization: 'Token token=' + store.user.token
        },
    })
}

const deleteJournalEntry = (journalEntryId) => {
    console.log(journalEntryId)
    return $.ajax({
        url: config.apiUrl + '/journal_entries/' + journalEntryId,
        method: 'DELETE',
        headers: {
            Authorization: 'Token token=' + store.user.token
        },
    })
}

const updateJournalEntry = function (data, journalEntryId) {
    // console.log('here is some data from PATCH', data)
    // console.log("console logging data.journal_entry", data.journal_entry)
    // console.log(store.user.token)
    return $.ajax({
        url: config.apiUrl + '/journal_entries/' + journalEntryId, 
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + store.user.token
        },
        data
    })
}

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
    getAllJournalEntries,
    deleteJournalEntry,
    createJournalEntry,
    updateJournalEntry
}