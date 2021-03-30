<template>
  <div>
    <div class="body-wallets">
      <div v-for="item in data" :key="item.name">
        <wallet-card :data="item" />
      </div>
    </div>
  </div>
</template>

<script>
import WalletCard from '../../components/MonkeyPack/walletCard';
export default {
  components: { WalletCard },
  props: {
    data: Array,
  },
};
</script>

<style scoped>
.body-wallets {
  margin-top: 20px;
  width: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
  column-gap: 20px;
  row-gap: 20px;
}
</style>
