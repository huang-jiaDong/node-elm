'use strict';

module.exports = {
	port: parseInt(process.env.PORT, 10) || 8001,
	url: 'mongodb://127.0.0.1:27017/elm',
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: {
			httpOnly: true,
	    secure:   false,
	    maxAge:   365 * 24 * 60 * 60 * 1000,
		}
	}
}