<template>
  <div>
    <div class="dashboard">
      <h1>Ola! Sejam bem vindo a MonkeyInvest</h1>
      <wallets-consolidated />
      <stocks-consolidated />
    </div>
  </div>
</template>

<script>
import stocksConsolidated from './stocksConsolidated';
import walletsConsolidated from './walletsConsolidated';
export default {
  name: 'Dashboard',
  components: { stocksConsolidated, walletsConsolidated },
};
</script>

<style scoped>
body {
  /* padding-left: calc(var(--nav-width) + 188px); */
  color: white;
  padding: 0;
  margin: 0;
}

h1 {
  color: white;
}

.dashboard {
  margin-left: 10px;
}
</style>
