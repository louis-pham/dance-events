(function() {
  let eventContainer = document.querySelector("#events-container");

  axios.get("/api/events")
  .then(function (response) {
    // handle success
    console.log(response);
    response.data.forEach(event => {
      console.log(event.description);
      let eventLink = buildEventCard(event);
      eventContainer.append(eventLink);
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  function buildEventCard(event) {
    let eventLink = document.createElement("a");
    eventLink.classList.add("event-link");
    eventLink.href = `/events/show?id=${event._id}`;
    let eventItem = document.createElement("div");
    eventItem.classList.add("event");
    eventItem.style.background = `url(${event.image || "/images/tribe-related-events-placeholder.png"}) center calc(50% - 100px) no-repeat`;
    let momentDate = moment(event.time);
    eventItem.innerHTML = `
      <div class="event-details">
        <h2 class="event__title">${event.name}</h2>
        <h3 class="event__datetime">${momentDate.format(" 	lll")}</h3>
        <h3 class="event__price">$${event.price.toFixed(2)}</h3>
      </div>
    `;
    eventLink.appendChild(eventItem);
    return eventLink;
  }
})();
