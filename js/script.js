const convert = document.getElementById("convert");
const reset = document.getElementById("reset");
const result = document.getElementById("result");
const inputTemperature = document.getElementById("inputTemperature");
const converters = document.getElementById("converters");

const convertCelsiusToFahrenheit = (temperature) => {
  let fahrenheit = (temperature * 9) / 5 + 32;
  return `${temperature.toFixed(2)} °C equivale a ${fahrenheit.toFixed(2)} °F`;
};

const convertCelsiusToKelvin = (temperature) => {
  let kelvin = temperature + 273.15;
  return `${temperature.toFixed(2)} °C equivale a ${kelvin.toFixed(2)} K`;
};

const convertFahrenheitToCelsius = (temperature) => {
  let celsius = ((temperature - 32) * 5) / 9;
  return `${temperature.toFixed(2)} °F equivale a ${celsius.toFixed(2)} °C`;
};

const convertFahrenheitToKelvin = (temperature) => {
  let kelvin = ((temperature - 32) * 5) / 9 + 273.15;
  return `${temperature.toFixed(2)} °F equivale a ${kelvin.toFixed(2)} K`;
};

const convertKelvinToFahrenheit = (temperature) => {
  let fahrenheit = ((temperature - 273.15) * 9) / 5 + 32;
  return `${temperature.toFixed(2)} K equivale a ${fahrenheit.toFixed(2)} °F`;
};

const convertKelvinToCelsius = (temperature) => {
  let celsius = temperature - 273.15;
  return `${temperature.toFixed(2)} K equivale a ${celsius.toFixed(2)} °C`;
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
      result.textContent = "Selecione uma opção válida!";
  }
};

const reloadPage = () => {
  window.location.reload();
};

const styleConvertButton = () => {
  convert.classList.add("animation-pulse");
};

convert.addEventListener("click", () => {
  convertTemperature();
  styleConvertButton();
});

reset.addEventListener("click", reloadPage);
