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
});
