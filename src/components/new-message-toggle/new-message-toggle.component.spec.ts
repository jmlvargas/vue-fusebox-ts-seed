// References:
// https://github.com/schoening/vue-typescript-class-component-jest
// https://medium.freecodecamp.org/simple-unit-tests-with-vue-test-utils-and-jest-c384d7abc321
//
// tslint:disable-next-line:no-implicit-dependencies
import { mount } from "@vue/test-utils";
import NewMessageToggleComponent from "./new-message-toggle.component.vue";

describe("NewMessageToggleComponent:", () => {
	it("displays default message", () => {
		const wrapper = mount(NewMessageToggleComponent);
		expect(wrapper.text()).toContain("default message");
	});

	it("toggles message when button is clicked", () => {
		const wrapper = mount(NewMessageToggleComponent);
		const button = wrapper.find("#toggle-message");
		const p = wrapper.find("p");

		button.trigger("click");

		expect(p.text()).toBe("message");

		button.trigger("click");
		expect(p.text()).toBe("toggled message");
	});
});
