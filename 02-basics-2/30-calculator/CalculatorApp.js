import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const firstNum = ref(0); 
    const secondNum = ref(0); 
    const operator = ref('');

    const result = computed(() => {
      if (!operator.value) {
        return 0;
      }
      else if (operator.value === 'sum') {
        return  firstNum.value + secondNum.value;
      }
      else if (operator.value === 'subtract') {
        return  firstNum.value - secondNum.value;
      }
      else if (operator.value === 'multiply') {
        return  firstNum.value * secondNum.value;
      }
      else if (operator.value === 'divide') {
        return  firstNum.value / secondNum.value;
      } else {
        return 0;
      }
    });

    return {
      result,
      firstNum,
      secondNum,
      operator,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="firstNum"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="operator"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="operator"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="operator"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="operator"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="secondNum"/>

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})