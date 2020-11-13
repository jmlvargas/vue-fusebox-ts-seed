import { inject, injectable } from "inversify";
import SERVICE_IDENTIFIER from "../../ioc/ioc-identifiers";
import Weapon from "../weapons/weapon.model";
import Warrior from "./warrior.model";

/**
 * The Samurai warrior implementation.
 */
@injectable()
class Samurai extends Warrior {
	public constructor(@inject(SERVICE_IDENTIFIER.WEAPON) weapon: Weapon) {
		super();
		this.name = "Samurai";
		this.weapon = weapon;
	}
}

export default Samurai;
