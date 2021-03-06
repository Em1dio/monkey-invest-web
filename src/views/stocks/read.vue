<template>
  <div>
    <orange-button
      color="#fff"
      height="50px"
      width="50px"
      @click="readStock"
      fontWeight="700"
      padding="5px"
    >
      <refresh-icon />
    </orange-button>
    <div class="form__read__stock">
      <table v-if="stocks.length >= 1" class="stocks__table">
        <tr>
          <th>Symbol</th>
          <th>Quantity</th>
          <th>Purchase Value</th>
          <th>Total</th>
          <th>Actual Value</th>
          <th>Total Actual</th>
          <th>$ Earn</th>
          <th>%</th>
          <th>Actions</th>
        </tr>
        <tr v-for="stock in stocks" :key="stock._id">
          <td>{{ stock.symbol }}</td>
          <td>{{ stock.quantity }}</td>
          <td>{{ stock.value | toCurrency }}</td>
          <td>{{ (stock.value * stock.quantity) | toCurrency }}</td>
          <td>{{ stock.actualValue | toCurrency }}</td>
          <td>{{ (stock.actualValue * stock.quantity) | toCurrency }}</td>
          <td>
            {{
              (stock.actualValue * stock.quantity -
                stock.value * stock.quantity)
                | toCurrency
            }}
          </td>
          <td>
            {{ calcPercent(stock.value, stock.actualValue) | toPercent }}
          </td>
          <td>
            <options @readStock="readStock" :id="stock._id" />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import OrangeButton from '../../components/MonkeyPack/OrangeButton.vue';
import Options from './readOptions';
import { RefreshIcon } from 'vue-tabler-icons';
export default {
  components: { OrangeButton, RefreshIcon, Options },
  data() {
    return {
      stocks: [],
    };
  },
  created() {
    this.readStock();
  },
  methods: {
    async readStock() {
      try {
        const response = await this.$http.get('/stocks/', this.stock);
        this.stocks = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    calcPercent(before, now) {
      return this.$commonMethods.calcPercent(before, now);
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  margin: 10px;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

/* tr:nth-child(even) {
  background-color: #dddddd;
} */

.form__read__stock {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  margin: 0px;
  width: 100%;
}

.icon {
  margin-right: 10px;
}
</style>
