import { injectable } from "inversify";
import Weapon from "./weapon.model";

/**
 * The Shuriken weapon.
 */
@injectable()
class Shuriken extends Weapon {
	public constructor() {
		super();
		this.name = "Shuriken";
	}
}

export default Shuriken;
