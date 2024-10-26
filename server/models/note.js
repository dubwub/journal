import mongoose from "mongoose";

const Schema = mongoose.Schema;

let note = new Schema(
  {
    id: {
      type: String
    },
    title: {
      type: String
    },
    body: {
      type: String
    }
  },
  { collection: "Notes" }
);

// module.exports = mongoose.model("notes", note);
export default mongoose.model("notes", note);