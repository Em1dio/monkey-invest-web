<template>
  <div class="titulo">
    <span id="titulo">Monkey</span>
    <span id="titulo">Invest</span>
    <span id="titulo">.</span>
  </div>
</template>

<script>
export default {
  name: 'Titulo',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;600;700&display=swap');
.titulo {
  margin-top: 100px;
}

#titulo {
  font-size: 48px;
  color: #e27034;
  font-weight: 700;
}

#titulo:nth-child(2) {
  color: #ffffff;
}
</style>
