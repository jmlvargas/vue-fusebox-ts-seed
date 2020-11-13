import { Container } from "inversify";
import Vue from "vue";
import Component from "vue-class-component";
import SERVICE_IDENTIFIER from "../../ioc/ioc-identifiers";
import Warrior from "../../models/warriors/warrior.model";

/**
 * The Warrior component.
 */
@Component({
	name: "Warrior",
	inject: {
		container: SERVICE_IDENTIFIER.CONTAINER
	}
})
export default class WarriorComponent extends Vue {
	// Regular properties
	/**
	 * The warrior's name.
	 */
	public warriorName?: string;

	/**
	 * The warrior weapon's name.
	 */
	public weaponName?: string;

	// injected dependencies
	/**
	 * IoC container.
	 */
	protected container!: Container;

	/**
	 * The warrior instance.
	 */
	private warrior?: Warrior;

	/**
	 * On creation event handler.
	 */
	public created(): void {
		this.warrior = this.container.get<Warrior>(SERVICE_IDENTIFIER.WARRIOR);

		this.warriorName = this.warrior.name;
		this.weaponName = this.warrior.weapon.name;
		// console.log ('The warrior has been created from the new WarriorComponent!');
	}
}
