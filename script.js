const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฏาคม", "สิงหาคม"],
        datasets: [{
            label: 'รายรับ',
            data: [47232.78, 48220.01, 6453, 17655, 48123, 38469.11, 53764.94, 12010],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }, {
            label: 'รายจ่าย',
            data: [48220.01, 42941, 9360.61, 17746.06, 46792.50, 36623.06, 50617.36, 14635.50],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'กราฟแสดงรายรับและรายจ่ายตั้งแต่เดือนมกราคม-สิงหาคม พ.ศ.2566'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                stepSize: 10000, 
                max: 60000 
            }
        }
    }
});

const labels = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฏาคม", "สิงหาคม"];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'รายรับ',
      data: [47232.78, 48220.01, 6453, 17655, 48123, 38469.11, 53764.94, 12010], 
      fill: false,
      borderColor: 'rgba(54, 162, 235, 1)', 
      tension: 0.1
    },
    {
      label: 'รายจ่าย',
      data: [48220.01, 42941, 9360.61, 17746.06, 46792.50, 36623.06, 50617.36, 14635.50], 
      fill: false,
      borderColor: 'rgba(255, 99, 132, 1)', 
      tension: 0.1
    }
  ]
};

const config = {
  type: 'line',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 60000,
        stepSize: 10000
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'กราฟแสดงรายรับและรายจ่ายตั้งแต่เดือนมกราคม-สิงหาคม พ.ศ.2566'
      }
    }
  }
};

const myLineChart = new Chart(document.getElementById('myLineChart'), config);

const data2 = {
    labels: ['ค่ากิน', 'ออม', 'ของใช้ส่วนตัว', 'ซักผ้า', 'อื่น ๆ'],
    datasets: [{
        data: [50, 10, 20, 5, 15], 
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)'
        ],
        hoverOffset: 4
    }]
};

const config1 = {
    type: 'doughnut',
    data: data2,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'การแบ่งเงินใช้ในแต่ละเดือนคิดเป็นเปอร์เซ็นต์'
            },
            legend: {
                position: 'top'
            }
        }
    }
};

const myDoughnutChart = new Chart(document.getElementById('myDoughnutChart'), config1);
