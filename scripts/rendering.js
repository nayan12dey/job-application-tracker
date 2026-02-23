// console.log("rendering");


let interviewList = [];
let rejectedList = [];
let activeFilter = "all";

const interviewSection = document.getElementById("interview-section");
const rejectedSection = document.getElementById("rejected-section");

allCards.addEventListener("click", function () {
    // console.log(event.target);

    // event after clicked interview button
    if (event.target.classList.contains("interview-btn")) {

        const parentNode = event.target.parentNode.parentNode.parentNode;
        parentNode.querySelector(".current-status").innerText = "Interview";
        parentNode.querySelector(".current-status").classList.remove("bg-error");
        parentNode.querySelector(".current-status").classList.add("bg-success");


        const companyName = parentNode.querySelector(".company").innerText;
        const jobRole = parentNode.querySelector(".role").innerText;
        const location = parentNode.querySelector(".location").innerText;
        // const status = parentNode.querySelector(".current-status").innerText;
        const description = parentNode.querySelector(".description").innerText;
        const interviewBtn = parentNode.querySelector(".interview-btn");
        const rejectedBtn = parentNode.querySelector(".rejected-btn");
        // console.log(location);

        const cardInfo = {
            companyName,
            jobRole,
            location,
            status: "Interview",
            description,
            interviewBtn,
            rejectedBtn
        }

        // console.log(cardInfo);

        const cardExist = interviewList.find(item => item.companyName == cardInfo.companyName)

        if (!cardExist) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);


        renderInterview();
        renderRejected();
    }



    // event after clicked rejected button
    else if (event.target.classList.contains("rejected-btn")) {
        const parentNode = event.target.parentNode.parentNode.parentNode;

        parentNode.querySelector(".current-status").innerText = "Rejected"
        parentNode.querySelector(".current-status").classList.remove("bg-success");
        parentNode.querySelector(".current-status").classList.add("bg-error");



        const companyName = parentNode.querySelector(".company").innerText;
        const jobRole = parentNode.querySelector(".role").innerText;
        const location = parentNode.querySelector(".location").innerText;
        // const status = parentNode.querySelector(".current-status").innerText;
        const description = parentNode.querySelector(".description").innerText;
        // const interviewBtn = parentNode.querySelector(".interview-btn");
        // const rejectedBtn = parentNode.querySelector(".rejected-btn");


        const cardInfo = {
            companyName,
            jobRole,
            location,
            status: "Rejected",
            description,
            // interviewBtn,
            // rejectedBtn
        }


        const cardExist = rejectedList.find(item => item.companyName == cardInfo.companyName)

        if (!cardExist) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)

        renderInterview();
        renderRejected();
    }

    else if (event.target.closest(".delete-btn")) {
        const card = event.target.closest(".newCard");
        console.log(card);

        // const card = parentNode;
        // console.log(card);

        card.remove();



        renderInterview();
        renderRejected();
        calculateCount();



    }

})


// card toggle between interview and rejected section
interviewSection.addEventListener("click", function (event) {


    if (event.target.classList.contains("interview-btn")) {
        const parentNode = event.target.parentNode.parentNode.parentNode;
        parentNode.querySelector(".current-status").innerText = "Interview";
        parentNode.querySelector(".current-status").classList.remove("bg-error");
        parentNode.querySelector(".current-status").classList.add("bg-success");


        const companyName = parentNode.querySelector(".company").innerText;
        const jobRole = parentNode.querySelector(".role").innerText;
        const location = parentNode.querySelector(".location").innerText;
        // const status = parentNode.querySelector(".current-status").innerText;
        const description = parentNode.querySelector(".description").innerText;
        // const interviewBtn = parentNode.querySelector(".interview-btn");
        // const rejectedBtn = parentNode.querySelector(".rejected-btn");

        const cardInfo = {
            companyName,
            jobRole,
            location,
            status: "Interview",
            description,
            interviewBtn,
            rejectedBtn
        }

        // console.log(cardInfo);

        const cardExist = interviewList.find(item => item.companyName == cardInfo.companyName)

        if (!cardExist) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);


        renderInterview();
        renderRejected();




    }

    else if (event.target.classList.contains("rejected-btn")) {
        const parentNode = event.target.parentNode.parentNode.parentNode;

        parentNode.querySelector(".current-status").innerText = "Rejected"
        parentNode.querySelector(".current-status").classList.remove("bg-success");
        parentNode.querySelector(".current-status").classList.add("bg-error");



        const companyName = parentNode.querySelector(".company").innerText;
        const jobRole = parentNode.querySelector(".role").innerText;
        const location = parentNode.querySelector(".location").innerText;
        // const status = parentNode.querySelector(".current-status").innerText;
        const description = parentNode.querySelector(".description").innerText;
        // const interviewBtn = parentNode.querySelector(".interview-btn");
        // const rejectedBtn = parentNode.querySelector(".rejected-btn");


        const cardInfo = {
            companyName,
            jobRole,
            location,
            status: "Rejected",
            description,
            // interviewBtn,
            // rejectedBtn
        }


        const cardExist = rejectedList.find(item => item.companyName == cardInfo.companyName)

        if (!cardExist) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)

        renderInterview();
        renderRejected();

    }
})


rejectedSection.addEventListener("click", function () {
    // console.log('rejected section clicked');


    if (event.target.classList.contains("interview-btn")) {
        const parentNode = event.target.parentNode.parentNode.parentNode;
        parentNode.querySelector(".current-status").innerText = "Interview";
        parentNode.querySelector(".current-status").classList.remove("bg-error");
        parentNode.querySelector(".current-status").classList.add("bg-success");


        const companyName = parentNode.querySelector(".company").innerText;
        const jobRole = parentNode.querySelector(".role").innerText;
        const location = parentNode.querySelector(".location").innerText;
        // const status = parentNode.querySelector(".current-status").innerText;
        const description = parentNode.querySelector(".description").innerText;
        // const interviewBtn = parentNode.querySelector(".interview-btn");
        // const rejectedBtn = parentNode.querySelector(".rejected-btn");

        const cardInfo = {
            companyName,
            jobRole,
            location,
            status: "Interview",
            description,
            // interviewBtn,
            // rejectedBtn
        }

        // console.log(cardInfo);

        const cardExist = interviewList.find(item => item.companyName == cardInfo.companyName)

        if (!cardExist) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);


        renderInterview();
        renderRejected();
    }

    else if (event.target.classList.contains("rejected-btn")) {
        const parentNode = event.target.parentNode.parentNode.parentNode;

        parentNode.querySelector(".current-status").innerText = "Rejected"
        parentNode.querySelector(".current-status").classList.remove("bg-success");
        parentNode.querySelector(".current-status").classList.add("bg-error");



        const companyName = parentNode.querySelector(".company").innerText;
        const jobRole = parentNode.querySelector(".role").innerText;
        const location = parentNode.querySelector(".location").innerText;
        // const status = parentNode.querySelector(".current-status").innerText;
        const description = parentNode.querySelector(".description").innerText;
        // const interviewBtn = parentNode.querySelector(".interview-btn");
        // const rejectedBtn = parentNode.querySelector(".rejected-btn");


        const cardInfo = {
            companyName,
            jobRole,
            location,
            status: "Rejected",
            description,
            // interviewBtn,
            // rejectedBtn
        }


        const cardExist = rejectedList.find(item => item.companyName == cardInfo.companyName)

        if (!cardExist) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)

        renderInterview();
        renderRejected();


    }
})





// render function for interview card in interview section
function renderInterview() {
    interviewSection.innerHTML = ""

    if (interviewList.length == 0) {
        emptyInterview.classList.remove("hidden");
    }
    else {
        emptyInterview.classList.add("hidden");

        for (let interview of interviewList) {
            // console.log(interview);
            let div = document.createElement("div");
            div.className = "border border-gray-300 p-4 flex justify-between rounded-md mb-4"
            div.innerHTML = `
            <div class="space-y-4">
                    <div>
                        <h2 class="company text-blue-900 font-bold text-xl">${interview.companyName}</h2>
                        <p class="role text-gray-500">${interview.jobRole}</p>
                    </div>

                    <div>
                        <p class="location text-gray-500">${interview.location}</p>
                    </div>

                    <div class="space-y-2">
                        <button class="current-status bg-success p-2 rounded-md text-blue-900 font-semibold">${interview.status}</button>
                        <p class="description">${interview.description}</p>
                    </div>

                    <div class="flex gap-4">
                        <button class="interview-btn btn btn-outline btn-success">Interview</button>
                        <button class="rejected-btn btn btn-outline btn-error" id="">Rejected</button>
                    </div>
            </div>

            <!-- job card delete btn -->
            <div
                class="w-10 h-10 sm:border-2 border-gray-200 text-gray-500 rounded-full flex justify-center items-center cursor-pointer">
                <i class="fa-regular fa-trash-can"></i>
            </div>

        `

            interviewSection.appendChild(div);
        }

        calculateCount()
    }


}



// render function for interview card in interview section
function renderRejected() {
    rejectedSection.innerHTML = "";

    if (rejectedList.length == 0) {
        emptyRejected.classList.remove("hidden");
    }
    else {
        emptyRejected.classList.add("hidden");
        
        for (let rejected of rejectedList) {
            // console.log(rejected);

            let div = document.createElement("div");
            div.className = "border border-gray-300 p-4 flex justify-between rounded-md mb-4"
            div.innerHTML = `
            <div class="space-y-4">
                    <div>
                        <h2 class="company text-blue-900 font-bold text-xl">${rejected.companyName}</h2>
                        <p class="role text-gray-500">${rejected.jobRole}</p>
                    </div>

                    <div>
                        <p class="location text-gray-500">${rejected.location}</p>
                    </div>

                    <div class="space-y-2">
                        <button class="current-status bg-error p-2 rounded-md text-blue-900 font-semibold">${rejected.status}</button>
                        <p class="description">${rejected.description}</p>
                    </div>

                    <div class="flex gap-4">
                        <button class="interview-btn btn btn-outline btn-success">Interview</button>
                        <button class="rejected-btn btn btn-outline btn-error" id="">Rejected</button>
                    </div>
            </div>

            <!-- job card delete btn -->
            <div
                class="w-10 h-10 sm:border-2 border-gray-200 text-gray-500 rounded-full flex justify-center items-center cursor-pointer">
                <i class="fa-regular fa-trash-can"></i>
            </div>
        
        `

            rejectedSection.appendChild(div);
        }

        calculateCount();
    }


}




const totalCount = document.getElementById("totalCount");
const jobCount = document.getElementById("jobCount");
const allCardSection = document.getElementById("allCards");
const interviewCount = document.getElementById("interviewCount")
const rejectedCount = document.getElementById("rejectedCount")


// console.log(allCards)

// calculate count
function calculateCount() {
    totalCount.innerText = allCardSection.children.length;

    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    if (activeFilter == "all") {
        jobCount.innerText = totalCount.innerText;
    }
    else if (activeFilter == "interview") {
        jobCount.innerText = `${interviewList.length} out of ${totalCount.innerText}`
    }
    else if (activeFilter == "rejected") {
        jobCount.innerText = ` ${rejectedList.length} out of ${totalCount.innerText}`
    }

    // console.log(interviewCount.innerText);




}

calculateCount()

