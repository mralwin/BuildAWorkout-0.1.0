import React from "react";

class Generator extends React.Component {
  myInput = React.createRef();

  goToWorkout = event => {
    event.preventDefault();
    const workoutName = this.myInput.current.value;
    this.props.history.push(`/workout/${workoutName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToWorkout}>
        <h2>How long do you want your workout</h2>
        <input
          type="text"
          ref={this.myInput}
          requiered
          placeholder="Workout Length"
        />
        <button type="submit">Generate!</button>
      </form>
    );
  }
}

export default Generator;
