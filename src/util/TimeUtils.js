/**
 * Módulo encargado de realizar operaciones relacionadas con fechas 
 */

const LocalDateTime = require('js-joda').LocalDateTime;
const DateTimeFormatter = require('js-joda').DateTimeFormatter; 

function getCurrentDateString(){
    return LocalDateTime.now().format(DateTimeFormatter.ofPattern('dd/MM/yyyy'))
}

function getCurrentTimeString(){
    return LocalDateTime.now().format(DateTimeFormatter.ofPattern('hh:m:ss'))
}

module.exports = { getCurrentDateString, getCurrentTimeString };