<!-- src/components/BlogPosts.vue -->
<template>
    <div class="blog-page">
        <h1>Blog</h1>
        <!-- Blog Section -->
        <section id="blog">
            <p>
            Blog coming soon
                <v-btn color="success">Click Me</v-btn>
            </p>
        </section>
    </div>
</template>

<script>
export default {
    name: "BlogPosts"
};
</script>

<style scoped>
  .blog-page iframe {
    width: 100%;
    height: 400px;
    margin-bottom: 20px;
  }
</style>