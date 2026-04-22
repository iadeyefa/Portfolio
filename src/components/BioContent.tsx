import educationLogo from "../assets/education.png";
import skillsLogo from "../assets/skills.png";
import projectsLogo from "../assets/projects.png";
import profile from "../assets/profile.jpeg";
import githubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.png";
import resumeLogo from "../assets/resumeLogo.png";

const TAG_STYLES: Record<string, string> = {
    React: 'tag--frontend',
    TypeScript: 'tag--frontend',
    JavaScript: 'tag--frontend',
    'Chrome Extensions API': 'tag--frontend',

    Python: 'tag--ml',
    'scikit-learn': 'tag--ml',
    XGBoost: 'tag--ml',
    'imbalanced-learn': 'tag--ml',
    OpenCV: 'tag--ml',
    FastAPI: 'tag--backend',
    PostgreSQL: 'tag--backend',

    WebRTC: 'tag--media',
    FFmpeg: 'tag--media',

    Unity: 'tag--simulation',
    'C#': 'tag--simulation',

    OpenStreetMap: 'tag--geo',
    ArcGIS: 'tag--geo',
    CityEngine: 'tag--geo',

    pandas: 'tag--data',
};

export default function BioContent() {
    const links = [
        { name: 'GitHub', url: "https://github.com/iadeyefa", logo: githubLogo },
        { name: 'LinkedIn', url: "https://www.linkedin.com/in/ife-adeyefa-9b7577300/", logo: linkedinLogo },
    ];

    const experience = [
        {
            title: "Software Engineer Intern",
            company: "First Citizens Bank",
            location: "Raleigh, NC",
            dates: "May 2025 - August 2025",
            bullets: [
                "Designed and deployed a production-grade Spring Boot backend and RESTful APIs with PostgreSQL to automate internal QA workflows.",
                "Implemented centralized observability using Prometheus and Grafana, transforming Splunk log data into structured metrics and instrumenting five distributed services to enable real-time debugging and reduce incident triage time."
            ]
        },
        {
            title: "Software Engineer Intern",
            company: "Comet",
            location: "Remote",
            dates: "July 2022 - September 2022",
            bullets: [
                "Developed and optimized reusable React components for a college-planning platform, improving scheduling conversions by streamlining booking flows.",
                "Collaborated with cross-functional teams to translate feature requirements into scalable UI architecture shaped by structured user feedback."
            ]
        }
    ];

    const projects = [
        {
            title: "PitchEye - Multi-View Soccer Capture System",
            tags: ["Python", "React", "PostgreSQL", "WebRTC", "FFmpeg"],
            description: "Built a multi-view soccer capture platform with React, Django, React Native, and Supabase, enabling teams to organize sessions, generate QR-based access, and collect sideline footage from multiple smartphones into one shared workspace. Implemented a live video pipeline using RTMP ingest, HLS playback, and FFmpeg-based stream archiving for browser-based viewing across camera angles. Designed team-scoped collaboration features including role-based session creation, join flows, clip uploads, player tagging, and comments for shared match review.",
            repoUrl: "https://github.com/iadeyefa/PitchEye"
        },
        {
            title: "Intelligent Traffic Management Simulator",
            tags: ["Unity", "C#", "OpenStreetMap", "ArcGIS", "CityEngine"],
            description: "Built an automated data pipeline to reconstruct real-world road networks as Bezier-based lane graphs for multi-agent traffic simulations. Engineered an adaptive traffic signal controller that increased vehicle throughput by 300 percent, reaching up to 9,000 vehicles per minute while reducing wait times to under 12 seconds.",
            repoUrl: "https://github.com/rs-dkd/IntelligentTrafficManagementSim"
        },
        {
            title: "PromptManager - LLM Prompt Browser Extension",
            tags: ["TypeScript", "JavaScript", "React", "Chrome Extensions API"],
            description: "Developed a browser extension for managing and reusing LLM prompts across multiple platforms. Implemented prompt storage, categorization, and editing with a shared codebase between the extension and public website, enabling seamless prompt library access across different AI tools and workflows.",
            repoUrl: "https://github.com/PromptManager/extension"
        },
        {
            title: "AI-Driven Sports Highlight Ranking System (RLHF-Inspired)",
            tags: ["Python", "OpenCV", "scikit-learn", "FastAPI"],
            description: "Engineered a video and audio feature extraction pipeline using OpenCV and librosa, capturing motion intensity, crowd noise, and shot transitions to feed a pairwise ranking model trained on user preference feedback. Designed a FastAPI preference collection interface enabling iterative RLHF-style model updates, evaluated with pairwise accuracy and precision@k to improve over a rule-based baseline across successive feedback rounds. Deployed a top-k highlight selection endpoint for short-form sports clips, with ranking quality improving as the model accumulated more pairwise preference data."
        },
        {
            title: "Bitcoin Ransomware Classifier",
            tags: ["Python", "pandas", "scikit-learn", "XGBoost", "imbalanced-learn"],
            description: "Built a notebook-based machine learning pipeline to classify Bitcoin addresses as ransomware-related or legitimate using transaction-behavior features from the BitcoinHeist dataset. Developed preprocessing and feature-engineering workflows with train, validation, and test splits, log and ratio features, and SMOTE-balanced variants for model comparison. Tuned tree-based models with RandomizedSearchCV and threshold optimization, with optional Google Colab GPU acceleration for RAPIDS-backed preprocessing and XGBoost training.",
            repoUrl: "https://github.com/danherbb/bitcoin-ransomware-classifier"
        }
    ];

    const getTagColor = (tag: string) => {
        return TAG_STYLES[tag] || 'tag--default';
    };

    return (
        <main className="page-shell">
            <nav className="section-nav" aria-label="Portfolio sections">
                <a href="#about" className="section-nav__item">About</a>
                <a href="#education" className="section-nav__item">Education</a>
                <a href="#experience" className="section-nav__item">Experience</a>
                <a href="#skills" className="section-nav__item">Skills</a>
                <a href="#projects" className="section-nav__item">Projects</a>
            </nav>

            <section id="about" className="panel panel--hero">
                <div className="body-header">
                    <div className="name-and-links">
                        <p className="eyebrow">Software engineer and builder</p>
                        <h1>Ife Adeyefa</h1>
                        <h2>Bachelor&apos;s in Computer Science at the University of Florida, incoming M.S. in Computer Science at Duke University</h2>

                        <div className="bio-links" aria-label="Primary links">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-link"
                                aria-label="Open resume"
                            >
                                <img src={resumeLogo} alt="" className="icon-link__logo"/>
                                <span>Resume</span>
                            </a>

                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-link"
                                    aria-label={`Open ${link.name}`}
                                >
                                    <img src={link.logo} alt="" className="icon-link__logo" />
                                    <span>{link.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="profile-wrap">
                        <img src={profile} className="profile" alt="Portrait of Ife Adeyefa"/>
                    </div>
                </div>
            </section>

            <section id="education" className="panel">
                <div className="body-header">
                    <div>
                        <p className="section-kicker">Background</p>
                        <h3>Education</h3>
                    </div>
                    <img src={educationLogo} className="logo" alt="Education logo"/>
                </div>

                <div className="education-item">
                    <h4>University of Florida</h4>
                    <p className="highlight">Bachelor of Science in Computer Science</p>
                    <p><span className="highlight">Graduation:</span> Expected May 2026</p>
                    <p><span className="highlight">GPA:</span> 3.83</p>
                    <p>
                        <span className="highlight">Relevant Coursework:</span> Data Structures and Algorithms,
                        Operating Systems, Programming Language Concepts, Databases, Computer Organization,
                        Engineering Statistics
                    </p>
                </div>

                <div className="education-item">
                    <h4>Duke University</h4>
                    <p className="highlight">Master of Science in Computer Science</p>
                </div>
            </section>

            <section id="skills" className="panel">
                <div className="body-header">
                    <div>
                        <p className="section-kicker">Capabilities</p>
                        <h3>Skills</h3>
                    </div>
                    <img src={skillsLogo} className="logo" alt="Skills logo"/>
                </div>

                <div className="education-item">
                    <p><span className="highlight">Languages:</span> Java, Python, C++, JavaScript, TypeScript, SQL, Swift</p>
                    <p><span className="highlight">Frameworks and Tools:</span> Spring Boot, React, Node.js, Flask, Django, Unity, OpenCV, FFmpeg, Git, Docker</p>
                    <p><span className="highlight">Systems and Platforms:</span> PostgreSQL, Oracle, Supabase, CI/CD pipelines, Linux</p>
                    <p><span className="highlight">Concepts:</span> Data Structures, Algorithms, Distributed Systems, Backend APIs, Interactive Systems</p>
                </div>
            </section>

            <section id="experience" className="panel">
                <div className="body-header">
                    <div>
                        <p className="section-kicker">Professional work</p>
                        <h3>Experience</h3>
                    </div>
                </div>

                <div className="experience-list">
                    {experience.map((role) => (
                        <article key={`${role.company}-${role.dates}`} className="experience-item">
                            <div className="experience-header">
                                <div>
                                    <h4 className="experience-title">{role.title}</h4>
                                    <p className="experience-company">{role.company}</p>
                                </div>

                                <div className="experience-meta">
                                    <p>{role.dates}</p>
                                    <p>{role.location}</p>
                                </div>
                            </div>

                            <ul className="experience-bullets">
                                {role.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section id="projects" className="panel">
                <div className="body-header">
                    <div>
                        <p className="section-kicker">Selected work</p>
                        <h3>Projects</h3>
                    </div>
                    <img src={projectsLogo} className="logo" alt="Projects logo"/>
                </div>

                <div className="projects-list">
                    {projects.map((project) => (
                        <article key={project.title} className="project-item">
                            <h4 className="project-title">{project.title}</h4>

                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className={`tag ${getTagColor(tag)}`}>{tag}</span>
                                ))}
                            </div>

                            <p className="project-description">{project.description}</p>

                            {project.repoUrl && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    View repository
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}
