import Thought from '../models/Thought.js';
//import User from '../models/User.js';
import { Request, Response } from 'express';

//the getThoughts function retrieves all thoughts from the database
export const getThoughts = async (_req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
}

// the getSingleThought function retrieves a single thought by its ID  
export const getSingleThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId });

        if (!thought) {
            res.status(404).json({ message: 'Thought not found' });
        } else {
            res.json(thought);
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

// the createThought function creates a new thought
export const createThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.create(req.body);
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
}


// the updateThought function updates a thought by its ID
export const updateThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, req.body,
            { new: true });
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });

        }
        res.json(thought);
        return;
    } catch (err) {
        res.status(500).json(err);
        return;
    }
}

// the deleteThought function deletes a thought by its ID
export const deleteThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
        return;
    } catch (err) {
        res.status(500).json(err);
        return;
    }
}


// the addReaction function adds a reaction to a thought's reaction array field

export const addReaction = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: req.body } },
            { new: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
        return;
    }   catch (err) {
        res.status(500).json(err);
        return;
    }
}

// the deleteReaction function deletes a reaction from a thought's reaction array field
export const deleteReaction = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
        return;
    } catch (err) {
        res.status(500).json(err);
        return;
    }
}
