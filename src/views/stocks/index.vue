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
        <read-stocks
          :options="true"
          :stocks="stocks"
          @removed-stock="removeStock($event)"
        />
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
        this.$toasted.error('Error to Insert this Stock', {
          duration: 2000,
          theme: 'bubble',
        });
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
        this.$toasted.error('Error to Load Stocks', {
          duration: 2000,
          theme: 'bubble',
        });
      }
    },
    async removeStock(id) {
      try {
        const data = {
          id,
          walletId: this.$store.activeWallet,
        };
        console.log(data);
        const response = await this.$http.delete(
          `/stocks/${data.walletId}/${data.id}`,
        );
        if (response.status === 200) {
          this.readStock();
        } else {
          this.$toasted.error('Error to Remove Stock', {
            duration: 2000,
            theme: 'bubble',
          });
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
