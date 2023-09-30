import {routes} from "../configs/link_config.js";
import {profile1} from "../test_data/test_data.js";

export class Router {
    constructor() {
        window.addEventListener('click', (e) => {
            const target = document.getElementById("plink").getAttribute("href");
            if (target !== null) {
                e.preventDefault();
                this.navigateTo(target);
            }
        });

        window.addEventListener('popstate', () => {
            const path = window.location.pathname;
            const renderer = path.replace(/[/0-9]*/g, "");
            const route = routes[renderer]
            if (route !== undefined) {
                 route.render(this);
            }
        });
    }

    navigateTo(path) {
        const renderer = path.replace(/[/0-9]*/g, "");
        let route = routes[renderer];
        window.history.pushState(null, null, path);
        if (route === undefined) {
            route = routes[404]
        }
        route.render(profile1);
    }
}