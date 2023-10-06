import { months } from "@/helper/Utils";

const labels = months({ count: 7 });

export const lineChartData = {
  labels: months({ count: 12 }),
  datasets: [
    {
      label: 'TRANSACTIONS',
      data: [65, 59, 90, 81, 56, 55, 60, 49, 123, 70, 45, 43],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: .1,
    },
  ],
};

export const doughnutChartData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'TRANSACTION DATASET',
      data: [400, 45, 100],
      backgroundColor: [
        'rgb(255, 99, 132',
        'rgb(54, 162, 235',
        'rgb(255, 205, 86',
      ],
      hoverOffset: 4,
    },
  ],
};