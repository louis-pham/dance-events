(function() {
  let eventNameElem = document.querySelector("#event-name");
  let eventCreatorElem = document.querySelector("#event-creator");
  let eventImageElem = document.querySelector("#event-image");
  let eventDateTimeElem = document.querySelector("#event-datetime");
  let eventLocationElem = document.querySelector("#event-location");
  let eventPriceElem = document.querySelector("#event-price");
  let eventDescriptionElem = document.querySelector("#event-description");
  // let eventEditElem = document.querySelector("#event-edit");
  let entryListElem = document.querySelector("#entry-list");
  let formElem = document.querySelector("form");
  const urlParams = new URLSearchParams(window.location.search);

  const getUrl = `/api/events/${urlParams.get("id")}`;

  axios.get(getUrl)
  .then(function(response) {
    // handle success
    console.log(response);
    const event = response.data;
    eventNameElem.innerText = event.name;
    eventCreatorElem.innerText = event.creator.name;
    eventCreatorElem.href = `/users/${event.creator._id}`;
    eventImageElem.src = event.image || "/images/tribe-related-events-placeholder.png";
    eventDateTimeElem.innerText = moment(event.time).format("LLL");
    eventLocationElem.innerText = event.location;
    eventPriceElem.innerText = "$" + event.price.toFixed(2);
    eventDescriptionElem.innerText = event.description;
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  });

  formElem.addEventListener("submit", function(e) {
    e.preventDefault();
    axios.delete(formElem.action)
    .then(function(response) {
      console.log(response);
      window.location.replace("/events");
    })
    .catch(function(error) {
      console.log(error);
    });
  });
})();
