// console.log("count connect");

const totalCount = document.getElementById("totalCount");
const jobCount = document.getElementById("jobCount");
const allCardSection = document.getElementById("allCards");
// console.log(allCards)

// calculate count
function calculateCount(){
    totalCount.innerText = allCardSection.children.length;
    jobCount.innerText = allCardSection.children.length;
    
}

calculateCount()