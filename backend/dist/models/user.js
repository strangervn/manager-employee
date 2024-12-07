"use strict";
// backend/src/models/User.ts
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'employee'], required: true }
}, { timestamps: true });
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;