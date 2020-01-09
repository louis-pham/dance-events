(function() {
  let featuredEventsElem = document.querySelector("#featured");
  let someEventsElem = document.querySelector("#some-events");

  axios.get("/api/events/featured")
  .then(function (response) {
    // handle success
    console.log(response);
    response.data.forEach(event => {
      let eventLink = buildEventCard(event);
      featuredEventsElem.append(eventLink);
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  axios.get("/api/events/some")
  .then(function (response) {
    // handle success
    console.log(response);
    response.data.forEach(event => {
      let eventLink = buildEventCard(event);
      someEventsElem.append(eventLink);
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
})();
