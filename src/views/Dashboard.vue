<template>
  <div class="dashboard">
    <p>Ola! Sejam bem vindo a MonkeyInvest</p>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {},
};
</script>

<style scoped>
body {
  padding-left: calc(var(--nav-width) + 188px);
  color: white;
  padding: 0;
  margin: 0;
}

.dashboard {
  color: white;
  background-color: '#fff';
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
