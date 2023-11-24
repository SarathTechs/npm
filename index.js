let addDays = require('date-fns/addDays')

let totalDays = days => {
  const period = addDays(new Date(2020, 8, 22), days)
  return `${period.getDate()}-${period.getMonth()}-${period.getFullYear()}`
}

module.exports = totalDays
