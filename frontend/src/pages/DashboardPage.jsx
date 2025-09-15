import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimateOnScroll from '../components/AnimateOnScroll';

const getTaskColor = (type) => {
  switch (type) {
    case 'Study': return 'bg-blue-100 text-blue-800';
    case 'Practice': return 'bg-green-110 text-green-800';
    case 'Review': return 'bg-yellow-100 text-yellow-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getEventColor = (type) => {
  switch (type) {
    case 'Mock Test': return 'bg-red-100 text-red-800';
    case 'Contest': return 'bg-purple-100 text-purple-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

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
          <AnimateOnScroll animation="fade-in">
            {/* Progress Ring */}
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between">
              <div className="w-32 h-32 mb-4 md:mb-0">
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
              <div className="md:ml-6 text-center md:text-left">
                <h2 className="text-2xl font-semibold text-gray-800">Overall Progress</h2>
                <p className="text-gray-600 mb-2">Keep up the great work! You're on track to achieve your goals.</p>
                <a href="#" className="text-primary hover:underline font-medium">View detailed report &rarr;</a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in" delay="0.2s">
            {/* Today's Plan */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">Today's Plan</h2>
                <button className="bg-primary hover:bg-blue-800 text-white text-sm px-4 py-2 rounded-full transition duration-300">+ Add Task</button>
              </div>
              <ul className="space-y-4">
                {todayTasks.map((task) => (
                  <li key={task.id} className={`flex items-center justify-between p-4 rounded-lg ${getTaskColor(task.type)}`}>
                    <div>
                      <p className="font-medium">{task.description}</p>
                      <p className="text-sm">{task.time}</p>
                    </div>
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-secondary" />
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in" delay="0.4s">
            {/* Active Courses */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Active Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map((course) => (
                  <div key={course.id} className="bg-gray-50 p-4 rounded-lg flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">{course.name}</h3>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                        <div
                          className="h-2.5 rounded-full"
                          style={{ width: `${course.progress}%`, backgroundColor: course.color }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600">{course.progress}% Complete</p>
                    </div>
                    <button className="mt-4 bg-accent hover:bg-yellow-500 text-primary text-sm px-4 py-2 rounded-full transition duration-300">Continue Course</button>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <AnimateOnScroll animation="fade-in" delay="0.6s">
            {/* Upcoming Mock Tests / Contests */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">Upcoming Events</h2>
                <a href="#" className="text-primary hover:underline font-medium text-sm">View All &rarr;</a>
              </div>
              <ul className="space-y-4">
                {upcomingEvents.map((event) => (
                  <li key={event.id} className={`p-4 rounded-lg ${getEventColor(event.type)}`}>
                    <p className="font-medium">{event.type}: {event.name}</p>
                    <p className="text-sm">{event.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in" delay="0.8s">
            {/* Quick Links/Recommendations */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Links</h2>
              <ul className="space-y-3">
                <li><a href="#" className="text-primary hover:underline">Practice Weak Areas</a></li>
                <li><a href="#" className="text-primary hover:underline">Explore New Courses</a></li>
                <li><a href="#" className="text-primary hover:underline">Review Past Tests</a></li>
                <li><a href="#" className="text-primary hover:underline">Connect with Mentors</a></li>
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;