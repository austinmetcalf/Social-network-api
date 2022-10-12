const {Schema, model, Types} = require ("mongoose")
const reactionSchema = new Schema (
    {
        reactionBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        reactionID:{
            type: Schema.Types.ObjectId,
            default: ()=>Types.ObjectId(),
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // place getter to format time stamp

        },
        
        
    },
    {
        toJSON: {virtuals: true, getters: true}
    }
)
const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // place getter to format time stamp

        },
        reactions: [
           reactionSchema
        ],
        
    },
    {
        toJSON: {virtuals: true, getters: true}
    }
)
thoughtSchema.virtual("reactioncount").get(function(){
    return this.reactions.length
})
const Thought = model("Thought", thoughtSchema)

module.exports = Thought