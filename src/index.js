import ydTechsupport from './packages/techsupport/index';
const components = [
    ydTechsupport
];
const install = function (Vue, opts = {}) {
        components.map(component => {
        Vue.component(component.name, component);
    })
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    install,
    ydTechsupport
}