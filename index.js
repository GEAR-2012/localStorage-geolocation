/*



*/
$(document).ready(function () {
  // LOCALSTORAGE

  if (localStorage.length > 0) {
    let firstName = "";
    let lastName = "";
    let fullName = "";

    if (localStorage.getItem("first-name") != null) {
      firstName = localStorage.getItem("first-name");
      fullName += firstName;
    }

    if (localStorage.getItem("last-name") != null) {
      lastName = localStorage.getItem("last-name");
      if (firstName.length > 0) {
        fullName += " ";
        fullName += lastName;
      } else {
        fullName += lastName;
      }
    }

    alert("Welcome on this site " + fullName + " again.");
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

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    $("#geo-loc").html("Geolocation is not supported by this browser.");
  }

  function showPosition(position) {
    $("#geo-loc").html(`<p>Latitude: ${position.coords.latitude}</p>
                        <p>Longitude: ${position.coords.longitude}</p>`);
  }
});
