
function renderGraph() {
 var closedTasks = document.querySelectorAll('[style="display: none;"]').length;
 var taskChecked = document.getElementsByClassName('column checked').length;
 var amountOfTasks = document.querySelectorAll('.column').length;

 var totalTasks = amountOfTasks - closedTasks;
 var ctx = document.getElementById('myChart').getContext('2d');
 var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
   labels:
    ['Completed Tasks', 'Total Tasks'],



   datasets: [{
    label: 'Tasks',
    data: [taskChecked, totalTasks],
    backgroundColor: [
     'rgb(136, 136, 136)',
     'rgb(223, 221, 197)',
     'rgba(255, 206, 86, 0.2)',
     'rgba(75, 192, 192, 0.2)',
     'rgba(153, 102, 255, 0.2)',
     'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
     'rgb(136, 136, 136)',
     'rgb(223, 221, 197)',
     'rgba(255, 206, 86, 1)',
     'rgba(75, 192, 192, 1)',
     'rgba(153, 102, 255, 1)',
     'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1,

   }]
  },
  options: {
   responsive: true,
   maintainAspectRatio: false,

   scales: {
    xAxes: [{
     ticks: {

      fontSize: 30
     }
    }],
    yAxes: [{
     gridLines: {
      display: false,
     },

     ticks: {
      precision: 0,

      fontSize: 30,
      beginAtZero: true,

     }
    }]
   },
   legend: {
    labels: {
     // This more specific font property overrides the global property
     fontColor: 'green',
     fontSize: 30
    }
   }


  }
 });
}
