<template>
  <div>
    <div class="form">
      <div v-if="showLogin" class="login">
        <div>
          <input
            name="username"
            v-model="login.username"
            type="text"
            placeholder="Username"
            @keyup.enter="auth"
          />
        </div>
        <div class="password">
          <input
            name="password"
            v-model="login.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
            @keyup.enter="auth"
          />
          <div class="icon" @click="showPassword = !showPassword">
            <eye-icon
              v-if="showPassword"
              size="48"
              style="color: #fff"
              stroke-width="1"
            />
            <eye-off-icon
              v-else
              size="48"
              style="color: #fff"
              stroke-width="1"
            />
          </div>
        </div>
        <primary-button width="322px" @click="checkLogin">
          Login
        </primary-button>
        <p @click="showLogin = !showLogin">Click here to Signup</p>
      </div>

      <div v-else class="register">
        <input
          name="name"
          v-model="register.name"
          type="text"
          placeholder="Name"
          @keyup.enter="registerAccount"
        />
        <input
          name="username"
          v-model="register.username"
          type="text"
          placeholder="Username/Email"
          @keyup.enter="registerAccount"
        />
        <div class="password">
          <input
            name="password"
            v-model="register.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
            @keyup.enter="registerAccount"
          />
          <div class="icon" @click="showPassword = !showPassword">
            <eye-icon
              v-if="showPassword"
              size="48"
              style="color: #fff"
              stroke-width="1"
            />
            <eye-off-icon
              v-else
              size="48"
              style="color: #fff"
              stroke-width="1"
            />
          </div>
        </div>
        <!-- TODO: Transformar isso em Component. -->
        <div class="password">
          <input
            name="confirmPassword"
            v-model="register.confirmPassword"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Confirm password"
            @keyup.enter="registerAccount"
          />
          <div class="icon" @click="showPassword = !showPassword">
            <eye-icon
              v-if="showPassword"
              size="48"
              style="color: #fff"
              stroke-width="1"
            />
            <eye-off-icon
              v-else
              size="48"
              style="color: #fff"
              stroke-width="1"
            />
          </div>
        </div>
        <primary-button width="322px" @click="registerAccount">
          Register
        </primary-button>
        <p @click="showLogin = !showLogin">Click here to Login</p>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryButton from './MonkeyPack/PrimaryButton.vue';

export default {
  components: { PrimaryButton },
  data() {
    return {
      showPassword: false,
      showLogin: true,
      login: {
        username: '',
        password: '',
      },
      register: {
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  methods: {
    async auth() {
      const data = {
        username: this.login.username,
        password: this.login.password,
      };
      try {
        const response = await this.$http.post('/auth/login', data);
        if (response.status === 201) {
          this.$store.state.token = response.data.access_token;
          this.$store.state.authenticated = true;
          this.$store.state.username = this.login.username;
          this.login.username = '';
          this.login.password = '';
          this.$http.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${response.data.access_token}`;
          this.$cookies.config('1d');
          this.$cookies.set('token', response.data.access_token);
          this.$router.replace({ name: 'dashboard' });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async checkLogin() {
      if (this.login.username != '' && this.login.password != '') {
        await this.auth();
      } else {
        console.log('username and password must be present');
      }
    },

    async registerAccount() {
      const confirmPassword =
        this.register.password === this.register.confirmPassword;
      if (!confirmPassword) {
        // TODO: GERAR ALERT!
        return;
      }
      const data = {
        name: this.register.name,
        username: this.register.username,
        password: this.register.password,
      };
      try {
        const response = await this.$http.post('/users', data);
        if (response.status === 201) {
          this.register.name = '';
          this.register.username = '';
          this.register.password = '';
          this.showLogin = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
* {
  display: flex;
  margin: 0 auto;
  color: #292755;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
}

.login,
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form input {
  all: unset;
  width: 300px;
  height: 55px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #d3e2e5;
  margin-bottom: 20px;
  color: #292755;
  text-align: start;
  padding: 0 10px;
}

.form ::placeholder {
  color: #292755;
  opacity: 1; /* Firefox */
}

.form .password .icon {
  height: 32px;
  padding: 5px;
  margin-left: -35px;
  cursor: pointer;
  transition: opacity 150ms ease-in-out;

  /* double clicking the show/hide button doesn't select text with this: */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
}

.form .password .icon:hover {
  opacity: 0.7;
}

.form p {
  margin: 20px 0;
  cursor: pointer;
  transition: opacity 150ms ease-in-out;
}

.form p:hover {
  opacity: 0.7;
}
</style>
