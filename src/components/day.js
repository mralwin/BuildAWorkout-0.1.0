import React from "react";
import Modal from "./Modal";
import AddExerciseForm from "./AddExerciseForm";
import ExerciseWrapper from "./ExerciseWrapper";
import EditExercise from "./EditExercise";
import Test from "./test";

class Day extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleChange = event => {
    const updatedName = event.currentTarget.value;
    this.props.updateDay(this.props.index, event.currentTarget.value);
  };

  render() {
    const props = this.props;
    const raw = this.props.day[`${this.props.index}`];
    const allowed = this.props.index;
    const filtered = Object.keys(raw)
      .filter(key => allowed.includes(key))
      .reduce((obj, key) => {
        obj[key] = raw[key];
        return obj;
      }, {});

    return (
      <div className="a">
        <h2>I am {this.props.day[`${this.props.index}`].name}</h2>

        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.day[`${this.props.index}`].name}
        />

        {Object.keys(this.props.day[`${this.props.index}`].exercises).map(
          key => (
            <Test
              key={key}
              index={key}
              day={this.props.index}
              details={this.props.exercises}
              updateExercise={props.updateExercise}
              deleteExercise={props.deleteExercise}
            />
          )
        )}
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <AddExerciseForm
            addExercise={this.props.addExercise}
            day={this.props.index}
          />
        </Modal>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </div>
    );
  }
}

export default Day;
