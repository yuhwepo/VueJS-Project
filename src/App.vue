<script setup>
import showNoti from './components/showNoti.vue';
import LoginForm from './views/LoginForm.vue';
import RegisterForm from './views/RegisterForm.vue';
import Dashboard from './views/Dashboard.vue';

import { ref, computed } from 'vue';
const accessToken = ref(localStorage.getItem('access_token'));
const isLoggedIn = computed(() => !!accessToken.value);
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <Dashboard v-if="isLoggedIn" />
    <div v-else>
      <RegisterForm />
      <LoginForm />
    </div>
    <notifications />
    <!-- <showNoti /> -->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
