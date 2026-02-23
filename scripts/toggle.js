// console.log("toggle");



// filter button toggle 
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


// no jobs available toggling for interview and rejected
const allCards = document.getElementById("allCards");
const emptyInterview = document.getElementById("empty-interview")
const emptyRejected = document.getElementById("empty-rejected")

function hide(){
    allCards.classList.add("hidden");
    interviewSection.classList.add("hidden");
    rejectedSection.classList.add("hidden");
    emptyInterview.classList.add("hidden");
    emptyRejected.classList.add("hidden");

}

allFilterBtn.addEventListener("click", function(){
    hide();
    allCards.classList.remove("hidden");
    jobCount.innerText = totalCount.innerText;
 
})

interviewFilterBtn.addEventListener("click", function(){
    hide();
    interviewSection.classList.remove("hidden");

    jobCount.innerText =` ${interviewList.length} out of ${totalCount.innerText}`

    if(interviewList.length == 0){
        emptyInterview.classList.remove("hidden")
    }
    else{
        emptyInterview.classList.add("hidden");
    }
})

rejectedFilterBtn.addEventListener("click", function(){
    hide();
    rejectedSection.classList.remove("hidden");

    jobCount.innerText =` ${rejectedList.length} out of ${totalCount.innerText}`

    if(rejectedList.length == 0){
        emptyRejected.classList.remove("hidden");
    }
    else{
        emptyRejected.classList.add("hidden");
    }
})






