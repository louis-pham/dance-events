(function() {
  let formElem = document.querySelector("form");

  formElem.addEventListener("submit", function(e) {
    e.preventDefault();
    axios.post(formElem.action, {
      name: formElem.querySelector("#event-name").value,
      time: formElem.querySelector("#event-time").value,
      location: formElem.querySelector("#event-location").value,
      price: formElem.querySelector("#event-price").value,
      description: formElem.querySelector("#event-description").value,
      image: formElem.querySelector("#event-image").value,
    })
    .then(function(response) {
      window.location.replace("/events");
    })
    .catch(function(error) {
      console.log(error);
    });
  });
})();
