<!-- src/components/HomePage.vue -->
<template>
    <h2>Hello, my name is</h2>
    <PageTemplate title="Davis Balgley">
        <p>Welcome to my digital domain! I am a tech enthusiast and creative soul with a knack for software
             development and digital design. Dive deep into my portfolios to witness an amalgamation of code, art, 
             and innovation. From intricate software projects to breathtaking drone videography, and detailed 3D prints 
             – here's a glimpse of my multifaceted journey. Feel free to explore, connect, and embark on this digital 
             adventure with me.
        </p>

        <h2>
            This Website's Tech Stack (For Nerds)
        </h2>
        <p>This website is a Vue.js single-page application compiled into static assets and delivered through a
            cloud-native hosting stack. The site is stored in Amazon S3, distributed globally through Amazon
            CloudFront, secured with AWS Certificate Manager, and served under a domain managed by Cloudflare DNS.
        </p>
        <p>
            The current architecture emphasizes simplicity, reliability, and low operational overhead. By leveraging
            managed cloud services, the site requires no dedicated servers while benefiting from global content
            delivery, TLS termination, automated certificate management, and highly available object storage.
        </p>
        <p>
            Prior iterations of this site were self-hosted on a Raspberry Pi homelab running a Kubernetes
            (k3s) cluster provisioned with Ansible. External traffic was exposed using MetalLB, certificates
            were issued via cert-manager and Let's Encrypt, and ingress routing was handled within the cluster.
            Migrating the site from self-hosted infrastructure to managed AWS services reduced operational
            complexity while preserving the deployment and automation practices developed in the homelab environment.
        </p>
    </PageTemplate>
</template>

<script setup>
import PageTemplate from './PageTemplate.vue';
</script>
  
  <style scoped>
  /* You can add custom styling here, e.g., colors, typography, etc. to match ChatGPT's UI */
  </style>