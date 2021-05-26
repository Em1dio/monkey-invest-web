<template>
  <div>
    <monkey-modal
      v-if="showModal"
      width="400px"
      @close="showModal = false"
      @enter="createWallet"
    >
      <h3 slot="header">New Wallet</h3>
      <h3 slot="body">
        <p>Name</p>
        <monkey-input v-model="wallet.name" />
        <p>Public</p>
        <input type="checkbox" v-model="wallet.isPublic" />
      </h3>
    </monkey-modal>
    <div class="walletCard" @click="show">
      <file-plus-icon size="64" color="#E27034" />
    </div>
  </div>
</template>

<script>
import MonkeyInput from './MonkeyInput.vue';
import MonkeyModal from './monkeyModal.vue';
export default {
  components: { MonkeyModal, MonkeyInput },
  props: {
    data: Object,
  },
  data() {
    return {
      showModal: false,
      wallet: {
        name: '',
        isPublic: false,
        isSimulation: false,
      },
    };
  },
  methods: {
    show() {
      this.showModal = true;
      this.wallet = {
        name: '',
        isPublic: false,
        isSimulation: false,
      };
    },
    calcPercent(before, now) {
      return this.$commonMethods.calcPercent(before, now);
    },
    async createWallet() {
      this.showModal = false;
      const response = await this.$http.post(`/wallets`, this.wallet);
      if (response.status === 201) {
        this.$toasted.success('Wallet Created', {
          duration: 2000,
          theme: 'bubble',
        });
      } else {
        this.$toasted.error('Error to create Wallet', {
          duration: 2000,
          theme: 'bubble',
        });
      }
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
  justify-content: center;
  align-items: center;
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
