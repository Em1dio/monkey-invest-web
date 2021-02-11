<template>
  <div>
    <div class="form">
      <div>
        <input name="username" type="text" placeholder="Username" />
      </div>
      <div class="password">
        <input
          name="password"
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
      <button>Login</button>
    </div>
  </div>
</template>

<script>
// https://tablericons.com/
// https://github.com/FortAwesome/vue-fontawesome
import { EyeIcon, EyeOffIcon } from "vue-tabler-icons";

export default {
  components: { EyeIcon, EyeOffIcon },
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {},
};
</script>
<style scoped>
* {
  display: flex;
  margin: 0 auto;
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

.form button {
  all: unset;
  width: 254px;
  height: 51px;
  background: rgba(226, 112, 52, 1);
  border-radius: 14px;
  color: white;
  margin-top: 100px;
  cursor: pointer;
}

.form button:hover {
  background: rgb(241, 145, 93);
}

.form .password .icon {
  padding: 2px;
  margin-left: -30px;
}

</style>

