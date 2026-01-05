import React, { useState } from "react";
import Card from "./Card";
import "./Dashboard.css";

/* ===================== REACT TASKS ===================== */
import Task1 from "../react/Task1/Props";
import Task2 from "../react/Task2/Counter";
import Task3 from "../react/Task3/Control";
import Task4 from "../react/Task4/Fetch";
import Task5 from "../react/Task5/Todo";
import Task6 from "../react/Task6/Mainpage";
import Task7 from "../react/Task7/PDA";
import Task8 from "../react/Task8/Dashboard";

/* ===================== JAVASCRIPT TASKS ===================== */
import FormValidation from "../JS Folder/Task3/FormValidation";
import DOMExample from "../JS Folder/Task2/DOMExamples";
import Users from "../JS Folder/Task4/Users";
import Data from "../JS Folder/Task5/Data";
import Weather from "../JS Folder/Task6/Weather";

/* ===================== FINAL REACT PROJECTS ===================== */
import Mainpage from "../Final Projects/Task4/Mainpage";
import StudentManagement from "../Final Projects/Task2/StudentManagement";
import Portfolio from "../HTML/Task1/Portfolio";

const Dashboard = () => {
  const [level, setLevel] = useState("main");
  const [category, setCategory] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  /* ---------- REACT TASK LIST ---------- */
  const reactTasks = [
    { id: 1, name: "Props", component: <Task1 /> },
    { id: 2, name: "Counter", component: <Task2 /> },
    { id: 3, name: "Controlled Input", component: <Task3 /> },
    { id: 4, name: "Fetch API", component: <Task4 /> },
    { id: 5, name: "Todo App", component: <Task5 /> },
    { id: 6, name: "Routing", component: <Task6 /> },
    { id: 7, name: "PDA", component: <Task7 /> },
    { id: 8, name: "Product Dashboard", component: <Task8 /> },
  ];

  /* ---------- JAVASCRIPT TASK LIST ---------- */
  const jsTasks = [
    { id: 1, name: "DOM Example", component: <DOMExample /> },
    { id: 2, name: "Users", component: <Users /> },
    { id: 3, name: "Data Handling", component: <Data /> },
    { id: 4, name: "Weather App", component: <Weather /> },
    { id: 5, name: "Form Validation", component: <FormValidation /> },
  ];

  /* ---------- HTML TASK LIST ---------- */
  const htmlTasks = [
    { id: 1, name: "PortFolio", component: <Portfolio/> },
    { id: 2, name: "Forms", component: <div>HTML Forms</div> },
    { id: 3, name: "Tables", component: <div>HTML Tables</div> },
  ];

  /* ---------- CSS TASK LIST ---------- */
  const cssTasks = [
    { id: 1, name: "Flexbox", component: <div>CSS Flexbox</div> },
    { id: 2, name: "Grid", component: <div>CSS Grid</div> },
    { id: 3, name: "Responsive Design", component: <div>CSS Responsive</div> },
  ];

  /* ---------- FINAL REACT PROJECT LIST ---------- */
  const finalReactTasks = [
    { id: 1, name: "Student Management", component: <StudentManagement /> },
    { id: 2, name: "Main Page Project", component: <Mainpage /> },
  ];

  /* ---------- CURRENT TASK SELECTOR ---------- */
  const currentTasks =
    category === "react"
      ? reactTasks
      : category === "js"
      ? jsTasks
      : category === "html"
      ? htmlTasks
      : category === "css"
      ? cssTasks
      : finalReactTasks;

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      {/* ===================== LEVEL 1 ===================== */}
      {level === "main" && (
        <div className="dashboard-card-grid">
          <Card
            title="React"
            onClick={() => {
              setCategory("react");
              setLevel("tasks");
            }}
          />

          <Card
            title="JavaScript"
            onClick={() => {
              setCategory("js");
              setLevel("tasks");
            }}
          />

          <Card
            title="HTML"
            onClick={() => {
              setCategory("html");
              setLevel("tasks");
            }}
          />

          <Card
            title="CSS"
            onClick={() => {
              setCategory("css");
              setLevel("tasks");
            }}
          />

          <Card
            title="Final React Tasks"
            onClick={() => {
              setCategory("final");
              setLevel("tasks");
            }}
          />
        </div>
      )}

      {/* ===================== LEVEL 2 ===================== */}
      {level === "tasks" && (
        <>
          <button
            className="dashboard-back-btn"
            onClick={() => setLevel("main")}
          >
            ⬅ Back
          </button>

          <h2 className="dashboard-subtitle">
            {category === "react"
              ? "React Tasks"
              : category === "js"
              ? "JavaScript Tasks"
              : category === "html"
              ? "HTML Tasks"
              : category === "css"
              ? "CSS Tasks"
              : "Final React Projects"}
          </h2>

          <div className="dashboard-card-grid">
            {currentTasks.map((task) => (
              <Card
                key={task.id}
                title={task.name}
                onClick={() => {
                  setSelectedTask(task.id);
                  setLevel("output");
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* ===================== LEVEL 3 ===================== */}
      {level === "output" && (
        <>
          <button
            className="dashboard-back-btn"
            onClick={() => setLevel("tasks")}
          >
            ⬅ Back
          </button>

          <h2 className="dashboard-subtitle">Task Output</h2>

          <div className="dashboard-output">
            {currentTasks.find((t) => t.id === selectedTask)?.component}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
