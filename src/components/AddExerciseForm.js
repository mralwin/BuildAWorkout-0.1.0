import React from "react";
import PropTypes from "prop-types";

class AddExerciseForm extends React.Component {
  nameRef = React.createRef();
  setRef = React.createRef();
  repRef = React.createRef();
  restRef = React.createRef();
  weightRef = React.createRef();

  static propTypes = {
    addExercise: PropTypes.func
  };

  createExercise = event => {
    event.preventDefault();
    event.stopPropagation();
    const exercise = {
      day: this.props.day,
      name: this.nameRef.current.value,
      set: this.setRef.current.value,
      rep: this.repRef.current.value,
      rest: this.restRef.current.value,
      weight: this.weightRef.current.value,
      count: 1
    };
    this.props.addExercise(exercise);
    event.currentTarget.reset();
  };
  render() {
    return (
      <form onSubmit={this.createExercise}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="set" ref={this.setRef} type="number" placeholder="Sets" />
        <input name="rep" ref={this.repRef} type="number" placeholder="Reps" />
        <input
          name="rest"
          ref={this.restRef}
          type="number"
          placeholder="Rest In Seconds"
        />
        <input
          name="weight"
          ref={this.weightRef}
          type="number"
          placeholder="Starting Weight"
        />
        <button type="submit">Add Exercise</button>
      </form>
    );
  }
}

export default AddExerciseForm;
