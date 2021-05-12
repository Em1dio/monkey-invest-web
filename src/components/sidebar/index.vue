<template>
  <div class="container">
    <div class="header">
      <titulo marginTop="10px" fontSize="32px" color2="#000" />
    </div>
    <div class="menu">
      <div class="items">
        <item @click="GoTo('dashboard')" text="Dashboard">
          <dashboard-icon />
        </item>
        <item @click="GoTo('wallets')" text="Wallets"><wallet-icon /></item>
        <item @click="GoTo('stocks')" text="Stocks">
          <file-certificate-icon />
        </item>
        <item @click="GoTo('cryptocoins')" text="CryptoCoins">
          <coin-icon />
        </item>
        <item @click="GoTo('settings')" text="Settings">
          <settings-icon />
        </item>
      </div>
      <div @click="logout" class="logout">
        <item text="Logout"><logout-icon /></item>
      </div>
    </div>
  </div>
</template>

<script>
import Titulo from '../MonkeyPack/Titulo.vue';
import Item from './Item';

export default {
  components: {
    Titulo,
    Item,
  },
  methods: {
    GoTo(link) {
      this.$router.push({ name: link }).catch(() => {});
    },
    logout() {
      this.$cookies.remove('token');
      this.$router.push({ name: 'Home' }).catch(() => {});
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 20%;
  min-height: 100vh;
  background-color: #fff;
}

.header {
  display: flex;
  justify-content: center;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-top: 50px;
  margin-bottom: 20px;
}

.menu .items,
.logout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
</style>
