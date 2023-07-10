import { createApp } from "vue";
import "./reset.css";
import "./style.css";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFileLines,
  faQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";
library.add(faFileLines, faQuestionCircle);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
