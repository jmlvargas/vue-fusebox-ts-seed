import { NightwatchBrowser } from "nightwatch";
module.exports = {
	"Open Application": (browser: NightwatchBrowser) => {
		browser
			.url(`${browser.launch_url}${browser.globals.homeUrl}`)
			.waitForElementVisible("body", browser.globals.timeout)
			.assert.title(browser.globals.applicationTitle)
			.end();
	}
};
