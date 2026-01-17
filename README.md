# Weather Alerts App

## Lab: External API and Fetching - Weather Data

This project is a JavaScript web application that fetches **weather alerts** from the **US National Weather Service API** for a specific U.S. state. It demonstrates the use of **fetch**, **asynchronous programming**, **DOM manipulation**, and **error handling**.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Testing](#testing)


---

## Project Overview

As part of this lab, the app allows users to:

- Enter a two-letter **state abbreviation** (e.g., `NY`, `CA`)  
- Fetch **current watches, warnings, and advisories** from the National Weather Service API  
- Dynamically display alerts on the webpage  
- Handle invalid input, empty fields, and network errors gracefully  

This lab strengthens skills in:

- Working with **external APIs** using JavaScript  
- Handling **asynchronous operations** (`async/await`)  
- **DOM manipulation** for dynamic updates  
- **Error handling** for user-friendly feedback  

---

## Features

1. **Fetch Weather Alerts**
   - Retrieves data from the National Weather Service API based on state abbreviation.

2. **Dynamic DOM Updates**
   - Displays the number of current alerts and the headline of each alert.
   - Clears previous alerts on new fetch.

3. **Error Handling**
   - Validates input for proper state abbreviations.
   - Displays error messages for invalid input or failed requests.

4. **Clean UI**
   - Simple interface with input, button, and dynamic alert list.
   - Error messages are styled and hidden automatically when resolved.

---

## Technologies Used

- HTML5  
- CSS3  
- JavaScript (ES6)  
- Fetch API  
- Jest (for testing)

---

## Setup and Installation

1. **Clone the Repository**

```bash
git clone <your-forked-repo-url>
cd lab-external-api-weather

## Install dependencies 
npm install

## Usage

1. Enter a two-letter U.S. state abbreviation in the input field (e.g., MN for Minnesota).

2. Click the "Get Weather Alerts" button.

3. The app will fetch weather alerts and display:

4. The summary (e.g., Current watches, warnings, and advisories for Minnesota: 11)

5. A list of alert headlines


6. If the input is invalid or an error occurs, an error message will display below the alerts.
