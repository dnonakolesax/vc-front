/**
 * Функция отрисовки страницы пользователя
 */
export default (user) => {
    const rootElement = document.querySelector('#root');
    if (user.author) {
        user.targets.forEach(function (target) {
            target.doneproc = target.done/target.target*100;
            target.leftproc = 100-target.doneproc;
            console.log(target.doneproc)
            console.log(target.leftproc)
        })
        Handlebars.registerPartial('target', Handlebars.templates.target);
        Handlebars.registerPartial('sub_level', Handlebars.templates.sub_level);
        Handlebars.registerPartial('comment', Handlebars.templates.comment);
        Handlebars.registerPartial('post', Handlebars.templates.post);
        rootElement.innerHTML = Handlebars.templates.author_profile(user);
    } else {
        rootElement.innerHTML = Handlebars.templates.user_profile(user);
    }
};