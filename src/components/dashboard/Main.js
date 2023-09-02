import React from 'react';
import './Main.css';

function Main(props) {
  // const domainData = [
  //   {
  //     name: "Product design",
  //     tasks: ["PT1", "PT2", "PT3", "PT4", "PT5"],
  //   },
  //   {
  //     name: "Development",
  //     tasks: ["DT1", "DT2", "DT3", "DT4", "DT5"],
  //   },
  //   {
  //     name: "App Development",
  //     tasks: ["ADT1", "ADT2", "ADT3", "ADT4", "ADT5"],
  //   },
  //   {
  //     name: "Mobile Development",
  //     tasks: ["MDT1", "MDT2", "MDT3", "MDT4", "MDT5"],
  //   },
  //   // Add more domains here
  // ];  
  const domainData = [
    {
      name: "Product design",
      tasks: ["UI Design Iteration 1", "UI Design Iteration 2", "UI Design Iteration 3", "UI Design Iteration 4"],
    },
    {
      name: "Development",
      tasks: ["Development Task 1", "Development Task 2", "Development Task 3", "Development Task 4"],
    },
    {
      name: "App Development",
      tasks: ["App Dev Task 1", "App Dev Task 2", "App Dev Task 3", "App Dev Task 4"],
    },
    {
      name: "Mobile Development",
      tasks: ["Mobile Dev Task 1", "Mobile Dev Task 2", "Mobile Dev Task 3", "Mobile Dev Task 4"],
    },
    // Add more domains here
  ];
  

  return (
    <div className="main">
      {/* Domain Cards  */}
      {domainData.map((domain, domainIndex) => (
        <div className="mainCard" key={domain.name}>
          <div className="titleHeading">
            <img src="/images/vertical.png" alt="" />
            <span>{domain.name}</span>
          </div>
          <div>
            {/* Task Inside Cards */}
            {domain.tasks.map((task, taskIndex) => (
              <div className="tasklist" key={task}>
                <input type="checkbox" />
                <span>{task}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
