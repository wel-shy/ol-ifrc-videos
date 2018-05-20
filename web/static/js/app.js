//
/* global $:true alert */

let weatherYork = {}
let weatherTimbut = {}
// in tonnes
const averageUserMonthlyWaste = 20578.58
// in litres
// https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/69582/pb6655-uk-sewage-treatment-020424.pdf
const averageUserSewageTreatmentPerDay = 16.75807434
const timbutLoc = {
  lat: 2.003354,
  lon: 117.332246
}
let userLoc = {
  lat: 1,
  lon: 1
}
let user = {}
let userVideo = ''
let userNextChoice = ''

$(document).ready(function () {
  console.log('ready!')

  $('#user-waste').html(`Your city processes ${Math.round(averageUserMonthlyWaste)} tonnes of waste per month.`)
  $('#user-sewage').html(`Your country processes ${Math.round(averageUserSewageTreatmentPerDay)} litres of sewage per person per day.`)

  getWeather(timbutLoc.lat, timbutLoc.lon, 'timbut')

  getLocation()

  $('#submit-details').click(function () {
    let details = {
      name: $('#user-name').val(),
      email: $('#user-email').val(),
      age: $('#user-age').val(),
      gender: $('#user-gender').val()
    }

    user = details
    userVideo = decideUserDemographic(user)
    console.log('User to see:', userVideo)
  })

  $('#flood-choice').click(function () {
    userNextChoice = 'flood'
    console.log('User to see flood next')
  })

  $('#waste-choice').click(function () {
    userNextChoice = 'waste'
    console.log('User to see waste next')
  })

  $('#sanitisation-choice').click(function () {
    userNextChoice = 'sanitisation'
    console.log('User to see sanitisation next')
  })
})

function getWeather (lon, lat, loc) {
  console.log('Getting Weather')
  console.log('Getting weather from: ', `http://localhost:3333/api/weather/${lon}/${lat}`)
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: `http://localhost:3333/api/weather/${lon}/${lat}`,
    success: function (response) {
      let weatherString = ''
      switch (loc) {
        case 'timbut':
          weatherTimbut.summary = response.data.summary
          weatherTimbut.temp = response.data.temp

          weatherString = `${response.data.summary}, ${response.data.temp} &deg;C`
          $('#weather-timbut').html(weatherString)
          break
        case 'york':
          weatherYork.summary = response.data.summary
          weatherYork.temp = response.data.temp

          weatherString = `${response.data.summary}, ${response.data.temp} &deg;C`
          $('#weather-york').html(weatherString)
          break
        default:
          break
      }
    }
  })
}

/**
 * Get lon and lats from browser
 * @return {[type]} [description]
 */
function getLocation () {
  console.log('Getting location')
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  } else {
    console.log('Geolocation is not supported by this browser.')
  }
}

function showPosition (position) {
  console.log(`Latitude: ${position.coords.latitude}`)
  console.log(`Longitude: ${position.coords.longitude}`)

  userLoc.lat = position.coords.latitude
  userLoc.lon = position.coords.longitude

  getPostCode(userLoc.lat, userLoc.lon)

  getWeather(position.coords.latitude, position.coords.longitude, 'york')
}

function getPostCode (lat, lon) {
  console.log('Getting postcode from: ', `https://api.postcodes.io/postcodes?lon=${lat}=&lat=${lon}`)
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: `https://api.postcodes.io/postcodes?lon=${lon}=&lat=${lat}`,
    success: function (response) {

      if (response.result) {
        let postcode = response.result[0].postcode
        userLoc.postcode = postcode

        getFloodRisk(postcode)
      } else {
        $('#user-flood-risk').html(`Your risk of flood is: None`)
      }
    }
  })
}

function getFloodRisk (postcode) {
  console.log('Getting flood risk')
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3333/static/data/flood_york.csv',
    dataType: 'text',
    success: function (data) {
      const csv = processCSV(data)
      const risk = csv[postcode].risk
      console.log(risk)

      user.risk = risk

      $('#user-flood-risk').html(`Your risk of flood is: ${risk}`)
    }
  })
}

function processCSV (data) {
  const allTextLines = data.split(/\r\n|\n/)
  let lines = {}

  for (let i = 0; i < allTextLines.length; i++) {
    let rline = allTextLines[i].split(',')
    lines[rline[0]] = {
      risk: rline[2],
      lat: rline[8],
      lon: rline[9]
    }
  }

  return lines
}

function getUserWasteMonthly () {
  return averageUserMonthlyWaste
}

function decideUserDemographic (user) {
  console.log('Deciding user demographic')
  if (user.age < 25) {
    return 'child'
  }
  if (user.age >= 25 && user.age < 65 && user.gender === 'male') {
    return 'male'
  }
  if (user.age >= 25 && user.age < 65 && user.gender === 'female') {
    return 'female'
  }
  if (user.age >= 65) {
    return 'older-people'
  }

  return 'child'
}
