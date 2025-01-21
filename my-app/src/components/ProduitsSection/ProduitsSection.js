import React from 'react';
import './ProduitsSection.css'; // Importez le fichier CSS pour le style
import logoHead from '../../assets/logoHead.png'; // Importez le logoHead
import { Pie, Bar, Line } from 'react-chartjs-2'; // Importez les composants de graphiques
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';

// Enregistrer les modules nécessaires pour Chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

const ProduitsSection = () => {
  // Données pour le graphique "Project Status" (Pie Chart)
  const pieData = {
    labels: ['DEV', 'Design', 'Done', 'In Progress'],
    datasets: [
      {
        label: 'Project Status',
        data: [15, 5.5, 11.5, 6],
        backgroundColor: ['#4caf50', '#ff9800', '#9c27b0', '#2196f3'],
      },
    ],
  };

  // Données pour "Tasks Left by Week" (Bar Chart)
  const barData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
    datasets: [
      {
        label: 'Tasks Left',
        data: [32, 11, 25, 15, 5, 14, 26, 9],
        backgroundColor: ['#4caf50', '#ff9800', '#9c27b0', '#2196f3', '#e91e63', '#00bcd4', '#ffc107', '#795548'],
      },
    ],
  };

  // Données pour "Burndown Chart" (Line Chart)
  const lineData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
      {
        label: 'Remaining Tasks',
        data: [50, 55, 60, 45, 20],
        borderColor: '#e74c3c',
        backgroundColor: 'rgba(50, 110, 26, 0.2)',
        tension: 0.4,
      },
    ],
  };

  // Données pour "This Week Priorities" (Bar Chart)
  const prioritiesData = {
    labels: ['Priority 1', 'Priority 2', 'Priority 3', 'Priority 4'],
    datasets: [
      {
        label: 'Priority Level',
        data: [8, 5, 3, 2],
        backgroundColor: ['#f39c12', '#27ae60', '#8e44ad', '#3498db'],
      },
    ],
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <img src={logoHead} alt="Logo" className="navbar-logo" />
        </div>
        <div className="sidebar-header">
          <h1>Home</h1>
          <div className="inbox">
            <span>Alert</span>
            <span className="notification">5</span>
          </div>
        </div>
        <div className="sidebar-section">
          <h2>Spaces</h2>
          <ul>
            <li>Marketing</li>
            <li>Product</li>
            <li>Engineering</li>
            <li>+ Add Space</li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h2>More</h2>
          <ul>
            <li>Settings</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      {/* Section Produits */}
      <section className="section section-produits" id="produits">
        <div className="dashboard-container">
          {/* Carte : Project Status */}
          <div className="card project-status-card produits-card">
          <h3>Project Status</h3>
            <div className="project-chart">
              <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>

          {/* Carte : Tasks Left by Week */}
          <div className="card project-status-card produits-card">
          <h3>Tasks Left by Week</h3>
            <div className="project-chart">
              <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>

          {/* Carte : Burndown Chart */}
          <div className="card project-status-card produits-card">
          <h3>Burndown Chart</h3>
            <div className="project-chart">
              <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>

          {/* Carte : This Week Priorities */}
<div className="card project-status-card produits-card">
            <h3>This Week Priorities</h3>
            <div className="project-chart">
              <Bar data={prioritiesData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProduitsSection;