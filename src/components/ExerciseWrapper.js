import React from "react";
import EditExercise from "./EditExercise";

class ExerciseWrapper extends React.Component {
  render() {
    const props = this.props;
    return Object.keys(this.props.details).map(key => (
      <EditExercise
        key={key}
        index={key}
        day={this.props.day}
        details={props.details}
        updateExercise={props.updateExercise}
        deleteExercise={props.deleteExercise}
      />
    ));
  }
}

export default ExerciseWrapper;
