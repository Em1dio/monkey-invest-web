<template>
  <div>
    <div class="dashboard">
      <h1>Ola! Sejam bem vindo a MonkeyInvest</h1>
      <wallets-consolidated
        :wallets="wallets"
        @set-wallet="setActive($event)"
      />
      <stocks-consolidated :stocks="stocks" />
    </div>
  </div>
</template>

<script>
import stocksConsolidated from './stocksConsolidated';
import walletsConsolidated from './walletsConsolidated';
export default {
  name: 'Dashboard',
  components: { stocksConsolidated, walletsConsolidated },
  data() {
    return {
      stocks: {
        totalBefore: 0,
        totalActual: 0,
        pctEarn: 0,
      },
      activeWallet: '',
      wallets: [],
    };
  },
  created() {
    this.readStockConsolidated();
    this.readWalletsConsolidated();
  },
  methods: {
    async readStockConsolidated(wallet) {
      if (!wallet) {
        wallet = this.$store.activeWallet;
      }
      const response = await this.$http.get(`/stocks/consolidated/${wallet}`);
      this.stocks = response.data;
      this.stocks.pctEarn = this.$commonMethods.calcPercent(
        this.stocks.totalBefore,
        this.stocks.totalActual,
      );
    },
    async readWalletsConsolidated() {
      const response = await this.$http.get('/wallets');
      this.wallets = response.data;
      if (!this.$store.activeWallet) {
        this.$store.activeWallet = response.data[0]._id;
        this.activeWallet = response.data[0]._id;
      }
    },
    setActive(id) {
      this.activeWallet = id;
      this.$store.activeWallet = id;
      this.readStockConsolidated(id);
    },
  },
};
</script>

<style scoped>
body {
  /* padding-left: calc(var(--nav-width) + 188px); */
  color: white;
  padding: 0;
  margin: 0;
}

h1 {
  color: white;
}

.dashboard {
  margin-left: 10px;
}
</style>
