import "./App.css";
import UserImage from "./images/user.jpg";
import { Form, Image } from "react-bootstrap";
import Board from "./components/Board/Board";
import { Bell, HelpCircle, Search } from "react-feather";
import { useState } from "react";

function App() {
  const [boards, setBoards] = useState([
    {
      id: Date.now() + Math.random(),
      board_title: "To do",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Card 1",
          tasks: [],
          labels: [
            {
              text: "Frontend",
              color: "red",
            },
          ],
          description: "Lorem Ipsum",
          date: "",
        },
        {
          id: Date.now() + Math.random(),
          title: "Card 2",
          tasks: [],
          labels: [
            {
              text: "Backend",
              color: "brown",
            },
          ],
          description: "Lorem Ipsum",
          date: "",
        },
      ],
    },
    {
      id: Date.now() + Math.random(),
      board_title: "In progress",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Card 1",
          tasks: [],
          labels: [
            {
              text: "Frontend",
              color: "red",
            },
          ],
          description: "Lorem Ipsum",
          date: "",
        },
        {
          id: Date.now() + Math.random(),
          title: "Card 2",
          tasks: [],
          labels: [
            {
              text: "Backend",
              color: "brown",
            },
          ],
          description: "Lorem Ipsum",
          date: "",
        },
      ],
    },
    {
      id: Date.now() + Math.random(),
      board_title: "Completed",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Card 1",
          tasks: [],
          labels: [
            {
              text: "Frontend",
              color: "green",
            },
          ],
          description: "Lorem Ipsum",
          date: "",
        },
        {
          id: Date.now() + Math.random(),
          title: "Card 2",
          tasks: [],
          labels: [
            {
              text: "Backend",
              color: "brown",
            },
          ],
          description: "Lorem Ipsum",
          date: "",
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <div className="app_navbar">
        <div>
          <div className="app_searchbar">
            <Search />
            <Form.Control placeholder="Search" type="text"></Form.Control>
          </div>
          <div className="app_notificationbell">
            <HelpCircle />
            <Bell />
          </div>
          <div className="app_user">
            <div className="app_username">
              <span>Zeno Sonal Kindo</span>
            </div>
            <Image src={UserImage} alt="User Image" />
          </div>
        </div>
      </div>
      <div className="app_outer">
        <div className="app_projects">
          <h1>Projects</h1>
        </div>
        <div className="app_boards">
          {boards.map((board) => {
            return <Board id={board.id} board={board} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
