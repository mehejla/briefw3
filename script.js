
new Chart(document.getElementById("bubble-chart"), {
    type: 'bubble',
    data: {
      labels: "Africa",
      datasets: [
        {
          label: ["Mercury"],
          backgroundColor: "#9e9384",
          borderColor: "#9e9384",
          data: [{
            x: 4879,
            y: 57.9,
            r: 20
          }]
        }, {
          label: ["Mars"],
          backgroundColor: "#ce8a2d",
          borderColor: "#ce8a2d",
          data: [{
            x:  6792,
            y: 227.9,
            r: 30
          }]
        }, {
          label: ["Venus"],
          backgroundColor: "#ce552d",
          borderColor: "#ce552d",
          data: [{
            x: 12104,
            y: 108.2,
            r: 40
          }]
        }, {
          label: ["Earth"],
          backgroundColor: "#0fdd19",
          borderColor: "#0fdd19",
          data: [{
            x: 12756,
            y: 149.6,
            r: 50
          }]
          }, {
          label: ["Neptune"],
          backgroundColor: "#2d63ce",
          borderColor: "#2d63ce",
          data: [{
            x: 49528,
            y: 4497.1,
            r: 60
          }]
          }, {
          label: ["Uranus"],
          backgroundColor: "#84dbe0",
          borderColor: "#84dbe0",
          data: [{
            x: 51118,
            y: 2871.0,
            r: 70
          }]
          }, {
          label: ["Saturn"],
          backgroundColor: "#ccb93d",
          borderColor: "#ccb93d",
          data: [{
            x: 120536,
            y: 1427.0,
            r: 80
          }]
          }, {
          label: ["Jupiter"],
          backgroundColor: "#934c29",
          borderColor: "#934c29",
          data: [{
            x: 142984,
            y: 778.3,
            r: 90
          }]
           }, {
          label: ["."],
          backgroundColor: "transparent",
          borderColor: "transparent",
          data: [{
            x: 100,
            y: 6000,
            r: 1
          }]
           }, {
          label: ["."],
          backgroundColor: "transparent",
          borderColor: "transparent",
          data: [{
            x: 16000,
            y: -500,
            r: 1
          }]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: ''
      }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Distance to the sun in Million KM"
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Diameter in KM"
          }
        }]
      }
    }
});

