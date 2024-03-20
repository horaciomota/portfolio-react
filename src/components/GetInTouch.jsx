import "../styles/about_styles/about.modules.scss"
import "../styles/getintouch_styles/geiIntouch.modules.scss"

function GetInTouch() {
    return ( 
        <>
        <footer className="Footer-section">
            <div className="container">
                <h2>Get In Touch</h2>
                <p>horaciomota93@gmail.com</p>
                <div className="list">
                <ul>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">Github</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">About me</a></li>
                </ul>
                </div>
                <span>© Horacio Mota. All Rights Reserved.</span>
            </div>
        </footer>
        </>
     );
}

export default GetInTouch;