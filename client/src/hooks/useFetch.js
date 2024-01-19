import { useState , useEffect} from "react"
import { makeRequest } from "../../makeRequest"

const useFetch= (url)=>{

    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
    useEffect(() => {
        const fetchData=async ()=>{
          try {
            setLoading(true);
            // console.log(process.env.local)
            const res = await makeRequest.get(url)
            setData(res.data.data)
            // console.dir(res)
          } catch (error) {
            setError(true)
            // console.log(error)
          }
          setLoading(false)
        }
        fetchData();
        
    }, [url])
    // console.log(data)
      return {data,loading,error}
}
export default useFetch;
