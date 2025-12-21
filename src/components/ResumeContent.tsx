

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export default function ResumeContent() {
    return (
        <div className="tab-content">
            <object
                data="/resume.pdf"
                type="application/pdf"
                width="100%"
                height="800px">
            </object>
        </div>
    )
}