import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalDetails: {
      name: "",
      Number:"",
      enrollmentNumber: "",
      contactEmail: "",
    },
    collegeDetails: {
      collegeName: "",
      TeacherName:"",
      branch: "",
      session: "",
    },
    projectDetails: {
      projectTitle: "",
      projectName:"",
      TrainingType:"",
      backendTechnology: "",
      frontendTechnology: "",
      database: "",
      TeamName:"",
      StartDate:"",
      EndDate:"",
    },
    projectAssets: {
      projectCode: [],
      dfdDiagram: "",
      erDiagram: "",
      uiScreenshots: [],
    },
  });
  const [projectId, setProjectId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // List of branches for dropdown
  const branches = [
    "Computer Science",
    "Information Technology",
    "Electronics & Communication",
    "Electrical Engineering",
    "Other",
  ];

  const Training = [
    "Summer Training",
    "Vocational Training",
    "Winter Training",
    "Industrial Training",
    "Apprenticeship Training",
    "Internship Training",
    "Project Training",
    "Syllabus Training",
    "Faculty Training",
  ];
  // List of technologies for dropdown
  const technologies = {
    backend: [
      "Node.js",
      "Python/Django",
      "Java/Spring",
      "PHP/Laravel",
      "Ruby on Rails",
      ".NET Core",
      "Other",
    ],
    frontend: [
      "React",
      "Angular",
      "Vue.js",
      "Next.js",
      "HTML/CSS/JS",
      "React Native",
      "Flutter",
      "Other",
    ],
    database: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Oracle",
      "SQL Server",
      "Firebase",
      "Other",
    ],
  };

  useEffect(() => {
    // Check if there's a saved project in localStorage
    const savedProject = localStorage.getItem("currentProject");
    if (savedProject) {
      const parsedProject = JSON.parse(savedProject);
      setFormData(parsedProject.data);
      setProjectId(parsedProject.id);

      // Determine which step to show based on completed sections
      if (!parsedProject.data.personalDetails.name) {
        setStep(1);
      } else if (!parsedProject.data.collegeDetails.collegeName) {
        setStep(2);
      } else if (!parsedProject.data.projectDetails.projectTitle) {
        setStep(3);
      } else if (!parsedProject.data.projectAssets.erDiagram) {
        setStep(4);
      } else {
        setStep(5);
      }
    }
  }, []);

  const handleChange = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value,
      },
    });
  };

  const handleFileChange = (section, field, files) => {
    // For file uploads
    if (field === "uiScreenshots") {
      // Handle multiple files
      const fileArray = Array.from(files);
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [field]: [...(formData[section][field] || []), ...fileArray],
        },
      });
    } else if (field === "projectCode") {
      // Handle multiple files
      const fileArray = Array.from(files);
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [field]: [...(formData[section][field] || []), ...fileArray],
        },
      });
    } else {
      // Handle single file
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [field]: files[0],
        },
      });
    }
  };

  const saveAndContinue = async (currentStep) => {
    setIsLoading(true);
    try {
      let response;

      if (currentStep === 1) {
        // First step - create new project
        response = await axios.post(
          "http://localhost:3000/api/projects",
          formData
        );
        setProjectId(response.data._id);
        localStorage.setItem(
          "currentProject",
          JSON.stringify({
            id: response.data._id,
            data: response.data,
          })
        );
      } else {
        // Subsequent steps - update existing project
        response = await axios.put(
          `http://localhost:3000/api/projects/${projectId}`,
          formData
        );
        localStorage.setItem(
          "currentProject",
          JSON.stringify({
            id: projectId,
            data: response.data,
          })
        );
      }

      setStep(currentStep + 1);
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const sendData = new FormData();
      sendData.append("dfdDiagram", formData.projectAssets.dfdDiagram);
      sendData.append("erDiagram", formData.projectAssets.erDiagram);
      formData.projectAssets.projectCode.forEach((file) =>
        sendData.append("projectCode", file)
      ),
        formData.projectAssets.uiScreenshots.forEach((file) =>
          sendData.append("uiScreenshots", file)
        );

      const response = await axios.post(
        `http://localhost:3000/api/projects/${projectId}`,
        sendData
      );
      console.log("Final submission:", response);
      localStorage.removeItem("currentProject");
      setStep(5);
    } catch (error) {
      console.error("Error submitting project:", error);
      alert("Failed to submit project. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      personalDetails: {
        name: "",
        enrollmentNumber: "",
        contactEmail: "",
      },
      collegeDetails: {
        collegeName: "",
        branch: "",
        session: "",
      },
      projectDetails: {
        projectTitle: "",
        backendTechnology: "",
        frontendTechnology: "",
        database: "",
      },
      projectAssets: {
        projectCode: [],
        dfdDiagram: "",
        erDiagram: "",
        uiScreenshots: [],
      },
    });
    setProjectId(null);
    setStep(1);
  };

  const ProgressBar = () => {
    return (
      <div className="w-full mb-8">
        <div className="flex justify-between mb-2">
          {[
            "Personal Details",
            "College Info",
            "Project Details",
            "Project Assets",
          ].map((label, i) => (
            <div
              key={i}
              className={`flex flex-col items-center ${
                i < step ? "text-blue-600" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full mb-1
                  ${
                    i + 1 === step
                      ? "bg-blue-600 text-white"
                      : i + 1 < step
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
              >
                {i + 1 < step ? (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span className="text-xs md:text-sm">{label}</span>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Personal Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.personalDetails.name}
                  onChange={(e) =>
                    handleChange("personalDetails", "name", e.target.value)
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number
                </label>
                <input
                  type="Number"
                  value={formData.personalDetails.Number}
                  onChange={(e) =>
                    handleChange("personalDetails", "Number", e.target.value)
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enrollment Number
                </label>
                <input
                  type="text"
                  value={formData.personalDetails.enrollmentNumber}
                  onChange={(e) =>
                    handleChange(
                      "personalDetails",
                      "enrollmentNumber",
                      e.target.value
                    )
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your enrollment number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Email
                </label>
                <input
                  type="email"
                  value={formData.personalDetails.contactEmail}
                  onChange={(e) =>
                    handleChange(
                      "personalDetails",
                      "contactEmail",
                      e.target.value
                    )
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => saveAndContinue(1)}
                disabled={
                  !formData.personalDetails.name ||
                  !formData.personalDetails.enrollmentNumber ||
                  !formData.personalDetails.contactEmail ||
                  isLoading
                }
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Saving..." : "Next Step"}
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              College Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  College Name
                </label>
                <input
                  type="text"
                  value={formData.collegeDetails.collegeName}
                  onChange={(e) =>
                    handleChange(
                      "collegeDetails",
                      "collegeName",
                      e.target.value
                    )
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your college name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teacher Name - College
                </label>
                <input
                  type="text"
                  value={formData.collegeDetails.TeacherName}
                  onChange={(e) =>
                    handleChange(
                      "collegeDetails",
                      "TeacherName",
                      e.target.value
                    )
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your college name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Branch
                </label>
                <select
                  value={formData.collegeDetails.branch}
                  onChange={(e) =>
                    handleChange("collegeDetails", "branch", e.target.value)
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                >
                  <option value="">Select your branch</option>
                  {branches.map((branch, index) => (
                    <option key={index} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Academic Session
                </label>
                <input
                  type="text"
                  value={formData.collegeDetails.session}
                  onChange={(e) =>
                    handleChange("collegeDetails", "session", e.target.value)
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="E.g., 2023-2024"
                  required
                />
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <button
                onClick={prevStep}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-200"
              >
                Previous
              </button>
              <button
                onClick={() => saveAndContinue(2)}
                disabled={
                  !formData.collegeDetails.collegeName ||
                  !formData.collegeDetails.branch ||
                  !formData.collegeDetails.session ||
                  isLoading
                }
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Saving..." : "Next Step"}
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Project Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  value={formData.projectDetails.projectTitle}
                  onChange={(e) =>
                    handleChange(
                      "projectDetails",
                      "projectTitle",
                      e.target.value
                    )
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your project title"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Name
                </label>
                <input
                  type="text"
                  value={formData.projectDetails.projectName}
                  onChange={(e) =>
                    handleChange(
                      "projectDetails",
                      "projectName",
                      e.target.value
                    )
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your project title"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Backend Technology
                </label>
                <select
                  value={formData.projectDetails.backendTechnology}
                  onChange={(e) =>
                    handleChange(
                      "projectDetails",
                      "backendTechnology",
                      e.target.value
                    )
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                >
                  <option value="">Select backend technology</option>
                  {technologies.backend.map((tech, index) => (
                    <option key={index} value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Frontend Technology
                </label>
                <select
                  value={formData.projectDetails.frontendTechnology}
                  onChange={(e) =>
                    handleChange(
                      "projectDetails",
                      "frontendTechnology",
                      e.target.value
                    )
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                >
                  <option value="">Select frontend technology</option>
                  {technologies.frontend.map((tech, index) => (
                    <option key={index} value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Database
                </label>
                <select
                  value={formData.projectDetails.database}
                  onChange={(e) =>
                    handleChange("projectDetails", "database", e.target.value)
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                >
                  <option value="">Select database</option>
                  {technologies.database.map((db, index) => (
                    <option key={index} value={db}>
                      {db}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Training Type
                </label>
                <select
                  value={formData.projectDetails.TrainingType}
                  onChange={(e) =>
                    handleChange(
                      "projectDetails",
                      "TrainingType",
                      e.target.value
                    )
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                >
                  <option value="">Select Training Type</option>
                  {Training.map((db, index) => (
                    <option key={index} value={db}>
                      {db}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Team Name
                </label>
                <input
                  type="text"
                  value={formData.projectDetails.TeamName}
                  onChange={(e) =>
                    handleChange("projectDetails", "TeamName", e.target.value)
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your project title"
                  required
                />
              </div>
              <div className=" lg:flex items-center justify-between">
                <div className="lg:mt-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Certificate - Start Date
                  </label>
                  <input
                    type="date"
                    value={formData.projectDetails.StartDate}
                    onChange={(e) =>
                      handleChange("projectDetails", "StartDate", e.target.value)
                    }
                    className="min-w-72 md:w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Enter your project title"
                    required
                  />
                </div>
                <div className="lg:mt-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Certificate - End Date
                  </label>
                  <input
                    type="date"
                    value={formData.projectDetails.EndDate}
                    onChange={(e) =>
                      handleChange("projectDetails", "EndDate", e.target.value)
                    }
                    className="min-w-72 md:w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Enter your project title"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <button
                onClick={prevStep}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-200"
              >
                Previous
              </button>
              <button
                onClick={() => saveAndContinue(3)}
                disabled={
                  !formData.projectDetails.projectTitle ||
                  !formData.projectDetails.backendTechnology ||
                  !formData.projectDetails.frontendTechnology ||
                  !formData.projectDetails.database ||
                  isLoading
                }
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Saving..." : "Next Step"}
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Project Assets
            </h2>
            <div className="space-y-4">
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Code Repository Link</label>
                <input
                  type="text"
                  value={formData.projectAssets.projectCode}
                  onChange={(e) => handleChange("projectAssets", "projectCode", e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="GitHub or GitLab repository URL"
                />
              </div> */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Code ScreenShort
                </label>
                <label
                  htmlFor="projectCode"
                  className="cursor-pointer bg-white rounded-md font-medium "
                >
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M24 8l8 8h-4v8h-8v-8h-4l8-8z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 28v8a4 4 0 004 4h32a4 4 0 004-4v-8"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                       <span className="text-blue-500">Upload images</span>
                        <input
                          id="projectCode"
                          name="projectCode"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          multiple
                          onChange={(e) =>
                            handleFileChange(
                              "projectAssets",
                              "projectCode",
                              e.target.files
                            )
                          }
                        />

                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">8-10 screenshots</p>
                    </div>
                  </div>
                </label>
                {formData.projectAssets.projectCode &&
                  formData.projectAssets.projectCode.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm text-green-600">
                        {formData.projectAssets.projectCode.length} file(s)
                        selected
                      </p>
                    </div>
                  )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  UI Screenshots
                </label>
                 <label
                        htmlFor="ui-screenshots"
                        className="cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M24 8l8 8h-4v8h-8v-8h-4l8-8z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 28v8a4 4 0 004 4h32a4 4 0 004-4v-8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                     
                        <span className="text-blue-500">Upload images</span>
                        <input
                          id="ui-screenshots"
                          name="ui-screenshots"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          multiple
                          onChange={(e) =>
                            handleFileChange(
                              "projectAssets",
                              "uiScreenshots",
                              e.target.files
                            )
                          }
                        />

                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">8-10 screenshots</p>
                  </div>
                </div>
                </label>
                {formData.projectAssets.uiScreenshots &&
                  formData.projectAssets.uiScreenshots.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm text-green-600">
                        {formData.projectAssets.uiScreenshots.length} file(s)
                        selected
                      </p>
                    </div>
                  )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  DFD Diagram (Data Flow Diagram)
                </label>
                 <label
                        htmlFor="dfd-diagram"
                        className="cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                     
                     <span className="text-blue-500">Upload diagram</span>
                        <input
                          id="dfd-diagram"
                          name="dfd-diagram"
                          type="file"
                          className="sr-only"
                          accept="image/*, application/pdf"
                          onChange={(e) =>
                            handleFileChange(
                              "projectAssets",
                              "dfdDiagram",
                              e.target.files
                            )
                          }
                        />

                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, PDF up to 10MB
                    </p>
                  </div>
                </div>
                </label>
                {formData.projectAssets.dfdDiagram && (
                  <div className="mt-2">
                    <p className="text-sm text-green-600">
                      File selected: {formData.projectAssets.dfdDiagram.name}
                    </p>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ER Diagram (Entity Relationship)
                </label>
                 <label
                        htmlFor="er-diagram"
                        className="cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                     <span className="text-blue-500">Upload diagram</span>
                        <input
                          id="er-diagram"
                          name="er-diagram"
                          type="file"
                          className="sr-only"
                          accept="image/*, application/pdf"
                          onChange={(e) =>
                            handleFileChange(
                              "projectAssets",
                              "erDiagram",
                              e.target.files
                            )
                          }
                        />

                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, PDF up to 10MB
                    </p>
                  </div>
                </div>
                </label>
                {formData.projectAssets.erDiagram && (
                  <div className="mt-2">
                    <p className="text-sm text-green-600">
                      File selected: {formData.projectAssets.erDiagram.name}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <button
                onClick={prevStep}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-200"
              >
                Previous
              </button>
              <button
                onClick={handleSubmit}
                disabled={
                  !formData.projectAssets.erDiagram ||
                  !formData.projectAssets.dfdDiagram ||
                  isLoading
                }
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Submitting..." : "Submit Project"}
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="text-center py-12 animate-fadeIn">
            <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Project Successfully Submitted!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for submitting your project details. We'll review your
              submission and get back to you soon.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-left mx-auto max-w-lg">
              <h3 className="font-bold text-gray-700 mb-2">
                Submission Summary
              </h3>
              <p>
                <span className="font-medium">Name:</span>{" "}
                {formData.personalDetails.name}
              </p>
              <p>
                <span className="font-medium">Project:</span>{" "}
                {formData.projectDetails.projectTitle}
              </p>
              <p>
                <span className="font-medium">Technologies:</span>{" "}
                {formData.projectDetails.frontendTechnology},{" "}
                {formData.projectDetails.backendTechnology},{" "}
                {formData.projectDetails.database}
              </p>
            </div>
            <button
              onClick={resetForm}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Submit Another Project
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Student Project Registration
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Please fill out the details about your academic project
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          {step <= 4 && <ProgressBar />}
          <form className="space-y-6">{renderStep()}</form>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Need help? Contact Digicoders administrator</p>
        </div>
      </div>
    </div>
  );
}
