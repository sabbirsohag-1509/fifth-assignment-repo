// console.log('connected');

           
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

            //number ta khuje ber korbo
        const card = copyButton.closest('.shadow');
        const number = card.querySelector('.text-2xl').innerText

            //clipboard theke number copy korbo
            navigator.clipboard.writeText(number)
                .then(() => {
                    alert(`✅Number ${number} copied`);
                })
        })
    }
 