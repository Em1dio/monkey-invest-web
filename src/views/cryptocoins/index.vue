<template>
  <div>
    <div class="crypto">
      <h1>Cryptocoins</h1>
      <div class="region">
        <p class="region__titulo">Insert Crypto</p>
        <insert @inserted-crypto="insertCrypto($event)" />
      </div>
      <div class="region">
        <p class="region__titulo">Crypto</p>
        <read :options="true" :data="crypto" @remove="remove($event)" />
      </div>
    </div>
  </div>
</template>

<script>
import insert from './insert.vue';
import Read from './read.vue';
export default {
  components: { insert, Read },
  data() {
    return {
      crypto: [],
    };
  },
  created() {
    this.readCrypto();
  },
  methods: {
    async insertCrypto(crypto) {
      try {
        crypto.symbol = crypto.symbol.toUpperCase();
        await this.$http.post('/cryptocoins/', crypto);
        this.readCrypto();
      } catch (error) {
        console.log(error);
      }
    },
    async readCrypto() {
      try {
        const activeWallet = this.$store.activeWallet;
        const response = await this.$http.get(`/cryptocoins/${activeWallet}`);
        this.crypto = response.data;
        console.log(this.crypto);
      } catch (error) {
        console.log(error);
      }
    },
    async remove(id) {
      try {
        const data = {
          id,
          walletId: this.$store.activeWallet,
        };
        console.log(data);
        const response = await this.$http.delete(
          `/cryptocoins/${data.walletId}/${data.id}`,
        );
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

.crypto {
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
