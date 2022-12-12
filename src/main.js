import Vue from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

  /* import the fontawesome core */
 // import { library } from '@fortawesome/fontawesome-svg-core'

  /* import font awesome icon component */
 // import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  /* import specific icons */
 // import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
  /*Import icone regular */
 // import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'

  /* add icons to the library */
 // library.add(faUserSecret)

  /* add font awesome icon component */
 // Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
