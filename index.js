// console.log('connected');

// const { createElement } = require("react");

           
function getElement(id){
    const element = document.getElementById(id);
    return element;
}

                 //Heart Count

    let count = 0;
const counter = getElement('heart-counter');
const heartButtons = document.getElementsByClassName('btn-heart');

    for(const heartButton of heartButtons){
        // console.log(heartButton);
        heartButton.addEventListener('click', function(){
            count++;
            counter.innerText = count;
        })
    }

            // Copy Count + copy number & show alert message
    let copyCount = 0;
const copyCounter = getElement('copy-counter');
const copyButtons = document.getElementsByClassName('btn-copy');

    for(const copyButton of copyButtons){
        copyButton.addEventListener('click',function(){

        copyCount++;
        copyCounter.innerText = copyCount; 

           //Number-Copy //number ta khuje ber korbo
        const card = copyButton.closest('.shadow');
        const number = card.querySelector('.card-num').innerText

            //clipboard theke number copy korbo
            navigator.clipboard.writeText(number)
                .then(() => {
                    alert(`✅Number ${number} copied`);
                })
        })
    }
 
                        // Call Button Click 

const coinCount = getElement('coin-count');
// const callHistoryContainer = getElement('call-history-container');
const callButtons = document.getElementsByClassName('btn-call');
const clearBtn = document.querySelector('.btn-clear');
const historyList = document.getElementById('history-list');

let coins = parseInt(coinCount.innerText);

    for(const callBtn of callButtons){
        // console.log(callBtn);
        callBtn.addEventListener('click', function(){
            const card = callBtn.closest('.card-container');
            // console.log(card);
            const title = card.querySelector('.card-title').innerText;
            const number = card.querySelector('.card-num').innerText
            // console.log(title);

            if(coins >= 20){
                coins = coins - 20;
                coinCount.innerText = coins;
                alert(`📞Calling ${title}, ${number}..Emergency Services`);
            }
            else if(coins < 20){
                alert(`❌You have no sufficient Coin, If you want to call, You need minimum 20 coin.`);
            }
            /// date
            const localTime = new Date().toLocaleTimeString() ;
            // const p = document.createElement('p');

            // p.innerText = `${title} ${number}  ${localTime}`;

            // historyList.appendChild(p); ------------
            const historyEntry = document.createElement('div');
            historyEntry.className = ("call-history-list flex justify-between items-center bg-[#F5FFF6] p-2 rounded-md");

            // Right side e --> Name + Number
            const rightDiv = document.createElement('div')
            const callHistoryTitle = document.createElement('h1'); 
            // callHistoryTitle.classList.add('call-history-title');
             callHistoryTitle.className = ('text-[17px] font-semibold');
            callHistoryTitle.innerText = title;

            const callHistoryNumber = document.createElement('p');
            // callHistoryNumber.classList.add('call-history-number')
            callHistoryNumber.className = ("font-semibold text-gray-500");
            callHistoryNumber.innerText = number;

            rightDiv.appendChild(callHistoryTitle);
            rightDiv.appendChild(callHistoryNumber);

            // Left side e --> Time
            const leftDiv = document.createElement('div');
            const callHistoryTime =document.createElement('p')
            // callHistoryTime.classList.add('call-history-time');
            callHistoryTime.className = ("text-[16px] font-semibold text-gray-700");
            callHistoryTime.innerText = localTime;

            leftDiv.appendChild(callHistoryTime);


            
            historyEntry.appendChild(rightDiv);
            historyEntry.appendChild(leftDiv);

            historyList.appendChild(historyEntry);
        })
    }

                    // Clear History 
  clearBtn.addEventListener('click', function(){
        historyList.innerHTML = '';
  });