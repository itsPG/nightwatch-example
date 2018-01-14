const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');
const PKG = require('./package.json');

module.exports = {
	src_folders: [
		'src'
	],
	test_workers: false,
	output_folder: './results',
	selenium: {
		start_process: true,
		server_path: seleniumServer.path,
		host: '127.0.0.1',
		port: 3511,
		cli_args: {
			'webdriver.chrome.driver' : chromedriver.path,
			'webdriver.gecko.driver':  geckodriver.path
		}
	},

	test_settings: {
		default: {
			launch_url: 'http://localhost',
			selenium_host: '127.0.0.1',
			selenium_port: 3511,
			silent: true,
			screenshots: {
				enable: true,
				path: './screenshots'
			},
			desiredCapabilities: {
				browserName: 'chrome'
			},
		},

		chrome: {
			desiredCapabilities: {
				browserName: 'chrome',
				javascriptEnabled: true
			}
		},
		firefox: {
			desiredCapabilities: {
				browserName: 'firefox',
				javascriptEnabled: true
			}
		}
	}
}