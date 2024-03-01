import Transaction from "../models/transaction.model.js";
import jwt from "jsonwebtoken";

export const createTransaction = async (req, res) => {
    const {description,amount,paymentType,category,location} = req.body;
    if(!description || !amount || !paymentType || !category){
        return res.status(400).json({message:"All fields are required"});
    }
    try {
        
        const newTransaction = await Transaction.create({
            user: req.user._id,
            
            description,
            amount,
            paymentType,
            category,
            location
        });
        if(!newTransaction){
            return res.status(400).json({message:"Transaction not created"});
        }
        return res.status(201).json({message:"Transaction created successfully",newTransaction});
       
           
      
        
    } catch (error) {
        console.log(error);
    }
}