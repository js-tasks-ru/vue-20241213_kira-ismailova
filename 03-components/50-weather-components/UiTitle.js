import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiTitle.js',

  props: {
    text: {
      type: String,
    },
  },

  template: `
  <slot>{{ text }}</slot>
  `,
})