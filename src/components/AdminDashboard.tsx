import React, { useState, useEffect } from 'react';
import { Download, Mail, Calendar, User, Building, MessageSquare } from 'lucide-react';
import { getContactSubmissions, exportContactSubmissions, ContactFormData } from '../api/contact';

const AdminDashboard: React.FC = () => {
  const [submissions, setSubmissions] = useState<ContactFormData[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactFormData | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    // Load submissions
    const loadSubmissions = () => {
      const data = getContactSubmissions();
      setSubmissions(data);
    };

    loadSubmissions();
    
    // Refresh every 30 seconds
    const interval = setInterval(loadSubmissions, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleExport = () => {
    const csvContent = exportContactSubmissions();
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `agilio-capital-contacts-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const filteredSubmissions = submissions.filter(submission => {
    if (filter === 'all') return true;
    if (filter === 'today') {
      const today = new Date().toDateString();
      return new Date(submission.timestamp).toDateString() === today;
    }
    if (filter === 'week') {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return new Date(submission.timestamp) >= weekAgo;
    }
    return submission.service?.toLowerCase().includes(filter.toLowerCase());
  });

  const stats = {
    total: submissions.length,
    today: submissions.filter(s => 
      new Date(s.timestamp).toDateString() === new Date().toDateString()
    ).length,
    thisWeek: submissions.filter(s => {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return new Date(s.timestamp) >= weekAgo;
    }).length,
    byService: submissions.reduce((acc, s) => {
      const service = s.service || 'General Inquiry';
      acc[service] = (acc[service] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  };

  return (
    <div className="min-h-screen bg-dark-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-poppins font-bold text-primary-300 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-dark-500 font-inter">
            Manage contact form submissions and track engagement
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-dark-100/80 backdrop-blur-md rounded-xl p-6 border border-primary-600/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-dark-500 text-sm font-inter">Total Submissions</p>
                <p className="text-2xl font-poppins font-bold text-primary-400">{stats.total}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-primary-400" />
            </div>
          </div>
          
          <div className="bg-dark-100/80 backdrop-blur-md rounded-xl p-6 border border-primary-600/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-dark-500 text-sm font-inter">Today</p>
                <p className="text-2xl font-poppins font-bold text-green-400">{stats.today}</p>
              </div>
              <Calendar className="h-8 w-8 text-green-400" />
            </div>
          </div>
          
          <div className="bg-dark-100/80 backdrop-blur-md rounded-xl p-6 border border-primary-600/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-dark-500 text-sm font-inter">This Week</p>
                <p className="text-2xl font-poppins font-bold text-blue-400">{stats.thisWeek}</p>
              </div>
              <User className="h-8 w-8 text-blue-400" />
            </div>
          </div>
          
          <div className="bg-dark-100/80 backdrop-blur-md rounded-xl p-6 border border-primary-600/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-dark-500 text-sm font-inter">Response Rate</p>
                <p className="text-2xl font-poppins font-bold text-purple-400">95%</p>
              </div>
              <Mail className="h-8 w-8 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-inter text-sm transition-colors ${
                filter === 'all' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-dark-100/80 text-dark-500 hover:bg-primary-600/20'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('today')}
              className={`px-4 py-2 rounded-lg font-inter text-sm transition-colors ${
                filter === 'today' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-dark-100/80 text-dark-500 hover:bg-primary-600/20'
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setFilter('week')}
              className={`px-4 py-2 rounded-lg font-inter text-sm transition-colors ${
                filter === 'week' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-dark-100/80 text-dark-500 hover:bg-primary-600/20'
              }`}
            >
              This Week
            </button>
          </div>
          
          <button
            onClick={handleExport}
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-inter text-sm hover:bg-green-700 transition-colors inline-flex items-center"
          >
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </button>
        </div>

        {/* Submissions Table */}
        <div className="bg-dark-100/80 backdrop-blur-md rounded-xl border border-primary-600/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-dark-200/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-primary-300 font-poppins">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-primary-300 font-poppins">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-primary-300 font-poppins">
                    Company
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-primary-300 font-poppins">
                    Service
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-primary-300 font-poppins">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-primary-300 font-poppins">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary-600/20">
                {filteredSubmissions.map((submission, index) => (
                  <tr key={index} className="hover:bg-dark-200/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-dark-500 font-inter">
                      {submission.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-dark-500 font-inter">
                      <a 
                        href={`mailto:${submission.email}`}
                        className="text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        {submission.email}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm text-dark-500 font-inter">
                      {submission.company || '-'}
                    </td>
                    <td className="px-6 py-4 text-sm text-dark-500 font-inter">
                      {submission.service || 'General'}
                    </td>
                    <td className="px-6 py-4 text-sm text-dark-500 font-inter">
                      {new Date(submission.timestamp).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={() => setSelectedSubmission(submission)}
                        className="text-primary-400 hover:text-primary-300 transition-colors font-inter"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Submission Detail Modal */}
        {selectedSubmission && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-dark-100 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-poppins font-bold text-primary-300">
                  Submission Details
                </h3>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="text-dark-500 hover:text-primary-400 transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-primary-300 mb-1 font-poppins">
                    Name
                  </label>
                  <p className="text-dark-500 font-inter">{selectedSubmission.name}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-primary-300 mb-1 font-poppins">
                    Email
                  </label>
                  <p className="text-dark-500 font-inter">
                    <a 
                      href={`mailto:${selectedSubmission.email}`}
                      className="text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      {selectedSubmission.email}
                    </a>
                  </p>
                </div>
                
                {selectedSubmission.company && (
                  <div>
                    <label className="block text-sm font-semibold text-primary-300 mb-1 font-poppins">
                      Company
                    </label>
                    <p className="text-dark-500 font-inter">{selectedSubmission.company}</p>
                  </div>
                )}
                
                {selectedSubmission.phone && (
                  <div>
                    <label className="block text-sm font-semibold text-primary-300 mb-1 font-poppins">
                      Phone
                    </label>
                    <p className="text-dark-500 font-inter">{selectedSubmission.phone}</p>
                  </div>
                )}
                
                {selectedSubmission.service && (
                  <div>
                    <label className="block text-sm font-semibold text-primary-300 mb-1 font-poppins">
                      Service Interest
                    </label>
                    <p className="text-dark-500 font-inter">{selectedSubmission.service}</p>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-semibold text-primary-300 mb-1 font-poppins">
                    Message
                  </label>
                  <p className="text-dark-500 font-inter whitespace-pre-wrap bg-dark-200/50 p-4 rounded-lg">
                    {selectedSubmission.message}
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-primary-300 mb-1 font-poppins">
                    Submitted
                  </label>
                  <p className="text-dark-500 font-inter">
                    {new Date(selectedSubmission.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex gap-4">
                <a
                  href={`mailto:${selectedSubmission.email}?subject=Re: Your inquiry to Agilio Capital&body=Dear ${selectedSubmission.name},%0D%0A%0D%0AThank you for your interest in Agilio Capital.%0D%0A%0D%0A`}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg font-inter text-sm hover:bg-primary-700 transition-colors inline-flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Reply via Email
                </a>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="bg-dark-200 text-dark-600 px-4 py-2 rounded-lg font-inter text-sm hover:bg-dark-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;