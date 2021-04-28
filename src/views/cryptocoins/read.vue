<template>
  <div>
    <div class="form__read">
      <table v-if="data.cryptos.length >= 1" class="table">
        <tr>
          <th>Symbol</th>
          <th>Quantity</th>
          <th>Purchase Value</th>
          <th>Total</th>
          <th>Actual Value</th>
          <th>Total Actual</th>
          <th>$ Earn</th>
          <th>%</th>
          <th>Owner</th>
          <th v-if="options">Actions</th>
        </tr>
        <tr v-for="cryptocoin in data.cryptos" :key="cryptocoin._id">
          <td>{{ cryptocoin.symbol }}</td>
          <td>{{ cryptocoin.quantity }}</td>
          <td>{{ cryptocoin.value | toCurrency }}</td>
          <td>{{ (cryptocoin.value * cryptocoin.quantity) | toCurrency }}</td>
          <td>
            {{ cryptocoin.actualValue | toCurrency }}
          </td>
          <td>
            {{ (cryptocoin.actualValue * cryptocoin.quantity) | toCurrency }}
          </td>
          <td>
            {{
              (cryptocoin.actualValue * cryptocoin.quantity -
                cryptocoin.value * cryptocoin.quantity)
                | toCurrency
            }}
          </td>
          <td>
            {{
              calcPercent(
                cryptocoin.value * cryptocoin.quantity,
                cryptocoin.actualValue * cryptocoin.quantity,
              ) | toPercent
            }}
          </td>
          <td>
            {{ cryptocoin.userId }}
          </td>
          <td v-if="options">
            <options @remove="$emit('remove', cryptocoin._id)" />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import options from './readOptions.vue';
export default {
  components: { options },
  props: {
    data: Array,
    options: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
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

.form__read {
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
