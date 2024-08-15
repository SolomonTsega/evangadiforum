import React, { useState, useEffect, useContext } from "react";
import { axiosInstance } from "../../API/axios";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { AuthContext } from "../../components/AuthContext/AuthContext"; 
// Import AuthContext

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useContext(AuthContext); // Access user info from context
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    axiosInstance
      .get("/api/question/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setQuestions(response.data.questions);
        setFilteredQuestions(response.data.questions);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, [token]);

  useEffect(() => {
    const results = questions.filter((question) =>
      question.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQuestions(results);
  }, [searchTerm, questions]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleQuestionClick = (question_id) => {
    navigate(`/question/${question_id}`);
  };

  return (
    <section className="questions_section mt-3">
      <div className="container mt-3 mb-5 pl-5">
        <div className="row  mt-3 mb-5 pl-5">
          <div className="col-md-6">
            <a href="/ask">
              <button className="btn btn-primary">Ask Question</button>
            </a>
          </div>
          <div className="col-12 col-md-4 pt-2 welcome_message">
            Welcome, {user.username}
          </div>
          <div className="search_questions">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="mt-4 ml-0">
            {filteredQuestions.map((question, index) => (
              <Link
                to={`/question/${question.question_id}`}
                key={index}
                onClick={() => handleQuestionClick(question.question_id)}
              >
                <div className="row question">
                  <hr />
                  <div className="col-12 col-md-2 user">
                    <div className="profile_icon">
                      <IoPersonSharp />
                    </div>
                    <div className="user_name">{question.user_name}</div>
                  </div>
                  <div className="col-10 col-md-9 my-md-4">
                    <p className="question_title">{question.title}</p>
                  </div>
                  <div className="col-2 col-md-1">
                    <div className="next_arrow">
                      <NavigateNextIcon />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
