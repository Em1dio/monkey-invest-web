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
        <item @click="GoTo('stocks')" text="Stocks"><wallet-icon /></item>
        <item text="Settings"><settings-icon /></item>
      </div>
      <div @click="logout" class="logout">
        <item text="Logout"><logout-icon /></item>
      </div>
    </div>
  </div>
</template>

<script>
import Titulo from './../Titulo.vue';
import Item from './Item';
import {
  DashboardIcon,
  SettingsIcon,
  WalletIcon,
  LogoutIcon,
} from 'vue-tabler-icons';

export default {
  components: {
    Titulo,
    Item,
    DashboardIcon,
    SettingsIcon,
    WalletIcon,
    LogoutIcon,
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
  width: 300px;
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
