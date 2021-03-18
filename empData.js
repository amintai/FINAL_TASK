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

