import {useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from './react-router-dom'

 export default function Protected({childern,authentication = true}) {

cosnt navigate = useNavigate();
const [loader, setLoader] = useState();
const authStatus = useSelector(state=> state.auth.status)

useEffect(()=>{
  false && flase
if(authentication && authStatus !== authentication)
{navigate('/login')}
else if(!authentication && authStatus !== authentication){
  navigate('/')
}
},[authStatus,navigate,authentication])

  return loader ? <h1>Loading...</h1>: <>{childern}</>
  
}

export export default  AuthLayout()
