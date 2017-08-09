const checkboxses = document.querySelectorAll('.list-block li input');
const listBlock = document.querySelector('.list-block');
const outPut = document.querySelector(('.list-block h3 output'));
outPut.value = getComleted();

function getComleted(){
    return Array.from(checkboxses).reduce((sum, item) => {
        return sum = item.checked == true ? ++sum : sum;
    }, 0);
}
for(let i = 0; i < checkboxses.length; i++){
    checkboxses[i].addEventListener('click', countTasks);
}
function countTasks(){
    let tasks = getComleted();
    outPut.value = tasks;
    if(tasks == checkboxses.length){
        listBlock.classList.add('complete');
    }
    else {
        listBlock.classList.remove('complete') ;
    }

}

/**
 * Created by Alla on 7/19/2017.
 */
