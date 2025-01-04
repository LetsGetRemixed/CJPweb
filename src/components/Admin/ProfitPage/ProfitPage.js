import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const ProfitPage = () => {
  const [payments, setPayments] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [filter, setFilter] = useState("currentMonth");

  // Helper function to format dates
  const formatDate = (date) => new Date(date).toLocaleDateString();

  const handleAddPayment = () => {
    if (name && amount) {
      setPayments((prev) => [
        ...prev,
        {
          id: Date.now(),
          name,
          amount: parseFloat(amount),
          date: new Date(),
        },
      ]);
      setName("");
      setAmount("");
    }
  };

  const groupedPayments = payments.reduce((acc, payment) => {
    acc[payment.name] = acc[payment.name] || [];
    acc[payment.name].push(payment);
    return acc;
  }, {});

  const getFilteredPayments = () => {
    const now = new Date();
    return payments.filter((payment) => {
      const paymentDate = new Date(payment.date);
      switch (filter) {
        case "currentMonth":
          return (
            paymentDate.getMonth() === now.getMonth() &&
            paymentDate.getFullYear() === now.getFullYear()
          );
        case "previousMonth":
          const previousMonth = new Date(now.setMonth(now.getMonth() - 1));
          return (
            paymentDate.getMonth() === previousMonth.getMonth() &&
            paymentDate.getFullYear() === previousMonth.getFullYear()
          );
        case "yearToDate":
          return paymentDate.getFullYear() === now.getFullYear();
        case "year":
          return paymentDate.getFullYear() === now.getFullYear();
        default:
          return true;
      }
    });
  };

  const chartData = {
    labels: getFilteredPayments().map((payment) => formatDate(payment.date)),
    datasets: [
      {
        label: "Payments",
        data: getFilteredPayments().map((payment) => payment.amount),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  // Calculate total profit for filtered payments
  const totalProfit = getFilteredPayments().reduce(
    (total, payment) => total + payment.amount,
    0
  );

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-900 text-white font-code p-8">
        <h1 className="text-3xl font-heading text-code-green text-center mb-6">
          Profit Page
        </h1>

        {/* Add Payment */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-code-blue mb-4">
            Add New Payment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="rounded bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-code-green"
            />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              className="rounded bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-code-green"
            />
            <button
              onClick={handleAddPayment}
              className="px-4 py-2 bg-code-orange text-black rounded hover:bg-orange-500 transition font-bold"
            >
              Add Payment
            </button>
          </div>
        </div>

        {/* Profit Chart */}
        <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="rounded bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-code-green"
              >
                <option value="currentMonth">Current Month</option>
                <option value="previousMonth">Previous Month</option>
                <option value="yearToDate">Year to Date</option>
                <option value="year">Year</option>
              </select>
              <span className="text-lg font-bold text-code-green">
                Total Profit: ${totalProfit.toFixed(2)}
              </span>
            </div>
          <div className="bg-gray-800 p-4 rounded shadow">
            <Line data={chartData} />
          </div>
        </div>

       {/* All Transactions */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-code-blue mb-4">
                  All Transactions
                </h2>
                <ul className="space-y-2">
                  {payments.map((payment) => (
                    <li
                      key={payment.id}
                      className="flex justify-between items-center bg-gray-800 p-2 rounded"
                    >
                      <div className="flex-1">
                        <span className="block text-sm">{payment.name}</span>
                        <span className="block text-gray-400 text-xs">
                          ${payment.amount.toFixed(2)} | {formatDate(payment.date)}
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          setPayments((prev) => prev.filter((p) => p.id !== payment.id))
                        }
                        className="ml-4 px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
        {/* Grouped Payments */}
        <div>
          <h2 className="text-xl font-bold text-code-blue mb-4">
            Grouped Payments
          </h2>
          {Object.entries(groupedPayments).map(([name, payments]) => (
            <div
              key={name}
              className="bg-gray-800 p-4 rounded shadow mb-4 space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-code-green">{name}</span>
                <span className="font-bold text-white">
                  Total: $
                  {payments.reduce(
                    (total, payment) => total + payment.amount,
                    0
                  ).toFixed(2)}
                </span>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-code-blue">
                  View Payments
                </summary>
                <ul className="mt-2 space-y-1">
                  {payments.map((payment) => (
                    <li
                      key={payment.id}
                      className="flex justify-between bg-gray-700 p-2 rounded"
                    >
                      <span>${payment.amount.toFixed(2)}</span>
                      <span className="text-gray-400 text-sm">
                        {formatDate(payment.date)}
                      </span>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfitPage;

