import axios from 'axios'	

export const showWorkshops=()=>{
	axios.get('http://localhost:8001/api/workshop').then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

}
 