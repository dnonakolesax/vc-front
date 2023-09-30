import profile from "../components/AuthorProfile/profile.js";
import notfound from "../components/NotFound/notfound.js";

/**
 * Массив объектов с url и функциями отрисовки страниц
 */
export const routes = {
    "profile": {
        render: profile
    },
    404: {
        render: notfound
    }
}