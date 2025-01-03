import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

interface FormData {
  name: string;
  age: number;
  gender: string;
  goal: string;
  currentWeight: number;
}

const DietPlansPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [dietPlan, setDietPlan] = useState<any>(null);
  const [idealWeight, setIdealWeight] = useState<number | null>(null);

  const onSubmit = (data: FormData) => {
    setDietPlan(generateDietPlan(data));
    setIdealWeight(calculateIdealWeight(data));
  };

  const generateDietPlan = (data: FormData) => {
    const foodToEat = data.goal.toLowerCase() === 'weight loss'
      ? ['Vegetables, Salad', 'Lean protein (chicken, fish)', 'Fruits (berries, apples)', 'Nuts & Seeds']
      : data.goal.toLowerCase() === 'muscle gain'
      ? ['Eggs, Chicken, Beef', 'Rice, Oats', 'Peanut Butter', 'Whole Wheat Bread']
      : ['Balanced meals of all food groups', 'Healthy snacks', 'Lean meats and veggies'];

    const exercisePlan = data.goal.toLowerCase() === 'weight loss'
      ? ['Cardio: Running, Cycling', 'Strength Training: Push-ups, Squats', 'HIIT workouts']
      : data.goal.toLowerCase() === 'muscle gain'
      ? ['Weight Training: Bench Press, Deadlift', 'Squats, Lunges', 'Protein Shakes']
      : ['Yoga, Pilates', 'Moderate cardio', 'Stretching exercises'];

    const waterIntake = data.goal.toLowerCase() === 'weight loss'
      ? '3-4 liters'
      : data.goal.toLowerCase() === 'muscle gain'
      ? '4-5 liters'
      : '2-3 liters';

    const mealTimes = ['Breakfast: 7-9 AM', 'Lunch: 12-2 PM', 'Dinner: 6-8 PM', 'Snacks: Between Meals'];

    return {
      foodToEat,
      exercisePlan,
      waterIntake,
      mealTimes
    };
  };

  const calculateIdealWeight = (data: FormData) => {
    let idealWeight = 0;
    if (data.gender === 'male') {
      idealWeight = 50 + 2.3 * (data.age - 18);
    } else if (data.gender === 'female') {
      idealWeight = 45.5 + 2.3 * (data.age - 18);
    }
    return idealWeight;
  };

  const DietPlanDocument = ({ dietPlan, idealWeight }: { dietPlan: any, idealWeight: number | null }) => (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Personalized Diet Plan</Text>
        
        <View style={styles.tableSection}>
          <Text style={styles.subtitle}>Food to Eat</Text>
          <View style={styles.table}>
            {dietPlan.foodToEat.map((food: string, index: number) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCell}>{food}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.tableSection}>
          <Text style={styles.subtitle}>Exercise Plan</Text>
          <View style={styles.table}>
            {dietPlan.exercisePlan.map((exercise: string, index: number) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCell}>{exercise}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.tableSection}>
          <Text style={styles.subtitle}>Water Intake</Text>
          <Text style={styles.bodyText}>{dietPlan.waterIntake}</Text>
        </View>

        <View style={styles.tableSection}>
          <Text style={styles.subtitle}>Meal Timings</Text>
          <View style={styles.table}>
            {dietPlan.mealTimes.map((time: string, index: number) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCell}>{time}</Text>
              </View>
            ))}
          </View>
        </View>

        {idealWeight && (
          <View style={styles.tableSection}>
            <Text style={styles.subtitle}>Ideal Weight</Text>
            <Text style={styles.bodyText}>{`Your ideal weight: ${idealWeight.toFixed(2)} kg`}</Text>
          </View>
        )}

        <View style={styles.tableSection}>
          <Text style={styles.subtitle}>Day-to-Day Goals</Text>
          <View style={styles.table}>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCell}>{day}</Text>
                <Text style={styles.tableCell}>Goal: Exercise + Eat Well</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.tableSection}>
          <Text style={styles.subtitle}>Time-to-Time Goals</Text>
          <View style={styles.table}>
            {['7 AM - Breakfast', '10 AM - Snack', '1 PM - Lunch', '4 PM - Snack', '7 PM - Dinner'].map((time, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCell}>{time}</Text>
                <Text style={styles.tableCell}>Goal: Stay on track</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-purple-200 p-6">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">Personalized Diet Plan Generator</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-lg text-gray-700">Name</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-lg text-gray-700">Age</label>
          <input
            type="number"
            {...register('age', { required: 'Age is required', min: 18 })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-lg text-gray-700">Gender</label>
          <select
            {...register('gender', { required: 'Gender is required' })}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-lg text-gray-700">Goal</label>
          <select
            {...register('goal', { required: 'Goal is required' })}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Goal</option>
            <option value="weight loss">Weight Loss</option>
            <option value="muscle gain">Muscle Gain</option>
            <option value="maintain health">Maintain Health</option>
          </select>
          {errors.goal && <p className="text-red-500 text-sm">{errors.goal.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-lg text-gray-700">Current Weight</label>
          <input
            type="number"
            {...register('currentWeight', { required: 'Current Weight is required' })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.currentWeight && <p className="text-red-500 text-sm">{errors.currentWeight.message}</p>}
        </div>

        <button type="submit" className="w-full py-2 bg-purple-600 text-white rounded-md mt-4">Generate Diet Plan</button>
      </form>

      {dietPlan && (
        <div className="mt-8">
          <PDFDownloadLink document={<DietPlanDocument dietPlan={dietPlan} idealWeight={idealWeight || 0} />} fileName="diet_plan.pdf">
            {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B0082',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B0082',
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 12,
    color: '#333',
  },
  tableSection: {
    marginBottom: 15,
  },
  table: {
    width: '100%',
    border: '1px solid #ddd',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
    fontSize: 12,
  },
});

export default DietPlansPage;
