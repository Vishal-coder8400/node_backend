import mongoose, { Document, Schema } from "mongoose"
import type { CommonModelType, UserModelType } from "../Lib/DataTypes/Models/User"
import passwordHash from "password-hash"

const UserSchema = new Schema<UserModelType<CommonModelType & Document>>({
	name: {
		type: String,
		required: true,
		unique: true
	},

	//name email phone password 
	email: {
		type: String,
		required: true
	},
	password:
	{
		type: String,
	},

	work:{
		type: String,
	},
	token: String,
	createdOn: {
		type: Date,
		default: new Date()
	},
	updatedOn: {
		type: Date,
		default: new Date()
	}
})

UserSchema.methods.comparePassword = function (candidatePassword: string): boolean {
	return passwordHash.verify(candidatePassword, this.password)
}

const UserModel = mongoose.model<UserModelType<CommonModelType & Document>>("User", UserSchema)
export default UserModel