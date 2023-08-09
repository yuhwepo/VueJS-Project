<script setup>
import { ref, computed } from 'vue'
import { useNotification } from '@kyvg/vue3-notification'
import axios from 'axios'
const { notify } = useNotification()

const username = ref('')
const password = ref('')
const accessToken = ref(localStorage.getItem('access_token'))
const isLoggedIn = computed(() => !!accessToken.value)

const login = () => {
  axios
    .post('http://localhost:3000/auth/login', {
      username: username.value,
      password: password.value
    })
    .then((res) => {
      console.log(res)
      if (res.data.token) {
        localStorage.setItem('access_token', JSON.stringify(res.data.token))
        accessToken.value = localStorage.getItem('access_token')
      }
      // showNotification('Success', 'You have been logged in!')
      location.reload()
    })
    .catch((err) => {
      console.log(err)
    })
}

const logout = () => {
  if (isLoggedIn.value) {
    localStorage.removeItem('access_token')
    accessToken.value = null
    showNotification('Success', 'You have been logged out!')
  }
}

const showNotification = (title, text, type) => {
  notify({
    title: title,
    text: text,
    type: type
  })
}
</script>

<template>
  <div class="container">
    <div class="login-form">
      <form @submit.prevent="login">
        <h2>Sign in to your dashboard</h2>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            v-model="username"
            placeholder="Username"
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
        </div>
        <div class="form-group-row">
          <div class="group-row-child">
            <input type="checkbox" name="" id="remember" />
            <label for="remember">Remember me</label>
          </div>
          <div class="group-row-child">
            <span for="">Forgot password?</span>
          </div>
        </div>
        <button type="submit">Sign in</button>
      </form>
    </div>
    <notifications />
  </div>
</template>

<style lang="scss" scoped>
* {
  /* font-family: 'Noto Sans', sans-serif; */
  margin: 0;
  padding: 0;
}

.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  width: 400px;
  background: #fff;
  padding: 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    margin-bottom: 0.5rem;
    color: #000;
  }

  input {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}

button {
  padding: 12px;
  color: #fff;
  font-weight: 700;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #eee;
  cursor: pointer;
  background-color: #2f2db1;
}

h2 {
  margin-bottom: 12px;
  font-weight: 900;
  font-size: 24px;
  color: #333;
  text-align: center;
}

.form-group-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  .group-row-child {
    display: flex;
    align-items: center;
  }

  input[type='checkbox'] {
    margin-right: 6px;
  }

  label {
    margin: 0;
    color: #000;
  }

  span {
    font-weight: 700;
    color: #7d34aa;
    margin: 0;
  }
}
</style>
