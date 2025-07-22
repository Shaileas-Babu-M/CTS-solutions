interface CalculateScoreProps {
  Name: string;
  School: string;
  Total: number;
  goal: number;
}

export default function CalculateScore({ Name, School, Total, goal }: CalculateScoreProps) {
  const average = Total / goal;

  return (
    <div className="scoreBox">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Score Calculator</h2>
      <div className="space-y-3">
        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
          <span className="font-medium text-blue-700">Name:</span>
          <span className="text-gray-800">{Name}</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
          <span className="font-medium text-green-700">School:</span>
          <span className="text-gray-800">{School}</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
          <span className="font-medium text-purple-700">Total Score:</span>
          <span className="text-gray-800 font-bold">{Total}</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
          <span className="font-medium text-orange-700">Goal:</span>
          <span className="text-gray-800">{goal}</span>
        </div>
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg">
          <span className="font-bold text-lg">Average Score:</span>
          <span className="text-2xl font-bold">{average.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-700 mb-2">Performance Analysis</h3>
        <div className="text-sm text-gray-600">
          {average >= 90 && <span className="text-green-600 font-medium">Excellent performance! 🌟</span>}
          {average >= 80 && average < 90 && <span className="text-blue-600 font-medium">Great work! 👍</span>}
          {average >= 70 && average < 80 && <span className="text-yellow-600 font-medium">Good effort! 📈</span>}
          {average < 70 && <span className="text-red-600 font-medium">Keep practicing! 💪</span>}
        </div>
      </div>
    </div>
  );
}
