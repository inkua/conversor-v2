import axios from "axios";

export const getLocation = (setCoords, setLoadingLocation, setError) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });
        setLoadingLocation(false);
      },
      (error) => {
        setError("Geolocalización no soportada o permiso denegado.");
        setLoading(false);
      }
    );
  } else {
    setError("Geolocalización no soportada.");
    setLoadingLocation(false);
  }
};
export const getWeather = async (
  lat,
  lon,
  setPartOfDay,
  setWeather,
  setLoadingWeather,
  setError
) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${
    import.meta.env.VITE_WEATHER_API_KEY
  }&q=${lat},${lon}`;

  try {
    const response = await axios.get(url);

    const weatherCode = response.data.current.condition.code;
    const partOfDayMain = response.data.current.is_day === 1 ? "dia" : "noche";
    setPartOfDay(partOfDayMain);
    setWeather(weatherCode);
    setLoadingWeather(false);
  } catch (error) {
    setPartOfDay("default");
    setWeather("weatherDefault");
    setLoadingWeather(false);
  }
};
export const getBackgroundClass = (weather) => {
  switch (weather) {
    case 1000:
      return "Sunny";
    case 1003:
      return "PartlyCloudy";
    case 1006:
      return "Cloudy";
    case 1009:
      return "Overcast";
    case 1030:
      return "Mist";
    case 1063:
      return "PatchyRainPossible";
    case 1066:
      return "PatchySnowPossible";
    case 1069:
      return "PatchySleetPossible";
    case 1072:
      return "PatchyFreezingDrizzlePossible";
    case 1087:
      return "ThunderyOutbreaksPossible";
    case 1114:
      return "BlowingSnow";
    case 1117:
      return "Blizzard";
    case 1135:
      return "Fog";
    case 1147:
      return "FreezingFog";
    case 1150:
      return "PatchyLightDrizzle";
    case 1153:
      return "LightDrizzle";
    case 1168:
      return "FreezingDrizzle";
    case 1171:
      return "HeavyFreezingDrizzle";
    case 1180:
      return "PatchyLightRain";
    case 1183:
      return "LightRain";
    case 1186:
      return "ModerateRainAtTimes";
    case 1189:
      return "ModerateRain";
    case 1192:
      return "HeavyRainAtTimes";
    case 1195:
      return "HeavyRain";
    case 1198:
      return "LightFreezingRain";
    case 1201:
      return "ModerateOrHeavyFreezingRain";
    case 1204:
      return "LightSleet";
    case 1207:
      return "ModerateOrHeavySleet";
    case 1210:
      return "PatchyLightSnow";
    case 1213:
      return "LightSnow";
    case 1216:
      return "PatchyModerateSnow";
    case 1219:
      return "ModerateSnow";
    case 1222:
      return "PatchyHeavySnow";
    case 1225:
      return "HeavySnow";
    case 1237:
      return "IcePellets";
    case 1240:
      return "LightRainShower";
    case 1243:
      return "ModerateOrHeavyRainShower";
    case 1246:
      return "TorrentialRainShower";
    case 1249:
      return "LightSleetShowers";
    case 1252:
      return "ModerateOrHeavySleetShowers";
    case 1255:
      return "LightSnowShowers";
    case 1258:
      return "ModerateOrHeavySnowShowers";
    case 1261:
      return "LightShowersOfIcePellets";
    case 1264:
      return "ModerateOrHeavyShowersOfIcePellets";
    case 1273:
      return "PatchyLightRainWithThunder";
    case 1276:
      return "ModerateOrHeavyRainWithThunder";
    case 1279:
      return "PatchyLightSnowWithThunder";
    case 1282:
      return "ModerateOrHeavySnowWithThunder";
    default:
      return "weatherDefault";
  }
};
