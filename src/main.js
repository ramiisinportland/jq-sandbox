import $ from 'jquery'

const clickCallback = function (event) {
  event.preventDefault()
  console.log("clicked button")
  // find what the user entered
  // store that as a const
  const username = $("input#username").val();
  console.log("username is", username)
  $('#username-display').append(username)
  // append that const to the username display
}

$(document).ready(function () {
  console.log('document is ready')
  $("button#submit-username").on("click", clickCallback)
  
})

let myFavNum = 6

myFavNum = 4

myFavNum += 2
// same as myFavNum = myFavNum + 2
