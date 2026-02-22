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


// toggle card clicked on interview and rejected
allCards.addEventListener("click", function(){

    console.log(event.target.classList.contains("interview-btn"))
    if(event.target.classList.contains("interview-btn")){
        const parentNode = event.target.parentNode.parentNode.parentNode;
        parentNode.querySelector(".current-status").innerText = "Interview";
        parentNode.querySelector(".current-status").classList.remove("bg-error");
        parentNode.querySelector(".current-status").classList.add("bg-success");
    }

    if(event.target.classList.contains("rejected-btn")){
        const parentNode = event.target.parentNode.parentNode.parentNode;
        parentNode.querySelector(".current-status").innerText = "Rejected"
         parentNode.querySelector(".current-status").classList.remove("bg-success");
        parentNode.querySelector(".current-status").classList.add("bg-error");
    }
})



