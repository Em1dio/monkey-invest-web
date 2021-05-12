<template>
  <div>
    <div class="settings">
      <div class="settings_header">
        <title-bar size="50px" color="#e27034" textColor="#e7e7e7">
          Settings
        </title-bar>
      </div>
      <div class="settings_body">
        <div class="input_label">
          <p>Old Password</p>
          <input
            class="monkey_input"
            type="password"
            v-model="settings.oldPassword"
          />
        </div>
        <div class="input_label">
          <p>New Password</p>
          <input
            class="monkey_input"
            type="password"
            v-model="settings.password"
          />
        </div>
        <div class="input_label">
          <p>Confirm Password</p>
          <input
            class="monkey_input"
            type="password"
            v-model="settings.confirmPassword"
          />
          <button class="change-pass" @click="changePassword">
            Change Password
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titleBar from '../../components/MonkeyPack/titleBar.vue';
export default {
  components: { titleBar },
  data() {
    return {
      settings: {
        oldPassword: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  methods: {
    async changePassword() {
      try {
        const testPassword =
          this.settings.password !== '' &&
          this.settings.password === this.settings.confirmPassword;
        if (!testPassword) {
          throw new Error('Mismatch Password');
        }
        await this.$http.post('/users/change-password/', this.settings);
        this.settings.oldPassword = '';
        this.settings.password = '';
        this.settings.confirmPassword = '';
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.settings {
  margin-left: 10px;
  margin-top: 10px;
}

.monkey_input {
  width: 280px;
  color: white;
  background: #363463;
  padding: 10px;
  border-radius: 3px;
  border: none;
}

.monkey_input:focus {
  outline: 2px solid #4e4a8f;
}

.monkey_input::placeholder {
  color: rgb(196, 196, 196);
}

.input_label {
  display: flex;
  flex-direction: column;
}
.input_label p {
  color: #fff;
  margin-bottom: 3px;
}

.change-pass {
  width: 300px !important;
  padding: 13px;
  background: #e27034;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: white;
  margin-top: 20px;
  transition: 0.3s;
}

.change-pass:hover {
  cursor: pointer;
  transform: scale(1.01);
}
</style>
