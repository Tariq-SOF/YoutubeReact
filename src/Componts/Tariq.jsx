import axios from "axios";
import { useState, useEffect } from "react";

function Tariq() {
    const [allapi, setAllApi] = useState([]);

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

  return(<>
 
             {allapi.map((item)=>(
                   <div key={item.id}>  

            <div class="D1" > 
            <div className="relative cursor-pointerj"  >              
            <img className="w-full" src={item.snippet.thumbnails.default.url}/> 
            </div>
            <div className=" flex flex-cols gap-3">
            <div className="p-0 cursor-pointer " >
        <img className="rounded-[30px] w-[36px] border[-1px] border-solid border-[#121212] border[1px] mt-[8px]" src={item.snippet.channelThumbnails.default.url}/> 
       
            </div>
            <div className=" ml-[-10] flex flex-col gap-2 ">
            <p className=" w-[280px] font-semibold leading-[25px] text- mt-[8px] mb-[0%] cursor-pointer ">{item.snippet.title}</p>
            <p className="text-sm text-[#606060] cursor-pointer" >{item.snippet.channelTitle}</p>
            <p className="leading-none text-sm text-[#606060] cursor-pointer" >{item.statistics.viewCount}</p> 
            </div>
            </div>
    </div>
             </div>
                    ))} 
                    
    
  </>)

}

export default Tariq;
