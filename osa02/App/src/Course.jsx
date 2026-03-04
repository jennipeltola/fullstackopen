const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Header = ({ course }) => {
    return (
        <div>
            <h1>{course.name}</h1>
        </div>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part =>
                <Part key={part.name} name={part.name} exercises={part.exercises}
                />
            )}
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.name} {props.exercises}</p>
        </div>
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce(
        (sum, parts) => sum + parts.exercises, 0
    )

    return (
        <div>
            <p>Total of {total} exercises
            </p>
        </div>
    )
}

export default Course