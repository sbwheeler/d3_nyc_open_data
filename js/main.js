$(document).ready(() => {
  $.ajax({
    url: 'https://data.cityofnewyork.us/resource/qiz3-axqb.json',
    type: 'GET',
    data: {
      $limit: 5000,
      $$app_token: 'VtKIgOcUnz01eayxKzQW1UuK9',
    },
  }).done((data) => {
    d3.json(data, (data) => {
      console.log(data);
      console.log(d3)
    });
  });
});
