import './Login.css'
const Login = () => {
  
  return(
     
     <>
     <div6>
     <div1 className='flex flex-wrap bg-white'>
        <h3>The details of an Appointment:</h3>
     </div1>
     
     <div className='flex flex-wrap bg-blue-300 ml-20 mr-20 mb-20 mt-20'>
      <form action='/action_page.php'>
         <div2 >
         The date of your Appointment<br></br>
        <input type="date"></input><br></br>
        Docter Name<br></br>
        <input type="text"placeholder="First Name" name="username" ></input><br></br>
        </div2>

        <div className='flex items-center mb-4 break-after-column'>
        How did you do the schedule<br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "></input>
        <label>Online</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>Offline</label><br></br>
        </div>
        

        <div className='flex items-center mb-4'>
        Please evaluate how accurate you received:<br></br>
        <label >Diagnosis:</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " ></input>
        <label>Very Good</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "></input>
        <label>Good</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>Fair</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>Poor</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>Very Poor</label><br></br>
        </div>
       
        <div className='flex items-center mb-4'>
        <label>Treatment:</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "></input>
        <label>Very Good</label><br></br>
        <input type="radio"id="one"name="username"value="online"className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>Good</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>Fair</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>Poor</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>Very Poor</label><br></br>
        </div>

        <div className='flex items-center'>
        <label>Examination:</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>Very Good</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>Good</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>Fair</label><br></br>
        <input type="radio"id="one"name="username"value="online"className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>Poor</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>Very Poor</label><br></br>
        </div>

        <div>
        <label>Did your doctor:</label><br></br>
        </div>

        <div className='flex items-center mb-4 '>
        <label>Shake your hand?</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>Yes</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>No</label><br></br>
        </div>
         
        <div className='flex items-center mb-4'>
        <label>Ask how you are doing?</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>Yes</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>No</label><br></br>
        </div>

        <div className='flex items-center mb-4'>
        <label>Call you by name?</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>Yes</label><br></br>
        <input type="radio"id="one"name="username"value="online" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label>No</label><br></br>
        </div>


        <div>
        <button type="submit" form="nameform" value="Submit" className='bg-white'>Submit</button>
        </div>
        

      </form>
     </div>
     </div6>
     
     </> 
  ) 
  
  };
  
  export default Login;