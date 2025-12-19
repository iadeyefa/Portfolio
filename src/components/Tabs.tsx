import { useState } from "react";
import BioContent from "./BioContent.tsx";
import ResumeContent from "./ResumeContent.tsx"
import LinksContent from "./LinksContent.tsx"

export default function Tabs() {
    const [activeTab, setActiveTab] = useState('bio');

    return (
        <div>
            <div className="tabs">
                <button className="tab-button" onClick={() => setActiveTab('bio')}>Bio</button>
                <button className="tab-button" onClick={() => setActiveTab('resume')}>Resume</button>
                <button className="tab-button" onClick={() => setActiveTab('links')}>Links</button>
            </div>

            {activeTab === 'bio' && <BioContent />}
            {activeTab === 'resume' && <ResumeContent />}
            {activeTab === 'links' && <LinksContent />}
        </div>
    );
}