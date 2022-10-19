
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const homedataSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   value: Number
})

const homedataModel = mongoose.model('homedata', homedataSchema, 'homedata');
export default homedataModel;
