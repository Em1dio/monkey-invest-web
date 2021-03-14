<template>
  <div>
    <div class="form__add__stock">
      <div class="form__input">
        <p class="input__titulo">Stock</p>
        <monkey-input
          name="stockSymbol"
          type="text"
          maxlength="6"
          width="100%"
          minWidth="100px"
          v-model="stock.symbol"
        />
      </div>
      <div class="form__input">
        <p class="input__titulo">Quantity</p>
        <monkey-input
          name="stockQuantity"
          type="number"
          min="0"
          width="100%"
          minWidth="100px"
          v-model="stock.quantity"
        />
      </div>
      <div class="form__input">
        <p class="input__titulo">Price</p>
        <monkey-input
          name="price"
          type="number"
          min="0"
          width="100%"
          minWidth="100px"
          v-model="stock.value"
        />
      </div>
      <div class="form__input">
        <p class="input__titulo">Date</p>
        <monkey-input
          name="Date"
          type="date"
          min="0"
          width="100%"
          minWidth="100px"
          v-model="stock.date"
        />
      </div>
      <orange-button
        color="#fff"
        height="30px"
        @click="insertStock"
        width="100%"
        minWidth="200px"
        fontWeight="700"
      >
        <file-plus-icon class="icon" /> Add Stock
      </orange-button>
    </div>
  </div>
</template>

<script>
import OrangeButton from '../../components/MonkeyPack/OrangeButton.vue';
import MonkeyInput from '../../components/MonkeyPack/MonkeyInput.vue';
export default {
  components: { OrangeButton, MonkeyInput },
  data() {
    return {
      stock: {
        symbol: '',
        quantity: null,
        value: null,
        date: null,
      },
    };
  },
  methods: {
    insertStock() {
      this.$emit('inserted-stock', this.stock);
      this.stock = {
        symbol: '',
        quantity: null,
        value: null,
        date: null,
      };
    },
  },
};
</script>

<style scoped>
.form__add__stock {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  color: #000;
  margin: 0px;
}
.form__input {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  color: #000;
  margin-right: 10px;
}

.input__titulo {
  color: #fff;
}

.icon {
  margin-right: 10px;
}
</style>
