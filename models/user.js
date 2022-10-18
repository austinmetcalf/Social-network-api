const {Schema, model} = require ("mongoose")

const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        // use regex from gist here
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, "must have a correct email address"]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought"
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    },
    {
        toJSON: {virtuals: true}
    }
)
userSchema.virtual("friendcount").get(function(){
    return this.friends.length
})
const User = model("User", userSchema)

module.exports = User