<template>
  <div class="consolidate">
    <title-bar size="50px" color="#e27034" textColor="#e7e7e7">
      <slot></slot>
    </title-bar>
    <wallets-content :data="data" />
  </div>
</template>

<script>
import walletsContent from './../../components/MonkeyPack/walletContent';

import TitleBar from '../../components/MonkeyPack/titleBar.vue';

export default {
  components: { TitleBar, walletsContent },
  props: {
    data: Object,
  },
};
</script>

<style scoped>
.consolidate {
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
