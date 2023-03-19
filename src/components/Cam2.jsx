import React from "react";
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Cam2() {

    const {roomId} = useParams();



    const myMeeting = async (element)=>{
      const appID = 189837110 ;
      const serverSecret = "61dce325dd9300a0c4518b39c88ec356";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "User Name");
     

      const zc =ZegoUIKitPrebuilt.create(kitToken);
      zc.joinRoom(
        {container: element, 
            sharedLinks:[{
                name: "Copy Link",
                url: `http://localhost:300/room/${roomId}`
            }
        ],
            scenario:{
            mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: false,
    }
      )
    }
  return (
    <div>
      <div ref={myMeeting}/>
    </div>
  )
}

export default Cam2
