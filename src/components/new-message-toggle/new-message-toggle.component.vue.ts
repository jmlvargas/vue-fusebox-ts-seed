// References:
// https://medium.freecodecamp.org/simple-unit-tests-with-vue-test-utils-and-jest-c384d7abc321

import Vue from "vue";
import Component from "vue-class-component";

/**
 * Message toggle component.
 */
@Component({
	name: "new-message-toggle"
})
export default class NewMessageToggleComponent extends Vue {
	/**
	 * The message to be displayed.
	 */
	public message!: string;

	public constructor() {
		super();
	}

	/**
	 * Returns the data object.
	 * @return The data object.
	 */
	public data(): object {
		return { message: "default message" };
	}

	/**
	 * Toggles the message.
	 */
	public toggleMessage(): void {
		this.message = this.message === "message" ? "toggled message" : "message";
	}
}
