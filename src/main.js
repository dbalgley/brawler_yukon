import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './assets/App.css';  // Import the main CSS file

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
})

library.add(faGithub, faLinkedin)

createApp(App).use(router).use(vuetify).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
