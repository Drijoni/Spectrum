var data = {
  labels: [
    "Artist's Fund",
    "Early backers",
    "Treasury",
    'Advisors',
    'Rewards',
    'Balancer LBP',
    'Initial Liquidity',
    'Team',
    'AirDrops, Parters & Ecosystem'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [5, 15, 15,5,16,5,20,9,7],
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

Chart.pluginService.register({
  beforeDraw: function (chart) {
    var width = chart.chart.width,
      height = chart.chart.height,
      ctx = chart.chart.ctx;

    ctx.restore();
    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var text = "1B";
    var desc = "Total tokens"
    var descX = Math.round((width - ctx.measureText(text).width) / 2 -30 );
    var descY = height / 1.8;


    var textX = Math.round((width - ctx.measureText(text).width) / 2+20 );
    var textY = height / 2.1;

    ctx.font = '18px MenuShapiro';
    ctx.fillStyle = 'white';

    
    ctx.fillText(text, textX, textY);
    ctx.fillText(desc, descX, descY);
    ctx.save();
  }
});

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