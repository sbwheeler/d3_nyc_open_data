$(document).ready(() => {
  $.ajax({
    url: 'https://data.cityofnewyork.us/resource/qiz3-axqb.csv',
    type: 'GET',
    data: {
      $limit: 50000,
      $$app_token: 'temp',
    },
  }).done((data) => {
    const newData = d3.csvParse(data);
    const boroughObj = {
      MANHATTAN: 0,
      BROOKLYN: 0,
      QUEENS: 0,
      'STATEN ISLAND': 0,
      BRONX: 0,
    };

    newData.forEach((data) => {
      if (data.borough) boroughObj[data.borough] += 1;
    });
    const myData = [];
    for (let key in boroughObj) myData.push(boroughObj[key])

    console.log(boroughObj);

    const scale = d3.scaleLinear()
      .domain([0, d3.max(myData)])
      .range([0, 100]);

    d3.select('#chart')
      .selectAll('div')
      .data(myData)
      .enter()
      .append('div')
      .style('width', d => scale(d) * 10 + 'px')
      .text(d => d);
  });
});
