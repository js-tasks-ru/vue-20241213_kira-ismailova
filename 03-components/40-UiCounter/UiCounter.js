import { defineComponent, ref, watch } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      default: 0,
    },

    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity,
    },
  },

  emits: ['update:count'],

  setup(props, {emit}) {
    // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне
    const counter = ref(props.count);

    const increment = () => {
      if(counter.value < props.max) {
        counter.value++;
        emit('update:count', counter.value);
      }
    }

    const decrement = () => {
      if(counter.value > props.min) {
        counter.value--;
        emit('update:count', counter.value);
      }
    }

    watch(() => props.count, (newCount) => {
      counter.value = newCount;
    });

    return {
      counter,
      increment,
      decrement,
    }
  },

  template: `
    <div class="counter">
      <UiButton 
        aria-label="Decrement" 
        @click="decrement"
        :disabled="counter <= min"
        >
        ➖
      </UiButton>
      <span class="count" data-testid="count">{{counter}}</span>
      <UiButton 
        aria-label="Increment"
        @click="increment"
        :disabled="counter >= max">
        ➕
      </UiButton>
    </div>
  `,
})