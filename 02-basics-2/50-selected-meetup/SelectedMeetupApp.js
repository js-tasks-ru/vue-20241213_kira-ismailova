import { defineComponent, ref, watch } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'selectedMeetupApp',

  setup() {
    const selectedMeetupId = ref(1)
    const meetupTitle = ref('');

    const buttonPrev = () => {
      if(selectedMeetupId.value > 1) {
        selectedMeetupId.value--;
      } 
    }

    const buttonNext = () => {
      if(selectedMeetupId.value < 5) {
        selectedMeetupId.value++;
      } 
    }

    const fetchMeetups = async (id) => {
      try {
        const meetup = await getMeetup(id)
        meetupTitle.value = meetup.title
      }

      catch(error) {
        throw new Error('Ошибка получения данных митапов', error)
      }
    }

    watch(selectedMeetupId, (newId) => {
      fetchMeetups(newId);
    });

    fetchMeetups(selectedMeetupId.value);

    return {
      selectedMeetupId,
      meetupTitle,
      buttonPrev,
      buttonNext,
      fetchMeetups,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button 
        class="button button--secondary" 
        type="button" 
        :disabled="selectedMeetupId === 1"
        @click="buttonPrev">Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <div class="radio-group__button" v-for="id in 5">
            <input
              :id="'meetup-id-' + id"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="id"
              v-model="selectedMeetupId"
            />
            <label :for="'meetup-id-' + id" class="radio-group__label">{{ id }}</label>
          </div>
        </div>

        <button 
          class="button button--secondary" 
          type="button" 
          :disabled="selectedMeetupId === 5"
          @click="buttonNext">
            Следующий
        </button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetupTitle }}</h1>
        </div>
      </div>
    </div>
  `,
})