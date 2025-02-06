import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiTitle',

  props: {
    text: {
      type: String,
    },
  },

  template: `
  <slot>{{ text }}</slot>
  `,
})