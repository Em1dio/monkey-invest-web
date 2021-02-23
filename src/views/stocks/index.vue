<template>
  <div>
    <div class="stocks">
      <p>Stocks</p>
      <div class="insert__stock region">
        <p class="region__titulo">Insert Stock</p>
        <div class="form__stock">
          <div class="form__input">
            <p>Stock Symbol</p>
            <monkey-input
              name="stockSymbol"
              type="text"
              placeholder="Stock Symbol"
              maxlength="6"
              width="254px"
            />
          </div>
          <monkey-input
            name="stockQuantity"
            type="number"
            placeholder="Quantity"
            min="0"
            width="254px"
          />
          <monkey-input
            name="price"
            type="number"
            placeholder="Stock Price"
            min="0"
            width="254px"
          />
          <monkey-input
            name="Date"
            type="date"
            placeholder="Date"
            min="0"
            width="254px"
          />
        </div>
      </div>
      <orange-button> <file-plus-icon />Add Stock</orange-button>
    </div>
  </div>
</template>

<script>
import OrangeButton from '../../components/OrangeButton.vue';
import MonkeyInput from '../../components/MonkeyInput.vue';
import { FilePlusIcon } from 'vue-tabler-icons';
export default {
  components: { OrangeButton, MonkeyInput, FilePlusIcon },
};
</script>

<style scoped>
.stocks {
  color: #fff;
}

.region {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-left: 100px;
}

.region__titulo {
  font-weight: 700;
  color: rgba(226, 112, 44, 1);
}

.form__stock {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #000;
}
.form__input {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  color: #000;
}
</style>
