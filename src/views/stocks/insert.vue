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
          @value="stock.symbol = $event"
          :clear="clearInput"
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
          @value="stock.quantity = $event"
          :clear="clearInput"
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
          @value="stock.value = $event"
          :clear="clearInput"
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
          @value="stock.date = $event"
          @clean-input="clearInput = $event.value"
          :clear="clearInput"
        />
      </div>
      <orange-button
        color="#fff"
        height="30px"
        @click="insertStock"
        width="100%"
        minWidth="200px"
        fontWeight="700"
        :clear="clearInput"
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
      clearInput: false,
      stock: {
        symbol: '',
        quantity: null,
        value: null,
        date: null,
      },
    };
  },
  methods: {
    async insertStock() {
      try {
        this.stock.symbol = this.stock.symbol.toUpperCase();
        const response = await this.$http.post('/stocks/', this.stock);
        if (response.status === 201) {
          this.stock.symbol = '';
          this.stock.quantity = null;
          this.stock.value = null;
          this.stock.date = null;
          this.clearInput = true;
        }
      } catch (error) {
        console.log(error);
      }
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
