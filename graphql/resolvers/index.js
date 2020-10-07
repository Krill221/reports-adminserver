//top for generation
const objectsResolvers = require('./objects');
const usersResolvers = require('./users');
const uploadResolvers = require('./uploadFile');


module.exports = {
	Query: {
		...objectsResolvers.Query,
		...usersResolvers.Query,
	},
	Mutation: {
		...objectsResolvers.Mutation,
		...usersResolvers.Mutation,
		...uploadResolvers.Mutation,
	}
};
