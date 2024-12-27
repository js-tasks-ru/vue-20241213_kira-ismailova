import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const result = ref(0); 
    const firstNum = ref(0); 
    const secondNum = ref(0); 
    const operator = ref('');

    function calc() {
      if (operator.value === 'sum') {
        result.value = firstNum.value + secondNum.value;
      }
      else if (operator.value === 'subtract') {
        result.value = firstNum.value - secondNum.value;
      }
      else if (operator.value === 'multiply') {
        result.value = firstNum.value * secondNum.value;
      }
      else if (operator.value === 'divide') {
        result.value = firstNum.value / secondNum.value;
      } else {
        return;
      }
    }

    watch([firstNum, secondNum, operator], calc);

    return {
      result,
      firstNum,
      secondNum,
      operator,
      calc,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="firstNum"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="operator" @change="calc"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="operator" @change="calc"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="operator" @change="calc"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="operator" @change="calc"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="secondNum"/>

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})