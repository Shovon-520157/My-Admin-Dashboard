  const ctx = document.getElementById('earn_monthly');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jub', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: '# Monthly earn',
        data: [600, 100, 2021, 20, 432, 534, 600, 100, 2001, 20, 432, 2021],
        backgroundColor : [
          '#11b320','#ff9b24','#8972ff',
          ]
        // borderColor : ['rgba(0, 0, 0, 0.1)'],
        // borderWidth: 1,
      }]
    },
    options: {
      responsive: true,
    }
  });


    const earn_yearly = document.getElementById('earn_yearly');

      new Chart(earn_yearly, {
    type: 'bar',
    data: {
      labels: [2023, 2022, 2021, 2020],
      datasets: [{
        label: '# Yearly earn',
        data: [20, 4, 17, 8],
        backgroundColor : [
          '#11b320', '#8972ff', '#ff9b24',
          ]
        // borderColor : ['rgba(0, 0, 0, 0.1)'],
        // borderWidth: 1,
      }]
    },
    options: {
      responsive: true,
    }
  });