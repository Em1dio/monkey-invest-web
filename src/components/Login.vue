<template>
  <div>
    <div class="form">
      <div>
        <input
          name="username"
          v-model="input.username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="password">
        <input
          name="password"
          v-model="input.password"
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
          <eye-off-icon v-else size="48" style="color: #fff" stroke-width="1" />
        </div>
      </div>
      <orange-button width="300px" @click="checkLogin">Login</orange-button>
    </div>
  </div>
</template>

<script>
// https://tablericons.com/
// https://github.com/FortAwesome/vue-fontawesome
import { EyeIcon, EyeOffIcon } from "vue-tabler-icons";
import OrangeButton from "./OrangeButton.vue";

export default {
  components: { EyeIcon, EyeOffIcon, OrangeButton },
  data() {
    return {
      showPassword: false,
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async auth() {
      const data = {
        username: this.input.username,
        password: this.input.password,
      };
      try {
        const response = await this.$http.post("/auth/login", data);
        console.log(response);
        if (response.status === 201) {
          this.$store.state.token = response.data.data.access_token;
          this.$store.state.authenticated = true;
          this.$store.state.username = this.input.username;
          this.input.username = "";
          this.input.password = "";
          this.$http.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data.data.access_token}`;

        // this.$router.replace({ name: "dashboard" });
        console.log(this.$http)
        }
      } catch (error) {
        console.log(error);
      }
    },
    async checkLogin() {
      if (this.input.username != "" && this.input.password != "") {
        await this.auth();
      } else {
        console.log("username and password must be present");
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
  margin-top: 200px;
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
  padding: 2px;
  margin-left: -30px;
}
</style>

