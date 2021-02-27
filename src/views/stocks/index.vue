<template>
  <div>
    <div class="stocks">
      <h1>Stocks</h1>
      <div class="region">
        <p class="region__titulo">Insert Stock</p>
        <insert-stock />
      </div>
      <div class="region">
        <p class="region__titulo">Stocks</p>
        <read-stocks />
      </div>
    </div>
  </div>
</template>

<script>
import insertStock from './insert';
import readStocks from './read';
export default {
  components: { insertStock, readStocks },
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
  color: #e2702c;
}
</style>
