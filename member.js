function skillsMember() {
  var skills = this.skills;
  var skillNames = Object.keys(skills);
  var skillLevels = Object.values(skills);
  var skillValues = Object.entries(skills);
  console.log(skillNames);
  console.log(skillLevels);
  console.log(skillValues);
}
