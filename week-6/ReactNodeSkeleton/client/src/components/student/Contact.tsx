export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-xl border border-purple-200">
      <h1 className="text-3xl font-bold text-purple-800 mb-4">
        Welcome to the Contact page of the Student Management Portal
      </h1>
      <p className="text-purple-600 mb-6">
        Get in touch with us for support, questions, or feedback. We're here to help!
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold text-purple-700 mb-4">Contact Information</h3>
          <div className="space-y-3 text-gray-600">
            <div className="flex items-center">
              <span className="font-medium mr-2">Email:</span>
              <span>support@studentportal.edu</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium mr-2">Phone:</span>
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium mr-2">Hours:</span>
              <span>Mon-Fri 8AM-6PM</span>
            </div>
            <div className="flex items-start">
              <span className="font-medium mr-2">Address:</span>
              <span>123 Education Ave<br />Learning City, LC 12345</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold text-purple-700 mb-4">Quick Support</h3>
          <div className="space-y-4">
            <div className="p-3 bg-purple-50 rounded border">
              <h4 className="font-medium text-purple-700 mb-1">Technical Issues</h4>
              <p className="text-sm text-gray-600">Login problems, system errors, performance issues</p>
            </div>
            <div className="p-3 bg-purple-50 rounded border">
              <h4 className="font-medium text-purple-700 mb-1">Academic Support</h4>
              <p className="text-sm text-gray-600">Course questions, grade inquiries, enrollment help</p>
            </div>
            <div className="p-3 bg-purple-50 rounded border">
              <h4 className="font-medium text-purple-700 mb-1">General Inquiries</h4>
              <p className="text-sm text-gray-600">Portal features, account management, feedback</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
