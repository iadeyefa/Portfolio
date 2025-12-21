

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export default function ResumeContent() {
    return (
        <div className="tab-content">
            <iframe
                src="/resume.pdf"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '8px'
                }}
                title="Resume"
            />
        </div>
    )
}