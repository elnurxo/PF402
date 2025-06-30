const mongoose = require("mongoose");
const basketItemSchema = require("./basketItemSchema");
const addressSchema = require("./addressSchema");
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    profileImage: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg",
    },
    public_id: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["customer", "admin", "vendor"],
      default: "customer",
    },

    isBanned: { type: Boolean, default: false },
    banUntil: { type: Date, default: null },

    lastLogin: { type: Date, default: null },

    wishlist: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Product", default: [] },
    ],
    basket: [basketItemSchema],
    address: addressSchema,

    emailVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

//user virtual for orders
userSchema.virtual("orders", {
  ref: "Order",
  localField: "_id",
  foreignField: "user",
});

userSchema.set("toObject", { virtuals: true });
userSchema.set("toJSON", { virtuals: true });

module.exports = userSchema;
