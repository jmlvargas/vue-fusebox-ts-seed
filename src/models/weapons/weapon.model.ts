import { injectable } from "inversify";

/**
 * The Weapon base class.
 */
@injectable()
abstract class Weapon {
	/**
	 * The name of the weapon.
	 */
	public name!: string;
}

export default Weapon;
