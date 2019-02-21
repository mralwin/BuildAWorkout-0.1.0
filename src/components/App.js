import React from "react";
import Selector from "./Selector";

class App extends React.Component {
  state = {
    day: {},
    exercises: {}
  };

  addDay = () => {
    const day = { ...this.state.day };
    day[`${Date.now()}`] = { name: null, exercises: {} };
    this.setState({
      day: day
    });
  };

  updateDay = (key, updatedName) => {
    const day = { ...this.state.day };
    day[key].name = updatedName;
    this.setState({ day: day });
  };

  addExersise = exercise => {
    const exercises = { ...this.state.exercises };
    const day = { ...this.state.day };
    const gName = `exercise${Date.now()}`;

    day[`${exercise.day}`].exercises[`${gName}`] = gName;
    exercises[`${gName}`] = exercise;
    this.setState({
      day: day
    });
    this.setState({
      exercises: exercises
    });
  };

  updateExercise = (index, name, updatedExercise) => {
    const exercises = { ...this.state.exercises };
    exercises[index][name] = updatedExercise;
    this.setState({ exercises: exercises });
  };

  deleteExercise = (days, index) => {
    const day = { ...this.state.day };
    const exercises = { ...this.state.exercises };
    delete day[days].exercises[index];
    exercises[index].count -= 1;
    this.setState({ day: day });

    if (exercises[index].count == 0) {
      delete exercises[index];
    }
    /**/

    this.setState({ exercises: exercises });
  };

  render() {
    return (
      <div>
        <h2>i am a app</h2>
        <Selector
          day={this.state.day}
          exercises={this.state.exercises}
          addDay={this.addDay}
          updateDay={this.updateDay}
          addExercise={this.addExersise}
          updateExercise={this.updateExercise}
          deleteExercise={this.deleteExercise}
        />
      </div>
    );
  }
}

export default App;
