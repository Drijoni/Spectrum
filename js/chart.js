const data = {

    labels: [
        "Artist's Fund",
        'Early backers',
        'Treasury',
        'Advisors',
        'Rewards',
        'Balancer LBP',
        'Initial Liquidity',
        'Team',
        'AirDrops, Parters & Ecosystem',

    ],

    datasets: [{
        borderWidth: 0,
        data: [5, 15, 15, 5, 16, 5, 20, 9, 7],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};
const config = {
    responsive: false,
    type: 'doughnut',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false
            }  
        },        
    },

};

const myChart = new Chart(
    document.getElementById('tokenChart'),
    config
);
