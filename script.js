const childrenOfWrapperID = document.querySelector("#wrapper");
// console.log(childrenOfWrapperID.children);
// console.log(childrenOfWrapperID.children.length);

const childrenOfWrapper = childrenOfWrapperID.children;

let len = [];
for (let child of childrenOfWrapper) {
    // console.log(child);
    len.push(child);
}

// console.log(len);

//..

function getTheMostClass(arr) {
    let mostClassObj = new Object();
    let classCount = new Array();
    //..
    for (let i of arr) {
        classCount.push(i.classList.length);
        const withMaxClassNUm = Math.max(...classCount);
        //..
        if (i.classList.length === withMaxClassNUm) {
            mostClassObj.name = i;
            mostClassObj.length = withMaxClassNUm;
        }
    }
    return mostClassObj;
}

console.log(getTheMostClass(len));
