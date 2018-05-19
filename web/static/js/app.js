//
/* global $:true alert */
$(document).ready(function () {
  console.log('ready!')

  $('#submit-details').click(function () {
    let details = {
      name: $('#user-name').val(),
      email: $('#user-email').val(),
      age: $('#user-age').val(),
      gender: $('#user-gender').val()
    }

    console.log(details.age, details.name, details.email, details.gender)
  })
})

function getWeatherTimbut () {
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'http://localhost:8080/api/weather/2.003354/117.332246',
    success: function (data) {
      alert(data)
    }
  })
}
