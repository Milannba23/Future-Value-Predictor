# Future Value Predictor (Inflation Calculator)

The **Future Value Predictor** is a modern web application designed to help users understand how inflation impacts the purchasing power of their money over time. It features a clean "Glassmorphism" interface that ensures readability while maintaining a visually appealing background.



## 🚀 Features

* **Purchasing Power Analysis**: Calculates the future amount needed to match today's value based on expected inflation.
* **Multi-Currency Support**: Includes a wide range of global currencies such as EUR, USD, RSD, GBP, CHF, CNY, AED, INR, SEK, and AUD.
* **Dynamic Formatting**: Results are automatically formatted using the European style (dot separators and two decimal places) for professional clarity.
* **Glassmorphism UI**: Uses a semi-transparent layout with subtle blur effects to keep the "inflation" background image visible.
* **Instant Reset**: A dedicated "Clear All" function to quickly wipe inputs and start a new calculation.

## 🛠️ Technical Stack

* **HTML5**: Semantic structure for the input forms and result display.
* **CSS3**: Advanced styling including Flexbox for centering, backdrop filters for the glass effect, and custom transitions for buttons.
* **JavaScript (ES6+)**: Handles the mathematical logic using the compound interest formula and DOM manipulation for real-time updates.

## 🧮 Calculation Logic

The application calculates the future value using the following formula:

$$Final Value = Amount \times (1 + \frac{Inflation Rate}{100})^{Years}$$

The script fetches the user's input for money, years, and inflation rate, then computes the result and displays it in a dedicated results container.

## 📂 Project Structure


/
├── index.html   # Main application structure
├── style.css    # Layout, colors, and Glassmorphism effects
├── script.js    # Calculation logic and UI reset functions
└── img/         # Directory for background assets
    └── inflation.jpg  # Background image used in the body