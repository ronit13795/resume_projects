import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import SurveyPassword from "./SurveyPassword";
import jwt from "jsonwebtoken";
import { useSession } from "next-auth/react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SidebarRight({
  questions,
  setPages,
  pages,
  addPage,
  setNewSurvey,
  setMySurveys,
  title,
  setTitleName,
  maxTimeToFinishPage,
  setTimePage,
  maxTimeToFinish,
  setTimeFinish,
  surveyPw,
  setSurveyPw,
  _id,
  setId,
  category,
  setCategory,
}) {
  const [showSurveyPassword, setShowSurveyPassword] = useState(false);
  const optionsForCategory = [
    "health",
    "leisure",
    "recreation",
    "Working",
    "Society",
    "technology",
    "science",
    "culture",
    "Habits",
    "Social Sciences",
    "Behavioral Sciences",
    "hobbies",
    "Social Network",
    "Studies",
    "general",
  ];
  const { data: session } = useSession();
  let creator;
  let userName;
  if (typeof window !== "undefined") {
    if (session) {
      userName = session.user.email;
    } else {
      creator = jwt.decode(localStorage.getItem("accessToken"));
      userName = creator.userName;
    }
  }

  const buildSurvey = () => {
    const firstPage = {
      elements: [
        {
          type: "html",
          html: `You are about to start a quiz on <b>${title}</b>. <br>You will have ${maxTimeToFinishPage} seconds for every question and ${maxTimeToFinish} seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin.`,
        },
        {
          type: "text",
          name: "username",
          titleLocation: "hidden",
          isRequired: true,
        },
      ],
    };

    let completePages = [firstPage, ...pages];

    const surveyPlaceholder = {
      category: category || "general",
      title: title || "empty title",
      showProgressBar: "bottom",
      showTimerPanel: "top",
      maxTimeToFinishPage: Number(maxTimeToFinishPage) || 10,
      maxTimeToFinish: Number(maxTimeToFinish) || 25,
      firstPageIsStarted: true,
      startSurveyText: "Start Quiz",
      pages: completePages,
      surveyPw,
      creator: userName,
      completedHtml: "<h4>thank you for your time.</h4>",

      // completedHtmlOnCondition: [
      //   {
      //     expression: "{correctAnswers} == 0",
      //     html: "<h4>Unfortunately, none of your answers is correct. Please try again.</h4>",
      //   },
      //   {
      //     expression: "{correctAnswers} == {questionCount}",
      //     html: "<h4>Congratulations! You answered all the questions correctly!</h4>",
      //   },
      // ],
    };

    return surveyPlaceholder;
  };

  let user = session
    ? { userName: session.user.email }
    : { "access-token": localStorage.getItem("accessToken") };

  const sendSurvey = () => {
    const survey = buildSurvey(questions);
    fetch("/api/updateSurvey", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...user,
        id: _id,
      },
      body: JSON.stringify(survey),
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.success) {
          alert("updated successfully");
          resetAll();
        } else alert(json.msg);
      })
      .catch((err) => {
        console.log(err);
        alert("fatal error please try again latter");
      });
    setId("new");
  };

  const resetAll = () => {
    setTitleName("");
    setTimeFinish("");
    setTimePage("");
    setPages([]);
    setCategory("");
  };

  const questionsSum = () => {
    let counter = 0;
    pages
      .map((page) => {
        return page.elements.length;
      })
      .forEach((length) => {
        counter += length;
      });
    return counter;
  };

  const surveyPassword = () => {
    if (showSurveyPassword === true) {
      return (
        <SurveyPassword
          setSurveyPw={setSurveyPw}
          setShowSurveyPassword={setShowSurveyPassword}
        />
      );
    }
  };

  return (
    <div className="right-bar-side-container">
      <Drawer
        sx={{
          width: 310,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 310,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            style={{ marginLeft: "75px" }}
          >
            Properties
          </Typography>
        </Toolbar>
        <hr />

        <Divider>
          <Toolbar>
            <input
              value={title}
              onChange={(e) => {
                setTitleName(e.target.value);
              }}
              type="text"
              placeholder="Survey Title..."
            />
          </Toolbar>
        </Divider>

        <hr />

        <Divider>
          <Toolbar>
            <input
              value={maxTimeToFinishPage}
              onChange={(e) => {
                setTimePage(e.target.value);
              }}
              type="text"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="Time for each question..."
            />
          </Toolbar>
        </Divider>

        <hr />

        <Divider>
          <Toolbar>
            <input
              value={maxTimeToFinish}
              onChange={(e) => {
                setTimeFinish(e.target.value);
              }}
              type="text"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="Time for the entire survey..."
            />
          </Toolbar>
        </Divider>

        <hr />

        <Divider>
          <Toolbar>
            <p>Number Of Question: {questionsSum()} </p>
          </Toolbar>
        </Divider>

        <hr />
        <Divider>
          <Toolbar>
            <Button
              size="small"
              onClick={() => {
                addPage();
              }}
            >
              add page
            </Button>
          </Toolbar>
        </Divider>

        <hr />
        <Divider>
          <Toolbar>
            <FormControl required sx={{ m: 1, minWidth: 122 }}>
              <InputLabel id="demo-simple-select-required-label">
                choose category for this survey
              </InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={category}
                label="Category*"
                onChange={(e) => {
                  setCategory(e.target.value);
                  console.log(category);
                }}
              >
                {optionsForCategory.map((category, i) => {
                  return (
                    <MenuItem key={i} value={category}>
                      {category}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
          </Toolbar>
        </Divider>

        <Divider>
          <Toolbar>
            <Button
              onClick={() => {
                setShowSurveyPassword(!showSurveyPassword);
              }}
              color="success"
              variant="contained"
            >
              Survey Password
            </Button>
          </Toolbar>
        </Divider>
        <hr />
        {surveyPassword()}

        <Divider>
          <Toolbar>
            <Button
              onClick={() => {
                setNewSurvey(false);
                setMySurveys(true);
              }}
              color="success"
              variant="contained"
            >
              My Surveys
            </Button>
          </Toolbar>
        </Divider>

        <Toolbar style={{ bottom: "0", position: "fixed" }}>
          <Button
            className="barBtn"
            onClick={() => {
              sendSurvey();
            }}
            color="success"
            variant="contained"
          >
            Save
          </Button>

          <Button
            className="barBtn"
            onClick={() => {
              let confirmDelete = confirm(
                "Are sure you want to delete the survey?"
              );
              if (confirmDelete) resetAll();
            }}
            color="error"
            variant="contained"
          >
            Discard
          </Button>
        </Toolbar>
        <Divider />
      </Drawer>
    </div>
  );
}
