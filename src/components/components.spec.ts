// tslint:disable-next-line:no-implicit-dependencies
import { mount } from "@vue/test-utils";
import AppComponent from "./app/app.component.vue";
import HomeComponent from "./home/home.component.vue";
import { MyNavigator } from "./navigation/my-navigator";

describe("components.test.ts:", () => {
	it("can load a component", () => {
		expect(AppComponent).toBeDefined();
	});

	it("can load a component", () => {
		expect(HomeComponent).toBeDefined();
	});

	it("can load a simple TS class", () => {
		expect(MyNavigator).toBeDefined();
	});

	it("should fail", () => {
		expect(true).toBe(true);
	});

	it("window must be defined", () => {
		expect(window).toBeDefined();
	});

	it("mount must be defined", () => {
		expect(mount).toBeDefined();
	});
});
