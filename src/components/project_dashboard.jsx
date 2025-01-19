import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const ProjectDashboard = () => {
    
  // Current Projects Data
  const currentProjects = [
    {
      category: "Fund Level Maintenance",
      name: "Fund Level Maintenance",
      status: "In Progress",
      completion: "On Going",
      priority: "Medium",
      priorTwoWeeks: "15.0%",
      upcomingTwoWeeks: "10.0%",
      commercialHours: 1,
      totalCost: "-",
      comments: "New Reports, updating logic for types of trades"
    },
    {
      category: "RM Tools Maintenance",
      name: "RM Tools Maintenance",
      status: "In Progress",
      completion: "On Going",
      priority: "Medium",
      priorTwoWeeks: "17.5%",
      upcomingTwoWeeks: "15.0%",
      commercialHours: 1,
      totalCost: "-",
      comments: "Breakage for remaining IR types"
    },
    {
      category: "HA Updates - Post Deliverable Improvements",
      name: "HA Updates - Post Deliverable Improvements",
      status: "In Progress",
      completion: "On Going",
      priority: "Medium",
      priorTwoWeeks: "15.0%",
      upcomingTwoWeeks: "10.0%",
      commercialHours: 5,
      totalCost: "-",
      comments: "Post quarter fixes"
    },
    {
      category: "BAU / Systems Management",
      name: "Automated Testing",
      status: "In Progress",
      completion: "On Going",
      priority: "Medium",
      priorTwoWeeks: "12.5%",
      upcomingTwoWeeks: "15.0%",
      commercialHours: 0,
      totalCost: "-",
      comments: "Enzo leading"
    },
    {
      category: "BAU / Systems Management",
      name: "Tech Debt / Investment",
      status: "In Progress",
      completion: "On Going",
      priority: "Medium",
      priorTwoWeeks: "20.0%",
      upcomingTwoWeeks: "10.0%",
      commercialHours: 0,
      totalCost: "-",
      comments: "Updating Jira Process, CVA, Reporting Logic"
    },
    {
      category: "Fund Level",
      name: "Asset FX Exposure",
      status: "In Progress",
      completion: "10-Oct-2024",
      priority: "High",
      priorTwoWeeks: "2.5%",
      upcomingTwoWeeks: "5.0%",
      commercialHours: 1,
      totalCost: "65,000",
      comments: "Deployed - Testing / Updating"
    },
    {
      category: "RM Tools Maintenance",
      name: "Cashflows Through Time",
      status: "In Progress",
      completion: "17-Oct-2024",
      priority: "Medium",
      priorTwoWeeks: "2.5%",
      upcomingTwoWeeks: "2.5%",
      commercialHours: 0.5,
      totalCost: "15,000",
      comments: "Requires commercial feedback"
    },
    {
       category:"RM Tools Maintenance", 
       name:"Sponsor Dashboard - Excel Metrics", 
       status:"In Progress", 
       completion:"17-Oct-2024", 
       priority:"High", 
       priorTwoWeeks:"10.0%", 
       upcomingTwoWeeks:"15.0%", 
       commercialHours:"2.00", 
       totalCost:"10,000", 
       comments:"Being Actioned"
     },
     {
       category:"RM Tools Maintenance", 
       name:"Sponsor Dashboard - Scenario Pricing", 
       status:"In Progress", 
       completion:"15-Oct-2024", 
       priority:"High", 
       priorTwoWeeks:"5.0%", 
       upcomingTwoWeeks:"7.5%", 
       commercialHours:"0.25", 
       totalCost:"10,000", 
       comments:"Being Actioned"
     },
     {
       category:"RM Tools Maintenance", 
       name:"Sponsor Dashboard - Web Platform", 
       status:"In Progress", 
       completion:"15-Nov-2024", 
       priority:"Medium", 
       priorTwoWeeks:"40.0%", 
       upcomingTwoWeeks:"10.0%", 
       commercialHours:"0.00", 
       totalCost:"15,000", 
       comments:"Planning Prioritization List"
     }
  ];

  // Completed Projects Data
  const completedProjects = [
    {
        category:"PMCA Improvements", 
        name:"Teamwork Integration (PMCA Custom CRM)", 
        subTasks:"19", 
        completion:"100%", 
        commercialHours:"60", 
        totalCost:"12,200", 
        priority:"High", 
        deadline:"Completed Q4", 
        comments:"Full implementation of change management system including form handling, error management, and comprehensive testing"
    },
    {
        category:"PMCA Improvements", 
        name:"Version Display System",  
        subTasks:null,  
        completion:"100%",  
        commercialHours:"12",  
        totalCost:"1,000",  
        priority:"Medium",  
        deadline:"Completed Q1 - 2025",  
        comments:"Fully implement the web application version system to track updates and releases."
    },
    {
        category:"PMCA Improvements",  
        name:"Base Automated Testing Suite Creation - 483 Automated tests ",  
        subTasks :"7 ",  
        completion :"100% ",  
        commercialHours :"60 ",  
        totalCost :"12,200 ",  
        priority :"High ",  
        deadline :"Completed Q4 ",  
        comments :"Comprehensive automatic testing implementation for a current coverage of 30% of the platform."
     },
     {
         category :"Fund Level ",  
         name :"Asset Exposure Framework ",  
         subTasks :"5 ",  
         completion :"100% ",  
         commercialHours :"180 ",  
         totalCost :"21,600 ",  
         priority :"Medium ",  
         deadline :"Completed Q3 ",  
         comments :"Backend calculations and storage implementation ongoing."
     },
     {
         category :"Treasury Solutions ",  
         name :"TAAS Dashboard ",  
         subTasks :"9 ",  
         completion :"100% ",  
         commercialHours :"160 ",  
         totalCost :"19,200 ",  
         priority :"Medium ",  
         deadline :"Completed Q3 ",  
         comments :"Phase 1 MVP near completion."
     },
     {
         category :"PMCA Improvements ",   
         name :"System Code Libraries Upgrades ",   
         subTasks :"4 ",   
         completion :"100% ",   
         commercialHours :"200 ",   
         totalCost :"24,000 ",   
         priority :"High ",   
         deadline :"Completed Q4 ",
          comments :". MySQL 8, PHP, Python, Django upgrades required."
     },
     {
         category : 'Fund Level',
          name : 'Asset FX Exposure',
          subTasks : '24',
          completion : '100%',
          commercialHours : '168',
          totalCost : '65,000',
          priority : 'High',
          deadline : 'Completed Q4',
          comments : 'Successfully deployed with automated testing.'
     },
     {
          category : 'Risk Management',
          name : 'Hairy Charts RM Tool',
          subTasks : '4',
          completion : '100%',
          commercialHours : '36',
          totalCost : '7,500',
          priority : 'High',
          deadline : 'Completed Q4',
          comments : 'Full implementation with client sign-off of the hairy charts Widget onto the tools.'
     },
     {
           category :'Risk Management',   
           name :'Cashflows Through Time ',   
           subTasks :'3 ',   
           completion :'100% ',   
           commercialHours :'72 ',   
           totalCost :'15,000 ',   
           priority :'High ',   
           deadline :'Completed Q4 ',   
           comments :'Full implementation with client sign-off.'
     }
  ];

  const futureProjects = [
    // Q1 2025
    {
      category: "PMCA Improvements",
      name: "Vols Sheets Market Data Upload",
      status: "Planned",
      estimatedCompletion: 1,
      totalCost: 3000,
      priority: "High",
      deadline: "Q1 2025",
      comments: "Resolving the issue with the Vols sheets to upload market data into the system."
    },
    {
      category: "Hedge Accounting",
      name: "Journal Entries Logic",
      status: "Planned",
      estimatedCompletion: 8,
      totalCost: 42000,
      priority: "High",
      deadline: "Q1 2025",
      comments: "Journal Entries Logic for Hedge Accounting Movement logic implementation"
    },
    {
      category: "PMCA Improvements",
      name: "Django Admin Panel",
      status: "Planned",
      estimatedCompletion: 4,
      totalCost: 25000,
      priority: "High",
      deadline: "Q1 2025",
      comments: "Django Admin Panel - resolve the issue of updating data in the back end and have the possibility to create super users that have more contorl over the system."
    },
    {
      category: "Fund Level",
      name: "Accept/Reject Button Relocation",
      status: "Planned",
      estimatedCompletion: 1,
      totalCost: 6000,
      priority: "Low",
      deadline: "Q1 2025",
      comments: "Fund Level wants that changing the location of the Accept/Reject button to the Custom pricer will result in less errors given the alert section."
    },
    {
      category: "PMCA Improvements",
      name: "RICs and Rate Index Cleanup",
      status: "Planned",
      estimatedCompletion: 3,
      totalCost: 18000,
      priority: "Medium",
      deadline: "Q1 2025",
      comments: "Identifying and removing broken RICs and rate indexes so that we do nto waste moeny during the dayli refinitv pull."
    },
    {
      category: "Fund Level",
      name: "Fund Level Date Validation",
      status: "Planned",
      estimatedCompletion: 2,
      totalCost: 12000,
      priority: "Medium",
      deadline: "Q1 2025",
      comments: "Fund Level Wants - If a trade is entered, PMCA should check if the value date of the trade is a good business day for the two currencies of the trade and if not create a pop up message."
    },
  
    // Q2 2025
    {
      category: "PMCA Improvements",
      name: "E2E Test Implementation",
      status: "Planned",
      estimatedCompletion: 8,
      totalCost: 42000,
      priority: "High",
      deadline: "Q2 2025",
      comments: "Implement 50 more tests end to end which are for validation they simulate all the user interactions with the application form the front end- clicking ont hings and so on."
    },
    {
      category: "PMCA Improvements",
      name: "Operation Enhancements",
      status: "Planned",
      estimatedCompletion: 12,
      totalCost: 75000,
      priority: "Critical",
      deadline: "Q2 2025",
      comments: "Implement the Operation enhancements which includes (Improving the speed, Improving reliability by adding more checksCost, Fallback mechanisim always active in case one server fails have a back up at hand Reductions of operations, more efficient use of tools, security upgrades, automations)"
    },
    {
      category: "Risk Management",
      name: "Currency Swap Pricing Widget",
      status: "Planned",
      estimatedCompletion: 6,
      totalCost: 32000,
      priority: "Medium",
      deadline: "Q2 2025",
      comments: "Currency swap pricing widget - for RM tools"
    },
    {
      category: "Risk Management",
      name: "Interest Expense Cashflow Widget",
      status: "Planned",
      estimatedCompletion: 6,
      totalCost: 35000,
      priority: "Medium",
      deadline: "Q2 2025",
      comments: "Interest Expense Cashflow widget - IR pricer that produces expected cash flows through time."
    },
    {
      category: "Risk Management",
      name: "FX Analysis and Pricing",
      status: "Planned",
      estimatedCompletion: 8,
      totalCost: 45000,
      priority: "High",
      deadline: "Q2 2025",
      comments: "Preliminary FX analysis and pricing, RM Tool"
    },
    {
      category: "Risk Management",
      name: "Deal Contingent Widget",
      status: "Planned",
      estimatedCompletion: 4,
      totalCost: 22000,
      priority: "Medium",
      deadline: "Q2 2025",
      comments: "New Deal Contiengent Widget RM wants Include a new widget to summarize bank pricing in the context of a DC process"
    },
    {
      category: "Fund Level",
      name: "Fund Level Exposure Table Enhancement",
      status: "Planned",
      estimatedCompletion: 4,
      totalCost: 24000,
      priority: "Medium",
      deadline: "Q2 2025",
      comments: "Fund Level wants more flexibility and power of editing the Fun Level Exposure Table."
    },
    {
      category: "Treasury",
      name: "Treasury Solutions POC",
      status: "Planned",
      estimatedCompletion: 8,
      totalCost: 48000,
      priority: "High",
      deadline: "Q2 2025",
      comments: "Treasury Solutions Proof of concept of connections into banks to get cleints account information and to existing TMS systems."
    },
  
    // Q3 2025
    {
      category: "PMCA Improvements",
      name: "PMCA Version 2 Work",
      status: "Planned",
      estimatedCompletion: 16,
      totalCost: 95000,
      priority: "Critical",
      deadline: "Q3 2025",
      comments: "PMCA Version 2 Work - Removing old front end technology that is composed by a mix of old legacy technology versions reduce usage of 6 differenttechnologies into 3."
    },
    {
      category: "Hedge Accounting",
      name: "Hedge Accounting Revaluation",
      status: "Planned",
      estimatedCompletion: 12,
      totalCost: 65000,
      priority: "High",
      deadline: "Q3 2025",
      comments: "Hedge Accounting Revaluation Logic Have the possibility to change the parameters."
    },
    {
      category: "Risk Management",
      name: "RFP Standardization",
      status: "Planned",
      estimatedCompletion: 3,
      totalCost: 16000,
      priority: "Low",
      deadline: "Q3 2025",
      comments: "RM Wants all RFPs standard such that there is one uniform format"
    }
  ];

   return (
     <div className="space-y-8 p-4">
       {/* Current Projects */}
       <Card className="w-full">
         <CardHeader>
           <CardTitle className="text-xl text-blue-600">Current Projects</CardTitle>
         </CardHeader>
         <CardContent>
           <div className="overflow-x-auto">
             <table className="min-w-full divide-y divide-gray-200">
               <thead className="bg-gray-50">
                 <tr>
                   <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Area</th>
                   <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Project</th>
                   <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                   <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Prior 2W</th>
                   <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Next 2W</th>
                   <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                   <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Cost</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-200">
                 {currentProjects.map((project, index) => (
                   <tr key={index} className="hover:bg-gray-50">
                     <td className="px-4 py-2">{project.category}</td>
                     <td className="px-4 py-2">{project.name}</td>
                     <td className="px-4 py-2">{project.status}</td>
                     <td className="px-4 py-2">{project.priorTwoWeeks}</td>
                     <td className="px-4 py-2">{project.upcomingTwoWeeks}</td>
                     <td className="px-4 py-2">
                       <span className={`px-2 py-1 rounded-full text-xs ${
                         project.priority === 'High' ? 'bg-red-100 text-red-800' :
                         project.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                         'bg-green-100 text-green-800'
                       }`}>
                         {project.priority}
                       </span>
                     </td>
                     <td className="px-4 py-2">£{project.totalCost}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </CardContent>
       </Card>

       {/* Completed Projects */}
       <Card className="w-full">
         <CardHeader>
           <CardTitle className="text-xl text-green-600">Completed Projects</CardTitle>
         </CardHeader>
         <CardContent>
           <div className="overflow-x-auto">
             <table className="min-w-full divide-y divide-gray-200">
               <thead className="bg-gray-50">
                 <tr>
                   <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Area</th>
                   <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Project</th>
                   <th className="px-4 py=2">Sub Tasks</th>
                   <th className="px=4 py=2">Completion</th>
                   <th className="px=4 py=2">Hours</th>
                   <th className="px=4 py=2">Cost</th>
                   <th className="px=4 py=2">Comments</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-200">
                 {completedProjects.map((project, index) => (
                   <tr key={index} className="hover:bg-gray-50">
                     <td className="px=4 py=2">{project.category}</td>
                     <td className="px=4 py=2">{project.name}</td>
                     <td className="px=4 py=2">{project.subTasks || '-'}</td>
                     <td className="px=4 py=2">{project.completion}</td>
                     <td className="px=4 py=2">{project.commercialHours}</td>
                     <td className="px=4 py=2">£{project.totalCost}</td>
                     <td className="px=4 py=2">{project.comments}</td>                 
                    </tr>               
                  ))}
                </tbody>              
              </table>            
            </div>          
          </CardContent>        
        </Card>

        {/* Future Projects */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl text-purple-600">Future Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Area</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Project</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Est. Time</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Cost</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Deadline</th>
                  <th className="px-3 py-1 text-left text-xs font-medium text-gray-300 uppercase">Comments</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {futureProjects.map((project, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{project.category}</td>
                    <td className="px-4 py-2">{project.name}</td>
                    <td className="px-4 py-2">{project.status}</td>
                    <td className="px-4 py-2">{project.estimatedCompletion} weeks</td>
                    <td className="px-4 py-2">£{project.totalCost}</td>
                    
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        project.priority === 'High' ? 'bg-red-100 text-red-800' :
                        project.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {project.priority}
                      </span>
                    </td>
                    <td className="px-4 py-2">{project.deadline}</td>
                    <td className="px-4 py-2">{project.comments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>    
          
        </div>      
   )
};

export default ProjectDashboard;