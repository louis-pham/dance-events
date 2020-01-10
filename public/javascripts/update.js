(function() {
  let eventNameElem = document.querySelector("#event-name");
  let eventImageElem = document.querySelector("#event-image");
  let eventDateTimeElem = document.querySelector("#event-time");
  let eventLocationElem = document.querySelector("#event-location");
  let eventPriceElem = document.querySelector("#event-price");
  let eventDescriptionElem = document.querySelector("#event-description");
  let formElem = document.querySelector("form");

  const urlParams = new URLSearchParams(window.location.search);

  const getUrl = `/api/events/${urlParams.get("id")}`;

  axios.get(getUrl)
  .then(function(response) {
    // handle success
    console.log(response);
    const event = response.data;
    eventNameElem.value = event.name;
    eventImageElem.value = event.image || "";
    eventDateTimeElem.value = moment(event.time).format("YYYY-MM-DDTHH:mm:ss");
    eventLocationElem.value = event.location;
    eventPriceElem.value = event.price;
    eventDescriptionElem.value = event.description;
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  });

  formElem.addEventListener("submit", function(e) {
    e.preventDefault();
    axios.put(formElem.action, {
      name: eventNameElem.value,
      time: eventDateTimeElem.value,
      location: eventLocationElem.value,
      price: eventPriceElem.value,
      description: eventDescriptionElem.value,
      image: eventImageElem.value
    })
    .then(function(response) {
      console.log(response);
      window.location.replace(`/events/show?id=${urlParams.get("id")}`);
    })
    .catch(function(error) {
      console.log(error);
    });
  });
})();
