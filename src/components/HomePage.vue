<template>
    <v-main>
    <v-container>
        <!-- Text paragraphs -->
        <v-row>
        <v-col cols="12">
            <p></p>
        </v-col>
        </v-row>

        <!-- Photos/Videos -->
        <v-row>
        <v-col cols="12">
            <!-- <v-img src="@/path-to-your-image.jpg" aspect-ratio="16/9"></v-img> -->
        </v-col>
        <v-col cols="12">
            <video controls width="100%">
            <!-- <source src="@/path-to-your-video.mp4" type="video/mp4"> -->
            </video>
        </v-col>
        </v-row>
    </v-container>
    </v-main>
  
      <v-footer app>
        <span>&copy; 2023</span>
      </v-footer>
  </template>
  
  <script>
  export default {
    name: 'MyPage',
    data() {
      return {};
    },
  };
  </script>
  
  <style scoped>
  /* You can add custom styling here, e.g., colors, typography, etc. to match ChatGPT's UI */
  </style>