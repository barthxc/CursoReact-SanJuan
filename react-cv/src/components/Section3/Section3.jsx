
import Tag from '../Tag/Tag';
import './section3.css';
function Section3() {
  return (
    <div className="skills" id="skills">
      <div className="section-content">
        <h2 className="section-title">My skills</h2>
        <h3>Odio las skills bars</h3>

        <div className="flex-chart">
          <div className="container-chart ">
                     <Tag/>
            <canvas id="myChart">
            </canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;