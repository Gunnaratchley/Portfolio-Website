import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/searchResize.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/rpgTopDown.png";
import projImg4 from "../assets/img/tubetacular.png";
import projImg5 from "../assets/img/quizProject.png";
import projImg6 from "../assets/img/githubProjects.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "2D RPG",
      description: "Mini 2D top down RPG  ",
      imgUrl: projImg3,
      demoUrl: "https://github.com/gunnaratchley",
    },
    {
      title: "Admin Dashboard with Sales Data",
      description: "Full Stack Web Design   ",
      imgUrl: projImg2,
      demoUrl: "https://github.com",
    },
    {
      title: "AI Search Algorithms",
      description: "Foundations of AI   ",
      imgUrl: projImg1,
      demoUrl: "https://github.com/Gunnaratchley/AISearchAlgorithimsDFS-BFS-UCS-A-",
    },
  ];

  const projectsTabTwo = [
    {
      title: "Tubetacular",
      description: "A simple Mario Clone    ",
      imgUrl: projImg4,
      demoUrl: "https://www.linkedin.com/in/gunnar-atchley-a16433123"
    },
    {
      title: "Quiz Game",
      description: "Small HTML quiz game based on the Anime One Piece   ",
      imgUrl: projImg5,
      demoUrl: "https://github.com/gunnaratchley",
    },
    {
      title: "Encryption Algorithms",
      description: "Use and testing of RSA and HMAC Encryption as well as with Salt/Hash   ",
      imgUrl: projImg6,
      demoUrl: "https://github.com/Gunnaratchley/RSAandHMACsignature",
    },
  ]
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects and Features</h2>
                <p>Notable projects include MERN stack enterprise sales Admin dashboard, 2D RPG Game, Tubetacular a Mario clone, AI search algorithms, Encryption and security algorithms, as well as various other projects varying in sizes.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectsTabTwo.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>Resume coming soon.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
