const userRepo = require('../repositories/user.repository');

class UserController {
	constructor() {
		this.project_name = 'HelloWorld';
	}

	async get(req, res) {
		try {
			res.render('user/views/dashboard', {
				title: 'Dashboard',
				page_name: 'dashboard',
				message: 'Logged in successfully'
			});
		} catch (error) {
			res.send(error)
		}
	}

	async profile(req, res) {
		try {
			res.render('user/views/profile', {
				title: 'Profile',
				page_name: 'profile',
				message: ''
			});
		} catch (error) {
			res.send(error)
		}
	}

	async login(req, res) {
		try {
			res.render('user/views/login', {
				title: 'Login',
				page_name: 'other'
			});
		} catch (error) {
			res.send(error);
		}
	}

	async signup(req, res) {
		try {
			res.render('user/views/register', {
				title: 'Register',
				page_name: 'other'
			});
		} catch (error) {
			res.send(error);
		}
	}


	async chat(req, res) {
		try {
			res.render('user/views/chat', {
				title: 'Chat',
				page_name: 'chat'
			});
		} catch (error) {
			res.send(error);
		}
	}
}

module.exports = new UserController();