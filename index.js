/*



*/
$(document).ready(function () {
  // LOCALSTORAGE

  if (localStorage.getItem("first-name") && localStorage.getItem("last-name")) {
    alert(
      "Welcome on this site " +
        localStorage.getItem("first-name") +
        " " +
        localStorage.getItem("last-name") +
        " again."
    );
  } else {
    alert("Welcome on this site Adventurer.");
  }
  // first name
  $("#set-first-name").click(function () {
    let firstName = $("#first-name").val();
    localStorage.setItem("first-name", firstName);
    alert(
      "Your first name is stored in local storage, " +
        localStorage.getItem("first-name") +
        "."
    );
  });

  $("#set-last-name").click(function () {
    let lastName = $("#last-name").val();
    localStorage.setItem("last-name", lastName);
    alert(
      "Your last name is stored in local storage, " +
        localStorage.getItem("last-name") +
        "."
    );
  });

  // GEOLOCATION
  if ("geolocation" in navigator) {
    // do something
  } else {
    alert("Your browser do not support geolocation API.");
  }
});
