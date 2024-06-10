import * as React from "react";
import "./Tasks.scss";
import Coding from "../../assets/categoryImages/Coding.svg";
import Task from "../../assets/categoryImages/Task.svg";
import Study from "../../assets/categoryImages/Study.svg";
import Sports from "../../assets/categoryImages/Sports.svg";
import Homework from "../../assets/categoryImages/Homework.svg";
import Entertainment from "../../assets/categoryImages/Entertainment.svg";
import Finance from "../../assets/categoryImages/Finance.svg";
import Health from "../../assets/categoryImages/Health.svg";
import Home from "../../assets/categoryImages/Home.svg";
import Nutrition from "../../assets/categoryImages/Nutrition.svg";
import Social from "../../assets/categoryImages/Social.svg";
import Art from "../../assets/categoryImages/Art.svg";
import Edit from "../../assets/categoryImages/Edit.svg";
import Add from "../../assets/categoryImages/Add.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "../../assets/categoryImages/calendar.svg";
import Clock from "../../assets/categoryImages/clock.svg";
import {toast} from "react-toastify"
//

// import { useEffect } from "react";

export interface TasksProps {}

export default function Tasks(props: TasksProps) {
  const categoryImages = {
    Coding: Coding,
    Task: Task,
    Study: Study,
    Sports: Sports,
    Entertainment: Entertainment,
    Finance: Finance,
    Health: Health,
    Home: Home,
    Nutrition: Nutrition,
    Social: Social,
    Art: Art,
  };
  const data = {
    getTasks: [
      {
        id: 1,
        category: "Study",
        taskTitle: "Complete math homework",
      },
      {
        id: 2,
        category: "Sports",
        taskTitle: "Morning jog",
      },
    ],
  };
  return (
    <div className="taskPage">
      <div className="router-box-wrapper">
        <div className="router-box">
          <a className="router-box-a">
            My Day
          </a>
          <a className="router-box-a" >
            Tasks
          </a>
          <a className="router-box-a">
            Tasks Completed
          </a>
        </div>
      </div>
      <div className="task-container">
        <div className="taskpage-heading">
          <h1 className="taskpage-heading-h1">
            Tasks
          </h1>
        </div>
        <div className="task-container-wrapper">
          <div className="task-container">
            {data &&
              data.getTasks.map((elem, id: number) => {
                return (
                  <div className="task-comp-wrapper">
                    <div className="task-comp-primary">
                      <div key={id} className="task-comp">
                        <div className="task-category">
                          <img
                            className="task-image"
                            src={categoryImages[elem.category]}
                            alt={elem.category}
                          />
                        </div>
                        <div className="task-title">
                          <p className="task-title-p1">{elem.taskTitle}</p>
                        </div>
                          <div className="task-checkbox">
                            <button className="addtask-submit-button"
                              onClick={() => {
                              }}
                            >
                              Done
                            </button>
                            {/* <input
                            type="checkbox"
                           
                            checked={isDone[id]}
                          /> */}
                          </div>
                      </div>
                        <div className="task-deadline">
                          <p className="task-deadline-p-time">
                            {" "}
                            <img
                              className="calender-icon"
                              src={Clock}
                            ></img>{" "}
                          </p>
                          <p className="task-deadline-p-date">
                            <img className="calender-icon" src={Calendar}></img>{" "}
                          </p>
                        </div>
                    </div>
                     <Link to={`/editTask/${elem.id}`}>
                      <div className="task-edit">
                        <img className="task-image" src={Edit} alt={elem} />
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div> 
          <div className="add-task">
            <Link to={"/addTask"}>
              <img className="add-task-image" src={Add} alt="" />
            </Link>
          </div>
      </div>
    </div>
  );
}
