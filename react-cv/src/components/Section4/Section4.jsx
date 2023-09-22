import './section4.css'
import EducacionTable from '../EduTable/EducacionTable';
import ExpTable from '../EduTable/ExpTable';

function Section4() {
  return (
    <section className="resume" id="resume">
      <div className="section-content">
        <h2 className="section-title">RESUME</h2>
        <h3>FORMACIÓN</h3>
        <div className="info">
          <div className="col">
            <span className="title">Educación</span>
            <table>
              <tbody>
                <EducacionTable/>
              </tbody>
            </table>
          </div>

          <div className="col">
            <span className="title">Experiencia</span>
            <table>
              <tbody>
                <ExpTable/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;