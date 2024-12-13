import  User from '../models/User.js';
import  Thought from '../models/Thought.js';
import { Request, Response } from 'express';

//the getUsers function retrieves all users from the database
export const getUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
}
// the getSingleUser function retrieves a single user by their ID
export const getSingleUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({ _id: req.params.userId });

        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.json(user);
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

// the createUser function creates a new user
export const createUser = async (req: Request, res: Response) => {
    try {
        const dbUserData = await User.create(req.body);
        res.json(dbUserData);
    } catch (err) {
        res.status(500).json(err);
    }
}

// the updateUser function updates a user by their ID
export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.userId   }, req.body, { new: true }); 
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
            
        }
        res.json(user);
        return;
    } catch (err) {
        res.status(500).json(err);
        return;
    }
}   

// the deleteUser function deletes a user by their ID and their associated thoughts
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        await Thought.deleteMany({ _id: {$in: user.thoughts} });
        res.json({ message: 'User and associated thoughts deleted' });
        return;
    } catch (err) {
        res.status(500).json(err);
        return;
    }
}