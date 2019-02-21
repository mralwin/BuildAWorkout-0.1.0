import React from "react";
import WorkoutEditor from "./WorkoutEditor";
import SelectorDefault from "./SelectorDefault";
import CurrentDay from "./CurrentDay";
import Button from "./button";

class Selector extends React.Component {
  state = { show: SelectorDefault };

  showEditor = () => {
    this.setState({ show: WorkoutEditor });
  };

  showCurrent = () => {
    this.setState({ show: CurrentDay });
  };

  render() {
    if (this.state.show === SelectorDefault) {
      return (
        <div>
          <Button onClick={this.showCurrent}>current workout</Button>
          <Button onClick={this.showEditor}>edit workout</Button>
          <SelectorDefault />
        </div>
      );
    }

    if (this.state.show === CurrentDay) {
      return (
        <div>
          <Button onClick={this.showEditor}>edit workout</Button>
          <CurrentDay />
        </div>
      );
    }

    if (this.state.show === WorkoutEditor) {
      return (
        <div>
          <Button onClick={this.showCurrent}>current workout</Button>
          <WorkoutEditor
            day={this.props.day}
            exercises={this.props.exercises}
            addDay={this.props.addDay}
            updateDay={this.props.updateDay}
            addExercise={this.props.addExercise}
            updateExercise={this.props.updateExercise}
            deleteExercise={this.props.deleteExercise}
          />
        </div>
      );
    }
  }
}

export default Selector;
