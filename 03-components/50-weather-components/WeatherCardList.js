import { defineComponent } from 'vue'
import WeatherCard from './WeatherCard.js'
import './WeatherApp.css';

export default defineComponent({
  name: 'WeatherCardList',

  components: {
    WeatherCard,
  },

  template: `
      <ul class="weather-list unstyled-list">
        <WeatherCard />
      </ul>
  `,
})
