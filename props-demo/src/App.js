import './App.css';
import Prop from './props';

let name = "Smit Ghevariya"
let arr = [1,2,3,'Smit','G']
let obj = {
  name:"SMIT",
  email:"smit107@gmail.com"
}

let ob_all = [
  {student_name:'Smit',roll_no:10,class:'A'},
  {student_name:'Jay',roll_no:6,class:'C'},
  {student_name:'Maulik',roll_no:5,class:'E'},
  {student_name:'Arpan',roll_no:12,class:'D'},
  {student_name:'Kano',roll_no:15,class:'B'},
]

function App() {
  return (
    <>
      <h1>{name}</h1>

      <ul>
        {
          arr.map((val,indax,arr)=>{
            return(
              <li>{val} - {indax} - {arr}</li>
            )
          })
        }
      </ul>

      <h1>{obj.name} - {obj.email}</h1>

      <table border={1} cellPadding={10} cellSpacing={10} width={500} align='center'>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Roll.no</th>
          <th>Class</th>
        </tr>
        {
          ob_all.map((std,id)=>{
            return(
              <tr>
                <td>{id+1}</td>
                <td>{std.student_name}</td>
                <td>{std.roll_no}</td>
                <td>{std.class}</td>
              </tr>
            )
          })
        }
      </table>

      <hr />
      

      {/* <table border={1} cellPadding={10} cellSpacing={10} width={500} align='center'>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Roll.no</th>
          <th>Class</th>
        </tr>
        {
          ob_all.map((item,id)=>{
            return(
              <Prop name={item.student_name} roll={item.roll_no} class={item.class} id={id} />
            )
          })
        }
      </table> */}

      <hr />

      <Prop mokalu={ob_all} />

    </>
  );
}

export default App;
