export default function About() {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl border border-green-200">
      <h1 className="text-3xl font-bold text-green-800 mb-4">
        Welcome to the About page of the Student Management Portal
      </h1>
      <p className="text-green-600 mb-6">
        Learn more about our comprehensive student management system designed to enhance your educational experience.
      </p>
      
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold text-green-700 mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To provide students with a seamless, intuitive platform that centralizes academic information, 
            facilitates communication, and supports educational success through innovative technology.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold text-green-700 mb-3">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-600">
              <li>• Academic record tracking</li>
              <li>• Course enrollment management</li>
              <li>• Grade monitoring</li>
            </ul>
            <ul className="space-y-2 text-gray-600">
              <li>• Communication tools</li>
              <li>• Event notifications</li>
              <li>• Resource library access</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
