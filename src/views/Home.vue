<template>
  <div class="home">
    <titulo marginTop="100px" fontSize="48px" />
    <login />
  </div>
</template>

<script>
import Titulo from '../components/Titulo';
import Login from '../components/Login';

export default {
  name: 'Home',
  components: { Titulo, Login },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background: radial-gradient(
    123.22% 129.67% at 100.89% -5.6%,
    #201d47 0%,
    #201d47 100%
  );
}
</style>
