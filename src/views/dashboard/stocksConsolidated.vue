<template>
  <div class="stocksConsolidate">
    <h2>Stocks Consolidate</h2>
    <div class="values">
      <card-dashboard
        title="Invested"
        :value="values.totalBefore"
        type="currency"
      >
        <wallet-icon />
      </card-dashboard>
      <card-dashboard
        title="Actual"
        :value="values.totalActual"
        type="currency"
      >
        <coin-icon />
      </card-dashboard>
      <card-dashboard
        title="Total"
        :value="values.totalActual - values.totalBefore"
        type="currency"
      >
        <cash-banknote-icon />
      </card-dashboard>
      <card-dashboard title="% Earn" :value="values.pctEarn" type="percentage">
        <percentage-icon />
      </card-dashboard>
    </div>
  </div>
</template>

<script>
import cardDashboard from './../../components/MonkeyPack/cardDashboard';
export default {
  components: { cardDashboard },
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
      const activeWallet = this.$store.activeWallet;
      const response = await this.$http.get(
        `/stocks/consolidated/${activeWallet}`,
      );
      this.values = response.data;
      this.values.pctEarn = this.$commonMethods.calcPercent(
        this.values.totalBefore,
        this.values.totalActual,
      );
    },
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
