var projectTemplate = require('./../../views/workbench-templates/project.jade');
var newElem = require('./make-new-element-util.js');

module.exports = (userData, callback) => {
  var projectContainer = document.getElementById("projects");
  userData.projects.map(function(project) {
    var numProShots = project.progressShots.length;
    project.progressShots = project.progressShots.reverse();
    projectContainer.appendChild(newElem('div', ['.project-box'], projectTemplate, project));
  });
}
