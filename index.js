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
      result.textContent = `Result: ${inputTemperature} ${from}`;
      return;
    }

    const convertedTemperature = convertTemperature(inputTemperature, from, to);
    result.textContent = `Result: ${convertedTemperature.toFixed(2)} ${to}`;
  });

  function convertTemperature(value, from, to) {
    if (from === "celsius") {
      if (to === "fahrenheit") {
        return (value * 9) / 5 + 32;
      } else if (to === "kelvin") {
        return value + 273.15;
      }
    } else if (from === "fahrenheit") {
      if (to === "celsius") {
        return ((value - 32) * 5) / 9;
      } else if (to === "kelvin") {
        return ((value - 32) * 5) / 9 + 273.15;
      }
    } else if (from === "kelvin") {
      if (to === "celsius") {
        return value - 273.15;
      } else if (to === "fahrenheit") {
        return ((value - 273.15) * 9) / 5 + 32;
      }
    }
    return value; // Default: no conversion
  }
});
