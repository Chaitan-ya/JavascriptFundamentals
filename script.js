fetch('data.json').then(Response => {
    if(!Response.ok){
        throw new Error('Check the data' + Response.statusText);
    }
    return Response.json();
})
.then(data =>{
        const dataList = document.querySelector('.item-List');
        data.forEach(ele => {
            const ListItem = document.createElement('li');
            ListItem.textContent = `ID = ${ele.id}, Name = ${ele.name} , Age = ${ele.age}`;
            dataList.appendChild(ListItem);
        });
})