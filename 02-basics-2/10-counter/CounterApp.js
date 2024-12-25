import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const counter = ref(0);

    function increase() {
      counter.value++;
    }

    function decrease() {
      counter.value--;
    }

    return {
      counter,
      increase,
      decrease,
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="counter === 0"
        @click="decrease"
      >➖</button>

      <span class="count" data-testid="count">{{ counter }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="counter === 5"
        @click="increase"
      >➕</button>
    </div>
  `,
})
