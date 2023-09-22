import './section1.css'
import Navbar from './../Navbar/Navbar';

function Section1(){
    return (
    <section className="home" id="home">
        <div className="section-content">
            <header>
                <Navbar/>
                <div className="logo">
                   <a href="../index.html"><img src="./../../public/LOGO_MORADO-B1.png"  alt="logo" className="logo"></img></a> 
                </div>
            </header>
                <div className="info">
                    <h1>Bart HxC</h1>
                    <h2>DEVELOPER - SOUND TECHNICIAN</h2>
                    <div className="socialm">

                        <a href="https://www.linkedin.com/in/pablo-bartolomé-gallardo-8167a81b4/"><i className="fab fa-linkedin"></i></a>

                        <a href="https://github.com/barthxc"><i className="fab fa-github"></i></a>
                        <a href="https://twitter.com/bart_hxc"><i className="fab fa-twitter"></i></a>
                        <a href="mailto:barthxc.business@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
                <div className="foto">
                    <img src="src\assets\self.png"></img>
                </div>
        </div>
    </section>
    )
}

export default Section1;
