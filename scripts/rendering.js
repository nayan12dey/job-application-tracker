// console.log("rendering");


let interviewList = [];
let rejectedList = [];

const interviewSection = document.getElementById("interview-section")

allCards.addEventListener("click", function () {
    // console.log(event.target);

    if (event.target.classList.contains("interview-btn")) {
        const parentNode = event.target.parentNode.parentNode.parentNode;
        const companyName = parentNode.querySelector(".company").innerText;
        const jobRole = parentNode.querySelector(".role").innerText;
        const location = parentNode.querySelector(".location").innerText;
        const status = parentNode.querySelector(".current-status").innerText;
        const description = parentNode.querySelector(".description").innerText;
        const interviewBtn = parentNode.querySelector(".interview-btn");
        const rejectedBtn = parentNode.querySelector(".rejected-btn");
        // console.log(location);

        const cardInfo = {
            companyName,
            jobRole,
            location,
            status,
            description,
            interviewBtn,
            rejectedBtn
        }

        // console.log(cardInfo);

        const cardExist = interviewList.find(item => item.companyName == cardInfo.companyName)

        if (!cardExist) {
            interviewList.push(cardInfo);
        }

        
        randerInterview();
    }
})


// render function for interview card in interview section
function randerInterview() {
    interviewSection.innerHTML = ""

    if(interviewList.length != 0){
        emptyInterview.classList.add("hidden");
    }
    else{
        emptyInterview.classList.remove("hidden");
    }

    for (let interview of interviewList) {
        console.log(interview);
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
                class="w-10 h-10 border-2 border-gray-200 text-gray-500 rounded-full flex justify-center items-center cursor-pointer">
                <i class="fa-regular fa-trash-can"></i>
            </div>

        `

        interviewSection.appendChild(div);
    }
}


