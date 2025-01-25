import { defineComponent } from 'vue'

import './WeatherApp.css';
import WeatherCard from './WeatherCard.js' 
import WeatherCardList from './WeatherCardList.js' 
import UiTitle from './UiTitle.js' 


export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherCardList,
    WeatherCard,
    UiTitle,
  },

  template: `
  <div>
    <UiTitle>
     <h1 class="title">Погода в Средиземье</h1>
    </UiTitle>
      <WeatherCardList />
  </div>
  `,
})
