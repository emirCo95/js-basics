let faveCourse = 'Web Development';
let coursePrice = 15;
let goals = ['Learn programming', 'Become a developer', 'Get a job'];

let variables = [faveCourse, coursePrice, goals];

// alert(variables);
// alert(goals[1]);

function findGoal(identifier, goals) {
  return goals[identifier];
}

alert(findGoal(0, goals));
