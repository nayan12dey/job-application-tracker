console.log("toggle");

const allFilterBtn = document.getElementById("all-filter-btn")
const interviewFilterBtn = document.getElementById("interview-filter-btn")
const rejectedFilterBtn = document.getElementById("rejected-filter-btn")
// console.log(rejectedFilterBtn)

// button toggle
function toggleStyle(id){
    allFilterBtn.classList.remove("btn-primary")
    interviewFilterBtn.classList.remove("btn-primary")
    rejectedFilterBtn.classList.remove("btn-primary")

    const selectedBtn = document.getElementById(id);
    console.log(selectedBtn);
    selectedBtn.classList.add("btn-primary")
}


// card status toggling