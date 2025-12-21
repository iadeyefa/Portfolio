import { useState } from "react";
import BioContent from "./BioContent.tsx";
import ResumeContent from "./ResumeContent.tsx"

import githubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.png";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState('bio');
    const [linksOpen, setLinksOpen] = useState(false);

    const links = [
        { name: 'GitHub', url: "https://github.com/iadeyefa", logo: githubLogo },
        { name: 'LinkedIn', url: "https://www.linkedin.com/in/ife-adeyefa-9b7577300/", logo: linkedinLogo },
    ];

    return (
        <div>
            <div className="tabs">
                <button className="tab-button" onClick={() => setActiveTab('bio')}>Bio</button>
                <button className="tab-button" onClick={() => setActiveTab('resume')}>Resume</button>

                <div className="links-dropdown" onMouseLeave={() => setLinksOpen(false)}>
                    <button
                        className="tab-button links-button"
                        onMouseEnter={() => setLinksOpen(true)}
                    >
                        Links
                    </button>

                    {linksOpen && (
                        <div className="dropdown-menu" onMouseEnter={() => setLinksOpen(true)}>
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="dropdown-item"
                                >
                                    <img src={link.logo} alt={link.name} className="dropdown-logo" />
                                </a>
                                ))}
                        </div>
                    )}
                </div>
            </div>

            {activeTab === 'bio' && <BioContent />}
            {activeTab === 'resume' && <ResumeContent />}
        </div>
    );
}