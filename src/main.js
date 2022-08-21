import { createApp } from 'vue'
import App from "@/App";
import ui from "@/ui";

const app = createApp(App)
ui.forEach(ui => {
    app.component(ui.name, ui);
})

app.mount('#app')
