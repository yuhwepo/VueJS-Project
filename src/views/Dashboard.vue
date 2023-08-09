<template>
  <div>
    <nav class="nav">This is navbar</nav>
    <!-- <h1 class="title">Dashboard</h1> -->
    <Users/>
    <button class="logout" @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useNotification } from '@kyvg/vue3-notification'
import Users from '@/views/Users.vue'
const { notify } = useNotification()
const accessToken = ref(localStorage.getItem('access_token'))
const isLoggedIn = computed(() => !!accessToken.value)

const showNotification = (title, text, type) => {
  notify({
    title: title,
    text: text,
    type: type
  })
}

const logout = () => {
  if (isLoggedIn.value) {
    localStorage.removeItem('access_token')
    accessToken.value = null
    // showNotification('Success', 'You have been logged out!')
    location.reload()
  }
}
</script>

<style scoped>
.nav {
  background-color: #000;
  color: #fff;
  padding: 1rem;
}

.title {
  color: #000;
}
</style>
