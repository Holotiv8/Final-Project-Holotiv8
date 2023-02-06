function SpofyCard(el) {
  let object = el.music.data.releases.items[0]
  // console.log(object.sharingInfo.shareUrl, 'ini el dari spotify')
  return (
    <>
    <a href={object.sharingInfo.shareUrl}>
      <div className="card bg-white w-[200px] h-[270px] m-2 rounded-lg shadow-lg">
        <div className="object-centertop" >
          <img
            className="p-2" w
            src={object.coverArt.sources[2].url}
            alt="img"
          />
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3 ">
          <div className="title font-semibold text-xs ">
            {object.name}
          </div>
        </div>
      </div>
      </a>
    </>
  );
}
export default SpofyCard;
