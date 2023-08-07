import spam from "./utils/spammer.js";
import menu from "./utils/menu.js";

(async () => {
  const data = await menu();
  spam(data);
})();
