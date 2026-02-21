// console.log("toggle");



// button toggle
const allFilterBtn = document.getElementById("all-filter-btn")
const interviewFilterBtn = document.getElementById("interview-filter-btn")
const rejectedFilterBtn = document.getElementById("rejected-filter-btn")
// console.log(rejectedFilterBtn)

function toggleStyle(id){
    allFilterBtn.classList.remove("btn-primary")
    interviewFilterBtn.classList.remove("btn-primary")
    rejectedFilterBtn.classList.remove("btn-primary")

    const selectedBtn = document.getElementById(id);
    console.log(selectedBtn);
    selectedBtn.classList.add("btn-primary")
}


// no jobs available toggling
const allCards = document.getElementById("allCards");
const emptyInterview = document.getElementById("empty-interview")
const emptyRejected = document.getElementById("empty-rejected")

function hide(){
    allCards.classList.add("hidden");
    emptyInterview.classList.add("hidden");
    emptyRejected.classList.add("hidden");
}

allFilterBtn.addEventListener("click", function(){
    hide();
    allCards.classList.remove("hidden");
})

interviewFilterBtn.addEventListener("click", function(){
    hide();
    emptyInterview.classList.remove("hidden");
})

rejectedFilterBtn.addEventListener("click", function(){
    hide();
    emptyRejected.classList.remove("hidden");
})

