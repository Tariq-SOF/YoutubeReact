import React from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";


function Next() {
     const {id}=useParams()
    const naveg = useNavigate()


 useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key=AIzaSyA1PqyVlvTlfUI3piQROW0UH8Iyro23Wn8${id}`
      )
      .then((response) => {
        setAllApi(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);




  return(<>
  <header className="header flex flex-row h-[56px] justify-between fixed top-0 right-0 left-0 bg-white border-b-2 border-[#e6e6e6] z-50  " > 
            <div className="flex items-center w-[150px] relative" >
            <img className="w-[25px] ml-6 cursor-pointer"  src="http://127.0.0.1:5500/intr%20to%20html/icons/hamburger-menu.svg"/>
            <img className="h-[20px] ml-6 cursor-pointer"  src="http://127.0.0.1:5500/intr%20to%20html/icons/youtube-logo.svg"/>
        <div className="absolute top-2 right-[-32px] text-xs font-roboto font-arial text-black " >SA</div>
        </div>  
        <div className=" ml-[100px] mr-[65px] flex-1 max-w-[500px] flex items-center">
            <input className="text-[#7e7e7e] text-base font-serif h-[37px] pl-3 flex-1 border-gray-300 border-opacity-25 rounded-sm shadow-inner inset-1 inset-y-2 inset-x-3 border-2 bg-opacity-10 ml-0"   type="text" placeholder="Search"/>
            <button className="w-[65px] h-[36px] border border-[#c2c1c1] rounded-sm bg-[#f8f8f8] relative flex justify-center items-center T10" type="text" ><img className="h-[24px] "  src="http://127.0.0.1:5500/intr%20to%20html/icons/search.svg"/><div className="flex justify-items-center items-center absolute bottom-[-30px] bg-[#808080] text-[#ffffff] py-4 px-8 text-xs rounded-sm transition-opacity duration-150 opacity-0 pointer-events-none whitespace-nowrap hover:opacity-1" >Search</div> </button> 
            <button className="relative flex justify-center items-center w-[36px] h-[36px] bg-[#f8f8f8] rounded-3xl border-none ml-2" ><img className="h-[24px] content-center " src="http://127.0.0.1:5500/intr%20to%20html/icons/voice-search-icon.svg"/><div className="flex justify-items-center items-center absolute bottom-[-30px] bg-[#808080] text-[#ffffff] py-4 px-8 text-xs rounded-sm transition-opacity duration-150 opacity-0 pointer-events-none whitespace-nowrap hover:opacity-1 " >Search with your voice</div></button>
            
        </div>                                                        
        <div className="w-[206px] flex items-center justify-between shrink-0 " >
            <div className="relative flex justify-center items-center upload-continr" ><img className="h-[24px] cursor-pointer"  src="http://127.0.0.1:5500/intr%20to%20html/icons/upload.svg"/><div className="flex justify-items-center items-center absolute bottom-[-30px] bg-[#808080] text-[#ffffff] py-4 px-8 text-xs rounded-sm transition-opacity duration-150 opacity-0 pointer-events-none whitespace-nowrap hover:opacity-1 " >Create</div></div>
            <div className="relative flex justify-center items-center apps-continr" ><img className="h-6 cursor-pointer"  src="http://127.0.0.1:5500/intr%20to%20html/icons/youtube-apps.svg"/><div className="flex justify-items-center items-center absolute bottom-[-30px] bg-[#808080] text-[#ffffff] py-4 px-8 text-xs rounded-sm transition-opacity duration-150 opacity-0 pointer-events-none whitespace-nowrap hover:opacity-1 " >YouTube apps</div></div>
            <div className="relative">
            <div className="relative flex justify-center items-center " ><img className="h-6 cursor-pointer "  src="http://127.0.0.1:5500/intr%20to%20html/icons/notifications.svg"/><div className="flex justify-items-center items-center absolute bottom-[-30px] bg-[#808080] text-[#ffffff] py-4 px-8 text-xs rounded-sm transition-opacity duration-150 opacity-0 pointer-events-none whitespace-nowrap hover:opacity-1 " >Notifications</div></div>
            <div className="absolute top-[-3px] right-[-7px] text-white bg-[#cc0202] font-sans font-arial text-xs rounded-3xl pt-[1px] pb-[1px] pl-[5px] pr-[5px] text-[11px]" >3</div>
            </div>
            <img className="h-[32px] rounded-2xl mr-4 cursor-pointer"  src="http://127.0.0.1:5500/intr%20to%20html/P%20youtube/channels7.png"/>
        </div>
     </header>
  
  </>)
}

export default Next;
