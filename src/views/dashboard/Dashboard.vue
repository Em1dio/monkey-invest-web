<template>
  <div>
    <div class="dashboard">
      <wallets-consolidated
        :wallets="wallets"
        :active="activeWallet"
        @set-wallet="setActive($event)"
      />
      <consolidated :data="stocks">Stocks Consolidated</consolidated>
      <consolidated :data="crypto">Crypto Consolidated</consolidated>
    </div>
  </div>
</template>

<script>
import Consolidated from './consolidated';
import walletsConsolidated from './walletsConsolidated';
export default {
  name: 'Dashboard',
  components: {
    Consolidated,
    walletsConsolidated,
  },
  data() {
    return {
      stocks: {
        totalBefore: 0,
        totalActual: 0,
        pctEarn: 0,
      },
      crypto: {
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
    this.readCryptoConsolidated();
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
    async readCryptoConsolidated(wallet) {
      if (!wallet) {
        wallet = this.$store.activeWallet;
      }
      const response = await this.$http.get(
        `/cryptocoins/consolidated/${wallet}`,
      );
      this.crypto = response.data;
      this.crypto.pctEarn = this.$commonMethods.calcPercent(
        this.crypto.totalBefore,
        this.crypto.totalActual,
      );
    },
    async readWalletsConsolidated() {
      const response = await this.$http.get('/wallets');
      this.wallets = response.data;
      if (!this.$store.activeWallet) {
        this.$store.activeWallet = response.data[0]._id;
        this.activeWallet = this.wallets[0]['_id'];
      }
    },
    setActive(id) {
      this.activeWallet = id;
      this.$store.activeWallet = id;
      this.readStockConsolidated(id);
      this.readCryptoConsolidated(id);
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
  margin-top: 10px;
}
</style>
