
// db.js
const mongoose = require("mongoose");
dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/todoApp", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => { console.error("MongoDB connection failed:", error); process.exit(1); });

const userSchema = new mongoose.Schema({ username: String, email: String, password: String, role: { type: String, enum: ["user", "admin"] }, age: Number });
const todoSchema = new mongoose.Schema({ title: String, description: String, completed: { type: Boolean, default: false }, userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" } });

const UserModel = mongoose.model("User", userSchema);
const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = { UserModel, TodoModel };
