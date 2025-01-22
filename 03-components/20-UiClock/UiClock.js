import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const formattedTime = ref('');

    const updateDate = () => {
      const date = new Date();
      const options = { timeStyle: 'medium' }

      formattedTime.value = new Intl.DateTimeFormat('en-US', options).format(date);
    }

    onMounted(() => {
      updateDate();
      const interval = setInterval(updateDate, 1000);

      onBeforeUnmount(() => {
        clearInterval(interval)
      })
    })

    return {
      formattedTime,
    }
  },

  template: `<div class="clock">{{ formattedTime }}</div>`,
})