<template>
  <v-app dark>
    <v-navigation-drawer app>
      <v-list-item to="/">Home</v-list-item>
      <v-list-item to="/about_me">About Me</v-list-item>
      <v-list-item to="/resume">Resume</v-list-item>
      <v-list-item to="/software_projects">Software Project Portfolio</v-list-item>
      <v-list-item to="/videos">GoPro & Drone Video Portfolio</v-list-item>
      <v-list-item to="/printing">3D Printing Portfolio</v-list-item>
      <v-list-item to="/knitting">Knitting Portfolio</v-list-item>
      <v-list-item to="/blog">Blog</v-list-item>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-toolbar-title>Davis's WebXone</v-toolbar-title>
      <v-btn color="success" @click="toggleTheme">toggle theme</v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row>
          <!-- Left Spacer -->
          <v-col cols="4"></v-col>

          <!-- Dynamic Content Slot -->
          <v-col cols="4">
            <router-view></router-view>
          </v-col>

          <!-- Right Spacer -->
          <v-col cols="4"></v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>

import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped>

body {
  font-family:  'Roboto', sans-serif;
}

.navbar {
  display: flex;
  justify-content: space-around;
  background-color: #d4d4d4;
  padding: 10px 0;
}

.nav-item a {
  color: #373332; /* dusty orange */
  text-decoration: none;
  margin: 0 20px;
}

.nav-item a:hover {
  text-decoration: underline;
}

section {
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #228B22; /* forest green */
}

a {
  text-decoration: none;
  color: inherit;
}

a:visited {
  color: inherit;
}

</style>
