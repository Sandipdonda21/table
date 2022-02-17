const addTable =()=>{
    let table_code = `<table class ="table1 border-2">
    <thead>
      <th>User ID</th>
      <th>Full Name</th>
      <th>Date of Birth</th>
      <th>Age</th>
      <th>Status</th>
    </thead>
    <tbody id="table1">
    </tbody>
  </table>`
  document.getElementById('table_container').innerHTML += table_code;
}

const addUser =(event) =>{
    event.preventDefault();
    var elements = document.getElementById("myForm").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length-1 ; i++){
        var item = elements.item(i);
        if(item.name!='status')
        obj[item.name] = item.value;
        else{
            if(item.checked)
            obj[item.name] = 'Inactive';
            else
            obj[item.name] = 'Active'
        }
        
    }

    // find the age from the date of birth

    var dob = new Date(obj.bdate)
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff); 
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    obj['age'] = age;

    var userCode = `<tr>
                        <td>${obj.userid}</td>
                        <td>${obj.fname}</td>
                        <td>${obj.bdate}</td>
                        <td>${obj.age}</td>
                        <td>${obj.status}</td>
                    </tr>`
    if(document.getElementById('table1'))
    document.getElementById('table1').innerHTML += userCode;
    else
    alert('please add table before adding data')
}