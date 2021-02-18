<template>
  <div>
    <form class="form">
      <div v-if="showLogin" class="login">
        <div>
          <input
            name="username"
            v-model="login.username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="password">
          <input
            name="password"
            v-model="login.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
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
        <p @click="showLogin = !showLogin">Click here to Signup</p>
        <orange-button width="300px" @click="checkLogin">Login</orange-button>
      </div>

      <form v-else class="register">
        <input
          name="name"
          v-model="register.name"
          type="text"
          placeholder="Name"
        />
        <input
          name="username"
          v-model="register.username"
          type="text"
          placeholder="Username/Email"
        />
        <div class="password">
          <input
            name="password"
            v-model="register.password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
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
            placeholder="Password"
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
        <p @click="showLogin = !showLogin">Click here to Login</p>
        <orange-button width="300px" @click="registerAccount"
          >Register</orange-button
        >
      </form>
    </form>
  </div>
</template>

<script>
// https://tablericons.com/
// https://github.com/FortAwesome/vue-fontawesome
import { EyeIcon, EyeOffIcon } from 'vue-tabler-icons';
import OrangeButton from './OrangeButton.vue';

export default {
  components: { EyeIcon, EyeOffIcon, OrangeButton },
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
  color: white;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
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
  width: 477px;
  height: 55px;
  background: linear-gradient(
    241.25deg,
    rgba(41, 39, 85, 0.35) 4.4%,
    rgba(41, 39, 84, 0.78) 61.77%,
    rgba(27, 24, 66, 0.35) 119.94%
  );
  border-radius: 10px;
  margin-bottom: 50px;
  color: white;
  text-align: start;
  padding: 0 10px;
}

.form ::placeholder {
  color: rgba(255, 255, 255, 0.664);
  opacity: 1; /* Firefox */
}

.form .password .icon {
  /* background-color: red; */
  height: 48px;

  padding: 2px;
  margin-left: -30px;
  cursor: pointer;
  transition: opacity 150ms ease-in-out;

  /* double clicking the show/hide button doesn't select text with this: */
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
}

.form .password .icon:hover {
  opacity: 0.7;
}

.form p {
  cursor: pointer;
  transition: opacity 150ms ease-in-out;
}

.form p:hover {
  opacity: 0.7;
}
</style>
