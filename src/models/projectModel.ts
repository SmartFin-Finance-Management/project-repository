import express from 'express';
import mongoose, { Document } from 'mongoose';

interface IProject extends Document {
    project_id: number;
    org_id: number;
    client_id: number;
    project_name: string;
    start_date: string;
    end_date: string;
    status: string;
    total_budget: number;
    allocated_budget: number;
    remaining_budget: number;
    employee_budget: number;
    technical_budget: number;
    additional_budget: number;
    employee_expenses: number;
    technical_expenses: number;
    additional_expenses: number;
    actual_expenses: number;
    employees_list: number[];
}


const projectSchema = new mongoose.Schema<IProject>({
    project_id: { type: Number, required: true },
    org_id: { type: Number, required: true },
    client_id: { type: Number, required: true },
    project_name: { type: String, required: true },
    start_date: { type: String, required: true },
    end_date: { type: String },
    status: { type: String, required: true },
    total_budget: { type: Number, required: true },
    allocated_budget: { type: Number },
    remaining_budget: { type: Number },
    employee_budget: { type: Number },
    technical_budget: { type: Number },
    additional_budget: { type: Number },
    employee_expenses: { type: Number },
    technical_expenses: { type: Number },
    additional_expenses: { type: Number },
    actual_expenses: { type: Number },
    employees_list: { type: [Number], default: [] },
});

export default mongoose.model<IProject>('Project', projectSchema);