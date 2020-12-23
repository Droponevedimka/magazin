import _ from 'lodash'
import {createApp} from 'vue'

//Router config
import router from './router'
//Store config
import store from './store'

//Install main vue module
import App from './components/app.vue'


//Install global module
createApp(App).use(store).use(router).$mount("#app") 




