<!-- src/components/Videos.vue -->
<template>
    <PageTemplate title="Video Portfolio">
        <p>
            Welcome to my collection of drone and GoPro captures, a testament to my amateur yet passionate foray into aerial and action videography. While many of these videos remain in their raw, unedited form, they encapsulate moments of pure joy, whether soaring through the skies, carving down snowy slopes, biking rugged terrain, or simply exploring the world's wonders. Dive in and enjoy these snippets from my adventures!
        </p>
    </PageTemplate>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" v-for="video in videos" :key="video.id">
                <div class="video-container">
                    <iframe 
                        width="560"
                        height="315"
                        :src="'https://www.youtube.com/embed/' + video.id"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import PageTemplate from './PageTemplate.vue'

const videos = ref([
  {id: "Zu8K8BkC64o?si=X712LYbgEmV0S1sK"},
  {id: "WAJx-6wmmiU?si=HgTC7cspyFOCgDCp"},
  {id: "MUtCm5Cy-Ho"},
  {id: "RfQnQBshcnI"},
  {id: "AXIi1uZFbzs"}
  // ... Add more video IDs here
]);
</script>

<style scoped>
  .video-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
}
</style>