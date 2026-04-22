import './App.css'
import BioContent from './components/BioContent'

function App() {
    return (
        <div className="app-shell">
            <BioContent />
            <footer className="footer">
                <div className="footer-content">
                    <p>© 2026 Ife Adeyefa. All rights reserved.</p>
                    <small>Built with React, TypeScript, and Vite.</small>
                </div>
            </footer>
        </div>
    )
}

export default App
