import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "maarianvsf",
    name: "Marian Suárez",
    isFollowing: true,
  },
  {
    userName: "midudev",
    name: "Miguel Angel",
    isFollowing: true,
  },
  {
    userName: "vxn",
    name: "Elon Musk",
    isFollowing: false,
  },
  {
    userName: "nanutria",
    name: "Victor Medina",
    isFollowing: true,
  },
];

function App() {
  return (
    <section>
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}

export default App;
