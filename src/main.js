import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './assets/App.css';  // Import the main CSS file

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import VueParticles from 'vue-particles'

// const calGreenThemeDark = {
//   dark: true,
//   colors: {
//     background: '#000000',
//     surface: '#000000',
//     primary: '#2A4528',
//     'primary-darken-1': '#3700B3',
//     secondary: '#A9714B',
//     'secondary-darken-1': '#018786',
//     error: '#B00020',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FB8C00',
//   }
// }

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
})

library.add(faGithub, faLinkedin, faInstagram, faYoutube, faBars)

createApp(App).use(router).use(vuetify).use(VueParticles).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
