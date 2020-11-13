import Vue from "vue";
import Component from "vue-class-component";
import container from "../../ioc/ioc-container";
// IoC
import SERVICE_IDENTIFIER from "../../ioc/ioc-identifiers";
import NavigationComponent from "../navigation/navigation.component.vue";

/**
 * Application component
 */
@Component({
	name: "App",
	components: {
		navigation: NavigationComponent
	},
	provide: {
		[SERVICE_IDENTIFIER.CONTAINER]: container
	}
})
export default class AppComponent extends Vue {
	public constructor() {
		super();
		// console.log("Application created!");
	}
}
