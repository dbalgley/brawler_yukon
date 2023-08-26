<!-- src/components/MediaDisplay.vue -->
<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" v-for="item in items" :key="item.id">
          <!-- Display Video -->
          <div v-if="type === 'video'" class="video-container">
            <iframe 
              width="560"
              height="315"
              :src="'https://www.youtube.com/embed/' + item.id"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
  
          <!-- Display Photo -->
          <div v-else-if="type === 'photo'" class="photo-container">
            <img :src="item.src" :alt="item.alt" width="560" height="315" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, toRefs, defineProps } from 'vue';
  
  // Props definition
  const props = defineProps({
    type: {
      type: String,
      required: true,
      validator: value => ['video', 'photo'].includes(value)
    },
    items: {
      type: Array,
      required: true
    }
  });
  
  // Extract reactive references
  const { type, items } = toRefs(props);
  </script>
  
  <style scoped>
  .video-container, .photo-container {
    display: flex;
    justify-content: center;
  }
  </style>