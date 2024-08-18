<script setup lang="ts">
import { ref, onMounted } from 'vue';
import UserService from '../services/UserService';

interface User
{
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  role: string;
  createDate: Date;
  passwordUpdateDate: Date;
}

const users = ref<User[]>([]);

onMounted(async () => {
  try {
    const response = await UserService.getUsers();
    users.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
});
</script>

<template>
  <div class="userTable">
    <h1>User List</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Vorname</th>
          <th>Nachname</th>
          <th>Username</th>
          <th>Email</th>
          <th>Rolle</th>
          <th>Beitrittsdatum</th>
          <th>Pw Änderung</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.userName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.createDate }}</td>
          <td>{{ user.passwordUpdateDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.userTable
{
  margin: 20px;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.userTable h1
{
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.userTable table
{
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.userTable th, .userTable td
{
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.userTable th
{
  background-color: #f4f4f4;
  color: #333;
}

.userTable tr:hover
{
  background-color: #f1f1f1;
}

.userTable tr:nth-child(even)
{
  background-color: #f9f9f9;
}

.userTable td
{
  color: #555;
}

.userTable th, .userTable td
{
  text-align: center;
}

.userTable th
{
  font-weight: bold;
}
</style>