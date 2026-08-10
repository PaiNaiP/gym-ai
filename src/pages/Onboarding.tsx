import { RedirectToSignIn, SignedIn } from "@neondatabase/neon-js/auth/react"
import { useAuth } from "../context/AuthContext"
import { Card } from "../components/ui/Card";
import { Select } from "../components/ui/Select";
import { useState } from "react";
import { Textarea } from "../components/ui/Textarea";
import { Button } from "../components/ui/Button";
import { ArrowRight } from "lucide-react";

const goalOptions = [
  {value:"bulk", label:"Build Muscle (Bulk)"},
  {value:"cut", label:"Lose Fat (Cut)"},
  {value:"recomp", label:"Body Recomposition"}, 
  {value:"strength", label:"Build Strength"},
  {value:"endurance", label:"Improve Endurance"},
];

const experienceOptions = [
  {value:"beginner", label:"Beginner (0-1 years)"},
  {value:"intermediate", label:"Intermediate (1-3 years)"},
  {value:"advanced", label:"Advanced (3+ years)"},
];

const daysOptions=[
  {value: "2", label: "2 days/week"},
  {value: "3", label: "3 days/week"},
  {value: "4", label: "4 days/week"},
  {value: "5", label: "5 days/week"},
  {value: "6", label: "6 days/week"},
];

const sessionOptions=[
  {value: "30", label: "30 minutes"},
  {value: "45", label: "45 minutes"},
  {value: "60", label: "60 minutes"},
  {value: "90", label: "90 minutes"},
];

const equipmentOptions=[
  {value: "home", label: "Home Gym"},
  {value: "dumbbells", label: "Dumbbells Only"},
  {value: "full", label: "Full Gym Access"},
];

const splitOptions=[
  {value: "fullbody", label: "Full Body"},
  {value: "upperlower", label: "Upper/Lower Split"},
  {value: "ppl", label: "Push/Pull/Legs Split"},
  {value: "custom", label: "Let AI Decide"},
];

export default function Onboarding() {
  const {user} = useAuth()
  const [formData, setFormData] = useState({
    goal:"bulk",
    experience:"intermediate",
    daysPerWeek:"4",
    sessionLength:"60",
    equipment:"full",
    injuries:"",
    preferredSplit:"upperlower",
  });

  function updateForm(field: string, value: string) {
    setFormData((prev) => ({...prev, [field]: value}));
  }; 

  async function handleQuestionnaire(e:React.SubmitEvent){
    e.preventDefault();
    
  }
  if(!user){
    return <RedirectToSignIn/>
  }
  return (
    <SignedIn>
      <div className="min-h-screen pt-24 pb-12 px-6">
        <div className="max-w-xl mx-auto">
          <Card variant="bordered">
            <h1 className="text-2xl font-bold mb-2">Расскажите о себе</h1>
            <p className="text-[var(--color-muted)] mb-6">
              Помогите нам лучше понять ваши цели и предпочтения, чтобы создать персонализированный план тренировок.
            </p>
            <form onSubmit={handleQuestionnaire} className="space-y-5">
              <Select 
              id="goal" 
              label="Какова ваша основная цель?" 
              options={goalOptions} 
              value={formData.goal}
              onChange={(e) => updateForm("goal", e.target.value)}
            />
              <Select 
              id="experience" 
              label="Ваш уровень подготовки?" 
              options={experienceOptions} 
              value={formData.experience}
              onChange={(e) => updateForm("experience", e.target.value)}
            />
            <div className = "grid grid-cols-2 gap-4">
                <Select 
                id="daysPerWeek" 
                label="Сколько дней в неделю вы готовы тренироваться?"
                options={daysOptions} 
                value={formData.daysPerWeek}
                onChange={(e) => updateForm("daysPerWeek", e.target.value)}
              />
                <Select 
                id="sessionLength" 
                label="Какова желаемая продолжительность каждой тренировки?"
                options={sessionOptions}
                value={formData.sessionLength}
                onChange={(e) => updateForm("sessionLength", e.target.value)}
              />
            </div>
            <Select 
              id="equipment"
              label="Какое оборудование у вас есть?"
              options={equipmentOptions}
              value={formData.equipment}
              onChange={(e) => updateForm("equipment", e.target.value)}
            />
            <Select 
              id="preferredSplit"
              label="Какой тип тренировочного сплита вы предпочитаете?"
              options={splitOptions}
              value={formData.preferredSplit}
              onChange={(e) => updateForm("preferredSplit", e.target.value)}
            />
            <Textarea
            id="injuries"
            label="Есть ли у вас травмы или ограничения, о которых нам следует знать? (Необязательно)"
            placeholder="Опишите любые травмы или ограничения"
            rows={3}
            value={formData.injuries}
            onChange={(e) => updateForm("injuries", e.target.value)}
            />

            <div className="flex gap-3 pt-2">
              <Button type="submit" className="flex-1 gap-2">
                Сгерерировать мой план <ArrowRight className="w-4 h-4"/> 
              </Button>
            </div>
            </form>
          </Card>
        </div>
      </div>
    </SignedIn>
  );
}