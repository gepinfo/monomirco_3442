
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const ticketSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   severity: { type: Schema.Types.String, ref: 'severity' },
   types: { type: Schema.Types.String, ref: 'types' }
})

const ticketModel = mongoose.model('ticket', ticketSchema, 'ticket');
export default ticketModel;
