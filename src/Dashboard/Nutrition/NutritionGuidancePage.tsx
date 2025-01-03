import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  goal: string;
  currentWeight: number;
  height: number;
  age: number;
  gender: string;
  activityLevel: string;
}

const NutritionGuidancePage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [nutritionAdvice, setNutritionAdvice] = useState<any>(null);

  const onSubmit = (data: FormData) => {
    setNutritionAdvice(generateNutritionAdvice(data));
  };

  const generateNutritionAdvice = (data: FormData) => {
    let advice = {};
    
    if (data.goal.toLowerCase() === 'weight loss') {
      advice = {
        mealPlan: ['Vegetables, Salad', 'Lean protein (chicken, fish)', 'Berries, Apples'],
        nutrientBreakdown: { protein: '30%', carbs: '40%', fats: '30%' },
        dailyTips: ['Increase water intake', 'Eat more fiber-rich foods', 'Avoid sugary snacks']
      };
    } else if (data.goal.toLowerCase() === 'muscle gain') {
      advice = {
        mealPlan: ['Eggs, Chicken, Beef', 'Rice, Oats', 'Peanut Butter'],
        nutrientBreakdown: { protein: '40%', carbs: '40%', fats: '20%' },
        dailyTips: ['Consume more protein-rich foods', 'Eat a calorie surplus', 'Include post-workout protein']
      };
    } else {
      advice = {
        mealPlan: ['Balanced meals of all food groups', 'Healthy snacks', 'Lean meats and veggies'],
        nutrientBreakdown: { protein: '30%', carbs: '40%', fats: '30%' },
        dailyTips: ['Eat well-balanced meals', 'Stay hydrated', 'Avoid overeating at night']
      };
    }

    return advice;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Personalized Nutrition Guidance</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Goal:</label>
          <select 
            {...register('goal', { required: true })}
            className="p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Maintain">Maintain Weight</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Current Weight (kg):</label>
          <input 
            type="number" 
            {...register('currentWeight', { required: true })} 
            className="p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Height (cm):</label>
          <input 
            type="number" 
            {...register('height', { required: true })} 
            className="p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Age:</label>
          <input 
            type="number" 
            {...register('age', { required: true })} 
            className="p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Gender:</label>
          <select 
            {...register('gender', { required: true })}
            className="p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Activity Level:</label>
          <select 
            {...register('activityLevel', { required: true })}
            className="p-3 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="Sedentary">Sedentary</option>
            <option value="Lightly Active">Lightly Active</option>
            <option value="Moderately Active">Moderately Active</option>
            <option value="Very Active">Very Active</option>
            <option value="Extra Active">Extra Active</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Get Nutrition Guidance
        </button>
      </form>

      {nutritionAdvice && (
        <div className="mt-8 space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Recommended Meal Plan</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {nutritionAdvice.mealPlan.map((food: string, index: number) => (
              <li key={index} className="text-sm">{food}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-bold text-gray-800">Nutrient Breakdown</h3>
          <p className="text-gray-700">Protein: {nutritionAdvice.nutrientBreakdown.protein}</p>
          <p className="text-gray-700">Carbohydrates: {nutritionAdvice.nutrientBreakdown.carbs}</p>
          <p className="text-gray-700">Fats: {nutritionAdvice.nutrientBreakdown.fats}</p>

          <h3 className="text-2xl font-bold text-gray-800">Daily Tips</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {nutritionAdvice.dailyTips.map((tip: string, index: number) => (
              <li key={index} className="text-sm">{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NutritionGuidancePage;
