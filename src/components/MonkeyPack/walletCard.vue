<template>
  <div>
    <monkey-modal
      width="800px"
      v-if="showModal"
      @close="showModal = false"
      @enter="updateWallet"
    >
      <h3 slot="header"><h1>Customize Wallet</h1></h3>
      <h3 slot="body">
        <div class="edit_wallet">
          <p>Name</p>
          <input v-model="data.name" />
          <p>Public</p>
          <input type="checkbox" v-model="data.isPublic" />
        </div>
      </h3>
      <h3 slot="footer">
        <orange-button
          width="100px"
          height="20px"
          size="10px"
          @click="deleteWallet"
        >
          Excluir
        </orange-button>
      </h3>
    </monkey-modal>
    <div class="walletCard" @click="loadModal">
      <div class="header-card">
        <h1>{{ data.name }}</h1>
        <p
          :class="
            data.totalActual - data.totalBefore >= 0
              ? 'financial-income positive'
              : 'financial-income negative'
          "
        >
          {{ calcPercent(data.totalBefore, data.totalActual) | toPercent }}
        </p>
      </div>
      <div class="body-card">
        <div class="info">
          <p>Owner</p>
          <p>{{ data.ownerUsername }}</p>
        </div>
        <div class="info">
          <p>Public</p>
          <eye-icon v-if="data.isPublic" stroke-width="2" size="14" />
          <eye-off-icon v-else stroke-width="2" size="14" />
        </div>
        <div class="info">
          <p>Balance</p>
          <p
            :class="
              data.totalActual - data.totalBefore >= 0 ? 'positive' : 'negative'
            "
          >
            {{ data.totalActual | toCurrency }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrangeButton from './OrangeButton.vue';
import MonkeyModal from './monkeyModal.vue';
export default {
  components: { MonkeyModal, OrangeButton },
  props: {
    data: Object,
  },
  data() {
    return {
      showModal: false,
      styled: {
        width: '1000px',
      },
    };
  },
  methods: {
    loadModal() {
      this.showModal = true;
    },
    calcPercent(before, now) {
      return this.$commonMethods.calcPercent(before, now);
    },
    async updateWallet() {
      const info = {
        id: this.data._id,
        name: this.data.name,
        isPublic: this.data.isPublic,
        isSimulation: this.data.isSimulation,
      };
      try {
        const response = await this.$http.put(`/wallets/${info.id}`, info);
        this.stocks = response.data;
      } catch (error) {
        console.log(error);
      }
      this.showModal = false;
    },
    async deleteWallet() {
      try {
        await this.$http.delete(`/wallets/${this.data._id}`);
      } catch (error) {
        console.log(error);
      }
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap');
* {
  text-decoration: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  border: none;
  outline: none;
  font-family: 'Roboto', sans-serif;
}
.walletCard {
  display: flex;
  flex-direction: column;
  width: 246px;
  height: 146px;
  background: #ffffff;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;
}

.walletCard:hover {
  /* transform: scale(1.01); */
  background: #ffffff;
  border: 1.5px solid #e27034;
}

.header-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.body-card {
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 10px;
  row-gap: 5px;
}

.header-card h1 {
  font-size: 18pt;
  font-weight: 100;
}

.financial-income {
  font-size: 14pt;
  font-weight: 700;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 300;
}

.negative {
  color: #8b1e1e;
  stroke: #8b1e1e;
}

.positive {
  color: #2e8b1e;
  stroke: #2e8b1e;
}

.modal {
  display: flex;
  width: 1000px;
}
</style>
