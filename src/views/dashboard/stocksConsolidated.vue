<template>
  <div class="stocksConsolidate">
    <title-bar size="50px" color="#e27034" textColor="#e7e7e7">
      Stocks Consolidate
    </title-bar>
    <wallets-content :stocks="stocks" />
  </div>
</template>

<script>
import walletsContent from './../../components/MonkeyPack/walletContent';

import TitleBar from '../../components/MonkeyPack/titleBar.vue';

export default {
  components: { TitleBar, walletsContent },
  props: {
    stocks: Object,
  },
};
</script>

<style scoped>
.stocksConsolidate {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #e27034;
  margin-left: 10px;
  margin-top: 20px;
}

.values {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.value {
  margin-left: 10px;
}

.top-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
</style>
