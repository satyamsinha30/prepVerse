import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DashboardPage = () => {
  const overallCompletion = 75; // Placeholder value

  const courses = [
    { id: 1, name: 'IIT-JEE Physics', progress: 80, color: '#10B981' },
    { id: 2, name: 'NEET Biology', progress: 60, color: '#F59E0B' },
    { id: 3, name: 'Class 12 Maths', progress: 90, color: '#003087' },
  ];

  const todayTasks = [
    { id: 1, type: 'Study', description: 'Complete Chapter 5: Optics', time: '2 hours' },
    { id: 2, type: 'Practice', description: 'Solve 20 problems on Electrostatics', time: '1 hour' },
    { id: 3, type: 'Review', description: 'Review Mock Test 1 results', time: '30 mins' },
  ];

  const upcomingEvents = [
    { id: 1, type: 'Mock Test', name: 'Full Syllabus Test 3', date: 'Sep 20, 2025' },
    { id: 2, type: 'Contest', name: 'Weekly Physics Challenge', date: 'Sep 22, 2025' },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          {/* Progress Ring */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div className="w-32 h-32">
              <CircularProgressbar
                value={overallCompletion}
                text={`${overallCompletion}%`}
                styles={buildStyles({
                  pathColor: `#10B981`,
                  textColor: '#003087',
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-semibold text-gray-800">Overall Progress</h2>
              <p className="text-gray-600">Keep up the great work! You're on track to achieve your goals.</p>
            </div>
          </div>

          {/* Today's Plan */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Today's Plan</h2>
            <ul className="space-y-4">
              {todayTasks.map((task) => (
                <li key={task.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-md">
                  <div>
                    <p className="font-medium text-gray-900">{task.type}: {task.description}</p>
                    <p className="text-sm text-gray-500">{task.time}</p>
                  </div>
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-secondary" />
                </li>
              ))}
            </ul>
          </div>

          {/* Active Courses */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Active Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((course) => (
                <div key={course.id} className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium text-gray-900 mb-2">{course.name}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full"
                      style={{ width: `${course.progress}%`, backgroundColor: course.color }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{course.progress}% Complete</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          {/* Upcoming Mock Tests / Contests */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upcoming Events</h2>
            <ul className="space-y-4">
              {upcomingEvents.map((event) => (
                <li key={event.id} className="bg-gray-50 p-4 rounded-md">
                  <p className="font-medium text-gray-900">{event.type}: {event.name}</p>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;