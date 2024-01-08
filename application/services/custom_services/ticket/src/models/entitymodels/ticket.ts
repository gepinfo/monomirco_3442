
export interface ticket 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   name: { type: String },
   severity: { type: String, ref: 'severity' },
   types: { type: String, ref: 'types' }
}



