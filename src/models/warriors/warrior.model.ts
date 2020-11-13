import { injectable } from "inversify";
import Weapon from "../weapons/weapon.model";

/**
 * The Warrior base class.
 */
@injectable()
abstract class Warrior {
	/**
	 * The name of the warrior.
	 */
	public name!: string;

	/**
	 * The weapon of the warrior.
	 */
	public weapon!: Weapon;
}

export default Warrior;
