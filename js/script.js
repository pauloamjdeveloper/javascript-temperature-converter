const convert = document.getElementById("convert");
const reset = document.getElementById("reset");
const result = document.getElementById("result");
const inputTemperature = document.getElementById("inputTemperature");
const converters = document.getElementById("converters");

const convertCelsiusToFahrenheit = (temperature) => {
  let fahrenheit = (temperature * 9) / 5 + 32;
  return `${temperature.toFixed(2)} °C (Celsius) equivalem a ${fahrenheit.toFixed(2)} °F (Fahrenheit)`;
};

const convertCelsiusToKelvin = (temperature) => {
  let kelvin = temperature + 273.15;
  return `${temperature.toFixed(2)} °C (Celsius) equivalem a ${kelvin.toFixed(2)} K (Kelvin)`;
};

const convertFahrenheitToCelsius = (temperature) => {
  let celsius = ((temperature - 32) * 5) / 9;
  return `${temperature.toFixed(2)} °F (Fahrenheit) equivalem a ${celsius.toFixed(2)} °C (Celsius)`;
};

const convertFahrenheitToKelvin = (temperature) => {
  let kelvin = ((temperature - 32) * 5) / 9 + 273.15;
  return `${temperature.toFixed(2)} °F (Fahrenheit) equivalem a ${kelvin.toFixed(2)} K (Kelvin)`;
};

const convertKelvinToFahrenheit = (temperature) => {
  let fahrenheit = ((temperature - 273.15) * 9) / 5 + 32;
  return `${temperature.toFixed(2)} K (Kelvin) equivalem a ${fahrenheit.toFixed(2)} °F (Fahrenheit)`;
};

const convertKelvinToCelsius = (temperature) => {
  let celsius = temperature - 273.15;
  return `${temperature.toFixed(2)} K (Kelvin) equivale a ${celsius.toFixed(2)} °C (Celsius)`;
};

const convertTemperature = () => {
  const selectedOption = converters.value;
  const temperature = parseFloat(inputTemperature.value);

  switch (selectedOption) {
    case "optionCelsiusToFahrenheit":
      result.textContent = convertCelsiusToFahrenheit(temperature);
      break;
    case "optionCelsiusToKelvin":
      result.textContent = convertCelsiusToKelvin(temperature);
      break;
    case "optionFahrenheitToCelsius":
      result.textContent = convertFahrenheitToCelsius(temperature);
      break;
    case "optionFahrenheitToKelvin":
      result.textContent = convertFahrenheitToKelvin(temperature);
      break;
    case "optionKelvinToFahrenheit":
      result.textContent = convertKelvinToFahrenheit(temperature);
      break;
    case "optionKelvinToCelsius":
      result.textContent = convertKelvinToCelsius(temperature);
      break;
    default:
      result.textContent = "Verifique se os valores foram preenchidos ou selecione uma opção válida!";
  }
};

const reloadPage = () => {
  window.location.reload();
};

const styleConvertButton = () => {
  convert.classList.add("animation-pulse");
};

const updateYear = () => {
  const currentYearElement = document.getElementById("currentYear");
  const currentYear = new Date().getFullYear();
  currentYearElement.textContent = currentYear;
}

window.onload = updateYear;

convert.addEventListener("click", () => {
  convertTemperature();
  styleConvertButton();
});

reset.addEventListener("click", reloadPage);
