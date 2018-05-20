//
/* global $:true alert */

let weatherYork = {}
let weatherTimbut = {}

// in tonnes
const averageUserMonthlyWaste = 20578.58

// in litres
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

$(document).ready(function () {
  console.log('ready!')

  // getWeather(timbutLoc.lat, timbutLoc.lon, 'timbut')

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
})

function getWeather (lon, lat, loc) {
  console.log('Getting Weather')
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: `http://localhost:3333/api/weather/${lat}/${lon}`,
    success: function (response) {
      switch (loc) {
        case 'timbut':
          weatherTimbut.summary = response.data.summary
          weatherTimbut.temp = response.data.temp

          let weatherString = `${response.data.summary}, ${response.data.temp} &deg;C`
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

  // getWeather(position.coords.latitude, position.coords.longitude, 'york')
}

function getPostCode (lat, lon) {
  console.log('Getting postcode')
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: `https://api.postcodes.io/postcodes?lon=${lon}=&lat=${lat}`,
    success: function (response) {
      console.log(response)
      let postcode = response.result[0].postcode
      userLoc.postcode = postcode

      getFloodRisk(postcode)
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
