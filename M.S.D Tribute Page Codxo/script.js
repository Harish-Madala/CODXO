// Chart.js Career Statistics
const ctx = document.getElementById('statsChart').getContext('2d');
const statsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['ODIs', 'T20Is', 'Tests'],
        datasets: [{
            label: 'Runs Scored',
            data: [10773, 1617, 4876],
            backgroundColor: ['#1e3c72', '#2a5298', '#00d4ff'],
            borderColor: ['#1e3c72', '#2a5298', '#00d4ff'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
