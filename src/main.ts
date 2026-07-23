import type { Component } from 'vue';
import { createApp } from 'vue';
import App from './App.vue';
import { i18n } from './i18n';

import './styles/main.css';

const app = createApp(App as Component);

app.use(i18n);
app.mount('#app');

