import { useContext } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from '../../contexts/CurrentTemperatureUnitContext';

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  console.log(currentTemperatureUnit);
  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onChange={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      >
        <p
          className={`switch__temp-F ${
            currentTemperatureUnit === "F" ? "switch__active" : "switch_none"
          }`}
        >
          C
        </p>
        <p
          className={`switch__temp-C ${
            currentTemperatureUnit === "C" ? "switch__active" : "switch_none"
          }`}
        >
          F
        </p>
      </span>
    </label>
  );
};

export default ToggleSwitch;
