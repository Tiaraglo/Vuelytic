import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import { apolloClient } from './utils/apollo-client'
import { provideApolloClient } from '@vue/apollo-composable'
import store from './store'

const app = createApp(App)

provideApolloClient(apolloClient)

app.use(store)
app.use(router)
app.mount('#app')
