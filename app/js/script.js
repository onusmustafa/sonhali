let add = () => {
    let name = document.querySelector('.comment #name'); 
    let comment = document.querySelector('.comment #comment'); 
     
    if (name.value !== "" && comment.value != "") { 
     
    let list = document.querySelector('.list'); 
    let time = new Date();
    let d = time.getDate(); 
    let m = time.getMonth(); 
    let y = time.getFullYear();
    let now =d +"/" + m + "/"+ y;
    let list_item = document.createElement ("l1"); 
     
    list_item.innerHTML = `
    <span>
    <p>${name.value} ${now}</p> 
    </span>
    <p>${comment.value}</p>
    `;
    list.append(list_item); 
    }
     
    if (name.value == "" || comment.value == "") {
    let list = document.querySelector('.list'); 
    let list_item = document.createElement ("l2"); 
    var warn = 'Please enter name & comment!';  
    list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
    list.append(list_item); 
     }
    name.value=comment.value = "";
    }


    