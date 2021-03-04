<template>
  <div class="stocksConsolidate">
    <h2>Stocks Consolidate</h2>
    <div class="values">
      <div class="value">
        <p>Invested</p>
        <p>{{ values.totalBefore | toCurrency }}</p>
      </div>
      <div class="value">
        <p>Actual</p>
        <p>{{ values.totalActual | toCurrency }}</p>
      </div>
      <div class="value">
        <p>Total</p>
        <p>{{ (values.totalActual - values.totalBefore) | toCurrency }}</p>
      </div>
      <div class="value">
        <p>% Earn</p>
        <p>{{ values.pctEarn | toPercent }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: {
        totalBefore: 0,
        totalActual: 0,
        pctEarn: 0,
      },
    };
  },
  created() {
    this.readStockConsolidated();
  },
  methods: {
    async readStockConsolidated() {
      const response = await this.$http.get('/stocks/consolidated');
      this.values = response.data;
      this.values.pctEarn = this.calcPercent(
        this.values.totalBefore,
        this.values.totalActual,
      );
    },
    calcPercent(initial, now) {
      const value = now / initial;
      return value - 1;
    },
  },
};
</script>

<style scoped>
.values {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.value {
  margin-right: 10px;
}
</style>
