(function() {
  let eventNameElem = document.querySelector("#event-name");
  let eventCreatorElem = document.querySelector("#event-creator");
  let eventImageElem = document.querySelector("#event-image");
  let eventDateTimeElem = document.querySelector("#event-datetime");
  let eventLocationElem = document.querySelector("#event-location");
  let eventPriceElem = document.querySelector("#event-price");
  let eventDescriptionElem = document.querySelector("#event-description");
  let entryListElem = document.querySelector("#entry-list");
  let deleteFormElem = document.querySelector("form#delete-event");
  const urlParams = new URLSearchParams(window.location.search);
  const getUrl = `/api/events/${urlParams.get("id")}`;

  axios.get(getUrl)
  .then(function(response) {
    const event = response.data;
    eventNameElem.innerText = event.name;
    if (event.creator) {
      eventCreatorElem.innerText = event.creator.handle || event.creator.name;
      eventCreatorElem.href = `/users/${event.creator._id}`;
    } else {
      eventCreatorElem.innerText = "Not found";
    }
    eventImageElem.src = event.image || "/images/tribe-related-events-placeholder.png";
    eventDateTimeElem.innerText = moment(event.time).format("LLL");
    eventLocationElem.innerText = event.location;
    eventPriceElem.innerText = "$" + event.price.toFixed(2);
    eventDescriptionElem.innerText = event.description;

    event.entries.forEach(user => {
      const signedUpUserElem = document.createElement("li");
      signedUpUserElem.innerHTML = `
        <a href="/users/${user._id}">${user.handle || user.name}</a>
      `;
      entryListElem.appendChild(signedUpUserElem);
    });
  })
  .catch(function(error) {
    console.log(error);
  });

  deleteFormElem.addEventListener("submit", function(e) {
    e.preventDefault();
    axios.delete(deleteFormElem.action)
    .then(function(response) {
      window.location.replace("/events");
    })
    .catch(function(error) {
      console.log(error);
    });
  });
})();
