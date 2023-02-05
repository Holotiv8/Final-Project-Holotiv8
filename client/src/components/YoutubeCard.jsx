import { FaRegEye } from "react-icons/fa";

function YoutubeCard(video) {
  let object = video.videos.data.video 
  // console.log(object.thumbnails[3].url,'ini data vidiesssssssssss')
  return (
    <>
    <a href={`https://youtu.be/${object.videoId}`}>
      <div className="card bg-white w-[200px] h-[245px] m-2 rounded-lg shadow-lg font-display">
        <div className="top">
          <img
            className="object-cover p-2"
            src={object.thumbnails[3].url}
            alt="img"
          />
        </div>
        <div className="bottom flex flex-col gap-3 justify-center items-start p-3 ">
          <div className="flex justify-between text-xs w-full text-gray-500">
            <div>{object.publishedTimeText?.split('Streamed')}</div>
            <div className="flex items-center gap-1"><FaRegEye/>{object.stats.views}</div>
          </div>
          <div className="title font-semibold text-xs ">

          {object.title}
          </div>
        </div>
      </div>
      </a>
    </>
  );
}
export default YoutubeCard;
