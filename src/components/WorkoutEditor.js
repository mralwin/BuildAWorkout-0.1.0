import React from "react";
import Day from "./day";
import Button from "./button";

class WorkoutEditor extends React.Component {
  handleClick = () => {};
  render() {
    const props = this.props;
    return (
      <div>
        <h2> i am a workout editor </h2>
        {Object.keys(this.props.day).map(key => (
          <Day
            key={key}
            index={key}
            exercises={props.exercises}
            day={props.day}
            updateDay={this.props.updateDay}
            addExercise={props.addExercise}
            updateExercise={props.updateExercise}
            deleteExercise={props.deleteExercise}
          />
        ))}
        <Button onClick={this.props.addDay}>Add Day</Button>
      </div>
    );
  }
}

export default WorkoutEditor;
