import { inject, injectable } from "inversify";
import SERVICE_IDENTIFIER from "../../ioc/ioc-identifiers";
import Weapon from "../weapons/weapon.model";
import Warrior from "./warrior.model";

/**
 * The Ninja warrior implementation.
 */
@injectable()
class Ninja extends Warrior {
	public constructor(@inject(SERVICE_IDENTIFIER.WEAPON) weapon: Weapon)	{
		super();
		this.name = "Ninja";
		this.weapon = weapon;
	}
}

export default Ninja;
