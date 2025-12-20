import './App.css'
import Tabs from './components/Tabs'

function App() {
    return (
        <>
            <div id="root">
                <div className="App">
                    <Tabs />
                </div>
            </div>

            <footer className="footer">
                <div className="footer-content">
                    <p>© 2025 Ife Adeyefa. All rights reserved.</p>
                    <small>Made with React v19.2.3, Typescript v5.9.3, Vite v7.2.5, and TailwindCSS</small>
                </div>
            </footer>
        </>
    )
}

export default App
