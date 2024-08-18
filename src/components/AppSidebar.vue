<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img :src="logoURL" alt="Vue" />
      <div class="logo-text">iKatharina</div>
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">menu</span>
      </button>
    </div>

    <div class="profile">
      <img :src="profilePictureURL" alt="User Profile" />
      <div class="user-text">{{ userName }}</div>
      <div class="user-text">{{ userRole }}</div>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link to="/" class="button">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>

      <router-link to="/about" class="button">
        <span class="material-icons">description</span>
        <span class="text">About</span>
      </router-link>

      <router-link to="/forum" class="button">
        <span class="material-icons">forum</span>
        <span class="text">Forum</span>
      </router-link>

      <router-link to="/user" class="button">
        <span class="material-icons">group</span>
        <span class="text">User</span>
      </router-link>

      <router-link to="/todolist" class="button">
        <span class="material-icons">checklist</span>
        <span class="text">ToDo List</span>
      </router-link>

      <router-link to="/login" class="button">
        <span class="material-icons">logout</span>
        <span class="text">Logout</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <router-link to="/settings" class="button">
        <span class="material-icons">settings</span>
        <span class="text">Settings</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import logoURL from '../assets/logo.svg'
import UserService from '../services/UserService'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
const profilePictureURL = ref('')
const userName = ref('Test-User')
const title = ref('iKatharina')
const userRole = ref('Admin')

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
  localStorage.setItem("is_expanded", String(is_expanded.value));
}

onMounted(async () => {
  try {
    const response = await UserService.getUserProfile();
    profilePictureURL.value = response.data.profilePictureURL;
    userName.value = response.data.userText;
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
});
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--dark);
  color: var(--light);
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition: 0.2s ease-in-out;
}

aside .logo {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

aside .logo img {
  width: 2rem;
}

aside .logo .logo-text {
  color: var(--light);
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
}

aside .profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

aside .profile img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
}

aside .profile .user-text {
  margin-top: 0.5rem;
  color: var(--light);
}

aside .flex {
  flex: 1 1 0%;
}

aside .menu-toggle-wrap {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  position: relative;
  top: 0;
  transition: 0.2s ease-in-out;
}

aside .menu-toggle-wrap .menu-toggle {
  transition: 0.2s ease-in-out;
}

aside .menu-toggle-wrap .menu-toggle .material-icons {
  font-size: 2rem;
  color: var(--light);
  transition: 0.2s ease-out;
}

aside .menu-toggle-wrap .menu-toggle:hover .material-icons {
  color: var(--primary);

}

aside .menu-toggle-wrap .menu-toggle:hover::before,
aside .menu-toggle-wrap .menu-toggle.router-link-exact-active::before {
  content: '';
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--light);
  border-radius: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: background-color 0.2s ease-in-out;
}

aside .menu-toggle-wrap .menu-toggle {
  position: relative;
  z-index: 1;
}

aside h3, aside .button .text {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

aside h3 {
  color: var(--grey);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

aside .menu {
  margin: 0 -1rem;
}

aside .menu .button {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  padding: 0.5rem 1rem;
}

aside .menu .button .material-icons {
  font-size: 2rem;
  color: var(--light);
  transition: 0.2s ease-in-out;
}

aside .menu .button .text {
  color: var(--light);
  transition: 0.2s ease-in-out;
}

aside .menu .button {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 12px;
  transition: background-color 0.3s, color 0.3s;
}

aside .menu .button:hover {
  background-color: var(--vt-c-white);
}

aside .menu .button:hover .material-icons,
aside .menu .button:hover .text {
  color: var(--primary);
}

aside .menu .button.router-link-exact-active {
  background-color: var(--vt-c-white);
  color: var(--primary);
}

aside .menu .button.router-link-exact-active .material-icons, aside .menu .button.router-link-exact-active .text {
  color: var(--primary);
}

aside .footer {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

aside .footer p {
  font-size: 0.875rem;
  color: var(--grey);
}

aside.is-expanded {
  width: var(--sidebar-width);
}

aside.is-expanded .menu-toggle-wrap {
  top: -3rem;
}

aside.is-expanded .menu-toggle-wrap .menu-toggle {
  transform: rotate(-180deg);
}

aside.is-expanded h3, aside.is-expanded .button .text {
  opacity: 1;
}

aside.is-expanded .button .material-icons {
  margin-right: 1rem;
}

aside.is-expanded .footer {
  opacity: 0;
}

@media (max-width: 1024px) {
  aside {
    position: absolute;
    z-index: 99;
  }
}
</style>