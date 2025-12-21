import educationLogo from "../assets/education.png";
import skillsLogo from "../assets/skills.png";
import projectsLogo from "../assets/projects.png";
import profile from "../assets/profile.jpeg";

export default function BioContent() {
    const projects = [
        {
            title: "Intelligent Traffic Management Simulator",
            tags: ["Unity", "C#", "OpenStreetMap", "ArcGIS", "CityEngine"],
            description: "Designed and implemented a large-scale multi-agent traffic simulation in Unity using real-world GIS data. Built an automated pipeline to convert GIS road data into navigable Bezier curve-based lane graphs. Implemented hierarchical vehicle navigation using A* pathfinding with obstacle avoidance, and developed an adaptive traffic signal controller using heuristic pain score optimization."
        },
        {
            title: "PitchEye - Multi-View Soccer Capture System",
            tags: ["Python", "TypeScript", "React", "FFmpeg", "OpenCV", "WebRTC", "PostgreSQL"],
            description: "Developed a distributed system for recording live soccer matches using multiple commodity smartphones. Designed a QR-based session workflow for device coordination and clip uploads. Implemented backend pipelines for clip deduplication, audio-based time synchronization using referee whistles, and multi-angle timeline stitching. Built a web viewer supporting full match playback, highlights, camera switching, and role-based access control."
        },
        {
            title: "PromptManager - LLM Prompt Browser Extension",
            tags: ["TypeScript", "JavaScript", "React", "Chrome Extensions API"],
            description: "Developed a browser extension for managing and reusing LLM prompts across multiple platforms. Implemented prompt storage, categorization, and editing with a shared codebase between the extension and public website. Enables seamless prompt library access and management across different AI tools and platforms."
        }
    ];

    const getTagColor = (tag: string) => {
        const colors: Record<string, string> = {
            'Unity': 'bg-black text-white',
            'C#': 'bg-purple-100 text-purple-700',
            'OpenStreetMap': 'bg-green-100 text-green-700',
            'ArcGIS': 'bg-blue-100 text-blue-700',
            'CityEngine': 'bg-orange-100 text-orange-700',
            'Python': 'bg-yellow-100 text-yellow-700',
            'TypeScript': 'bg-blue-100 text-blue-700',
            'React': 'bg-cyan-100 text-cyan-700',
            'FFmpeg': 'bg-red-100 text-red-700',
            'OpenCV': 'bg-green-100 text-green-700',
            'WebRTC': 'bg-purple-100 text-purple-700',
            'PostgreSQL': 'bg-blue-100 text-blue-700',
            'JavaScript': 'bg-yellow-100 text-yellow-700',
            'Chrome Extensions API': 'bg-yellow-100 text-yellow-700'
        };
        return colors[tag] || 'bg-gray-100 text-gray-700';
    };

    return (
        <div className="tab-content">
            <div id="bio" className="tab-content active">
                <div className="body">
                    <div className="body-header">
                        <h1>Ife Adeyefa</h1>

                        <div>
                            <img src={profile} className="profile" alt="Profile Picture"/>
                        </div>

                    </div>
                </div>




                <div className="body" title="education">
                    <div className="body-header">
                        <h3>Education</h3>

                        <img src={educationLogo} className="logo" alt="Education logo"/>
                    </div>


                    <div className="education-item">

                        <h4>University of Florida</h4>
                        <p className="highlight">Bachelor of Science in Computer Science</p>
                        <p><span className="highlight">Graduation:</span> Expected May 2026</p>
                        <p><span className="highlight">GPA:</span> 3.83</p>
                        <p><span className="highlight">Relavant Coursework:</span> Data Structures and Algorithms, Operating
                            Systems, Programming Language Concepts, Databases, Computer Organization, Engineering Statistics</p>

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

                    <div className="projects-list">
                        {projects.map((project, index) => (
                            <div key={index} className="project-item">
                                <h3 className="project-title">{project.title}</h3>

                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className={`tag ${getTagColor(tag)}`}>{tag}</span>
                                    ))}
                                </div>

                                <p className="project-description">{project.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}