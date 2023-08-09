<template>
  <table class="table table-hover w-full">
    <thead>
      <tr>
        <th
          v-for="(col, index) in tableColumns"
          :id="col ? `id_${col.replace(/\s+/g, '-')}` : ''"
          :key="index"
          class="uppercase font-bold px-2 py-2 text-start"
        >
          {{ col }}
        </th>
      </tr>
    </thead>
    <tbody>
      <user-item v-for="user in userList" :key="user.id" :user="user" />
    </tbody>
  </table>
</template>

<script setup>
import UserItem from '@/components/User/UserItem.vue';
import axios from 'axios';
import { defineProps, ref, onMounted } from 'vue';

const tableColumns = ['Full name', 'Gender', 'Age', 'actions'];

const { pagination, users } = defineProps({
  pagination: Object,
  users: Array
});

const userList = ref([]);

const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:3000/users/');
    userList.value = response.data.pagination.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

onMounted(fetchUsers);
</script>
