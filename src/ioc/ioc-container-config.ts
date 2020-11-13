// Import dependencies
import { Container } from "inversify";

// Import interfaces
import SERVICE_IDENTIFIER from "../ioc/ioc-identifiers";
import Warrior from "../models/warriors/warrior.model";
import Weapon from "../models/weapons/weapon.model";

// Import implementations
import Ninja from "../models/warriors/ninja.model";
import Shuriken from "../models/weapons/shuriken.model";

const configureIocContainer = (container: Container): void => {
	container.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Ninja);
	container.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Shuriken);
};

export default configureIocContainer;
