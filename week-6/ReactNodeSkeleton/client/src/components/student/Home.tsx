export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl border border-blue-200">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">
        Welcome to the Home page of Student Management Portal
      </h1>
      <p className="text-blue-600 mb-4">
        This is the main landing page where students can access all portal features.
      </p>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div className="bg-white p-4 rounded-lg border">
          <h3 className="font-semibold text-blue-700 mb-2">Quick Access</h3>
          <ul className="space-y-1 text-gray-600">
            <li>• View your profile</li>
            <li>• Check announcements</li>
            <li>• Access course materials</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <h3 className="font-semibold text-blue-700 mb-2">Recent Activity</h3>
          <ul className="space-y-1 text-gray-600">
            <li>• New assignment posted</li>
            <li>• Grade updated</li>
            <li>• Event reminder</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
