import { months } from "@/helper/Utils";

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

export const doughnutChartData1 = {
  labels: ['M', 'F', 'N'],
  datasets: [
    {
      label: 'USER TYPE DATASET',
      data: [400, 45, 100],
      backgroundColor: [
        'rgb(255, 99, 132',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86',
      ],
      hoverOffset: 4,
    },
  ],
};
export const doughnutChartData2 = {
  labels: ['Local', 'US', 'Global'],
  datasets: [
    {
      label: 'REGION DATASET',
      data: [160, 25, 200],
      backgroundColor: [
        'rgb(255, 99, 132',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86',
      ],
      hoverOffset: 4,
    },
  ],
};
export const doughnutChartData3 = {
  labels: ['< 21', '22 to 45', '46+'],
  datasets: [
    {
      label: 'USER AGE DATASET',
      data: [50, 280, 90],
      backgroundColor: [
        'rgb(255, 99, 132',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86',
      ],
      hoverOffset: 4,
    },
  ],
};
export const doughnutChartData4 = {
  labels: ['< $60k', '~$60k', '$60k+'],
  datasets: [
    {
      label: 'USER INCOME DATASET',
      data: [45, 145, 200],
      backgroundColor: [
        'rgb(255, 99, 132',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86',
      ],
      hoverOffset: 4,
    },
  ],
};