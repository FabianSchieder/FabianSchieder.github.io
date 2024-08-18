<template>
  <div class="settings">
    <h1>Settings</h1>

    <hr>
    <br>

    <h2>Account</h2>

    <form @submit.prevent="changePassword">
      <h4>Change Password</h4>
      <input type="password" v-model="newPassword" placeholder="Enter new password"/>
      <button type="submit">Change Password</button>
    </form>

    <form @submit.prevent="changeUsername">
      <h4>Change Username</h4>
      <input type="text" v-model="newUsername" placeholder="Enter new username"/>
      <button type="submit">Change Username</button>
    </form>

    <h2>Privacy</h2>
    <h4>Who can see my Profile?</h4>
    <h4>Who can message me?</h4>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UserService from '../services/UserService';

const newPassword = ref('');
const newUsername = ref('');

const onChangePasswordButton = () => {
  UserService.setPassword()
};

const onChangeUsernameButton = () => {
};
</script>

<style scoped>
.settings {
  margin: 20px;
  font-family: Arial, sans-serif;
}

.settings h1, .settings h2, .settings h4 {
  color: #333;
}

.settings input {
  display: block;
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.settings button {
  padding: 8px 16px;
  background-color: var(--dark);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.settings button:hover {
  background-color: var(--dark);
}
</style>