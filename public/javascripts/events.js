(function() {
  let eventContainer = document.querySelector("#events-container");

  axios.get("/api/events")
  .then(function (response) {
    response.data.forEach(event => {
      let eventLink = buildEventCard(event);
      eventContainer.append(eventLink);
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
})();
