<template>
  <footer class="footer">
    <a :href="linkURL" target="_blank">
      <span class="material-icons">{{ iconName }}</span>
      <span>{{ linkText }}</span>
    </a>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const iconName = ref('link') // Icon-Name
const linkURL = ref('https://www.instagram.com/censatu') // URL des Hyperlinks
const linkText = ref('Instagram - Censatu') // Text des Hyperlinks
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: var(--light);
}

.footer a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--light);
}

.footer .material-icons {
  margin-right: 0.5rem;
}
</style>