const { gql } = require('apollo-server');

module.exports = gql`
	type Object {
		bld: String
		brand: String
		responsible: String
		objecttype: String
		dataprocess: String
		datatype: String
		objectnumber: String
		status: String
		questionarydata: String
		connectdata: String
		closedata: String
		tel: String
		email: String
		lastaction: String
		mallcomment: String

		id: ID!
		createdAt: String
		updatedAt: String
	}
	type User {
		email: String!
		token: String!
		password: String!
		username: String!

		id: ID
		createdAt: String
		updatedAt: String
	}
	input RegisterInput {
		username: String!
		password: String!
		confirmPassword: String!
		email: String!
	}
	type File {
		filename: String!
		mimetype: String!
		encoding: String!
	}
	type Estimate {
		owner: ID,
		value: Float
	}
	type Query {
		objects_where(ids: [ID]): [Object]
		objects: [Object]
		object(id: ID): Object
		users: [User]
		user(id: ID): User
	}
	type Mutation {
		deleteObject(id: ID!): String!
		updateObject(
			bld: String,
			brand: String,
			responsible: String,
			objecttype: String,
			dataprocess: String,
			datatype: String,
			objectnumber: String,
			status: String,
			questionarydata: String,
			connectdata: String,
			closedata: String,
			tel: String,
			email: String,
			lastaction: String,
			mallcomment: String,
			id: ID
		): String!

		register(registerInput: RegisterInput): User!
		login(username: String!, password: String!): User!

		deleteUser(id: ID!): String!
		updateUser(
			id: ID,
			username: String!,
			email: String!,
			password: String!
		): String!

		uploadFile(file: Upload!): File
		deleteFile(file: String!): String!
    }
`;
