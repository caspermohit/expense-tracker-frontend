import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpensePieChart({ data }) {
  const expenseMap = [
    { label: "House", value: data.houseExpenses },
    { label: "Food", value: data.foodExpenses },
    { label: "Clothes", value: data.clothesExpenses },
    { label: "Entertainment", value: data.entertainmentExpenses },
    { label: "Transportation", value: data.transportationExpenses },
    { label: "Health", value: data.healthExpenses },
    { label: "Education", value: data.educationExpenses },
    { label: "Others", value: data.othersExpenses },
  ];

  // Remove zero values
  const filtered = expenseMap.filter(item => item.value > 0);

  const chartData = {
    labels: filtered.map(item => item.label),
    datasets: [
      {
        data: filtered.map(item => item.value),
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#ffcd56",
          "#4caf50",
          "#ba68c8",
          "#ff7043",
          "#619e9e",
          "#b524b5"
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={chartData} />;
}