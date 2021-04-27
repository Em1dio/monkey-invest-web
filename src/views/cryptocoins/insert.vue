<template>
  <div>
    <div class="form__add">
      <div class="form__input">
        <p class="input__titulo">CryptoCoins</p>
        <monkey-select
          :items="cryptos"
          v-model="crypto.symbol"
          width="100%"
          minWidth="100px"
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
          v-model="crypto.value"
        />
      </div>
      <div class="form__input">
        <p class="input__titulo">Quantity</p>
        <monkey-input
          name="CryptoQuantity"
          type="number"
          min="0"
          width="100%"
          minWidth="100px"
          v-model="crypto.quantity"
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
          v-model="crypto.date"
        />
      </div>
      <orange-button
        color="#fff"
        height="30px"
        @click="insertCrypto"
        width="100%"
        minWidth="200px"
        fontWeight="700"
      >
        <file-plus-icon class="icon" /> Add Crypto
      </orange-button>
    </div>
  </div>
</template>

<script>
import OrangeButton from '../../components/MonkeyPack/OrangeButton.vue';
import MonkeyInput from '../../components/MonkeyPack/MonkeyInput.vue';
import monkeySelect from '../../components/MonkeyPack/monkeySelect';
export default {
  components: { OrangeButton, MonkeyInput, monkeySelect },
  data() {
    return {
      crypto: {
        symbol: '',
        quantity: null,
        value: null,
        date: null,
      },
      cryptos: [
        { id: 'BTC', value: 'BTC' },
        { id: 'ETH', value: 'ETH' },
        { id: 'XRP', value: 'XRP' },
        { id: 'LTC', value: 'LTC' },
      ],
    };
  },
  methods: {
    insertCrypto() {
      this.crypto.walletId = this.$store.activeWallet;
      console.log(this.crypto);
      this.$emit('inserted-crypto', this.crypto);
      this.crypto = {
        quantity: null,
        value: null,
        date: null,
      };
    },
  },
};
</script>

<style scoped>
.form__add {
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
