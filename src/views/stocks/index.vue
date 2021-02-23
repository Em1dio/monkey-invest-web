<template>
  <div>
    <div class="stocks">
      <h1>Stocks</h1>
      <div class="region">
        <p class="region__titulo">Insert Stock</p>
        <insertStock />
      </div>
    </div>
  </div>
</template>

<script>
import insertStock from './insert';
export default {
  components: { insertStock },
};
</script>

<style scoped>
.region {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
}

.stocks {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.region__titulo {
  font-weight: 700;
  color: rgba(226, 112, 44, 1);
}
</style>
