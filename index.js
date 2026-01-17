// index.js

// Function to fetch weather alerts for a given state abbreviation
async function fetchWeatherAlerts(state) {
  const alertsDisplay = document.getElementById('alerts-display')
  const errorDiv = document.getElementById('error-message')
  const stateInput = document.getElementById('state-input')

  // Clear previous alerts and errors
  alertsDisplay.innerHTML = ''
  errorDiv.textContent = ''
  errorDiv.classList.add('hidden')

  // Validate input
  if (!state || state.length !== 2) {
    errorDiv.textContent = 'Please enter a valid 2-letter state abbreviation.'
    errorDiv.classList.remove('hidden')
    return
  }

  try {
    const response = await fetch(`https://api.weather.gov/alerts/active?area=${state.toUpperCase()}`)
    if (!response.ok) {
      throw new Error(`Error fetching alerts for ${state.toUpperCase()}`)
    }

    const data = await response.json()
    displayAlerts(data)
    stateInput.value = '' // Clear input after successful fetch
  } catch (error) {
    displayError(error.message)
  }
}

// Function to display alerts in the DOM
function displayAlerts(data) {
  const alertsDisplay = document.getElementById('alerts-display')
  alertsDisplay.innerHTML = '' // Clear previous content

  const alertsCount = data.features.length

  // Display summary as expected by the test
  const summary = document.createElement('p')
  summary.textContent = `Weather Alerts: ${alertsCount}`
  alertsDisplay.appendChild(summary)

  // Display each alert headline
  data.features.forEach(alert => {
    const alertP = document.createElement('p')
    alertP.textContent = alert.properties.headline
    alertsDisplay.appendChild(alertP)
  })

  // Clear any previous error message
  const errorDiv = document.getElementById('error-message')
  errorDiv.textContent = ''
  errorDiv.classList.add('hidden')
}

// Function to display error messages in the DOM
function displayError(message) {
  const errorDiv = document.getElementById('error-message')
  errorDiv.textContent = message
  errorDiv.classList.remove('hidden')
}

// Setup event listeners
function setupEventListeners() {
  document.getElementById('fetch-alerts').addEventListener('click', () => {
    const state = document.getElementById('state-input').value.trim()
    fetchWeatherAlerts(state)
  })
}

// Initialize event listeners when DOM is ready
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

// Export functions for Jest testing
module.exports = {
  fetchWeatherAlerts,
  displayAlerts,
  displayError,
  setupEventListeners,
}