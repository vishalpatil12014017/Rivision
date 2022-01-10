import Comments from "./Comments";

const data = {
  id: "001",
  author: "Vishal",
  body: "How's day?",
  timestamp: "Sun Aug 08 1999 14:08:45 GMT+0530",
  replies: [
    {
      id: "002",
      author: "shashank",
      body: "Mine was awsome, what about you?",
      timestamp: "Sun Aug 08 1999 14:20:45 GMT+0530",
      replies: [
        {
          id: "003",
          author: "pankaj",
          body: "Where are you?",
          timestamp: "Sun Aug 08 1999 14:22:45 GMT+0530",
          points: "8",
          replies: []
        }
      ]
    },
    {
      id: "003",
      author: "pankaj",
      body: "Mine was not good",
      timestamp: "Sun Aug 08 1999 14:20:10 GMT+0530",
      replies: []
    },
    {
      id: "005",
      author: "sagar",
      body: "where are you guys?",
      timestamp: "Sun Aug 08 1999 16:20:10 GMT+0530",
      replies: []
    }
  ]
};

export default function App() {
  return <Comments {...data} />;
}
