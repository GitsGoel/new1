export default function RecommendedCourses() {
  const courses = [
    'Frontend Fundamentals',
    'JavaScript Mastery',
    'React in Depth',
    'Backend with Node.js'
  ];

  return (
    <ul>
      {courses.map((course, idx) => (
        <li key={idx} className="course-item">{course}</li>
      ))}
    </ul>
  );
}