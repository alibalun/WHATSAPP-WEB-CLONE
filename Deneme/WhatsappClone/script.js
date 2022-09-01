// This class created because fetch() data about me from JSON
class AboutStorage {
    constructor() {
        this.getDataForAbout();
    }
    getDataForAbout() {
        var nameInput = document.querySelector("#name-input-container input");
        var aboutInput = document.querySelector("#about-input-container div input");
        fetch("./data.json")
            .then(response => response.json())
            .then((data) => {
                nameInput.value = data.myProfile.myName;
                aboutInput.value = data.myProfile.myDescription;
            })
    }
}
var aStorage = new AboutStorage(); // This area will change
var counter = 0;
class Message {
    // Constructor method for create object 
    constructor() {
        return new Promise((resolve) => { // This function is running async because we are creating many object like this at the same time
            // super();
            this.id = counter;
            counter++;
            this.createItem();
            resolve();
        });
    }
    // get counter for id 
    get getCounter() {
        return counter;
    }
    // It gets #friend-message container from HTML DOM
    static get getFMessagesDiv() {
        return document.getElementById("friend-messages");
    }
    // It creates Logo item and adds to #friend-message container
    createLogoContainer() {
        return new Promise(function (resolve) {
            var divContainer = document.createElement("div");
            divContainer.id = `message-${counter}`;
            divContainer.classList.add("logo-container");
            Message.getFMessagesDiv.append(divContainer);
            resolve();
        });
    }
    createDiv(data) {
        return new Promise(function (resolve) {
            var div = document.createElement("div");
            div.classList.add("logo-sqr");
            data.append(div);
            resolve();
        });
    }
    // getThisMessageDiv() {
    //     return new Promise(function (resolve) {
    //         console.log(counter);
    //         return Message.getFMessagesDiv.children[counter - 1];
    //         resolve();
    //     });
    // }
    getThisMessageDiv() {
        return new Promise(function (resolve) {
            console.log(counter);
            var item = Message.getFMessagesDiv.children[counter - 1];
            resolve(item);
        });
    }
    // Creates image container
    createImageContainer(data) {
        return new Promise((resolve) => {
            var img = document.createElement("img");
            img.classList.add("image-container");
            img.src = `${this.messageImage}`;
            data.children[0].append(img);
            resolve();
        });
    }
    // Gets message header container in here
    createMessageHeaderContainer(data) {
        return new Promise(function (resolve) {
            var headerContainer = document.createElement("div");
            headerContainer.classList.add("message-header-container")

            data.append(headerContainer);
            resolve();
        });
    }
    // Gets message header div in here
    createMessageHeader(data) {
        return new Promise((resolve) => {
            var messageHeader = document.createElement("div");
            messageHeader.classList.add("message-header");
            messageHeader.innerText = `${this.messageHeader}`;
            data.children[1].append(messageHeader);
            resolve();
        });

    }
    // Message time seems in here
    createMessageTime(data) {
        return new Promise((resolve) => {
            var messageTime = document.createElement("span");
            messageTime.innerText = `${this.messageTime}`;
            messageTime.classList.add("message-time");
            data.children[1].children[0].append(messageTime);
            resolve();
        });
    }
    // Creates last message container
    createLastMessageContainer(data) {
        return new Promise((resolve) => { // I am usin arrow function in these area because we can access with this to normal function() 
            var lMessageContainer = document.createElement("div");
            lMessageContainer.classList.add("last-message-container");
            lMessageContainer.innerText = ` ${this.phoneNumber}: ${this.lastMessage}`;
            data.children[1].append(lMessageContainer);
            resolve();
        })
    }
    sendData() {
        return new Promise(function (resolve) {
            this.getDataFromJson("./data.json")
                .then((data) => {
                    console.log(data.groups);
                    this.setPhoneNumber = data.groups[0].phoneNumber;
                });
            resolve();
        });
    }
    async createItem() {
        await this.createLogoContainer();
        this.getThisMessageDiv()
            .then(async (data) => {
                await fetch("./data.json")
                    .then((response) => response.json())
                    .then((data) => {
                        this.setPhoneNumber = data.groups[this.id].phoneNumber;
                        this.setMessageHeader = data.groups[this.id].groupName;
                        this.setLastMessage = data.groups[this.id].lastMessage;
                        this.setMessageTime = data.groups[this.id].messageTime;
                        this.setImage = data.groups[this.id].groupImage;
                        console.log(data.groups[0].phoneNumber);
                        console.log(data.groups[0].groupName);
                        console.log(data.groups[0].messageTime);
                        console.log(data.groups[0].groupImage);
                        console.log(counter);
                    });
                await this.createDiv(data);
                await this.createImageContainer(data);
                await this.createMessageHeaderContainer(data);
                await this.createMessageHeader(data);
                await this.createMessageTime(data);
                await this.createLastMessageContainer(data);
                // await this.sendData();
            });
    }
    set setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    set setLastMessage(lastMessage) {
        this.lastMessage = lastMessage;
    }
    set setMessageTime(messageTime) {
        this.messageTime = messageTime;
    }
    set setMessageHeader(messageHeader) {
        this.messageHeader = messageHeader;
    }
    get getMessageHeader() {
        return this.messageHeader;
    }
    set setImage(messageImage) {
        this.messageImage = messageImage;
    }
}
async function callItems() {
    var msg = await new Message();
    var msg2 = await new Message();
    var msg3 = await new Message();
    var msg4 = await new Message();
    var msg5 = await new Message();
    var msg6 = await new Message();
    var msg7 = await new Message();
    var msg8 = await new Message();
    var msg9 = await new Message();
    var msg10 = await new Message();
    var msg11 = await new Message();
    var msg12 = await new Message();
    var msg13 = await new Message();
    var msg14 = await new Message();
    var msg15 = await new Message();
    var msg16 = await new Message();
    var msg17 = await new Message();
    var msg18 = await new Message();
}
callItems();


/* ****************************** */
// Event listeners

// Profile events

//******************************************************************************************** */
// Click event to open profil section
var img = document.getElementById("img");
var myProfile = document.getElementById("my-profile");
img.addEventListener("click", () => {
    myProfile.style.marginLeft = "0px";
});

// Click event to close profil section with animation
var backTo = document.querySelector("#back-to i");

//This function is adding margin left for animation
var addMargin = () => {
    myProfile.style.marginLeft = "-500px";
}
backTo.addEventListener("click", addMargin);
//************************************************************************************************ */
// Image hover when mouse came onto profil image
var profileImage = document.getElementById("profile-img");
var imageHover = document.getElementById("image-hover");

// Function for open image hover 
var imageOpenFunc = () => {
    imageHover.style.display = "block";
}
profileImage.addEventListener("mouseover", imageOpenFunc);

//function for close image hover 
var imageCloseFunc = () => {
    imageHover.style.display = "none";
}
imageHover.addEventListener("mouseout", imageCloseFunc);

var nameInputLogo = document.querySelector("#name-input-container span");
var aboutInput = document.querySelector("#about-input-container span");
var nameInputContainer = document.querySelector("#name-input-container input");

// For focus onto this input when ı clicked logo
var focusInput = (e) => {
    console.log(e.target);
    e.target.parentElement.parentElement.children[0].focus();
    smileCheckOpenForName(e); // Using here because we already added an event listener to nameInputLogo and aboutInput
}

// Open and close smile-window on my-profile section onto name input 
var smileAndCheckFor = document.querySelector(".smile-check");
var penForName = document.querySelector(".pen");
var thickFor = document.querySelectorAll(".smile-check .thick");

// .smile class(container) will seem when this function is called and pen won't seem
var smileCheckOpenForName = (e) => {
    e.target.parentElement.style.display = "none";
    e.target.parentElement.nextElementSibling.style.display = "block";
    e.target.parentElement.nextElementSibling.style.animation = "smileCheckAnimOpened .3s";
}
// .smile class(container) won't seem whne this function is class and pen will seem
var smileCheckCloseForName = (e) => {
    e.target.parentElement.style.display = "none";
    e.target.parentElement.previousElementSibling.style.display = "block";
}
//Adding listener to input logo(pen)
nameInputLogo.addEventListener("click", focusInput);
//Adding listener to about input logo(pen)
aboutInput.addEventListener("click", focusInput);

// We are travelling every item with class name is .thick and we are adding listener to all of them
thickFor.forEach((item) => {
    item.addEventListener("click", (e) => { // This listener is called when we click one of the .thicked item
        smileCheckCloseForName(e);
    });
});

// For open and close status item
var statusIcon = document.querySelector("#chatlist-status-icon"); // Accessing for open status container
var statusItem = document.querySelector("#status-container"); // This item opening and closing
var statusCloseItem = document.querySelector("#close"); // Accessing for close status container

// Animation function is activated while status container is opening
var openStatusAnimation = ()=>{
    return new Promise(()=>{
        statusItem.style.animation = "statusContainerOpeningAnim .2s";
    });
}
// Opening status container with this method
var openStatus = async ()=>{
    statusItem.style.display = "block";
    await openStatusAnimation();
}

// Closing status container with this method
var closeStatus = async ()=>{
    statusItem.style.display = "none";
}
statusIcon.addEventListener("click",openStatus);
statusCloseItem.addEventListener("click",closeStatus);



// OOP dersler https://github.com/denopas/NesneYonelimliProgramlama/blob/master/Bil201_Hafta_1.Hafta.pdf