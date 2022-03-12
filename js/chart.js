var data = {
  labels: [
    "Artist's Fund",
    "Early backers",
    "Treasury",
    'Advisors',
    'Rewards',
    'Ecosystem',
    'Initial Liquidity',
    'Team',
    'AirDrops, Parters'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [5, 20, 15,5,16,4,20,10,5],
    backgroundColor: [
      '#c53ba9',
      '#0072c5',
      '#48b2ff',
      '#9e7df4',
      '#04d1f7',
      '#48b2ff',
      '#02ffff',
      '#00dcff',
      '#00a1e3',
    ],
    hoverOffset: 4
  }]
    
};

var chart = new Chart(document.getElementById('tokenChart'), {
  type: 'doughnut',
  data: data,
  options: {
    responsive: true,

    legend: {
      display: false,
    },

    elements: {
      arc: {
        borderWidth: 0, // <-- Set this to zero
        borderColor: '#333'
      },

    }
  }
});