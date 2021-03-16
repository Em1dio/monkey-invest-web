<template>
  <div class="wallets">
    <title-bar size="50px" color="#e27034" textColor="#e7e7e7">
      Wallets
    </title-bar>
    <div class="body-wallets">
      <div v-for="item in wallets" :key="item.name">
        <wallets-dashboard
          :name="item.name"
          :active="active"
          :id="item._id"
          @click="setActive(item._id)"
        >
          <wallet-icon />
        </wallets-dashboard>
      </div>
    </div>
  </div>
</template>

<script>
import walletsDashboard from './../../components/MonkeyPack/walletsDashboard';
import TitleBar from '../../components/MonkeyPack/titleBar.vue';
export default {
  components: { walletsDashboard, TitleBar },
  props: {
    wallets: Object,
    active: {
      type: String,
      default: '',
    },
  },
  methods: {
    setActive(actualId) {
      this.active = actualId;
      this.$store.activeWallet = actualId;
      this.$emit('set-wallet', actualId);
    },
  },
};
</script>

<style scoped>
* {
  text-decoration: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  border: none;
  outline: none;
}

.wallets {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #e27034;
  margin-left: 10px;
}

.body-wallets {
  margin-top: 20px;
  width: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
}
</style>
