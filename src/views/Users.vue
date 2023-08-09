<template>
  <div class="container">
    <div class="content">
      <div class="content-header flex justify-between">
        <input
          type="search"
          placeholder="Search User"
          class="border-2 px-2 py-2"
          v-model="searchQuery"
        />
        <button
          class="btn btn-add bg-blue-700 text-white px-3 py-3 rounded hover:bg-blue-600"
          @click="addNewUser()"
        >
          + Create New
        </button>
      </div>
      <div class="content-body mt-10">
        <user-list :pagination="pagination" :users="users" />
      </div>
    </div>
  </div>
</template>

<script setup>
import UserList from '@/components/User/UserList.vue';
import { ref } from 'vue';
import axios from 'axios';

const searchQuery = ref('');

const pagination = {
  // Dữ liệu pagination từ API
};

const users = [];
</script>

<style scoped>
.container {
  padding: 30px 0;
  margin: 0 auto;
}
</style>
