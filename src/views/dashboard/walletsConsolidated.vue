<template>
  <div class="wallets">
    <h2>Wallets</h2>
    <div class="values">
      <div v-for="item in wallets" :key="item.name">
        <card-dashboard
          :title="item.name"
          :value="number"
          type="currency"
          @click="setActive(item._id)"
        >
          <wallet-icon />
        </card-dashboard>
      </div>
    </div>
  </div>
</template>

<script>
import cardDashboard from './../../components/MonkeyPack/cardDashboard';
export default {
  components: { cardDashboard },
  props: {
    wallets: Object,
  },
  methods: {
    setActive(id) {
      this.$store.activeWallet = id;
      this.$emit('set-wallet', id);
    },
  },
};
</script>

<style scoped>
.wallets {
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
