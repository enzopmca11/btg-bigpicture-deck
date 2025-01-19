import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const ProjectAnalysisDashboard = () => {
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
    const avgSalary = 150000; // Average annual salary for technical resources
    const [minFTE, maxFTE] = resourceNeeds.split('-').map(n => parseInt(n));
    const avgFTE = (minFTE + maxFTE) / 2;
    
    let months;
    if (timeframe.includes('years')) {
      months = parseInt(timeframe.split('-')[1]) * 12;
    } else {
      months = parseInt(timeframe.split('-')[1]);
    }
    
    return (avgSalary * avgFTE * (months / 12)).toLocaleString();
  };

  return (
    <div className="space-y-6 p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Strategic Project Analysis & Resource Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Mission Critical */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-red-600">Mission Critical Technical Improvements</h2>
              <div className="grid gap-4">
                {missionCritical.map((bucket, i) => (
                  <div key={i} className="border p-4 rounded-lg bg-red-50">
                    <h3 className="font-bold">{bucket.category}</h3>
                    <ul className="list-disc ml-4 mt-2">
                      {bucket.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                      <div>Effort: {bucket.estimatedEffort}</div>
                      <div>Priority: {bucket.priority}</div>
                      <div>Timeframe: {bucket.timeframe}</div>
                      <div>Resources: {bucket.resourceNeeds}</div>
                      <div className="col-span-2 font-bold">
                        Estimated Cost: ${calculateCost(bucket.resourceNeeds, bucket.timeframe)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Short Term */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-blue-600">6-Month Business Goals</h2>
              <div className="grid gap-4">
                {shortTerm.map((bucket, i) => (
                  <div key={i} className="border p-4 rounded-lg bg-blue-50">
                    <h3 className="font-bold">{bucket.category}</h3>
                    <ul className="list-disc ml-4 mt-2">
                      {bucket.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                      <div>Effort: {bucket.estimatedEffort}</div>
                      <div>Priority: {bucket.priority}</div>
                      <div>Timeframe: {bucket.timeframe}</div>
                      <div>Resources: {bucket.resourceNeeds}</div>
                      <div className="col-span-2 font-bold">
                        Estimated Cost: ${calculateCost(bucket.resourceNeeds, bucket.timeframe)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Long Term */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-green-600">1-2 Year Business Goals</h2>
              <div className="grid gap-4">
                {longTerm.map((bucket, i) => (
                  <div key={i} className="border p-4 rounded-lg bg-green-50">
                    <h3 className="font-bold">{bucket.category}</h3>
                    <ul className="list-disc ml-4 mt-2">
                      {bucket.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                      <div>Effort: {bucket.estimatedEffort}</div>
                      <div>Priority: {bucket.priority}</div>
                      <div>Timeframe: {bucket.timeframe}</div>
                      <div>Resources: {bucket.resourceNeeds}</div>
                      <div className="col-span-2 font-bold">
                        Estimated Cost: ${calculateCost(bucket.resourceNeeds, bucket.timeframe)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectAnalysisDashboard;