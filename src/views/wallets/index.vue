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

.wallet {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 240px;
  background: #363463;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  padding: 10px;
}

.wallet:hover {
  transform: scale(1.01);
  background: #4e4a8f;
}

.wallet svg {
  width: 35px;
  height: 35px;
  stroke: #e7e7e7;
  stroke-width: 2;
  margin-right: 10px;
}

.wallet h2 {
  font-size: 12pt;
  color: #e7e7e7;
}

.wallet p {
  color: #e7e7e7;
}
.wallet span {
  color: #e27034;
}
</style>
