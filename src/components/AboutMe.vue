<!-- src/components/AboutMe.vue -->
<template>
    <PageTemplate title="About Me">
        <p>
            I'm just a regular guy, you know?
        </p>
    </PageTemplate>
</template>

<script setup>
import PageTemplate from './PageTemplate.vue';
</script>

<style scoped>
/* .about-me {
    font-family:'Roboto', sans-serif;
}  */

.social-button {
  margin: 10px;
  color: #333; /* Default color */
  transition: color 0.3s;
}

.social-button:hover {
  color: #0077B5; /* LinkedIn blue for example */
  text-decoration: none;
}
</style>