import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',

  setup() {
    const weatherData = getWeatherData();
    console.log(weatherData);
    console.log(WeatherConditionIcons);

    function checkWeatherCondition(key, obj) {
      let result;
      if (obj.hasOwnProperty(key)) {
        result = obj[key];
      } else {
        result = '';
      }
      return result;
    }

    return {
      weatherData,
      WeatherConditionIcons,
      checkWeatherCondition,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>
      <ul class="weather-list unstyled-list">
        <li v-for="(weather, index) in weatherData" :key="index" class="weather-card"
        :class="{'weather-card--night' : weather.current.dt < '07:00' }">
          <div class="weather-alert" v-if="weather.alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{weather.alert.sender_name}}: {{ weather.alert.description }}</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{ weather.geographic_name }}
            </h2>
            <div class="weather-card__time">
              {{ weather.current.dt }}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="weather.current.weather.description">{{ checkWeatherCondition(weather.current.weather.id, WeatherConditionIcons) }}</div>
            <div class="weather-conditions__temp">{{ (weather.current.temp - 273.15).toFixed(1) }} °C</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ Math.round(weather.current.pressure * 0.75) }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{ weather.current.humidity }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{ weather.current.clouds }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{ weather.current.wind_speed }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
