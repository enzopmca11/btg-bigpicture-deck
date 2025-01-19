import React, { useState } from 'react';
import { Clock, Users, BarChart3, AlertTriangle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import ProjectDashboard from './components/project_dashboard';

const ProjectAnalysisDashboard = () => {
  const [activeTab, setActiveTab] = useState('strategic');
  const missionCritical = [
    {
      category: "Infrastructure & Security",
      items: [
        "APM on Production",
        "CI/CD Pipeline",
        "Backup and disaster recovery Policy",
        "Security improvements",
        "Database Maintenance",
        "SSL Certificates Migration"
      ],
      estimatedEffort: "High",
      priority: "Critical",
      timeframe: "1-3 months",
      resourceNeeds: "4-5 FTE"
    },
    {
      category: "Technical Debt",
      items: [
        "Django 4.2 upgrade",
        "Global permission checks",
        "Fix duplicated requests",
        "Database Collation fixes",
        "Monitoring and Logging"
      ],
      estimatedEffort: "High",
      priority: "Critical",
      timeframe: "2-4 months",
      resourceNeeds: "3-4 FTE"
    }
  ];

  const shortTerm = [
    {
      category: "Risk Management",
      items: [
        "Deal Summary Widget Enhancement",
        "Integration of new pricing models",
        "Market data improvements",
        "Dashboard enhancements"
      ],
      estimatedEffort: "Medium",
      priority: "High",
      timeframe: "6 months",
      resourceNeeds: "2-3 FTE"
    },
    {
      category: "Fund Level",
      items: [
        "Trade notification system",
        "Portfolio MTM improvements",
        "Automated report generation",
        "SteelEye integration"
      ],
      estimatedEffort: "Medium",
      priority: "High",
      timeframe: "6 months",
      resourceNeeds: "2-3 FTE"
    },
    {
      category: "Hedge Accounting",
      items: [
        "Journal Entry automation",
        "New flow logic implementation",
        "Designation improvements",
        "Report generation enhancement"
      ],
      estimatedEffort: "Medium",
      priority: "High",
      timeframe: "6 months",
      resourceNeeds: "2-3 FTE"
    }
  ];

  const longTerm = [
    {
      category: "Business Transformation",
      items: [
        "Complete V2 migration",
        "Dashboard modernization",
        "Client experience enhancement",
        "API modernization"
      ],
      estimatedEffort: "Very High",
      priority: "Medium",
      timeframe: "1-2 years",
      resourceNeeds: "5-6 FTE"
    },
    {
      category: "Treasury Solutions",
      items: [
        "Client dashboarding improvements",
        "Treasury as a Service enhancement",
        "FX as a Service platform",
        "Diagnostic tools enhancement"
      ],
      estimatedEffort: "High",
      priority: "Medium",
      timeframe: "1-2 years",
      resourceNeeds: "4-5 FTE"
    }
  ];

  const calculateCost = (resourceNeeds, timeframe) => {
    const avgSalary = 150000;
  
    // Parse resourceNeeds
    let minFTE = 0, maxFTE = 0;
    if (resourceNeeds) {
      const match = resourceNeeds.match(/(\d+)-(\d+)/);
      if (match) {
        minFTE = parseInt(match[1], 10);
        maxFTE = parseInt(match[2], 10);
      }
    }
    const avgFTE = (minFTE + maxFTE) / 2 || 0; // Fallback to 0 if parsing fails
  
    // Parse timeframe
    let months = 0;
    if (timeframe) {
      if (timeframe.includes("years")) {
        const match = timeframe.match(/(\d+)-?(\d+)?/);
        const maxYears = match ? parseInt(match[2] || match[1], 10) : 0;
        months = maxYears * 12;
      } else if (timeframe.includes("months")) {
        const match = timeframe.match(/(\d+)/);
        months = match ? parseInt(match[1], 10) : 0;
      }
    }
  
    // Calculate cost
    const cost = avgSalary * avgFTE * (months / 12);
    return isNaN(cost) ? "N/A" : cost.toLocaleString();
  };

  const MetricBox = ({ icon: Icon, label, value }) => (
    <div className="flex items-center gap-2 bg-white p-2 rounded border border-gray-200">
      <Icon className="text-gray-600" size={16} />
      <span className="text-sm text-gray-600">{label}: </span>
      <span className="text-sm font-semibold">{value}</span>
    </div>
  );

  const ProjectCard = ({ data, colorClass, bgClass, borderClass }) => (
    <Card className={`shadow-lg ${borderClass} ${bgClass}`}>
      <CardHeader className="border-b border-gray-100">
        <CardTitle className={`text-lg ${colorClass}`}>{data.category}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 my-4">
          {data.items.map((item, j) => (
            <li key={j} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${colorClass.replace('text', 'bg')}`} />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-2">
          <MetricBox icon={BarChart3} label="Effort" value={data.estimatedEffort} />
          <MetricBox icon={AlertTriangle} label="Priority" value={data.priority} />
          <MetricBox icon={Clock} label="Timeframe" value={data.timeframe} />
          <MetricBox icon={Users} label="Resources" value={data.resourceNeeds} />
        </div>
        <div className={`mt-4 p-3 rounded-lg ${bgClass}`}>
          <span className={`text-sm font-medium ${colorClass}`}>
            Estimated Cost: ${calculateCost(data.resourceNeeds, data.timeframe)}
          </span>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto mb-6 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                activeTab === 'strategic'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('strategic')}
            >
              Strategic Overview
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                activeTab === 'tracking'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('tracking')}
            >
              Project Tracking
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      {activeTab === 'strategic' ? (
        <Card className="max-w-7xl mx-auto shadow-xl bg-white">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
            <CardTitle className="text-2xl font-bold text-gray-800">
              Strategic Project Analysis & Resource Requirements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 p-6">
            {/* Mission Critical */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="text-red-600" size={24} />
                <h2 className="text-xl font-bold text-red-600">Mission Critical Technical Improvements</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {missionCritical.map((bucket, i) => (
                  <ProjectCard
                    key={i}
                    data={bucket}
                    colorClass="text-red-800"
                    bgClass="bg-red-50"
                    borderClass="border-2 border-red-200"
                  />
                ))}
              </div>
            </div>

            {/* Short Term */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="text-blue-600" size={24} />
                <h2 className="text-xl font-bold text-blue-600">6-Month Business Goals</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {shortTerm.map((bucket, i) => (
                  <ProjectCard
                    key={i}
                    data={bucket}
                    colorClass="text-blue-800"
                    bgClass="bg-blue-50"
                    borderClass="border-2 border-blue-200"
                  />
                ))}
              </div>
            </div>

            {/* Long Term */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="text-green-600" size={24} />
                <h2 className="text-xl font-bold text-green-600">1-2 Year Business Goals</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {longTerm.map((bucket, i) => (
                  <ProjectCard
                    key={i}
                    data={bucket}
                    colorClass="text-green-800"
                    bgClass="bg-green-50"
                    borderClass="border-2 border-green-200"
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <ProjectDashboard />
      )}
    </div>
  );
};

export default ProjectAnalysisDashboard;