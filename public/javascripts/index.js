(function() {
  let featuredEventsElem = document.querySelector("#featured");
  let seeMoreElem = document.querySelector("#see-more");
  let someEventsElem = seeMoreElem.parentNode;

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
      someEventsElem.insertBefore(eventLink, seeMoreElem);
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
