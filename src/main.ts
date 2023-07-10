import { createApp } from "vue";
import "./styles/reset.css";
import "./styles/style.css";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFileLines,
  faQuestionCircle,
  faGem
} from "@fortawesome/free-regular-svg-icons";
library.add(faFileLines, faQuestionCircle, faGem);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
