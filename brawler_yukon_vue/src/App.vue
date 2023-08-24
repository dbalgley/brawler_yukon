<template>
  <div id="app">
    <!-- Navbar -->
    <div class="navbar">
      <div class="nav-item">
        <a href="#about">About Me</a>
      </div>
      <div class="nav-item">
        <a href="#blog">Blog</a>
      </div>
      <div class="nav-item">
        <a href="#projects">Projects</a>
      </div>
    </div>

    <!-- About Me Section -->
    <section id="about">
      <h1>About Me</h1>
      <p>
        Results oriented individual experienced in analysis, design, development, testing, and implementation of applications. Seeking a Software position that would allow me to apply my skillset and expertise in Python, Biotechnology, and product delivery. Proficient in a variety of platforms, languages, and toolkits, able to gain deep understanding of technical systems and subject matter. Accustomed to working on tight deadlines while maintaining project scope and quality. Professional experience in algorithm design and standup of Artificial Intelligence and Machine Learning feature sets. Demonstrated proficiency in proposal writing, group presentations, onboarding, and knowledge transfer. Works well in both self-directed and highly structured environments.
      </p>
    </section>

    <!-- Blog Section -->
    <section id="blog">
      <h1>Blog</h1>
      <p>
        Blog coming soon
      </p>
    </section>

    <!-- Projects Section -->
    <section id="projects">
      <h1>Projects</h1>
      <p>
        Projects coming soon
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

</style>
