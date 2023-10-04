document.addEventListener("DOMContentLoaded", function () {
  const temperatureInput = document.getElementById("temperatureInput");
  const fromScale = document.getElementById("fromScale");
  const toScale = document.getElementById("toScale");
  const convertButton = document.getElementById("convertButton");
  const result = document.getElementById("result");

  convertButton.addEventListener("click", function () {
    const inputTemperature = parseFloat(temperatureInput.value);
    const from = fromScale.value;
    const to = toScale.value;

    if (isNaN(inputTemperature)) {
      alert("Please enter a valid number.");
      return;
    }

    if (from === to) {
      result.textContent = "Result: " + inputTemperature + " " + from;
      return;
    }

    if (from === "celsius") {
      if (to === "fahrenheit") {
        const convertedTemperature = (inputTemperature * 9) / 5 + 32;
        result.textContent =
          "Result: " + convertedTemperature.toFixed(2) + " " + to;
      } else if (to === "kelvin") {
        const convertedTemperature = inputTemperature + 273.15;
        result.textContent =
          "Result: " + convertedTemperature.toFixed(2) + " " + to;
      }
    } else if (from === "fahrenheit") {
      if (to === "celsius") {
        const convertedTemperature = ((inputTemperature - 32) * 5) / 9;
        result.textContent =
          "Result: " + convertedTemperature.toFixed(2) + " " + to;
      } else if (to === "kelvin") {
        const convertedTemperature = ((inputTemperature - 32) * 5) / 9 + 273.15;
        result.textContent =
          "Result: " + convertedTemperature.toFixed(2) + " " + to;
      }
    } else if (from === "kelvin") {
      if (to === "celsius") {
        const convertedTemperature = inputTemperature - 273.15;
        result.textContent =
          "Result: " + convertedTemperature.toFixed(2) + " " + to;
      } else if (to === "fahrenheit") {
        const convertedTemperature = ((inputTemperature - 273.15) * 9) / 5 + 32;
        result.textContent =
          "Result: " + convertedTemperature.toFixed(2) + " " + to;
      }
    }
  });
});
