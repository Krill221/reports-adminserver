const Object = require('../../models/Object');
const User = require('../../models/User');
const checkAuth = require('../../util/check-auth');

module.exports = {
    Query: {
        async objects() {
            try {
				const objects = await Object.find().sort({ createdAt: -1 });//g-key populate
				return objects;
            } catch (err) {
                throw new Error(err);
            }
		},
		async objects_where(_, { ids }) {
            try {
				let _ids = [];
				if (ids !== undefined) _ids = ids;
                const objects = await Object.find().where('_id').in(_ids).sort({ createdAt: -1 });//g-key populate
                return objects;
            } catch (err) {
                throw new Error(err);
            }
        },
        async object(_, { id }) {
            try {
                const object = await Object.findById(id);//g-key populate
                if (object) {
                    return object;
                } else {
                    throw new Error('Object not found');
                }
            } catch (err) {
                throw new Error(err);
            }
        }
	},
	Mutation: {
		async updateObject(_, { id, bld, brand, responsible, objecttype, dataprocess, datatype, objectnumber, status, questionarydata, connectdata, closedata, tel, email, lastaction, mallcomment, }, context) {
			try {
				let item;
				const u = checkAuth(context);
				const user = await User.findById(u.id);
				if (!id || id === 'new') {
					item = new Object({
						bld,
						brand,
						responsible,
						objecttype,
						dataprocess,
						datatype,
						objectnumber,
						status,
						questionarydata,
						connectdata,
						closedata,
						tel,
						email,
						lastaction,
						mallcomment,
						
						createdAt: new Date().toISOString(),
						updatedAt: new Date().toISOString()
					});
					//g-key after new
				} else {
					item = await Object.findById(id);
					if (bld !== undefined) item.bld = bld;
					if (brand !== undefined) item.brand = brand;
					if (responsible !== undefined) item.responsible = responsible;
					if (objecttype !== undefined) item.objecttype = objecttype;
					if (dataprocess !== undefined) item.dataprocess = dataprocess;
					if (datatype !== undefined) item.datatype = datatype;
					if (objectnumber !== undefined) item.objectnumber = objectnumber;
					if (status !== undefined) item.status = status;
					if (questionarydata !== undefined) item.questionarydata = questionarydata;
					if (connectdata !== undefined) item.connectdata = connectdata;
					if (closedata !== undefined) item.closedata = closedata;
					if (tel !== undefined) item.tel = tel;
					if (email !== undefined) item.email = email;
					if (lastaction !== undefined) item.lastaction = lastaction;
					if (mallcomment !== undefined) item.mallcomment = mallcomment;
					
					item.updatedAt =  new Date().toISOString();
				}
				await item.save();
				return item.id;
			} catch (err) {
				throw new Error(err);
			}
		},

		async deleteObject(_, { id }, context) {
			try {
				const del = await Object.findById(id);
				await del.delete();
				return 'deleted successfully';
			} catch (err) {
				throw new Error(err);
			}
		},

	}
};
