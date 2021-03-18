  function getEmployee() {
    var empStatus = document.forms["employee"]["empStatus"].value
    var seekingJob = document.forms["employee"]["seekingJob"].value
    var jobTittle = document.forms["employee"]["jobTittle"].value
    var jobType = document.forms["employee"]["jobType"].value
    var jobSummary = document.forms["employee"]["jobSummary"].value
    
    alert(`${empStatus} ${seekingJob} ${jobTittle} ${jobType} ${jobSummary}`)
    // var getSkill = document.forms["employee"]["add"].value
    // alert(getSkill)
    localStorage.setItem("empStatus", empStatus);
    localStorage.setItem("seekingJob" , seekingJob);
    localStorage.setItem("jobTittle", jobTittle);
    localStorage.setItem("jobType", jobType);
    localStorage.setItem("jobSummary" , jobSummary)
    localStorage.setItem("getSkill",getSkill)

    
}

function getModelData(){

  var skill = document.forms["modelForm"]["headSkill"].value

  var type = document.forms["modelForm"]["typedSkill"].value
  localStorage.setItem("typedSkill",type)
  //document.getElementById('h3').innerHTML=skill

  var ul = document.getElementById('head')
  
  ul.appendChild(document.createTextNode(`${skill}`))
  localStorage.setItem("headSkill" , skill)
  
  var br = document.getElementById('br')
  
  
  var selected = []
  var select = document.querySelectorAll('input[type=checkbox]:checked')
  
  for(var i=0 ; i< select.length ;i++) {
    selected.push(select[i].value)
    var li = document.createElement('li',selected)
  }
  li.appendChild(document.createTextNode(selected))
  ul.appendChild(li)
  
  localStorage.setItem("selectedSkill",selected)
  //document.getElementById('h6').innerHTML=selected
  
  //console.log(totalHeadSkills)
}

// function addHeadSkill() {
//   var skill = document.forms["modelForm"]["headSkill"].value
//   var newUl = document.getElementById('newUl')
//   ul.appendChild(document.createTextNode(skill))
// }


