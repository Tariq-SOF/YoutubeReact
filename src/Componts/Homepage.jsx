import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import channel from "../icone/user-picher.jpg"
import notification from "../icone/notification.png"
import video_creat from "../icone/video.png"
import voice from "../icone/voice.png"
import magnifying from "../icone/magnifying-glass.png"
import Youtube from "../icone/Youtube-Logo-PNG-1.png"
import menu from "../icone/menu.png"
import home from "../icone/home.png"
import shorts from "../icone/shorts.png"
import subscriptions from "../icone/subscriptions.png"
import library from "../icone/video_library.png"
import music from "../icone/youtube-music-svgrepo-com.png"



function Homepage() {
  const [allapi, setAllApi] = useState([ ]);

   const naveg = useNavigate()

  useEffect(() => {
    axios
    
      .get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key=AIzaSyA1PqyVlvTlfUI3piQROW0UH8Iyro23Wn8"
      )
      .then((response) => {
        setAllApi(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

   const vidClick = (id) => {
   naveg("Next/:id")

   }
  

  return (
    <>
    <div className=" m-0 pt-[82px] p-8 ml-[96px] bg-[#f8f8f8] max-sm:w-[230%] max-sm:text-sm ">
      <header className="header flex flex-row h-[56px] justify-between fixed top-0 right-0 left-0 bg-white border-b-2 border-[#e6e6e6] z-50 " > 
            <div className="flex items-center w-[150px] relative" >
            <img className="w-[25px] ml-6 cursor-pointer"  src={menu}/>
            <img className="h-[20px] ml-6 cursor-pointer"  src={Youtube}/>
        <div className="absolute top-2 right-[-32px] text-xs font-roboto font-arial text-black " >SA</div>
        </div>  
        <div className=" ml-[100px] mr-[65px] flex-1 max-w-[500px] flex items-center">
            <input className="text-[#7e7e7e] text-base font-serif h-[37px] pl-3 flex-1 border-gray-300 border-opacity-25 rounded-l-3xl shadow-inner inset-1 inset-y-2 inset-x-3 border-2 bg-opacity-10 ml-0"   type="text" placeholder="Search"/>
            <button className="w-[65px] h-[36px] border border-[#c2c1c1] rounded-r-3xl bg-[#f8f8f8] relative flex justify-center items-center T10" type="text" ><img className="h-[24px] "  src={magnifying}/><div className="flex justify-items-center items-center absolute bottom-[-30px] bg-[#808080] text-[#ffffff] py-4 px-8 text-xs rounded-sm transition-opacity duration-150 opacity-0 pointer-events-none whitespace-nowrap hover:opacity-1" >Search</div> </button> 
            <button className="relative flex justify-center items-center w-[36px] h-[36px] bg-[#f8f8f8] rounded-3xl border-none ml-2" ><img className="h-[22px] content-center bg-w " src={voice}/><div className="flex justify-items-center items-center absolute bottom-[-30px] bg-[#808080] text-[#ffffff] py-4 px-8 text-xs rounded-sm transition-opacity duration-150 opacity-0 pointer-events-none whitespace-nowrap hover:opacity-1 " >Search with your voice</div></button>
            
        </div>                                                        
        <div className="w-[206px] flex items-center justify-evenly shrink-0 " >
            <div className="relative flex justify-center items-center upload-continr " ><img className="h-[24px] cursor-pointer "  src={video_creat}/><div className="flex justify-items-center items-center absolute bottom-[-30px] bg-[#808080] text-[#ffffff] py-4 px-8 text-xs rounded-sm transition-opacity duration-150 opacity-0 pointer-events-none whitespace-nowrap hover:opacity-1 " >Create</div></div>
            {/* <div className="relative flex justify-center items-center apps-continr" ><img className="h-6 cursor-pointer"  src="http://127.0.0.1:5500/intr%20to%20html/icons/youtube-apps.svg"/><div className="flex justify-items-center items-center absolute bottom-[-30px] bg-[#808080] text-[#ffffff] py-4 px-8 text-xs rounded-sm transition-opacity duration-150 opacity-0 pointer-events-none whitespace-nowrap hover:opacity-1 " >YouTube apps</div></div> */}
            <div className="relative">
            <div className="relative flex justify-center items-center " ><img className="h-6 cursor-pointer "src={notification}/><div className="flex justify-items-center items-center absolute bottom-[-30px] bg-[#808080] text-[#ffffff] py-4 px-8 text-xs rounded-sm transition-opacity duration-150 opacity-0 pointer-events-none whitespace-nowrap hover:opacity-1 " >Notifications</div></div>
            <div className="absolute top-[-3px] right-[-7px] text-white bg-[#cc0202] font-sans font-arial text-xs rounded-3xl pt-[1px] pb-[1px] pl-[5px] pr-[5px] text-[11px]">3</div>
            </div>
            <img className="h-[32px] rounded-2xl mr-4 cursor-pointer"  src={channel}/>
        </div>
     </header>
     <nav className="fixed left-0 bottom-0 top-[45px] w-[72px] bg-white z-[101] pt-5 font-serif text-[10px]" >
       <div className="h-[73px] flex justify-center items-center flex-col cursor-pointer hover:bg-[#f0f0f0] font-roboto font-arial" ><img className="w-6 flex justify-center items-center mb-1" src={home}/><div>Home</div></div> 
      <div className="h-[73px] flex justify-center items-center flex-col cursor-pointer hover:bg-[#f0f0f0] font-roboto font-arial" ><img className="w-6 flex justify-center items-center mb-1" src={shorts}/><div>shorts</div></div> 
      <div className="h-[73px] flex justify-center items-center flex-col cursor-pointer hover:bg-[#f0f0f0] font-roboto font-arial" ><img className="w-6 flex justify-center items-center mb-1" src={subscriptions}/><div>Subscriptions</div></div> 
      <div className="h-[73px] flex justify-center items-center flex-col cursor-pointer hover:bg-[#f0f0f0] font-roboto font-arial" ><img className="w-6 flex justify-center items-center mb-1" src={library}/><div>Library</div></div> 
       <div className="h-[73px] flex justify-center items-center flex-col cursor-pointer hover:bg-[#f0f0f0] font-roboto font-arial" ><img className="w-6 flex justify-center items-center mb-1" src={music}/><div>YouTube Music</div></div> 
?     </nav>    

  <div className="grid grid-cols-3 gap-x-5 gap-y-10 ">
{/* onClick={()=>{vidClick(item.id)}} */}

             {allapi.map((item)=>(
                   <div key={item.id} className="max-sm:text-xs ">  
            <div class="D1 h-[40vh] flex flex-col m-1 " > 
            <div className="relative cursor-pointer " >  
            <div  >            
            <img  className="w-full rounded-2xl" src={item.snippet.thumbnails.medium.url}/> 
            </div> 
            </div>
            <div className=" max-sm:w-full flex flex-cols gap-2 h-full  ">
            <div className="p-0  cursor-pointer " >
        <img className="small peicher inline-block w-10 h- rounded-full object-cover border-solid border-[#121212] border[1px] mt-[8px] max-sm:w-full" src={item.snippet.thumbnails.default.url}/> 
            </div>
            <div className=" ml-[-10] flex flex-col gap-1 ">
            <p className=" w-[280px] font-semibold leading-[25px] text- mt-[8px] mb-[0%] cursor-pointer max-sm:w-[200px] ">{item.snippet.title}</p>
            <p className="text-sm text-[#606060] cursor-pointer mb-2" >{item.snippet.channelTitle}</p>
            <p className="leading-none text-sm text-[#606060] cursor-pointer" >{item.statistics.viewCount}</p> 
            </div>
            </div>
    </div>
             </div>
                    ))}
        </div>  
        </div>         
    </>
  );
}

export default Homepage;