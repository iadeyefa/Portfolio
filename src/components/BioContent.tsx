import githubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.png";
import educationLogo from "../assets/education.png";
import skillsLogo from "../assets/skills.png";
import projectsLogo from "../assets/projects.svg";

export default function BioContent() {
    return (
        <div className="tab-content">
            <div id="bio" className="tab-content active">
                <div className="body">

                    <a href="https://github.com/iadeyefa" target="_blank">
                        <img src={githubLogo} className="link-logo" alt="GitHub logo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/ife-adeyefa-9b7577300/" target="_blank">
                        <img src={linkedinLogo} className="link-logo" alt="LinkedIn logo"/>
                    </a>

                </div>

                <h1>Ife Adeyefa</h1>

                <div className="body" title="education">
                    <div className="body-header">
                        <h3>Education</h3>

                        <img src={educationLogo} className="logo" alt="Education logo"/>
                    </div>


                    <div className="education-item">

                        <h4>University of Florida</h4>
                        <p>Bachelor of Science in Computer Science</p>
                        <p><span className="highlight">Graduation:</span> Expected May 2026</p>
                        <p><span className="highlight">GPA:</span> 3.84</p>
                        <p><span className="highlight">Dean's List</span></p>
                        <p><span className="highlight">Relavant Coursework:</span> Data Structures and Algorithms, Operating
                            Systems, Programming Language Concepts,
                            Databases, Computer Organization, Engineering Statistics</p>

                    </div>

                </div>

                <div className="body" title="skills">
                    <div className="body-header">
                        <h3>Skills</h3>

                        <img src={skillsLogo} className="logo" alt="Skills logo"/>
                    </div>


                    <div className="education-item">

                        <p><span className="highlight">Languages:</span> Java, Python, C++, Javascript, TypeScript, SQL,
                            Swift</p>
                        <p><span className="highlight">Frameworks and Tools:</span> Spring Boot, React, Tailwind, Node.js,
                            Flask, Django, Unity, OpenCV, FFmpeg, Git, Docker</p>
                        <p><span className="highlight">Systems and Platforms</span> PostgreSQL, Oracle, Supabase, CI/CD
                            Pipelines, Linux</p>
                        <p><span className="highlight">Concepts:</span> Data Structures, Algorithms, Distributed Systems,
                            Backend APIs, Interactive Systems</p>

                    </div>

                </div>

                <div className="body" title="projects">
                    <div className="body-header">
                        <h3>Projects</h3>

                        <img src={projectsLogo} className="logo" alt="Projects logo"/>
                    </div>


                    <div className="education-item">

                        <p><span className="highlight">Languages:</span> Java, Python, C++, Javascript, TypeScript, SQL,
                            Swift</p>
                        <p><span className="highlight">Frameworks and Tools:</span> Spring Boot, React, Tailwind, Node.js,
                            Flask, Django, Unity, OpenCV, FFmpeg, Git, Docker</p>
                        <p><span className="highlight">Systems and Platforms</span> PostgreSQL, Oracle, Supabase, CI/CD
                            Pipelines, Linux</p>
                        <p><span className="highlight">Concepts:</span> Data Structures, Algorithms, Distributed Systems,
                            Backend APIs, Interactive Systems</p>

                    </div>

                </div>
            </div>
        </div>
    )
}