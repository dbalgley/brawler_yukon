<template>
  <div>
    
  <v-app dark>
    <vue-particles class="particles"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"></vue-particles>
    <v-navigation-drawer v-model="drawer" app mobile-break-point="1264" v-cloak>
      <v-list-item to="/">Home</v-list-item>
      <v-list-item to="/about_me">About Me</v-list-item>
      <v-list-item to="/resume">Resume</v-list-item>
      <v-list-item to="/software_projects">Software Project Portfolio</v-list-item>
      <v-list-item to="/videos">GoPro & Drone Video Portfolio</v-list-item>
      <v-list-item to="/printing">3D Printing Portfolio</v-list-item>
      <v-list-item to="/knitting">Knitting Portfolio</v-list-item>
      <v-list-item to="/blog">Blog</v-list-item>

    <v-container>
      <v-row
        justify="center"
        align="center"
        class="fill-height"
      >
        <!-- GitHub Button -->
        <v-col cols="auto" class="px-2">
          <a href="https://github.com/dbalgley" target="_blank" class="social-button">
            <font-awesome-icon :icon="['fab', 'github']" size="2x" />
          </a>
        </v-col>
        
        <!-- LinkedIn Button -->
        <v-col cols="auto" class="px-2">
          <a href="https://www.linkedin.com/in/dbalgley/" target="_blank" class="social-button">
            <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
          </a>
        </v-col>
        
        <!-- Instagram Button -->
        <v-col cols="auto" class="px-2">
          <a href="https://www.instagram.com/davisfiguresitout/" target="_blank" class="social-button">
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
          </a>
        </v-col>
      </v-row>
    </v-container>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </v-app-bar-nav-icon>
      <v-toolbar-title>Davis's WebXone</v-toolbar-title>
      <v-btn color="success" @click="toggleTheme">toggle theme</v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row>
          <!-- Left Spacer for larger screens -->
          <v-col cols="4" class="d-none d-md-flex"></v-col>

          <!-- Dynamic Content Slot -->
          <v-col cols="12" md="4">
            <router-view></router-view>
          </v-col>

          <!-- Right Spacer for larger screens -->
          <v-col cols="4" class="d-none d-md-flex"></v-col>
        </v-row>
      </v-container>
      <v-footer app>
        <span>&copy; 2023</span>
      </v-footer>
    </v-main>
  </v-app>
  
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const drawer = ref(true);
const isMobile = computed(() => window.innerWidth < 1264);

onMounted(() => {
  drawer.value = !isMobile.value
})
</script>

<style>

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
