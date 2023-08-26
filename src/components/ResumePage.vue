<!-- src/components/ResumePage.vue -->
<template>
  <PageTemplate title="Resume">
    <p>
      Please find my resume embedded here, as well as available for download. 
    </p>
  </PageTemplate>
  <div class="resume-page">
    <object data="/DavisBalgleyResume2023-dxt.pdf" type="application/pdf" width="100%" height=1000px>
      <p>It seems you don't have a PDF plugin for this browser. No problem, you can <a href="/DavisBalgleyResume2023-dxt.pdf.pdf">click here to download the PDF file.</a></p>
    </object>
  </div>
</template>

<script setup>
  import PageTemplate from './PageTemplate.vue'
</script>

<style scoped>
  .resume-page {
    margin-top: 20px;
  }
</style>