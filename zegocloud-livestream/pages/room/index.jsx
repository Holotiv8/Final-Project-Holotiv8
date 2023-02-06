import React from "react";

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

function randomID(len) {

  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(
  url = window.location.href
) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

export default function RoomPage() {
  // const { roomId } = useParams();

  let roomID = getUrlParams().get('roomID') || randomID(5);
  // let roomID = roomId
  let role_str = getUrlParams(window.location.href).get('role') || 'Host';
  const role =
    role_str === 'Host'
      ? ZegoUIKitPrebuilt.Host
      : role_str === 'Cohost'
      ? ZegoUIKitPrebuilt.Cohost
      : ZegoUIKitPrebuilt.Audience;

  let sharedLinks = [];
  if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
    sharedLinks.push({
      name: 'Join as co-host',
      url:
        window.location.protocol + '//' + 
        window.location.host + window.location.pathname +
        '?roomID=' +
        'VtlVf' +
        '&role=Cohost',
    });
  }
  sharedLinks.push({
    name: 'Join as audience',
    url:
     window.location.protocol + '//' + 
     window.location.host + window.location.pathname +
      '?roomID=' +
      'VtlVf' +
      '&role=Audience',
  });
 // generate Kit Token
  const appID = 312365166;
  const serverSecret = "5be2e5e9fe9ac8f935c1954466856b5a";
  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, 'VtlVf',  randomID(5),  randomID(5));
  // const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
  //   appID,
  //   serverSecret,
  //   roomId,
  //   Date.now().toString(),
  //   "Fubuki"
  // );

  // start the call
  let myMeeting = async (element) => {
      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.LiveStreaming,
          config: {
            role,
          },
        },
        sharedLinks,
      });
  };

  console.log(sharedLinks)

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}


// const RoomPage = () => {
//   const { roomId } = useParams();

//   const myMeeting = async (element) => {
//     const appID = 312365166;
//     const serverSecret = "5be2e5e9fe9ac8f935c1954466856b5a";
//     const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//       appID,
//       serverSecret,
//       roomId,
//       Date.now().toString(),
//       "Fubuki"
//     );
//     const zp = ZegoUIKitPrebuilt.create(kitToken);
//     zp.joinRoom({
//       container: element,
//       scenario: {
//         mode: ZegoUIKitPrebuilt.VideoConference,
//       },
//     });
//   };
//   return (
//     <div className="room-page">
//       <div ref={myMeeting} />
//     </div>
//   );
// };

// export default RoomPage;
