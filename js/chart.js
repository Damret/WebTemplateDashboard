var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['April', 'Mei', 'Juni'],
        datasets: [{
            label: 'Page Views',
            data: [2500, 2000, 3000],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
            ],
            borderColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('myChart1');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        
        datasets: [{
            label: 'Page Views',
            data: [2500, 2000, 3000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }],
        labels: ['Chrome', 'Mozilla', 'Safari'],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('myChart3');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September'],
        datasets: [{
            label: 'Page Views',
            data: [2500, 2000, 3000, 3300, 4000, 3800],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('myChart4');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September'],
        datasets: [{
            label: 'Page Views',
            data: [2500, 2000, 3000, 3300, 4000, 3800],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
