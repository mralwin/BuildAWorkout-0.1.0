import React from "react";

class Exercise extends React.Component {
  renderExercise = key => {
    const exercise = this.props.details[key];
    const n = parseInt(exercise.set); // Or something else
    return (
      <div>
        <h3>{exercise.name}</h3>
        {[...Array(n)].map((e, i) => (
          <button key={key}>{exercise.rep} </button>
        ))}
      </div>
    );
  };

  render() {
    return Object.keys(this.props.details).map(key => this.renderExercise(key));
  }
}

export default Exercise;
