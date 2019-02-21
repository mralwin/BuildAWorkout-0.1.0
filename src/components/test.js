import React from "react";

class Test extends React.Component {
  handleChange = event => {
    const updatedExercise = event.currentTarget.value;

    this.props.updateExercise(
      this.props.index,
      event.currentTarget.name,
      updatedExercise
    );
  };

  handleClick = () => {
    this.props.deleteExercise(this.props.day, this.props.index);
  };

  render() {
    const exercise = this.props.details[this.props.index];
    const props = this.props;
    return (
      <div>
        <h2>i am a test component</h2>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={exercise.name}
        />
        <input
          type="text"
          name="set"
          onChange={this.handleChange}
          value={exercise.set}
        />
        <input
          type="text"
          name="rep"
          onChange={this.handleChange}
          value={exercise.rep}
        />
        <input
          type="text"
          name="rest"
          onChange={this.handleChange}
          value={exercise.rest}
        />
        <input
          type="text"
          name="weight"
          onChange={this.handleChange}
          value={exercise.weight}
        />
        <button onClick={this.handleClick}>Delete Exercise</button>
      </div>
    );
  }
}

export default Test;
