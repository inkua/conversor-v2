import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Navbar } from "../Navbar/Navbar";
import {
  getLocation,
  getWeather,
  getBackgroundClass,
} from "../../utils/weatherBg";

export default function Layout({ children }) {
  const [weather, setWeather] = useState(null);
  const [partOfDay, setPartOfDay] = useState(null);
  const [error, setError] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(true); // Estado para indicar si se está cargando la ubicación
  const [loadingWeather, setLoadingWeather] = useState(true); // Estado para indicar si se está cargando el clima
  const [coords, setCoords] = useState({ latitude: null, longitude: null });
  useEffect(() => {
    // Obtener la posición actual del usuario si el navegador lo permite
    getLocation(setCoords, setLoadingLocation, setError);
    console.log("llamada a la api");
  }, []);

  useEffect(() => {
    // Obtener el clima cuando las coordenadas cambian
    if (coords.latitude !== null && coords.longitude !== null) {
      getWeather(
        coords.latitude,
        coords.longitude,
        setPartOfDay,
        setWeather,
        setLoadingWeather,
        setError
      );
    }
  }, [coords]);

  useEffect(() => {
    // Establecer la clase de fondo en el nivel del documento una vez que se tenga el clima
    if (partOfDay && weather) {
      const bgClass = `${partOfDay}-${getBackgroundClass(weather)}`;
      document.documentElement.className = bgClass;
    }
  }, [partOfDay, weather]);

  // Renderizar contenido condicional basado en el estado de carga y errores
  if (error) {
    return <div className="error">{error}</div>;
  }

  if (loadingLocation || loadingWeather) {
    return <div className="loading">Cargando...</div>;
  }
  return (
    <>
      <Navbar> </Navbar>
      <main>{children}</main>
      <footer className="footer">
        footer -El clima actual es:{" "}
        {`${partOfDay}-${getBackgroundClass(weather)}`}
      </footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
