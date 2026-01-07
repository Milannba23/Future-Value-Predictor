# Future Value Predictor (Inflation Calculator) 📈

The **Future Value Predictor** is a modern web application designed to help users understand how inflation impacts the purchasing power of their money over time. It features a clean **Glassmorphism** interface that ensures readability while maintaining a visually appealing aesthetic.

## 🚀 Live Demo
**Test the application here:** [**https://milannba23.github.io/Future-Value-Predictor/**](https://milannba23.github.io/Future-Value-Predictor/)

## ✨ Features

* **Purchasing Power Analysis**: Calculates the future amount needed to match today's value based on expected inflation.
* **Multi-Currency Support**: Includes global currencies such as **EUR, USD, RSD, GBP, CHF, CNY, AED, INR, SEK, and AUD**.
* **Dynamic Formatting**: Results are automatically formatted using the European style (dot separators and two decimal places).
* **Glassmorphism UI**: Uses a semi-transparent layout with subtle blur effects for a modern look.
* **Instant Reset**: A dedicated "Clear All" function to quickly reset the calculation state.

## 🧪 QA Engineering Insights
As a QA-focused project, the following aspects were verified:
- **Boundary Value Analysis**: Tested with extreme year ranges and high inflation percentages.
- **Input Validation**: Ensures only numerical values are processed, preventing calculation errors (NaN).
- **Cross-Browser Compatibility**: Verified styling and logic consistency across Chrome, Firefox, and Safari.

## 🛠️ Technical Stack

* **HTML5**: Semantic structure for forms and displays.
* **CSS3**: Advanced styling including Flexbox, backdrop filters, and custom transitions.
* **JavaScript (ES6+)**: Handles mathematical logic and real-time DOM manipulation.

## 🧮 Calculation Logic

The application calculates the future value using the compound interest formula:

$$Final\ Value = Amount \times (1 + \frac{Inflation\ Rate}{100})^{Years}$$

The script processes user inputs for money, years, and inflation rate to compute and display the adjusted value instantly.

## 📂 Project Structure

/
├── index.html       # Main application structure
├── style.css        # Layout, colors, and Glassmorphism effects
├── script.js        # Calculation logic and UI reset functions
└── img/             # Assets directory
    └── inflation.jpg # Background image
