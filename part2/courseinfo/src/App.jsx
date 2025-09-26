const Course = ({ course }) =>
  <>
    <Header name={course.name} />
    <Content parts={course.parts}>
    </Content>
    <Total parts={course.parts} />
  </>

const Header = ({ name }) => <h1>{name}</h1>

const Content = ({ parts }) => (
  <div>
    {
      parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
  </div>
)

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({ parts }) => (
  <p><strong>Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</strong></p>
)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
