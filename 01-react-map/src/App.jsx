import React from "react";
import Card from "./components/card.jsx";
import Navbar from "./components/navbar.jsx";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCWElicsc6dSdtZmqaHhRoq6M6QMI3-PPxA&s",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZe2_cwIfo0yLvg5c9kvfNH7QhekWrjSuSA&s",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkLr163j_uvRF2h03dYvbNhlllN8HETE-RA&s",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbpIfA-_GwTVZBVlpCvdIcLVOsCxn4BmqHA&s",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "React Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Remote, India",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "UI Engineer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://cbx-prod.b-cdn.net/COLOURBOX63424512.jpg?width=800&height=800&quality=70",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://fabrikbrands.com/wp-content/uploads/Nvidia-Logo-History-1-1155x770.png",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$68/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JPvedCBmNG39bU4Zvq1PJTRRl6Nc8OOimA&s",
      companyName: "Uber",
      datePosted: "8 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$42/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDmR8nSuSzVAalSUh9SpHWv6LMaVsrvbdyMw&s",
      companyName: "Airbnb",
      datePosted: "10 weeks ago",
      post: "Product Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$55/hr",
      location: "Remote, India",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="parent">
        {jobOpenings.map(function (elem, index) {
          return (
            <div key={index}>
              <Card
                img={elem.brandLogo}
                company={elem.companyName}
                post={elem.post}
                tag1={elem.tag1}
                tag2={elem.tag2}
                pay={elem.pay}
                location={elem.location}
                datePosted={elem.datePosted}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
