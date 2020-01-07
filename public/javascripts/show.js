(function() {
  let eventNameElem = document.querySelector("#event-name");
  let eventImageElem = document.querySelector("#event-image");
  let eventDateTimeElem = document.querySelector("#event-datetime");
  let eventPriceElem = document.querySelector("#event-price");
  let eventDescriptionElem = document.querySelector("#event-description");
  let eventEditElem = document.querySelector("#event-edit");
  let entryListElem = document.querySelector("#entry-list");

  const urlParams = new URLSearchParams(window.location.search);

  let getUrl = `/api/events/${urlParams.get("id")}`;
  eventEditElem.href = `/events/edit?id=${urlParams.get("id")}`;

  axios.get(getUrl)
  .then(function (response) {
    // handle success
    console.log(response);
    const event = response.data;
    eventNameElem.innerText = event.name;
    eventImageElem.src = event.image || "/images/tribe-related-events-placeholder.png";
    eventDateTimeElem.innerText = moment(event.time).format("LLL");
    eventPriceElem.innerText = "$" + event.price.toFixed(2);
    eventDescriptionElem.innerText = event.description;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
})();
