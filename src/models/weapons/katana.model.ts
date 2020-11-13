import { injectable } from "inversify";
import Weapon from "./weapon.model";

/**
 * The Katana weapon.
 */
@injectable()
class Katana extends Weapon {
	public constructor() {
		super();
		this.name = "Katana";
	}
}

export default Katana;
