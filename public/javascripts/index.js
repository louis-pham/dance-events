(function() {
  let featuredEventsElem = document.querySelector("#featured");
  let seeMoreElem = document.querySelector("#see-more");
  let someEventsElem = seeMoreElem.parentNode;

  axios.get("/api/events/featured")
  .then(function (response) {
    response.data.forEach(event => {
      let eventLink = buildEventCard(event);
      featuredEventsElem.append(eventLink);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

  axios.get("/api/events/some")
  .then(function (response) {
    response.data.forEach(event => {
      let eventLink = buildEventCard(event);
      someEventsElem.insertBefore(eventLink, seeMoreElem);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
})();
