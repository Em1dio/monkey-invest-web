<template>
  <div>
    <div class="stocks">
      <h1>Stocks</h1>
      <div class="region">
        <p class="region__titulo">Insert Stock</p>
        <insert-stock @inserted-stock="insertStock($event)" />
      </div>
      <div class="region">
        <p class="region__titulo">Stocks</p>
        <read-stocks :stocks="stocks" @removed-stock="removeStock($event)" />
      </div>
    </div>
  </div>
</template>

<script>
import insertStock from './insert';
import readStocks from './read';
export default {
  components: { insertStock, readStocks },
  data() {
    return {
      stocks: [],
    };
  },
  created() {
    this.readStock();
  },
  methods: {
    async insertStock(stock) {
      try {
        stock.symbol = stock.symbol.toUpperCase();
        await this.$http.post('/stocks/', stock);
        this.readStock();
      } catch (error) {
        console.log(error);
      }
    },
    async readStock() {
      try {
        const activeWallet = this.$store.activeWallet;
        const response = await this.$http.get(
          `/stocks/${activeWallet}`,
          this.stock,
        );
        this.stocks = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async removeStock(id) {
      try {
        const response = await this.$http.delete(`/stocks/${id}`);
        if (response.status === 200) {
          this.readStock();
        } else {
          throw new Error('Teste');
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.region {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
}

.stocks {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.region__titulo {
  font-weight: 700;
  color: #e2702c;
}
</style>
