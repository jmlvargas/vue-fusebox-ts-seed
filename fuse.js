const {
	FuseBox,
	VueComponentPlugin,
	QuantumPlugin,
	HTMLPlugin,
	CSSPlugin,
	CSSResourcePlugin,
	WebIndexPlugin,
	Sparky
} = require("fuse-box");

let fuse;
let isProduction = false;

const httpPort = 8080;

let openBrowser = true;
Sparky.task("set-no-open", () => {
	openBrowser = false;
});

Sparky.task("set-prod", () => {
	isProduction = true;
});
Sparky.task("clean", () => {
	Sparky.src("./dist").clean("dist/");
});
Sparky.task("watch-assets", () => Sparky.watch("./assets", { base: "./src" }).dest("./dist"));
Sparky.task("copy-assets", () => Sparky.src("./assets/*.*", { base: "./src" }).dest("./dist").exec());

Sparky.task("config", () => {
	fuse = FuseBox.init({
		debugMode: !isProduction,
		target: "browser@es5",
		homeDir: "./src",
		output: "dist/$name.js",
		//hash: isProduction,
		sourceMaps: !isProduction,
		useTypescriptCompiler: true,
		allowSyntheticDefaultImports: true,
		plugins: [
			VueComponentPlugin({
				style: [
					//CSSResourcePlugin(),
					//CSSPlugin({
					//	group: 'components.css',
					//	inject: 'components.css'
					//})
				]
			}),
			CSSPlugin(),
			WebIndexPlugin({
				template: "./src/index.html",
				path: ".",
				title: "Vue.js + Typescript + IoC + FuseBox + Jest"
			}),
			isProduction && QuantumPlugin({
				bakeApiIntoBundle: "vendor",
				uglify: true,
				treeshake: true
			}),
		]
	});

	if(!isProduction){
		fuse.dev({
			open: openBrowser,
			port: httpPort
		});
	}

	// const vendor = fuse.bundle("vendor")
	// 	.instructions("~ index.ts")
	// 	.hmr({reload: true});

	// const app = fuse.bundle("app")
	// 	.instructions("> [index.ts]")
	// 	.hmr({reload: true});

	// if(!isProduction){
	// 	app.watch().hmr();
	// }
})

Sparky.task("bundle", () => {
	const vendor = fuse.bundle("vendor")
		.instructions("~ index.ts")
		.hmr({reload: true});

	const app = fuse.bundle("app")
		.instructions("> [index.ts]")
		.hmr({reload: true});

	if(!isProduction){
		app.watch().hmr();
	}
});

Sparky.task("serve-dev", ["clean", "watch-assets", "config", "bundle"], () => {
	return fuse.run();
});
Sparky.task("default", ["serve-dev"], () => {});

Sparky.task("serve", ["clean", "copy-assets", "set-no-open", "config", "bundle"], () => {
	return fuse.run();
});

Sparky.task("dist", ["clean", "copy-assets", "set-prod", "config", "bundle"], () => {
	return fuse.run();
});
