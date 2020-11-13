import Vue from "vue";
import Component from "vue-class-component";
import { MyNavigator } from "./my-navigator";

/**
 * Navigation component
 */
@Component({
	name: "Navigation"
})
export default class NavigationComponent extends Vue {
	/**
	 * Returns the data object.
	 * @return An object containing the required data.
	 */
	public data(): object {
		return {
			testName: "Check this out!"
		};
	}

	/**
	 * Opens the documentation.
	 */
	public openDocumentation(): void {
		MyNavigator.openDocumentation();
	}

	/**
	 * Goes to a given URL.
	 * @param url The target URL.
	 */
	public goTo(url: string): void {
		MyNavigator.goTo(url);
	}

	/**
	 * Makes a tests.
	 */
	public checkThisOut(): void {
		// console.log('hello from the new component!');
		MyNavigator.checkThisOut();
	}
}
