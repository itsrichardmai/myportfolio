import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects;
import L_OldPortfolio from "../../assets/img/projects/oldportfolio.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";


// skills
import L_FirstPortfolio from "../../assets/img/projects/firstportfolio.webp"
import L_GiphyAPI from "../../assets/img/projects/giphyapisearch.webp";
import L_RestAPI from "../../assets/img/projects/restapi.webp";
import L_JQUERY from "../../assets/img/projects/jquery.webp"
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_AUTHDEV from "../../assets/img/projects/authapp.png";
import L_FIREBASE from "../../assets/img/projects/firebase.webp";
import L_MYPORTFOLIO from "../../assets/img/projects/myportfolio.webp"

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3"
      style={{color:"black"}}>PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Get GitHub Info */}
          <ImageEvent
            date="10/09/2020"
            className="text-center"
            text="Placeholder text"
            // src={L_GetGitHubInfo}
            alt="Placeholder text"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An application description
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>listing placeholder</li>
                          <li>listing placeholder</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Github API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GitHub API
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


          <ImageEvent
            date="30/10/2020"
            className="text-center"
            text="Reactive Portfolio"
            src={L_MYPORTFOLIO}
            alt="Reactive Portfolio"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        <p>Modern website portfoio built using ReactJS. Routing handled using React dom router package.</p>
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Responsive view for all devices</li>
                          <li>Utilizies a JS file to contain relevant links.</li>
                          <li>Consistently structured file architecture</li>
                          <li>Utilizes multiple open sourced packages such as react bootstrap, parrallax,  </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                        </ul>
                        <hr />
                        <em>
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="#"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: RoboFriends */}

          <ImageEvent
            date="26/10/2020"
            className="text-center"
            text="Login Authorization Application"
            src={L_AUTHDEV}
            alt="Login Authorization Application"
          > 
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        <p>Built Firebase authorization application. Signup, Login, Reset Password and UpdateProfile all enabled and functioning as intended. Logic is handled through react hooks. Routing handled by react-router-dom package. Authorization & authentication handled by Firebase </p>
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User Signup</li>
                          <li>User Login</li>
                          <li>Change Passw.</li>
                          <li>UpdateProfile</li>
                          <li>Functioning database</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="Redux"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://itsrichardmai.github.io/authenticationapp"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/itsrichardmai/authenticationapp"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Product_Hunt_Clone */}

          <ImageEvent
            date="06/12/2019"
            className="text-center"
            text="Static Portfolio Website (Before-React)"
            src={L_OldPortfolio}
            alt="Placeholder text"listing placeholder
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> The second portfolio ever constructed by myself. I created this website with very little fundamental understanding of code. 
                        I went online to explore the world of HTML, CSS and JavaScript and was fascinated by all of the designs and animations that JavaScript can perform with only a few lines of code
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Hosted on Heroku</li>
                          <li>Utilizes text animation and panels CSS system to design a smooth and sleek feel.</li>
                          <li>Includes many of my entry level projects starting off as a web-developer. I have always thoroughly enjoyed the art of designing an application</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HEROKU}
                                alt="Heroku"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Heroku
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JQUERY}
                                alt="JQUERY"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JQUERY
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="EXPRESS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             EXPRESS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="NODE_JS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="GIT"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             Github
                            </span>
                          </li>
                        </ul>
                        <hr />
                        <em>
                          <strong>View Demo Video:</strong>
                          <br />
                          <br />
                          If you are reading this, that means I have updated my
                          Portfolio website to recent one.
                          <br />
                          You can still see the source code of my old portfolio by
                          clicking on the button below.
                          <br />
                          <br />
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://enigmatic-ravine-41127.herokuapp.com/portfolio.html" target="_blank">
                  Live Website 
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            date="03/21/2019"
            className="text-center"
            text="Giphy API Search"
            src={L_GiphyAPI}
            alt="Search for any Gif using our bootstrapped Giphy API search engine!"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Search that in a GIPHY</strong>
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Bootstrap theme</li>
                          <li>Dyanmic functionality using jQuery</li>
                          <li>Learned to use event handlers.</li>
                          <li>Data persists with user session</li>
                          <li>Sends request to GIPHY API using Access token</li>
                          <li>Discovered the data-key attribute</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JQUERY}
                                alt="JQUERY"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JQUERY
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_RestAPI}
                                alt="RestfulAPI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GiphyAPI
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://itsrichardmai.github.io/giphy/"
                  target="_blank"
                >
                  Live Website [TRY IT OUT]
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="02/10/2019"
            className="text-center"
            text="The First Ever Portfolio"
            src={L_FirstPortfolio}
            alt="Placeholder text"listing placeholder
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> The First portfolio ever constructed by myself. I created this website with very little fundamental understanding of code. 
                        First time seeing BootStrap 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Hosted on Github Pages</li>
                          <li>Utilizes text animation and panels CSS system to design a smooth and sleek feel.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="NODE_JS"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="GIT"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             Github
                            </span>
                          </li>
                        </ul>
                        <hr />
                        <em>
                          <strong>View Demo Video:</strong>
                          <br />
                          <br />
                          If you are reading this, that means I have updated my
                          Portfolio website to recent one.
                          <br />
                          You can still see the source code of my old portfolio by
                          clicking on the button below.
                          <br />
                          <br />
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://itsrichardmai.github.io/Bootstrap-Portfolio/" target="_blank">
                  Live Website 
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Portfolio using HTML CSS JS  */}
         
        </Events>
      </Timeline>
    </div>  
  );
};

export default TimeLine;