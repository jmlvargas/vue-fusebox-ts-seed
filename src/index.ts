import Vue from "vue";
import VueRouter, { RouterOptions } from "vue-router";
import AppComponent from "./components/app/app.component.vue";
import HomeComponent from "./components/home/home.component.vue";

// IoC
import container from "./ioc/ioc-container";
import configureIocContainer from "./ioc/ioc-container-config";

configureIocContainer(container);

// tslint:disable-next-line:no-unsafe-any
Vue.use(VueRouter);

const routerOptions: RouterOptions = {
	routes: [
		{ path: "/", component: HomeComponent }
	]
};

// tslint:disable-next-line:no-unsafe-any
const router = new VueRouter(routerOptions);

// tslint:disable-next-line:no-unsafe-any
(() => new Vue({
		router,
		el: "#app",
		render: (createElement) => createElement(AppComponent)
}))();
