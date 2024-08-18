<!-- src/App.vue -->
<template>
  <div v-if="isRouteResolved" id="app" class="app">
    <Sidebar v-if="!isLoginPage" />
    <router-view />
    <Footer v-if="!isLoginPage" />
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/AppSidebar.vue';
import Footer from './components/AppFooter.vue';
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isLoginPage = computed(() => route.name === 'login');
const isRouteResolved = ref(false);

onMounted(() => {
  isRouteResolved.value = true;
});
</script>

<style>
:root {
  --primary: #101112;
  --primary-alt: #22c55e;
  --grey: #6c757d;
  --dark: #1B1C1E;
  --dark-alt: #1E1F22;
  --light: #ffffff;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--dark-alt);
}

.content-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: var(--sidebar-width);
  padding: 1rem;
}

.app main {
  flex: 1 1 0;
  padding: 2rem;
}

@media (max-width: 1024px) {
  .app main {
    padding-left: 6rem;
  }
}

:root {
  --vt-c-white: #ffffff;
  --vt-c-white-soft: #f8f8f8;
  --vt-c-white-mute: #f2f2f2;
  --vt-c-black: #1E1F22;
  --vt-c-black-soft: #222222;
  --vt-c-black-mute: #282828;
  --vt-c-indigo: #2c3e50;
  --vt-c-divider-light-1: rgba(60, 60, 60, 0.29);
  --vt-c-divider-light-2: rgba(60, 60, 60, 0.12);
  --vt-c-divider-dark-1: rgba(84, 84, 84, 0.65);
  --vt-c-divider-dark-2: rgba(84, 84, 84, 0.48);
  --vt-c-text-light-1: var(--vt-c-indigo);
  --vt-c-text-light-2: rgba(60, 60, 60, 0.66);
  --vt-c-text-dark-1: var(--vt-c-white);
  --vt-c-text-dark-2: rgba(235, 235, 235, 0.64);
}

:root {
  --color-background: var(--vt-c-white);
  --color-background-soft: var(--vt-c-white-soft);
  --color-background-mute: var(--vt-c-white-mute);
  --color-border: var(--vt-c-divider-light-2);
  --color-border-hover: var(--vt-c-divider-light-1);
  --color-heading: var(--vt-c-text-light-1);
  --color-text: var(--vt-c-text-light-1);
  --section-gap: 160px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-background: var(--vt-c-black);
    --color-background-soft: var(--vt-c-black-soft);
    --color-background-mute: var(--vt-c-black-mute);
    --color-border: var(--vt-c-divider-dark-2);
    --color-border-hover: var(--vt-c-divider-dark-1);
    --color-heading: var(--vt-c-text-dark-1);
    --color-text: var(--vt-c-text-dark-2);
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  font-weight: normal;
}

body {
  min-height: 100vh;
  color: var(--color-text);
  background: var(--color-background);
  transition: color 0.5s, background-color 0.5s;
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 3px;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}

.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: var(--dark-alt);
  color: var(--light);
  padding: 1rem;
  text-align: center;
}

footer {
  color: var(--light);
  padding: 1rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
}

main {
  flex: 1;
  padding: 2rem;
}

* {
  box-sizing: inherit;
}
</style>