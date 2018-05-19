//
/* global $:true alert */

let weatherYork = {}
let weatherTimbut = {}

const timbutLoc = {
  lat: 2.003354,
  lon: 117.332246
}

let userLoc = {
  lat: 1,
  lon: 1
}

let user = {}

$(document).ready(function () {
  console.log('ready!')

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
  })
})

function getWeather (lon, lat, loc) {
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: `http://localhost:3333/api/weather/${lon}/${lat}`,
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

  getWeather(position.coords.latitude, position.coords.longitude, 'york')
}
