// Update Current Year in Footer
document.addEventListener('DOMContentLoaded', () => {
  const currentYearElement = document.getElementById('currentDate')
  if (currentYearElement) {
    const currentYear = new Date().getFullYear()
    currentYearElement.innerHTML = `&copy; 2021 — ${currentYear} `
  }
})
