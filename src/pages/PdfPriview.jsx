// import React, { useRef } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// function PdfPreview() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const componentRef = useRef(null);

//   const studentData = location.state || {
//     name: "Abhishek Singh",
//     projectTitle: "Online Learning Platform",
//     department: "COMPUTER SCIENCE & ENGINEERING",
//     year: "2024",
//     supervisor: "Er. Himanshu Kashyap",
//     assistedBy: "Er. Gopal Singh",
//     institution: "DIGICODERS TECHNOLOGIES PVT. LTD.",
//   };

//   console.log(studentData);

//   const goBack = () => {
//     navigate(-1);
//   };

//   const handlePrint = () => {
//     const printContent = document.getElementById("printable-content");
//     const originalContents = document.body.innerHTML;

//     document.body.innerHTML = printContent.innerHTML;

//     window.print();

//     document.body.innerHTML = originalContents;

//     // Reload to restore React functionality
//     window.location.reload();
//   };

  
//   return (
//     <div className="flex flex-col items-center p-6">
//       <div className="mb-6 flex gap-4">
//         <button
//           onClick={goBack}
//           className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
//         >
//           Go Back
//         </button>
//         <button
//           onClick={handlePrint}
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Print PDF
//         </button>
//       </div>

//       {/* A4 sized container with proper padding for printing */}
//       <div
//         id="printable-content"
//         ref={componentRef}
//         className="w-[210mm] min-h-[297mm] bg-white shadow-lg mx-auto p-10"
//       >
//         {/* Cover Page */}
//         <div className="page mb-10">
//           <div className="text-center">
//             <h1 className="text-3xl font-bold">
//               {studentData.projectDetails.projectTitle}
//             </h1>
//             <div className="text-lg mt-2">A</div>
//             <div className="text-lg mt-2">
//               Minor Project Report <br />
//               Submitted in Partial fulfillment for the award of
//             </div>
//             <div className="font-bold ">
//               Diploma in {studentData.collegeDetails.branch}
//             </div>
//             <div className="font-bold mt-8 text-xl">
//               DIGICODERS TECHNOLOGIES PVT. LTD. <br />
//               LUCKNOW(UP)
//             </div>
//             <div className="flex justify-center my-1">
//               <img src="./img/digicoders_logo.jpg" alt="" />
//             </div>
//             <div className="flex justify-between">
//               <div className=" border-3 p-2 border-blue-500">
//                 <p>Assist by</p>
//                 <p>Er. Gopal Singh</p>
//                 <p className="w-60">
//                   Department of Computer Science & Engineering DigiCoders
//                 </p>
//               </div>
//               <div className=" border-3 p-2 border-blue-500">
//                 <p>Assist by</p>
//                 <p>Er. Gopal Singh</p>
//                 <p className="w-60">
//                   Department of Computer Science & Engineering DigiCoders
//                 </p>
//               </div>
//             </div>
//             <div className="mt-2 font-bold text-lg">Session - 2025</div>
//           </div>

//           <div className="text-center mt-2">
//             <div className="font-bold uppercase">
//               DEPARTMENT OF {studentData.collegeDetails.branch}
//             </div>
//             <div className="font-black mt-1">
//               DIGICODERS TECHNOLOGIES PVT. LTD.
//             </div>
//           </div>

//           <div className="mt-10 flex justify-between">
//             <div className="text-center">
//               <div className="font-bold">SUBMITTED BY:</div>
//             </div>

//             <div className="text-center">
//               <div className="font-bold">SUBMITTED TO:</div>
//             </div>
//           </div>
//         </div>

//         {/* Certificate Page */}
//         <div className="page break-before-page mb-10">
//           <div className="text-center">
//             <div className="font-bold text-lg ">
//               DIGICODERS TECHNOLOGIES PVT. LTD.
//             </div>
//             <div className="font-bold uppercase mt-2">
//               DEPARTMENT OF {studentData.collegeDetails.branch}
//             </div>
//             <div className="flex justify-center my-1">
//               <img src="./img/digicoders_logo.jpg" alt="" />
//             </div>
//             <h2 className="text-2xl font-bold mb-6">CERTIFICATE</h2>
//           </div>

//           <div className="text-justify mb-10">
//             <p className="text-md">
//               This document certifies that the project work titled{" "}
//               <span className="font-bold">
//                 {studentData.projectDetails.projectTitle}
//               </span>{" "}
//               was successfully completed by the{" "}
//               <span className="font-bold">
//                 {studentData.personalDetails.name}
//               </span>
//               . The project is a significant and original piece of work that was
//               carried out under the supervision of faculty members in the
//               Department of Computer Science & Engineering at{" "}
//               <span className="font-bold">
//                 {studentData.collegeDetails.collegeName}
//               </span>
//               . The project was undertaken as part of the academic curriculum
//               and is required for the fulfillment of the Diploma in Engineering.
//               This certification acknowledges the efforts and dedication of{" "}
//               <span className="font-bold">
//                 {studentData.personalDetails.name}
//               </span>{" "}
//               in completing this project during the academic year{" "}
//               <span className="font-bold">
//                 {studentData.collegeDetails.session}
//               </span>
//               . It stands as a testament to their knowledge and skills in
//               computer science and engineering.
//             </p>
//           </div>

//           <div className="flex justify-between text-center">
//             <div className=" border-3 p-2 border-blue-500">
//               <p>Assist by</p>
//               <p>Er. Gopal Singh</p>
//               <p className="w-60">
//                 Department of Computer Science & Engineering DigiCoders
//               </p>
//             </div>
//             <div className=" border-3 p-2 border-blue-500">
//               <p>Assist by</p>
//               <p>Er. Gopal Singh</p>
//               <p className="w-60">
//                 Department of Computer Science & Engineering DigiCoders
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Certificate of Approval Page */}
//         <div className="page break-before-page mb-10">
//           <div className="text-center">
//             <div className="font-bold text-lg ">
//               DIGICODERS TECHNOLOGIES PVT. LTD.
//             </div>
//             <div className="font-bold uppercase mt-2">
//               DEPARTMENT OF {studentData.collegeDetails.branch}
//             </div>
//             <div className="flex justify-center my-1">
//               <img src="./img/digicoders_logo.jpg" alt="" />
//             </div>
//             <h2 className="text-xl font-bold mb-6">CERTIFICATE OF APPROVAL</h2>
//           </div>

//           <div className="text-justify mb-10">
//             <p>
//               This project has been approved as a valid study in the field of
//               engineering. It has been carried out and presented in a manner
//               that meets the necessary standards for the diploma it was
//               submitted for. The approval signifies that the project is
//               acceptable for the academic requirements, but it does not imply
//               that the reviewers agree with or endorse all the content,
//               statements, opinions, or conclusions expressed in the work. The
//               project is acknowledged solely for meeting the criteria needed to
//               fulfill the diploma requirements.
//             </p>
//             <p className="mt-4">
//               This certification is provided by Digicoders Technologies Pvt.
//               Ltd., confirming the project's adequacy for the intended academic
//               purpose without endorsing the specific viewpoints or findings it
//               contains.
//             </p>
//           </div>

//           <div className="mt-32 flex justify-between">
//             <div className="text-center">
//               <div className="border-t border-black pt-2">
//                 (INTERNAL EXAMINER)
//               </div>
//             </div>

//             <div className="text-center">
//               <div className="border-t border-black pt-2">
//                 (EXTERNAL EXAMINER)
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Declaration Page */}
//         <div className="page break-before-page mb-10">
//           <div className="text-center">
//             <div className="font-bold text-lg ">
//               DIGICODERS TECHNOLOGIES PVT. LTD.
//             </div>
//             <div className="font-bold uppercase mt-2">
//               DEPARTMENT OF {studentData.collegeDetails.branch}
//             </div>
//             <div className="flex justify-center my-1">
//               <img src="./img/digicoders_logo.jpg" alt="" />
//             </div>
//             <div className="mt-2 text-center">
//               <div>SESSION-{studentData.collegeDetails.session}</div>
//             </div>
//             <h2 className="text-xl font-bold mb-6">DECLARATION</h2>
//           </div>

//           <div className="text-justify mb-10">
//             <p>
//               We, students of the Diploma in Computer Science & Engineering at{" "}
//               <span className="font-bold">
//                 {studentData.collegeDetails.collegeName}
//               </span>
//               . declare that the work presented in this Minor project is my
//               original effort. It is authentic and accurate to the best of my
//               knowledge. I have conducted this work in accordance with
//               engineering ethics. This project does not infringe on any patented
//               work and has not been submitted to any other university or
//               institution for the award of any degree or diploma.
//             </p>
//           </div>

//           <div className="mt-32 text-right">
//             <span className="font-bold">
//               {studentData.personalDetails.name}
//             </span>
//           </div>
//         </div>

//         {/* Acknowledgement Page */}
//         <div className="page break-before-page mb-10">
//           <div className="text-center">
//             <div className="font-bold text-lg ">
//               DIGICODERS TECHNOLOGIES PVT. LTD.
//             </div>
//             <div className="font-bold uppercase mt-2">
//               DEPARTMENT OF {studentData.collegeDetails.branch}
//             </div>
//             <div className="flex justify-center my-1">
//               <img src="./img/digicoders_logo.jpg" alt="" />
//             </div>
//             <h2 className="text-xl font-bold mb-6">ACKNOWLEDGEMENT</h2>
//           </div>

//           <div className="text-justify mb-10">
//             <p>
//               The success of this project is the result of systematic effort and
//               the contributions of many individuals, including the invaluable
//               support from <b>Digicoders Technologies Pvt. Ltd.</b> There were
//               numerous challenges, including unexpected difficulties in error
//               correction, some of which were beyond our control. At times, it
//               felt like we were navigating without direction, like a rudderless
//               boat. However, the timely guidance and support from key
//               individuals helped us overcome these challenges.
//             </p>
//             <p className="mt-2">
//               I am deeply grateful to <b> Er Himanshu Kashyap </b>, the Head of
//               the Department of {studentData.collegeDetails.branch}, for his
//               unwavering encouragement and valuable advice throughout the
//               project. His insights were crucial at every stage. I also thank
//               the other staff members of the department for their assistance and
//               support, which played a vital role in the project's completion.
//             </p>
//             <p className="mt-2">
//               Special thanks to <b> Er. Gopal Singh </b>, whose significant
//               contributions, both direct and indirect, were invaluable to this
//               endeavor. Your encouragement and support have been greatly
//               appreciated.
//             </p>
//             <p className="mt-2">
//               I would also like to extend my sincere thanks to{" "}
//               <b> Digicoders Technologies Pvt. Ltd.</b> for their support and
//               resources, which were instrumental in bringing this project to
//               fruition. Their expertise and guidance were key factors in our
//               success.
//             </p>
//           </div>

//           <div className="mt-16 text-right">
//             <div>{studentData.name}</div>
//           </div>
//         </div>

//         {/* Index Page */}
//         <div className="page break-before-page mb-10">
//           <div className="text-center">
//             <h2 className="text-2xl font-bold mb-10 underline ">INDEX</h2>
//           </div>

//           <div>
//             <div className="mb-2 ">1. Introduction</div>
//             <div className="ml-6 mb-1">
//               1.1 Overview of the Online Learning Platform
//             </div>
//             <div className="ml-6 mb-1">1.2 Background of the Project</div>
//             <div className="ml-6 mb-1">1.3 Objectives and Scope</div>
//             <div className="ml-6 mb-1">1.4 Intended Audience</div>
//             <div className="ml-6 mb-1">1.5 Problem Definition</div>

//             <div className="mb-2 mt-3">2. Project Goals</div>
//             <div className="ml-6 mb-1">2.1 Purpose and Benefits</div>
//             <div className="ml-6 mb-1">2.2 Key Deliverables</div>

//             <div className="mb-2 mt-3">3. System Analysis</div>
//             <div className="ml-6 mb-1">3.1 Objectives</div>
//             <div className="ml-6 mb-1">3.2 Agile Development Model Process</div>
//             <div className="ml-10 mb-1">
//               3.2.1 Project Inception and Planning
//             </div>
//             <div className="ml-10 mb-1">
//               3.2.2 Requirements Gathering and Analysis
//             </div>
//             <div className="ml-10 mb-1">3.2.3 Iterative Development</div>
//             <div className="ml-10 mb-1">3.2.4 Design and Prototyping</div>
//             <div className="ml-10 mb-1">3.2.5 Development and Integration</div>
//             <div className="ml-10 mb-1">
//               3.2.6 Testing and Quality Assurance
//             </div>
//             <div className="ml-10 mb-1">3.2.7 Deployment and Release</div>
//             <div className="ml-10 mb-1">3.2.8 Maintenance and Iteration</div>
//             <div className="ml-6 mb-1">3.3 ER Diagram</div>
//             <div className="ml-6 mb-1">3.4 Data Flow Diagram</div>

//             <div className="mb-2 mt-3">4. Core Features</div>
//             <div className="ml-6 mb-1">
//               4.1 User Registration and Authentication
//             </div>
//             <div className="ml-6 mb-1">4.2 Course and Content Management</div>
//             <div className="ml-6 mb-1">
//               4.3 Student Enrollment and Learning Modules
//             </div>
//             <div className="ml-6 mb-1">
//               4.4 Real-Time Progress Tracking and Notifications
//             </div>
//             <div className="ml-6 mb-1">4.5 Security and Content Protection</div>

//             <div className="mb-2 mt-3">5. Technology Stack</div>
//             <div className="ml-6 mb-1">5.1 Frontend Technologies</div>
//             <div className="ml-6 mb-1">5.2 Backend Technologies</div>
//             <div className="ml-6 mb-1">5.3 Database Solutions</div>

//             <div className="mb-2 mt-3">6. System Architecture</div>
//             <div className="ml-6 mb-1">
//               6.1 High-Level Architecture Overview
//             </div>
//             <div className="ml-6 mb-1">6.2 Key System Components</div>

//             <div className="mb-2 mt-3">7. System Design Methodology</div>
//             <div className="ml-6 mb-1">7.1 Top-Down Design</div>
//             <div className="ml-6 mb-1">7.2 Bottom-Up Design</div>
//             <div className="ml-6 mb-1">7.3 Modular Design Approach</div>

//             <div className="mb-2 mt-3">8. Backend Design</div>
//             <div className="ml-6 mb-1">
//               8.1 Description of Classes and Models (models.py)
//             </div>
//             <div className="ml-6 mb-1">8.2 Defined URLs (urls.py)</div>

//             <div className="mb-2 mt-3">9. Data Modeling</div>
//             <div className="ml-6 mb-1">9.1 Database Schema Overview</div>
//             <div className="ml-6 mb-1">9.2 List of Tables</div>

//             <div className="mb-2 mt-3">10. Development Plan</div>
//             <div className="ml-6 mb-1">10.1 Phases of Development</div>
//             <div className="ml-6 mb-1">10.2 Timeline and Milestones</div>

//             <div className="mb-2 mt-3">11. Testing and Quality Assurance</div>
//             <div className="ml-6 mb-1">11.1 Testing Strategies</div>
//             <div className="ml-6 mb-1">11.2 Testing Methodologies</div>
//             <div className="ml-6 mb-1">11.3 User Acceptance Testing</div>

//             <div className="mb-2 mt-3">12. User Experience and Interface</div>
//             <div className="ml-6 mb-1">12.1 Design Principles</div>
//             <div className="ml-6 mb-1">12.2 User Interface Screenshots</div>

//             <div className="mb-2 mt-3">13. Conclusion</div>
//             <div className="ml-6 mb-1">
//               13.1 Summary of Project Achievements
//             </div>
//             <div className="ml-6 mb-1">13.2 Future Work and Enhancements</div>
//           </div>
//         </div>

//         {/* Introduction Page */}
//         <div className="page break-before-page mb-10">
//           <h2 className="text-2xl font-bold mb-6 text-center underline">
//             1. Introduction
//           </h2>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">
//               1.1 Overview of the Online Learning Platform
//             </h3>
//             <p className="text-justify">
//               The Online Learning Platform is a web-based application designed
//               to facilitate distance learning through video lectures,
//               interactive quizzes, assignments, and student-teacher
//               collaboration. Built using ASP.NET MVC, it ensures a robust and
//               scalable system that supports a variety of users including
//               students, teachers, and administrators.
//             </p>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">
//               1.2 Background of the Project
//             </h3>
//             <p className="text-justify">
//               With the growing demand for remote education, the need for an
//               effective online learning system has become imperative. This
//               project aims to provide a comprehensive learning management system
//               that supports virtual classrooms, student progress tracking, and
//               seamless communication.
//             </p>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">1.3 Objectives and Scope</h3>
//             <ul className="list-disc ml-6">
//               <li>
//                 Deliver an interactive platform for educators to create and
//                 manage courses.
//               </li>
//               <li>Allow students to enroll, learn, and get certified.</li>
//               <li>
//                 Provide role-based access and management for admin, teachers,
//                 and students.
//               </li>
//               <li>
//                 Support multimedia content, assessments, and performance
//                 analytics.
//               </li>
//             </ul>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">1.4 Intended Audience</h3>
//             <ul className="list-disc ml-6">
//               <li>Educational Institutions</li>
//               <li>Teachers and Tutors</li>
//               <li>Students and Learners</li>
//               <li>Educational Startups</li>
//             </ul>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">1.5 Problem Definition</h3>
//             <p className="text-justify">
//               Traditional education systems lack the flexibility and reach
//               needed in today's digital era. There is a gap in providing
//               personalized, accessible, and cost-effective learning
//               opportunities.
//             </p>
//           </div>
//         </div>

//         {/* Project Goals Page */}
//         <div className="page break-before-page mb-10">
//           <h2 className="text-2xl font-bold mb-6 text-center underline">
//             2. Project Goals
//           </h2>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">2.1 Purpose and Benefits</h3>
//             <ul className="list-disc ml-6">
//               <li>Promote remote education.</li>
//               <li>Track student engagement and performance.</li>
//               <li>Foster collaboration between learners and educators.</li>
//             </ul>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">2.2 Key Deliverables</h3>
//             <ul className="list-disc ml-6">
//               <li>Fully functional web application.</li>
//               <li>Admin dashboard, teacher and student interfaces.</li>
//               <li>Course management and reporting modules.</li>
//             </ul>
//           </div>
//         </div>

//         {/* System Analysis Page */}
//         <div className=" mb-10">
//           <h2 className="text-2xl font-bold mb-6 text-center underline">
//             3. System Analysis
//           </h2>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">3.1 Objectives</h3>
//             <p className="text-justify">
//               To develop a user-friendly and secure online platform with high
//               availability and modularity.
//             </p>
//           </div>

//           <div className="mb-6">
//             <h3 className="text-lg font-bold mb-2">
//               3.2 Agile Development Model Process
//             </h3>

//             <div className="ml-4 mb-2">
//               <h4 className="font-bold">
//                 3.2.1 Project Inception and Planning
//               </h4>
//               <p className="text-justify">
//                 Defined scope, identified stakeholders, and allocated resources.
//               </p>
//             </div>

//             <div className="ml-4 mb-2">
//               <h4 className="font-bold">
//                 3.2.2 Requirements Gathering and Analysis
//               </h4>
//               <p className="text-justify">
//                 Collected user requirements through questionnaires and
//                 interviews.
//               </p>
//             </div>

//             <div className="ml-4 mb-2">
//               <h4 className="font-bold">3.2.3 Iterative Development</h4>
//               <p className="text-justify">
//                 Developed modules in sprints with regular feedback cycles.
//               </p>
//             </div>

//             <div className="ml-4 mb-2">
//               <h4 className="font-bold">3.2.4 Design and Prototyping</h4>
//               <p className="text-justify">
//                 Wireframes and UI/UX mockups were designed using Figma.
//               </p>
//             </div>

//             <div className="ml-4 mb-2">
//               <h4 className="font-bold">3.2.5 Development and Integration</h4>
//               <p className="text-justify">
//                 Modules developed using ASP.NET MVC and integrated
//                 progressively.
//               </p>
//             </div>

//             <div className="ml-4 mb-2">
//               <h4 className="font-bold">3.2.6 Testing and Quality Assurance</h4>
//               <p className="text-justify">
//                 Automated and manual testing performed for each release.
//               </p>
//             </div>

//             <div className="ml-4 mb-2">
//               <h4 className="font-bold">3.2.7 Deployment and Release</h4>
//               <p className="text-justify">
//                 Deployed to IIS and tested in a production-like environment.
//               </p>
//             </div>

//             <div className="ml-4 mb-2">
//               <h4 className="font-bold">3.2.8 Maintenance and Iteration</h4>
//               <p className="text-justify">
//                 Continuous updates and bug fixes based on user feedback.
//               </p>
//             </div>
//           </div>

//           <div className="mb-4 page break-before-page">
//             <h3 className="text-lg font-bold mb-2">3.3 ER Diagram</h3>
//             <p className="text-justify">
//               Shows entities like User, Course, Lecture, Quiz, Enrollment, etc.
//             </p>
//             {/* You could add an actual ER Diagram image here */}
//             <img
//               src={
//                 studentData.projectAssets.erDiagram
//                   ? studentData.projectAssets.erDiagram
//                   : "./img/erDiagram.png"
//               }
//               className="max-h-96"
//               alt=""
//             />
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">3.4 Data Flow Diagram</h3>
//             <p className="text-justify">
//               Level 1 and 2 DFDs illustrating data movement between user roles
//               and system modules.
//             </p>
//             {/* You could add an actual DFD image here */}
//             <img
//               src={
//                 studentData.projectAssets.dfdDiagram
//                   ? studentData.projectAssets.dfdDiagram
//                   : "./img/dfd.png"
//               }
//               className="max-h-96"
//               alt=""
//             />
//           </div>
//         </div>

//         {/* Core Features Page */}
//         <div className="page break-before-page mb-10">
//           <h2 className="text-2xl font-bold mb-6 text-center underline">4. Core Features</h2>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">
//               4.1 User Registration and Authentication
//             </h3>
//             <p className="text-justify">
//               Secure login system with role-based access control.
//             </p>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">
//               4.2 Course and Content Management
//             </h3>
//             <p className="text-justify">
//               Teachers can create, edit, and manage course modules and
//               assignments.
//             </p>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">
//               4.3 Student Enrollment and Learning Modules
//             </h3>
//             <p className="text-justify">
//               Students can browse courses, enroll, access content, and complete
//               assessments.
//             </p>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">
//               4.4 Real-Time Progress Tracking and Notifications
//             </h3>
//             <p className="text-justify">
//               Dashboard to track course completion, quiz scores, and assignment
//               submissions.
//             </p>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">
//               4.5 Security and Content Protection
//             </h3>
//             <p className="text-justify">
//               Session management, HTTPS, encrypted credentials, and
//               authorization filters.
//             </p>
//           </div>
//         </div>

        // {/* Technology Stack Page */}
        // <div className="mb-10">
        //   <h2 className="text-2xl font-bold mb-6 text-center underline">5. Technology Stack</h2>

        //   <div className="mb-4">
        //     <h3 className="text-lg font-bold mb-2">
        //       5.1 Frontend Technologies
        //     </h3>
        //     <ul className="list-disc ml-6">
        //       <li>HTML5, CSS3, JavaScript, Bootstrap</li>
        //       <li>Razor Views (ASP.NET MVC)</li>
        //     </ul>
        //   </div>

        //   <div className="mb-4">
        //     <h3 className="text-lg font-bold mb-2">5.2 Backend Technologies</h3>
        //     <ul className="list-disc ml-6">
        //       <li>ASP.NET MVC Framework</li>
        //       <li>C#</li>
        //       <li>Entity Framework</li>
        //     </ul>
        //   </div>

        //   <div className="mb-4">
        //     <h3 className="text-lg font-bold mb-2">5.3 Database Solutions</h3>
        //     <ul className="list-disc ml-6">
        //       <li>Microsoft SQL Server</li>
        //     </ul>
        //   </div>
        // </div>

//         {/* System Architecture Page */}
//         <div className="page break-before-page mb-10">
//           <h2 className="text-2xl font-bold mb-6 text-center underline">6. System Architecture</h2>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">
//               6.1 High-Level Architecture Overview
//             </h3>
//             <p className="text-justify">
//               Three-tier architecture: Presentation Layer, Business Logic Layer,
//               Data Access Layer.
//             </p>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">
//               6.2 Key System Components
//             </h3>
//             <ul className="list-disc ml-6">
//               <li>User Management</li>
//               <li>Course Management</li>
//               <li>Assessment Engine</li>
//               <li>Notification System</li>
//               <li>Reporting Module</li>
//             </ul>
//           </div>
//         </div>

//         {/* System Design Methodology Page */}
//         <div className="page break-before-page mb-10">
//           <h2 className="text-2xl font-bold mb-6 text-center underline">
//             7. System Design Methodology
//           </h2>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">7.1 Top-Down Design</h3>
//             <p className="text-justify">
//               Designed from user interface requirements to backend logic.
//             </p>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">7.2 Bottom-Up Design</h3>
//             <p className="text-justify">
//               Database tables and models were created first and built up to the
//               UI.
//             </p>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">
//               7.3 Modular Design Approach
//             </h3>
//             <p className="text-justify">
//               Each module (e.g., Courses, Quizzes) was independently developed
//               and tested.
//             </p>
//           </div>
//         </div>
//         {/* Backend Design Page */}
//         <div className=" mb-10">
//           <h2 className="text-2xl font-bold mb-6 text-center underline">
//             8. Backend Design
//           </h2>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">8.1 Description of Classes and Models (models.py)</h3>
//             <p className="text-justify">
//              User, Article, Comment, Category
//             </p>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">8.2  Defined URLs (urls.py)</h3>
//             <p className="text-justify">
//              Mapped URLs to views for routing user requests.
//             </p>
//           </div>
//         </div>
//         {/* . Data Modeling Page */}
//         <div className=" mb-10">
//           <h2 className="text-2xl font-bold mb-6 text-center underline">
//             9. Data Modeling
//           </h2>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">9.1 Database Schema Overview</h3>
//             <p className="text-justify">
// Entity-Relationship model with foreign key constraints.
//             </p>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">9.2 List of Tables</h3>
//             {/* <p className="text-justify">
//              Mapped URLs to views for routing user requests.
//             </p> */}
//             <li>auth_user</li>
//             <li>news_article</li>
//             <li>news_category</li>
//             <li>news_comment</li>
//           </div>
//         </div>
//         {/* 10. Development Plan Page */}
//         <div className=" mb-10">
//           <h2 className="text-2xl font-bold mb-6 text-center underline">
//           10. Development Plan
//           </h2>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">10.1 Phases of Development</h3>
//             {/* <p className="text-justify">
// Entity-Relationship model with foreign key constraints.
//             </p> */}
//             <li>Week 1–2: Requirements & Setup</li>
//             <li>Week 3–4: Backend Development</li>
//             <li>Week 5: Frontend Integration</li>
//             <li>Week 6: Testing & Deployment</li>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">10.2 Timeline and Milestones</h3>
//             <p className="text-justify">
// Delivered MVP in 6 weeks; maintained a sprint-based cycle.
//             </p>
//             {/* <li>auth_user</li>
//             <li>news_article</li>
//             <li>news_category</li>
//             <li>news_comment</li> */}
//           </div>
//         </div>
//         {/* 11. Testing and Quality Assurance Page */}
//         <div className=" mb-10">
//           <h2 className="text-2xl font-bold mb-6 text-center underline">
//          11. Testing and Quality Assurance
//           </h2>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">11.1 Testing Strategies</h3>
//             {/* <p className="text-justify">
// Entity-Relationship model with foreign key constraints.
//             </p> */}
//             <li>Unit Testing with Django’s TestCase</li>
//             <li>Integration Testing</li>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">11.2 Testing Methodologies</h3>
//             {/* <p className="text-justify">
// Manual Testing
//             </p> */}
//             <li>Manual Testing</li>
//             <li>Automated Testing Scripts</li>
           
//           </div>
//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">11.3 User Acceptance Testing</h3>
//             <p className="text-justify">
// Feedback gathered from a sample audience
//             </p>
            
           
//           </div>
//         </div>

//         {/* 12. User Experience and Interface Page */}
//         <div className="page break-before-page mb-10">
//           <h2 className="text-2xl font-bold mb-6 text-center underline">
//             12. User Experience and Interface

//           </h2>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">12.1 Design Principles</h3>
//             <li>Simplicity and Accessibility</li>
//             <li>Mobile-first responsive design</li>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">12.2 Code Screenshots</h3>
//            {studentData.projectAssets.projectCode.map((code,i)=>(<img key={i} src={code}/>))}
//           </div>
//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">12.3 User Interface Screenshots</h3>
//            {studentData.projectAssets.uiScreenshots.map((ui,i)=>(<img key={i} src={ui}/>))}
//           </div>
//         </div>
//         {/* 13. Conclusion Page */}
//         <div className="page break-before-page mb-10">
//           <h2 className="text-2xl font-bold mb-6 text-center underline">
//            13. Conclusion
//           </h2>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">13.1 Summary of Project Achievements</h3>
//             <p className="text-justify">
//               Successfully created a scalable, responsive, and secure News Portal using Django.
//             </p>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">13.2 Future Work and Enhancements</h3>
// <li>Add multimedia content (videos, galleries)</li>
// <li>Integrate push notifications</li>
// <li>Enable live coverage and multilingual support</li>
//           </div>

//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">
//               7.3 Modular Design Approach
//             </h3>
//             <p className="text-justify">
//               Each module (e.g., Courses, Quizzes) was independently developed
//               and tested.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default PdfPreview;







import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PdfPreview() {
  const location = useLocation();
  const navigate = useNavigate();
  const componentRef = useRef(null);

  const studentData = location.state || {};

  // console.log(studentData);
const [progress, setProgress] = useState(2);
const [isdisabled, setisdisabled] = useState(true);
  const goBack = () => {
    navigate(-1);
  };



  const handlePrint = () => {
    const printContent = document.getElementById("printable-content");
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContent.innerHTML;

    window.print();

    document.body.innerHTML = originalContents;

    // Reload to restore React functionality
    window.location.reload();
  };

  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const [content, setContent] = useState({
    introduction: "",
    projectGoals: "",
    systemAnalysis: "",
    coreFeatures: "",
    systemArchitecture: "",
    systemDesign: "",
    backendDesign: "",
    dataModeling: "",
    conclusion: ""
  });

  const generateContent = async (section, prompt) => {
    try {
      const dataforSend = {
        "contents": [{
          "parts": [{ "text": prompt }]
        }]
      }
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        dataforSend
      );
      console.log(res);
      
      const generatedText = res.data.candidates[0].content.parts[0].text;
      setContent(prev => ({ ...prev, [section]: generatedText }));
    } catch (error) {
      console.error(`Error generating ${section}:`, error);
    }
  };

  useEffect(() => {
    // Generate all sections when component mounts
    const generateSequentially = async () => {

    const sections = [
      {
        key: "introduction",
        prompt: `Generate a detailed introduction section for an ${studentData.projectDetails.projectTitle} platform project. give a paragraps : 
        1.1 Overview of the ${studentData.projectDetails.projectTitle}  
        1.2 Background of the Project, 
        1.3 Objectives and Scope ,
        1.4 Intended Audience , 
        1.5 Problem Definition, ` 
      },
      {
        key: "projectGoals",
        prompt: `Generate the Project Goals section for an ${studentData.projectDetails.projectTitle}  platform with these subsections give a paragraps:
        2.1 Purpose and Benefits - Explain how this,
        2.2 Key Deliverables - List the main features that will be delivered, ` 
      },
      {
        key: "systemAnalysis",
        prompt: `Generate the System Analysis section for an ${studentData.projectDetails.projectTitle}  platform with these subsections give a paragraps:
        3.1 Objectives - What the system aims to achieve, 
        3.2 Agile Development Process - How we followed agile methodology`
      },
      {
        key: "coreFeatures",
        prompt: `List and describe 5 core features of an ${studentData.projectDetails.projectTitle}  platform built with ${studentData.projectDetails.backendTechnology} ,${studentData.projectDetails.frontendTechnology} give a paragraps:
        4.1 User Authentication,  
        4.2 Book Management,  
        4.3 Reading Experience, 
        4.4 User Library , 
        4.5 Admin Dashboard, `
      },

      {
        key: "systemArchitecture",
        prompt: `Describe the system architecture for an ${studentData.projectDetails.projectTitle}  platform with give a paragraps:
        6.1 High-Level Architecture Overview
        6.2 Key System Components`
      },
      {
        key: "systemDesign",
        prompt: `Explain the system design methodology for an ${studentData.projectDetails.projectTitle}  platform with give a paragraps:
        7.1 Top-Down Design approach , 
        7.2 Bottom-Up Design approach, 
        7.3 Modular Design approach, `
      },
      {
        key: "backendDesign",
        prompt: `Describe the backend design for an ${studentData.projectDetails.projectTitle}  platform with ${studentData.projectDetails.backendTechnology} give a paragraps:
        8.1 Main Models 
        8.2 API Routes and Controllers`
      },
      {
        key: "dataModeling",
        prompt: `Explain the data modeling for an ${studentData.projectDetails.projectTitle}  platform with ${studentData.projectDetails.database}  give a paragraps:
        9.1 Database Schema Overview
        9.2 List of Collections `
      },
      {
        key: "conclusion",
        prompt: `Write a conclusion for an ${studentData.projectDetails.projectTitle}  platform project with give a paragraps:
        13.1 Summary of Project Achievements,

        13.2 Future Work and Enhancements`
      }
    ];
  for (let i = 0; i < sections.length; i++) {
        const { key, prompt } = sections[i];
        await generateContent(key, prompt);
        setProgress(((i + 1) / sections.length) * 100); // update progress
        await new Promise(resolve => setTimeout(resolve, 1500)); // rate limiting
      }

    };
   
    generateSequentially();
  },[]);

useEffect(() => {
  if (progress === 100) {
    setisdisabled(false);
  }
}, [progress]);

  

  return (
    <div className="flex flex-col items-center p-6">
      <span className={` h-1 shadow-indigo-400 shadow bg-indigo-500 absolute top-0 left-0`}   style={{ width: `${progress}%` }}></span>
      <div className="mb-6 flex gap-4">
        <button
          onClick={goBack}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          Go Back
        </button>
        <button
  onClick={handlePrint}
    disabled={isdisabled}

  className={`py-2 px-4 rounded text-white  ${isdisabled ? 'bg-gray-400 cursor-not-allowed' : 'primary'}`}
>
  Print PDF
</button>
      </div>

      {/* A4 sized container with proper padding for printing */}
      <div
        id="printable-content"
        ref={componentRef}
        className="w-[210mm] min-h-[297mm] bg-white shadow-lg mx-auto p-10"
      >
        {/* Cover Page */}
        <div className="page mb-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              {studentData.projectDetails?.projectTitle || "Project Name"}
            </h1>
            <div className="text-lg mt-2">A</div>
            <div className="text-lg mt-2">
              Minor Project Report <br />
              Submitted in Partial fulfillment for the award of
            </div>
            <div className="font-bold ">
              Diploma in {studentData.collegeDetails?.branch || "COMPUTER SCIENCE & ENGINEERING"}
            </div>
            <div className="font-bold mt-8 text-xl">
              DIGICODERS TECHNOLOGIES PVT. LTD. <br />
              LUCKNOW(UP)
            </div>
            <div className="flex justify-center my-1">
              <img src="./img/digicoders_logo.jpg" alt="" />
            </div>
            <div className="flex justify-between">
              <div className=" border-3 p-2 border-blue-500">
                <p>Assist by</p>
                <p>Er. Gopal Singh</p>
                <p className="w-60">
                  Department of Computer Science & Engineering DigiCoders
                </p>
              </div>
              <div className=" border-3 p-2 border-blue-500">
                <p>Assist by</p>
                <p>Er. Gopal Singh</p>
                <p className="w-60">
                  Department of Computer Science & Engineering DigiCoders
                </p>
              </div>
            </div>
            <div className="mt-2 font-bold text-lg">Session - 2025</div>
          </div>

          <div className="text-center mt-2">
            <div className="font-bold uppercase">
              DEPARTMENT OF {studentData.collegeDetails?.branch || "COMPUTER SCIENCE & ENGINEERING"}
            </div>
            <div className="font-black mt-1">
              DIGICODERS TECHNOLOGIES PVT. LTD.
            </div>
          </div>

          <div className="mt-10 flex justify-between">
            <div className="text-center">
              <div className="font-bold">SUBMITTED BY:</div>
            </div>

            <div className="text-center">
              <div className="font-bold">SUBMITTED TO:</div>
            </div>
          </div>
        </div>

        {/* Certificate Page */}
        <div className="page break-before-page mb-10">
          <div className="text-center">
            <div className="font-bold text-lg ">
              DIGICODERS TECHNOLOGIES PVT. LTD.
            </div>
            <div className="font-bold uppercase mt-2">
              DEPARTMENT OF {studentData.collegeDetails?.branch || "COMPUTER SCIENCE & ENGINEERING"}
            </div>
            <div className="flex justify-center my-1">
              <img src="./img/digicoders_logo.jpg" alt="" />
            </div>
            <h2 className="text-2xl font-bold mb-6">CERTIFICATE</h2>
          </div>

          <div className="text-justify mb-10">
            <p className="text-md">
              This document certifies that the project work titled{" "}
              <span className="font-bold">
                {studentData.projectDetails?.projectTitle || "${studentData.projectDetails.projectTitle}  Platform"}
              </span>{" "}
              was successfully completed by the{" "}
              <span className="font-bold">
                {studentData.personalDetails?.name || "Student Name"}
              </span>
              . The project is a significant and original piece of work that was
              carried out under the supervision of faculty members in the
              Department of Computer Science & Engineering at{" "}
              <span className="font-bold">
                {studentData.collegeDetails?.collegeName || "DigiCoders Technologies Pvt. Ltd."}
              </span>
              . The project was undertaken as part of the academic curriculum
              and is required for the fulfillment of the Diploma in Engineering.
              This certification acknowledges the efforts and dedication of{" "}
              <span className="font-bold">
                {studentData.personalDetails?.name || "Student Name"}
              </span>{" "}
              in completing this project during the academic year{" "}
              <span className="font-bold">
                {studentData.collegeDetails?.session || "2025"}
              </span>
              . It stands as a testament to their knowledge and skills in
              computer science and engineering.
            </p>
          </div>

          <div className="flex justify-between text-center">
            <div className=" border-3 p-2 border-blue-500">
              <p>Assist by</p>
              <p>Er. Gopal Singh</p>
              <p className="w-60">
                Department of Computer Science & Engineering DigiCoders
              </p>
            </div>
            <div className=" border-3 p-2 border-blue-500">
              <p>Assist by</p>
              <p>Er. Gopal Singh</p>
              <p className="w-60">
                Department of Computer Science & Engineering DigiCoders
              </p>
            </div>
          </div>
        </div>

        {/* Certificate of Approval Page */}
        <div className="page break-before-page mb-10">
          <div className="text-center">
            <div className="font-bold text-lg ">
              DIGICODERS TECHNOLOGIES PVT. LTD.
            </div>
            <div className="font-bold uppercase mt-2">
              DEPARTMENT OF {studentData.collegeDetails?.branch || "COMPUTER SCIENCE & ENGINEERING"}
            </div>
            <div className="flex justify-center my-1">
              <img src="./img/digicoders_logo.jpg" alt="" />
            </div>
            <h2 className="text-xl font-bold mb-6">CERTIFICATE OF APPROVAL</h2>
          </div>

          <div className="text-justify mb-10">
            <p>
              This project has been approved as a valid study in the field of
              engineering. It has been carried out and presented in a manner
              that meets the necessary standards for the diploma it was
              submitted for. The approval signifies that the project is
              acceptable for the academic requirements, but it does not imply
              that the reviewers agree with or endorse all the content,
              statements, opinions, or conclusions expressed in the work. The
              project is acknowledged solely for meeting the criteria needed to
              fulfill the diploma requirements.
            </p>
            <p className="mt-4">
              This certification is provided by Digicoders Technologies Pvt.
              Ltd., confirming the project's adequacy for the intended academic
              purpose without endorsing the specific viewpoints or findings it
              contains.
            </p>
          </div>

          <div className="mt-32 flex justify-between">
            <div className="text-center">
              <div className="border-t border-black pt-2">
                (INTERNAL EXAMINER)
              </div>
            </div>

            <div className="text-center">
              <div className="border-t border-black pt-2">
                (EXTERNAL EXAMINER)
              </div>
            </div>
          </div>
        </div>

        {/* Declaration Page */}
        <div className="page break-before-page mb-10">
          <div className="text-center">
            <div className="font-bold text-lg ">
              DIGICODERS TECHNOLOGIES PVT. LTD.
            </div>
            <div className="font-bold uppercase mt-2">
              DEPARTMENT OF {studentData.collegeDetails?.branch || "COMPUTER SCIENCE & ENGINEERING"}
            </div>
            <div className="flex justify-center my-1">
              <img src="./img/digicoders_logo.jpg" alt="" />
            </div>
            <div className="mt-2 text-center">
              <div>SESSION-{studentData.collegeDetails?.session || "2025"}</div>
            </div>
            <h2 className="text-xl font-bold mb-6">DECLARATION</h2>
          </div>

          <div className="text-justify mb-10">
            <p>
              We, students of the Diploma in Computer Science & Engineering at{" "}
              <span className="font-bold">
                {studentData.collegeDetails?.collegeName || "DigiCoders Technologies Pvt. Ltd."}
              </span>
              . declare that the work presented in this Minor project is my
              original effort. It is authentic and accurate to the best of my
              knowledge. I have conducted this work in accordance with
              engineering ethics. This project does not infringe on any patented
              work and has not been submitted to any other university or
              institution for the award of any degree or diploma.
            </p>
          </div>

          <div className="mt-32 text-right">
            <span className="font-bold">
              {studentData.personalDetails?.name || "Student Name"}
            </span>
          </div>
        </div>

        {/* Acknowledgement Page */}
        <div className="page break-before-page mb-10">
          <div className="text-center">
            <div className="font-bold text-lg ">
              DIGICODERS TECHNOLOGIES PVT. LTD.
            </div>
            <div className="font-bold uppercase mt-2">
              DEPARTMENT OF {studentData.collegeDetails?.branch || "COMPUTER SCIENCE & ENGINEERING"}
            </div>
            <div className="flex justify-center my-1">
              <img src="./img/digicoders_logo.jpg" alt="" />
            </div>
            <h2 className="text-xl font-bold mb-6">ACKNOWLEDGEMENT</h2>
          </div>

          <div className="text-justify mb-10">
            <p>
              The success of this project is the result of systematic effort and
              the contributions of many individuals, including the invaluable
              support from <b>Digicoders Technologies Pvt. Ltd.</b> There were
              numerous challenges, including unexpected difficulties in error
              correction, some of which were beyond our control. At times, it
              felt like we were navigating without direction, like a rudderless
              boat. However, the timely guidance and support from key
              individuals helped us overcome these challenges.
            </p>
            <p className="mt-2">
              I am deeply grateful to <b> Er Himanshu Kashyap </b>, the Head of
              the Department of {studentData.collegeDetails?.branch || "Computer Science & Engineering"}, for his
              unwavering encouragement and valuable advice throughout the
              project. His insights were crucial at every stage. I also thank
              the other staff members of the department for their assistance and
              support, which played a vital role in the project's completion.
            </p>
            <p className="mt-2">
              Special thanks to <b> Er. Gopal Singh </b>, whose significant
              contributions, both direct and indirect, were invaluable to this
              endeavor. Your encouragement and support have been greatly
              appreciated.
            </p>
            <p className="mt-2">
              I would also like to extend my sincere thanks to{" "}
              <b> Digicoders Technologies Pvt. Ltd.</b> for their support and
              resources, which were instrumental in bringing this project to
              fruition. Their expertise and guidance were key factors in our
              success.
            </p>
          </div>

          <div className="mt-16 text-right">
            <div>{studentData.personalDetails?.name || "Student Name"}</div>
          </div>
        </div>

        {/* Index Page */}
        <div className="page break-before-page mb-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-10 underline ">INDEX</h2>
          </div>

          <div>
            <div className="mb-2 ">1. Introduction</div>
            <div className="ml-6 mb-1">
              1.1 Overview of the ${studentData.projectDetails.projectTitle}  Platform
            </div>
            <div className="ml-6 mb-1">1.2 Background of the Project</div>
            <div className="ml-6 mb-1">1.3 Objectives and Scope</div>
            <div className="ml-6 mb-1">1.4 Intended Audience</div>
            <div className="ml-6 mb-1">1.5 Problem Definition</div>

            <div className="mb-2 mt-3">2. Project Goals</div>
            <div className="ml-6 mb-1">2.1 Purpose and Benefits</div>
            <div className="ml-6 mb-1">2.2 Key Deliverables</div>

            <div className="mb-2 mt-3">3. System Analysis</div>
            <div className="ml-6 mb-1">3.1 Objectives</div>
            <div className="ml-6 mb-1">3.2 Agile Development Model Process</div>
            <div className="ml-10 mb-1">
              3.2.1 Project Inception and Planning
            </div>
            <div className="ml-10 mb-1">
              3.2.2 Requirements Gathering and Analysis
            </div>
            <div className="ml-10 mb-1">3.2.3 Iterative Development</div>
            <div className="ml-10 mb-1">3.2.4 Design and Prototyping</div>
            <div className="ml-10 mb-1">3.2.5 Development and Integration</div>
            <div className="ml-10 mb-1">
              3.2.6 Testing and Quality Assurance
            </div>
            <div className="ml-10 mb-1">3.2.7 Deployment and Release</div>
            <div className="ml-10 mb-1">3.2.8 Maintenance and Iteration</div>
            <div className="ml-6 mb-1">3.3 ER Diagram</div>
            <div className="ml-6 mb-1">3.4 Data Flow Diagram</div>

            <div className="mb-2 mt-3">4. Core Features</div>
            <div className="ml-6 mb-1">
              4.1 User Authentication
            </div>
            <div className="ml-6 mb-1">4.2 Book Management</div>
            <div className="ml-6 mb-1">
              4.3 Reading Experience
            </div>
            <div className="ml-6 mb-1">
              4.4 User Library
            </div>
            <div className="ml-6 mb-1">4.5 Admin Dashboard</div>

            <div className="mb-2 mt-3">5. Technology Stack</div>
            <div className="ml-6 mb-1">5.1 Frontend Technologies</div>
            <div className="ml-6 mb-1">5.2 Backend Technologies</div>
            <div className="ml-6 mb-1">5.3 Database Solutions</div>

            <div className="mb-2 mt-3">6. System Architecture</div>
            <div className="ml-6 mb-1">
              6.1 High-Level Architecture Overview
            </div>
            <div className="ml-6 mb-1">6.2 Key System Components</div>

            <div className="mb-2 mt-3">7. System Design Methodology</div>
            <div className="ml-6 mb-1">7.1 Top-Down Design</div>
            <div className="ml-6 mb-1">7.2 Bottom-Up Design</div>
            <div className="ml-6 mb-1">7.3 Modular Design Approach</div>

            <div className="mb-2 mt-3">8. Backend Design</div>
            <div className="ml-6 mb-1">
              8.1 Main Models (User, Book, Category, Review)
            </div>
            <div className="ml-6 mb-1">8.2 API Routes and Controllers</div>

            <div className="mb-2 mt-3">9. Data Modeling</div>
            <div className="ml-6 mb-1">9.1 Database Schema Overview</div>
            <div className="ml-6 mb-1">9.2 List of Collections</div>

            <div className="mb-2 mt-3">10. Development Plan</div>
            <div className="ml-6 mb-1">10.1 Phases of Development</div>
            <div className="ml-6 mb-1">10.2 Timeline and Milestones</div>

            <div className="mb-2 mt-3">11. Testing and Quality Assurance</div>
            <div className="ml-6 mb-1">11.1 Testing Strategies</div>
            <div className="ml-6 mb-1">11.2 Testing Methodologies</div>
            <div className="ml-6 mb-1">11.3 User Acceptance Testing</div>

            <div className="mb-2 mt-3">12. User Experience and Interface</div>
            <div className="ml-6 mb-1">12.1 Design Principles</div>
            <div className="ml-6 mb-1">12.2 User Interface Screenshots</div>

            <div className="mb-2 mt-3">13. Conclusion</div>
            <div className="ml-6 mb-1">
              13.1 Summary of Project Achievements
            </div>
            <div className="ml-6 mb-1">13.2 Future Work and Enhancements</div>
          </div>
        </div>

        {/* Introduction Page */}
        <div className="page break-before-page mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center underline">
            1. Introduction
          </h2>
          <h3 className="text-lg font-bold mb-2">{content.introduction.split("**")[3]}</h3>
          <p className="text-justify">{content.introduction.split("**")[4]} </p>
          <h3 className="text-lg font-bold mb-2">{content.introduction.split("**")[5]}</h3>
          <p className="text-justify">{content.introduction.split("**")[6]} </p>
          <h3 className="text-lg font-bold mb-2">{content.introduction.split("**")[7]}</h3>
          <p className="text-justify">{content.introduction.split("**")[8]} </p>
          <h3 className="text-lg font-bold mb-2">{content.introduction.split("**")[9]}</h3>
          <p className="text-justify">{content.introduction.split("**")[10]} </p>
          <h3 className="text-lg font-bold mb-2">{content.introduction.split("**")[11]}</h3>
          <p className="text-justify">{content.introduction.split("**")[12]} </p>
        </div>

        {/* Project Goals Page */}
        <div className="page break-before-page mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center underline">
            2. Project Goals
          </h2>
          {/* <div dangerouslySetInnerHTML={{ __html: content.projectGoals }} /> */}
          <p className="text-justify">{content.projectGoals.split("**")[2]} </p>
          <h3 className="text-lg font-bold mb-2">{content.projectGoals.split("**")[3]}</h3>
          <p className="text-justify">{content.projectGoals.split("**")[4]} </p>
          <h3 className="text-lg font-bold mb-2">{content.projectGoals.split("**")[5]}</h3>
          <h3 className="text-lg font-bold mb-2">{content.projectGoals.split("**")[7]}</h3>
          <p className="text-justify">{content.projectGoals.split("**")[8]} </p>
          <h3 className="text-lg font-bold mb-2">{content.projectGoals.split("**")[9]}</h3>
          <p className="text-justify">{content.projectGoals.split("**")[10]} </p>
          <h3 className="text-lg font-bold mb-2">{content.projectGoals.split("**")[11]}</h3>
          <p className="text-justify">{content.projectGoals.split("**")[12]} </p>
          {/* <ul className=" list-disc pl-10">
            <li>{content.projectGoals.split("**")[6]?.split('*')[1]}  </li>
            <li>{content.projectGoals.split("**")[6]?.split('*')[2]}  </li>
            <li>{content.projectGoals.split("**")[6]?.split('*')[3]}  </li>
            <li>{content.projectGoals.split("**")[6]?.split('*')[4]}  </li>
            <li>{content.projectGoals.split("**")[6]?.split('*')[5]}  </li>
          </ul> */}
        </div>

        {/* System Analysis Page */}
        <div className="page break-before-page mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center underline">
            3. System Analysis
          </h2>
          {/* <div dangerouslySetInnerHTML={{ __html: content.systemAnalysis }} /> */}
          <p className="text-justify">{content.systemAnalysis.split("**")[2]} </p>
            <h3 className="text-lg font-bold mb-2">{content.systemAnalysis.split("**")[3]}</h3>
          <p className="text-justify">{content.systemAnalysis.split("**")[4]} </p>
            <h3 className="text-lg font-bold mb-2">{content.systemAnalysis.split("**")[5]}</h3>
          <p className="text-justify">{content.systemAnalysis.split("**")[6]} </p>
          {studentData.projectAssets?.erDiagram && (
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">3.3 ER Diagram</h3>
              <img
                src={studentData.projectAssets.erDiagram}
                className="max-h-96"
                alt="ER Diagram"
              />
            </div>
          )}
          
          {studentData.projectAssets?.dfdDiagram && (
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">3.4 Data Flow Diagram</h3>
              <img
                src={studentData.projectAssets.dfdDiagram}
                className="max-h-96"
                alt="Data Flow Diagram"
              />
            </div>
          )}
        </div>

        {/* Core Features Page */}
        <div className="page break-before-page mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center underline">
            4. Core Features
          </h2>

          <h3 className="text-lg font-bold mb-2">{content.coreFeatures.split("**")[1]}</h3>
          <p className="text-justify">{content.coreFeatures.split("**")[2]} </p>
          <h3 className="text-lg font-bold mb-2">{content.coreFeatures.split("**")[3]}</h3>
          <p className="text-justify">{content.coreFeatures.split("**")[4]} </p>
          <h3 className="text-lg font-bold mb-2">{content.coreFeatures.split("**")[5]}</h3>
          <p className="text-justify">{content.coreFeatures.split("**")[6]} </p>
          <h3 className="text-lg font-bold mb-2">{content.coreFeatures.split("**")[7]}</h3>
          <p className="text-justify">{content.coreFeatures.split("**")[8]} </p>
          <h3 className="text-lg font-bold mb-2">{content.coreFeatures.split("**")[9]}</h3>
          <p className="text-justify">{content.coreFeatures.split("**")[10]} </p>
        </div>


        {/* Technology Stack Page */}
        <div className="page break-before-page mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center underline">5. Technology Stack</h2>

          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">
              5.1 Frontend Technologies
            </h3>
            <ul className="list-disc ml-6">
              {/* <li>HTML5, CSS3, JavaScript, Bootstrap</li> */}
              <li>{studentData.projectDetails.frontendTechnology}</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">5.2 Backend Technologies</h3>
            <ul className="list-disc ml-6">
              <li>{studentData.projectDetails.backendTechnology}</li>
             
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">5.3 Database Solutions</h3>
            <ul className="list-disc ml-6">
              <li>{studentData.projectDetails.database}</li>
            </ul>
          </div>
        </div>


        {/* System Architecture Page */}
        <div className="page break-before-page mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center underline">
            6. System Architecture
          </h2>

          <h3 className="text-lg font-bold mb-2">{content.systemArchitecture.split("**")[1]}</h3>
          <p className="text-justify">{content.systemArchitecture.split("**")[2]} </p>
          <h3 className="text-lg font-bold mb-2">{content.systemArchitecture.split("**")[3]}</h3>
          <p className="text-justify">{content.systemArchitecture.split("**")[4]} </p>
          <h4 className="text-lg font-bold mb-2">{content.systemArchitecture.split("**")[5]}</h4>
          <p className="text-justify">{content.systemArchitecture.split("**")[6]} </p>
          <h4 className="text-lg font-bold mb-2">{content.systemArchitecture.split("**")[7]}</h4>
          <p className="text-justify">{content.systemArchitecture.split("**")[8]} </p>
          <h4 className="text-lg font-bold mb-2">{content.systemArchitecture.split("**")[9]}</h4>
          <p className="text-justify">{content.systemArchitecture.split("**")[10]} </p>
          <h4 className="text-lg font-bold mb-2">{content.systemArchitecture.split("**")[11]}</h4>
          {/* <p className="text-justify">{content.systemArchitecture.split("**")[12]} </p> */}
          <h4 className="text-lg font-bold mb-2">{content.systemArchitecture.split("**")[13]}</h4>
          <p className="text-justify">{content.systemArchitecture.split("**")[14]} </p>
          <h4 className="text-lg font-bold mb-2">{content.systemArchitecture.split("**")[15]}</h4>
          <p className="text-justify">{content.systemArchitecture.split("**")[16]} </p>
          <h4 className="text-lg font-bold mb-2">{content.systemArchitecture.split("**")[17]}</h4>
          <p className="text-justify">{content.systemArchitecture.split("**")[18]} </p>

        </div>

        {/* System Design Methodology Page */}
        <div className="page break-before-page mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center underline">
            7. System Design Methodology
          </h2>
          {/* <div dangerouslySetInnerHTML={{ __html: content.systemDesign }} /> */}
           <h3 className="text-lg font-bold mb-2">{content.systemDesign.split("**")[1]}</h3>
          <p className="text-justify">{content.systemDesign.split("**")[2]} </p>
           <h3 className="text-lg font-bold mb-2">{content.systemDesign.split("**")[3]}</h3>
          <p className="text-justify">{content.systemDesign.split("**")[4]} </p>
           <h3 className="text-lg font-bold mb-2">{content.systemDesign.split("**")[5]}</h3>
          <p className="text-justify">{content.systemDesign.split("**")[6]} </p>
        </div>

        {/* Backend Design Page */}
        <div className="page break-before-page mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center underline">
            8. Backend Design
          </h2>
          {/* <div dangerouslySetInnerHTML={{ __html: content.backendDesign }} /> */}
          <h3 className="text-lg font-bold mb-2">{content.backendDesign.split("**")[1]}</h3>
           <p className="text-justify">{content.backendDesign.split("**")[2]} </p>
          <h3 className="text-lg font-bold mb-2">{content.backendDesign.split("**")[3]}</h3>
          <p className="text-justify">{content.backendDesign.split("**")[4]} </p>
          <h4 className="text-lg font-bold mb-2">{content.backendDesign.split("**")[5]}</h4>
          <p className="text-justify">{content.backendDesign.split("**")[6]} </p>
          <h4 className="text-lg font-bold mb-2">{content.backendDesign.split("**")[7]}</h4>
          <p className="text-justify">{content.backendDesign.split("**")[8]} </p>
          <h4 className="text-lg font-bold mb-2">{content.backendDesign.split("**")[9]}</h4>
          <p className="text-justify">{content.backendDesign.split("**")[10]} </p>

        </div>

        {/* Data Modeling Page */}
        <div className="page break-before-page mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center underline">
            9. Data Modeling
          </h2>
          {/* <div dangerouslySetInnerHTML={{ __html: content.dataModeling }} /> */}
           <h3 className="text-lg font-bold mb-2">{content.dataModeling.split("**")[1]}</h3>
          <p className="text-justify">{content.dataModeling.split("**")[2]} </p>
           <h3 className="text-lg font-bold mb-2">{content.dataModeling.split("**")[3]}</h3>
           <h4 className="text-lg font-bold mb-2">{content.dataModeling.split("**")[5]}</h4>
          <p className="text-justify">{content.dataModeling.split("**")[6]} </p>
           <h4 className="text-lg font-bold mb-2">{content.dataModeling.split("**")[7]}</h4>
          <p className="text-justify">{content.dataModeling.split("**")[8]} </p>
           <h4 className="text-lg font-bold mb-2">{content.dataModeling.split("**")[9]}</h4>
          <p className="text-justify">{content.dataModeling.split("**")[10]} </p>
           <h4 className="text-lg font-bold mb-2">{content.dataModeling.split("**")[11]}</h4>
          <p className="text-justify">{content.dataModeling.split("**")[12]} </p>
        </div>

         {/* 10. Development Plan Page */}
        <div className="page break-before-page mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center underline">
          10. Development Plan
          </h2>

          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">10.1 Phases of Development</h3>
            
            <ul className="pl-10 ">
            <li>Planning and Analysis</li>
            <li>Design</li>
            <li>Development</li>
            <li>Testing</li>
            <li>Deployment</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">10.2 Timeline and Milestones</h3>
            <ul className="pl-10">
            <li>Week 1-2: Requirements & Design</li>
            <li>Week 3-5: Development</li>
            <li>Week 6: Testing</li>
            <li>Week 7: Deployment & Documentation</li>
            </ul>
          </div>
        </div>

         {/* 11. Testing and Quality Assurance Page */}
         <div className=" mb-10">
           <h2 className="text-2xl font-bold mb-6 text-center underline">
          11. Testing and Quality Assurance
           </h2>

           <div className="mb-4">
             <h3 className="text-lg font-bold mb-2">11.1 Testing Strategies</h3>
            
             <li>Unit Testing with {studentData.projectDetails.backendTechnology} TestCase</li>
             <li>Integration Testing</li>
           </div>

           <div className="mb-4">
             <h3 className="text-lg font-bold mb-2">11.2 Testing Methodologies</h3>
             
             <li>Manual Testing</li>
            <li>Automated Testing Scripts</li>
           
           </div>
          <div className="mb-4">
             <h3 className="text-lg font-bold mb-2">11.3 User Acceptance Testing</h3>
             <p className="text-justify"> Feedback gathered from a sample audience</p>
            
           
           </div>
      </div>
        {/* User Experience and Interface Page */}
        <div className="page break-before-page mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center underline">
            12. User Experience and Interface
          </h2>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">12.1 Design Principles</h3>
            <ul className="list-disc ml-6">
              <li>Simplicity and Accessibility</li>
              <li>Mobile-first responsive design</li>
              <li>Intuitive navigation</li>
              <li>Consistent design language</li>
            </ul>
          </div>

          {studentData.projectAssets?.projectCode && studentData.projectAssets.projectCode.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">12.2 Code Screenshots</h3>
              {studentData.projectAssets.projectCode.map((code, i) => (
                <img key={i} src={code} className="mb-2 border" alt={`Code screenshot ${i + 1}`} />
              ))}
            </div>
          )}

          {studentData.projectAssets?.uiScreenshots && studentData.projectAssets.uiScreenshots.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">12.3 User Interface Screenshots</h3>
              {studentData.projectAssets.uiScreenshots.map((ui, i) => (
                <img key={i} src={ui} className="mb-2 border" alt={`UI screenshot ${i + 1}`} />
              ))}
            </div>
          )}
        </div>

        {/* Conclusion Page */}
        <div className="page break-before-page mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center underline">
            13. Conclusion
          </h2>

           <h3 className="text-lg font-bold mb-2">{content.conclusion.split("**")[1]}</h3>
          <p className="text-justify">{content.conclusion.split("**")[2]} </p>
          <h3 className="text-lg font-bold mb-2">{content.conclusion.split("**")[3]}</h3>
          <p className="text-justify">{content.conclusion.split("**")[4]} </p>
        </div>
      </div>
    </div>
  );
}

export default PdfPreview;






