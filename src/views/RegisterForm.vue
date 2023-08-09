<script setup>
import { ref, computed } from 'vue'
import { useNotification } from '@kyvg/vue3-notification'
import axios from 'axios'
// import showNoti from './showNoti.vue'
const { notify } = useNotification()

const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const fullname = ref('')
const gender = ref('')
const email = ref('')
const age = ref('')
const accessToken = ref(localStorage.getItem('access_token'))
const isLoggedIn = computed(() => !!accessToken.value)

const register = () => {
  axios
    .post('http://localhost:3000/auth/register', {
      username: username.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      fullname: fullname.value,
      gender: gender.value,
      email: email.value,
      age: parseInt(age.value)
    })
    .then((res) => {
      console.log(res)
      if (res.data.message === 'Username already existed') {
        showNotification('Error', 'Username already existed', 'error')
      } else {
        showNotification('Success', 'You are registered!')
      }
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
      <form @submit.prevent="register">
        <h2>Register</h2>
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
        <div class="form-group">
          <label for="confirm-password">Confirm password</label>
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="Confirm password"
            id="confirm-password"
            name="confirm-password"
          />
        </div>
        <div class="form-group">
          <label for="fullname">Full name</label>
          <input
            v-model="fullname"
            type="text"
            placeholder="Full name"
            id="fullname"
            name="fullname"
          />
        </div>
        <div class="form-group">
          <label for="gender">Gender</label>
          <select v-model="gender" placeholder="Select gender" id="gender" name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" type="email" placeholder="Email" id="email" name="email" />
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input v-model="age" type="number" placeholder="age" id="age" name="age" />
        </div>
        <button type="submit">Register</button>
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
  // width: 400px;
  width: 40%;
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
  select {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
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
