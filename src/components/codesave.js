{/*
          <ExerciseWrapper
            key={key}
            index={key}
            day={this.props.index}
            details={this.props.day.exercises[key]}
            updateExercise={this.props.updateExercise}
            deleteExercise={this.props.deleteExercise}
          />
          */}

<Test
  key={key}
  details={this.props.day[`${this.props.index}`].exercises}
/>

<EditExercise
  key={key}
  index={key}
  day={this.props.index}
  details={this.props.day[`${this.props.index}`].exercises}
  updateExercise={props.updateExercise}
  deleteExercise={props.deleteExercise}
/>

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