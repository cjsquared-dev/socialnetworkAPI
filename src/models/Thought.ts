import mongoose, { Schema, model, type Document } from 'mongoose';
// import dateFormat from '../utils/dateFormat';

interface IThought extends Document {
    thoughtText: string;
    createdAt: Date;
    username: Schema.Types.ObjectId[];
    reactions: Schema.Types.ObjectId[];

}

interface IReaction extends Document {
    reactionId: Schema.Types.ObjectId;
    reactionBody: string;
    username: string;
    createdAt: Date;
}

const reactionSchema = new Schema<IReaction>({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    // createdAt: {
    //     type: Date,
    //     default: () => new Date(),
    //     get: (timestamp: Date) => dateFormat(new Date(timestamp), 'MM/dd/yyyy')
    // }
},
    {
        toJSON: {
            getters: true
        },
        id: false,
        timestamps: true
    }
);

const thoughtSchema = new Schema<IThought>({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    // createdAt: {
    //     type: Date,
    //     default: () => new Date(),
    //     get: (timestamp: Date) => dateFormat(timestamp, 'MM/dd/yyyy')
    // },
    // username: {
    //     type: String,
    //     required: true
    // },
    reactions: [reactionSchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        timestamps: true,
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function (this: IThought) {
    return this.reactions.length;
}
);

const Thought = model<IThought>('thought', thoughtSchema);

export default Thought;