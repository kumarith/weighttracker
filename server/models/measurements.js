import mongoose from "mongoose";

const Schema = mongoose.Schema

const weightSchema = new Schema({
  bodyweight : {
    type: Number,
  },
  id : {
    type: String,
    unique: true,
  },
  /*date : {
    type: Date,
    default: Date.now,
  },*/
  date:{
    type: String,
  },
  
  height: {
    type: Number,
  },
  hipwidth : {
    type: Number
  }
});

export default mongoose.model("Weight", weightSchema);