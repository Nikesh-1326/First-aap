import {useState} from "react";
   function Registeration(){
      const[form,setForm] = useState({
         name:'',
          rollNo:0,
          emailid:'',
          password:''

      })


      return(
         <div>
            <form>

            </form>
             <labels>Name</labels>
             <input type = 'text'value={form.name} onchange/>
         </div>
      )
    
   }

   export default Registration