<template>
  <div>
    <div class="wallets">
      <title-bar size="50px" color="#e27034" textColor="#e7e7e7">
        Wallets
      </title-bar>
      <orange-button> Public Wallets </orange-button>
      <read :data="data" />
    </div>
  </div>
</template>

<script>
import OrangeButton from '../../components/MonkeyPack/OrangeButton';
import TitleBar from '../../components/MonkeyPack/titleBar';
import Read from './read';
export default {
  components: { TitleBar, OrangeButton, Read },
  created() {
    this.readWalletsConsolidated();
  },
  data() {
    return {
      data: {
        data: [],
      },
      async readWalletsConsolidated() {
        const response = await this.$http.get('/wallets');
        this.data = response.data;
      },
    };
  },
};
</script>

<style scoped>
.wallets {
  margin-left: 10px;
  margin-top: 10px;
}

.body-wallets {
  margin-top: 20px;
  width: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
  column-gap: 20px;
  row-gap: 20px;
}
</style>
