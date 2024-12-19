import { defineComponent, createApp } from 'vue';

const App = defineComponent({
  name: 'App',

  setup() {
    function formattedData() {
      const date = new Date();
    
      const options = { 
        dateStyle: 'long',
      };
      
      return date.toLocaleDateString(navigator.language, options);
    }
 
    const DATE = formattedData();

    return {
      formattedData,
      DATE,
    }
  },

  template: `
    <div>Сегодня {{ DATE }}</div>
  `
})

const app = createApp(App);
const vm = app.mount('#app');
window.vm = vm;