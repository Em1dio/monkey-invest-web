<template>
  <div>
    <div class="dashboard">
      <h1>Ola! Sejam bem vindo a MonkeyInvest</h1>
      <stocks-consolidated />
    </div>
  </div>
</template>

<script>
import stocksConsolidated from './stocksConsolidated';
export default {
  name: 'Dashboard',
  components: { stocksConsolidated },
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
