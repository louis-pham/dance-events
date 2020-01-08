(function() {
  let formElem = document.querySelector("form");

  formElem.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(e);
    axios.post(formElem.action, {
      name: formElem.querySelector("#event-name").value,
      time: formElem.querySelector("#event-time").value,
      location: formElem.querySelector("#event-location").value,
      price: formElem.querySelector("#event-price").value,
      description: formElem.querySelector("#event-description").value,
    })
    .then(function(response) {
      console.log(response);
      window.location.replace("/events");
    })
    .catch(function(error) {
      console.log(error);
    });
  });
})();
