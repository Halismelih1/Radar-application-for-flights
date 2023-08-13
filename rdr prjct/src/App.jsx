import MapView from "./Pages/MapView"
import ListView from "./Pages/ListView"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import { useDispatch, useSelector } from "react-redux"
import { getFlights } from "./redux/Actions"
import SideDetail from "./components/SideDetail"



function App() {

const [ShowMapView, setShowMapView] = useState(true)
const [ShowDetail, setShowDetail] = useState(false)
const [detailId, setDetailId] = useState(null)


const dispatch = useDispatch();
  

useEffect(()=>{
dispatch(getFlights())
},[])
  
const openDetail = (id)=>{
setDetailId(id);
setShowDetail(true)
}
const closeDetail = ()=>{
setShowDetail(false)
}

  return (
  <>
  <div className="main-cont">
    {ShowDetail && <SideDetail setShowDetail={setShowDetail} closeDetail={closeDetail} detailId={detailId}/>}
    <Header/>
    <div className="view-button">
    <button className={ShowMapView ? "active" : ""} onClick={()=>{setShowMapView(true)}}> <span>Map View</span> </button>
    <button className={!ShowMapView ? "active" : ""} onClick={()=>{setShowMapView(false)}}> <span>List View</span> </button>
    </div>
    
    <div>
    {
      ShowMapView ? <MapView setShowDetail={setShowDetail} openDetail={openDetail}/> : <ListView setShowDetail={setShowDetail} openDetail={openDetail}/>
    }
    </div>
  
  </div>
  
  </>
  
  
  )
}

export default App
