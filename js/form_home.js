window.addEventListener('DOMContentLoaded' ,(event) =>{
      createInnerHtml();
});


const createInnerHtml=() =>{

    const innerHtml = `
    <tr>
    <th></th>
    <th>NAME</th>
    <th>GENDER</th>
    <th>DEPARTMENT</th>
    <th>SALARY</th>
    <th>START DATE</th>
    <th>ACTION</th>

</tr>
<tr>
<td>
    <img class="profile" alt="" src="../assets/formal1.jpg">

</td>

<td>NARAYAN MADHAVAN </td>
<td>MALE</td>
 <td>
     <div class="dept-label">HR</div>
     <div class="dept-label">FINANCE</div>
</td>

<td>70000</td>
<td>1 NOVEMBER 2020</td>
 <td>
     <img id="1" onclick="remove(this)" alt="delete">
     <img id="1" onclick="update(this)" alt="edit">
 </td>

</tr> 
    `;
    
    document.querySelector('#table-display').innerHTML=innerHtml;

    
}