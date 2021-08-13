import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const BugSchema = new Schema(
  {
    closed: { type: Boolean, default: false },
    title: { type: String, required: true },
    description: { type: String, required: true },
    closedDate: { type: String },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

BugSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
