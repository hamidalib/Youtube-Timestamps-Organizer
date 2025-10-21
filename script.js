let listArea = document.getElementById("list-area");
// let itemDiv = document.getElementById("item-div");
// let itemTitle = document.getElementById("item-title");
let timestamp = document.getElementById("timestamp");

const addTimeBtn = document.getElementById("add-time-btn");
let titleInputEl = document.getElementById("title-input-el");
let timestampsList = [];

// Adding time on click functionality
addTimeBtn.addEventListener("click", function () {
  //   console.log("btn clicked");
  addTimestampItem(); // Take input -> make object and then -> push into array
  renderList();
});

function addTimestampItem() {
  console.log(`----------------------------------`);
  console.log(`"addTimestampItem" function called`);

  let itemObj = {
    stampTitle: titleInputEl.value,
    actualStamp: timestamp.textContent,
  };
  titleInputEl.value = "";
  timestampsList.push(itemObj);
  console.log(timestampsList);
}

function renderList() {
  console.log(`"renderList" function called`);

  // clear old items before rendering again
  listArea.innerHTML = "";

  for (let i = 0; i < timestampsList.length; i++) {
    let genTitle = timestampsList[i].stampTitle;
    let genStamp = timestampsList[i].actualStamp;

    // create new item container
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    // create title element
    let itemTitle = document.createElement("h3");
    itemTitle.classList.add("item-title");
    itemTitle.textContent = genTitle;

    // create timestamp element
    let itemTime = document.createElement("p");
    itemTime.classList.add("timestamp");
    itemTime.textContent = genStamp;

    // append to itemDiv
    itemDiv.appendChild(itemTitle);
    itemDiv.appendChild(itemTime);

    // append to list area
    listArea.appendChild(itemDiv);
  }
}
