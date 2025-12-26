import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function MonthlyBarChart({ monthlyData }) {
  // monthlyData = [{ month: 'Jan', income: 2000, expense: 1500 }, ...]

  const data = {
    labels: monthlyData.map(item => item.month),
    datasets: [
      {
        label: 'Income',
        data: monthlyData.map(item => item.income),
        backgroundColor: '#36a2eb',
      },
      {
        label: 'Expense',
        data: monthlyData.map(item => item.expense),
        backgroundColor: '#ff6384',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    }
  };

  return <Bar data={data} options={options} />;
}