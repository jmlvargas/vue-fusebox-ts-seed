import Vue from "vue";
import Component from "vue-class-component";
import NewMessageToggleComponent from "../new-message-toggle/new-message-toggle.component.vue";
import WarriorComponent from "./../warrior/warrior.component.vue";

/**
 * Home component
 */
@Component({
	name: "Home",
	components: {
		"warrior": WarriorComponent,
		"message-toggle": NewMessageToggleComponent
	}
})
export default class HomeComponent extends Vue {
	/**
	 * Some message
	 */
	public msg = "Hello warrior!";
}
