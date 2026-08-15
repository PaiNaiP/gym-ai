export interface UserProfile {
    goal: string;
    experience: string;
    daysPerWeek: number;
    sessionLength: number;
    equipment: string;
    injuries?: string | null;
    preferredSplit: string;
}

export interface PlanOverview {
    goal: string;
    frequency: string;
    split: string;
    notes: string;
}

export interface Exercise {
    name:string;
    sets:string;
    reps:string;
    rest:string;
    rpe: number;
    notes?: string;
    alternatives?: string[]; 
}

export interface DaySchedule {
    day:string;
    focus:string;
    exercises: Exercise[];
}

export interface TrainingPlan {
    id:string;
    userId:string;
    overview: PlanOverview;
    weeklySchedule: DaySchedule[];
    progression :string;
    version: number;
    createdAt: string;
}