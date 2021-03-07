<template>
  <div class="app">
    <overlay
      :opened="opened"
      :visible="opened"
      @closed="opened = visible = false"
    >
      <span>Test :)</span>
    </overlay>
    {{ opened }}
    <OrangeButton @click="opened = !opened">Open Popup</OrangeButton>
  </div>
</template>

<script>
import OrangeButton from '../../components/MonkeyPack/OrangeButton.vue';
import Overlay from 'vuejs-overlay';
export default {
  components: { OrangeButton, Overlay },
  data() {
    return {
      opened: false,
    };
  },
};
</script>
