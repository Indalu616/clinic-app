import React from "react";
import { AchievementList } from "./AchievementList";

function Achievements() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          {AchievementList.map((el) => {
            return (
              <div className="col-sm-6 col-md-3 mt-4" key={el.id}>
                <h1 className="achieve-h1">{el.amount}</h1>
                <h4 className="achieve-h4">{el.title}</h4>
                <hr></hr>
                <p className="about-text-color">{el.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
