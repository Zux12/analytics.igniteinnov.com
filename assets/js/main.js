async function loadComponent(selector, file) {
  const target = document.querySelector(selector);
  if (!target) return;

  try {
    const response = await fetch(file);
    const html = await response.text();
    target.innerHTML = html;
  } catch (error) {
    console.error(`Failed to load ${file}:`, error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("#header-placeholder", "/components/header.html");
  await loadComponent("#footer-placeholder", "/components/footer.html");

  initChart();
});

function initChart() {
  const ctx = document.getElementById('analyticsChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [{
        label: 'Performance Index',
        data: [65, 72, 78, 75, 85, 92, 98],
        borderColor: '#38bdf8',
        backgroundColor: 'rgba(56,189,248,0.15)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#38bdf8'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: '#c7d5ea'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#9fb2cb'
          },
          grid: {
            color: 'rgba(255,255,255,0.05)'
          }
        },
        y: {
          ticks: {
            color: '#9fb2cb'
          },
          grid: {
            color: 'rgba(255,255,255,0.05)'
          }
        }
      }
    }
  });
}
