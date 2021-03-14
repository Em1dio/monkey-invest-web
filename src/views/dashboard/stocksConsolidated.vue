<template>
  <div class="stocksConsolidate">
    <h2>Stocks Consolidate</h2>
    <div class="values">
      <card-dashboard
        title="Invested"
        :value="stocks.totalBefore"
        type="currency"
      >
        <wallet-icon />
      </card-dashboard>
      <card-dashboard
        title="Actual"
        :value="stocks.totalActual"
        type="currency"
      >
        <coin-icon />
      </card-dashboard>
      <card-dashboard
        title="Total"
        :value="stocks.totalActual - stocks.totalBefore"
        type="currency"
      >
        <cash-banknote-icon />
      </card-dashboard>
      <card-dashboard title="% Earn" :value="stocks.pctEarn" type="percentage">
        <percentage-icon />
      </card-dashboard>
    </div>
  </div>
</template>

<script>
import cardDashboard from './../../components/MonkeyPack/cardDashboard';
export default {
  components: { cardDashboard },
  props: {
    stocks: Object,
  },
};
</script>

<style scoped>
.stocksConsolidate {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #e27034;
  margin-left: 10px;
}

.values {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.value {
  margin-left: 10px;
}
</style>
