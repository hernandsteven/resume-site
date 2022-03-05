import pathfinding from "../pictures/projects/pathfinding-visualizer.jpg";
import portfolio from "../pictures/projects/portfolio-website.jpg";
import zoombot from "../pictures/projects/zoombot.jpg";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Js } from "styled-icons/fa-brands";
import { Sass } from "@styled-icons/fa-brands/Sass";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Pandas } from "@styled-icons/simple-icons/Pandas";
import { Framer } from "@styled-icons/simple-icons/Framer";

export const project_data = {
  projects: [
    {
      name: "Portfolio Website",
      description:
        "This is my personal website. The one you are using now. This website was built in React with the help of StyledComponents, SCSS, and FramerMotion. Some things I learned during this project were. 1) Resuability of components. 2) Making a mock design before implementing. 3) Webpage animations using Framer Motion & CSS. ",
      url: "https://github.com/hernandsteven/resume-site",
      image: portfolio,
      tech: [ReactLogo, Js, Framer, Sass, Styledcomponents],
    },
    {
      name: "Pathfinding Visualizer",
      description:
        "This Pathfinding Visualizer was made in React. In this program you can visualize searching algorithms such as Breadth-First Search and Depth-First Search. The user can place walls by clicking and dragging on the cells on the grid. Run any searching algorithims available. This project helped me learn these searching algorithims and how they work. The visualizations also helped understand them in depth.",
      url: "https://github.com/hernandsteven/visualizer",
      image: pathfinding,
      tech: [ReactLogo, Js],
    },
    {
      name: "ZoomBot",
      description:
        "ZoomBot is a Python script that allows you to join your zoom meetings autonomosly. All you need to do is enter the meeting information (name, date, time, password(if applicable)), which will be saved in a CSV. The program then asks you what meeting you would like to join and calculates how long it needs to wait before the meeting is scheduled.Once it is time the script would join the meeting without any user input. This is done with the help of the PyAutoGui library which handles all screen prompts. ",
      url: "https://github.com/hernandsteven/zoombot",
      image: zoombot,
      tech: [Python, Pandas],
    },
  ],
};
