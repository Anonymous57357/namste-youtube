const VideoCard = ({ info }) => {
  const snippet = info?.snippet;
  const channelTitle = snippet?.channelTitle;
  const title = snippet?.title;
  const thumbnails = snippet?.thumbnails;
  const statistics = info?.statistics;

  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <img
        className="w-full h-48 object-cover"
        alt="video thumbnail"
        src={thumbnails?.medium?.url}
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg text-gray-800 truncate">
          {title}
        </h2>
        <p className="text-sm text-gray-500 hover:text-gray-900">
          {channelTitle}
        </p>
        <p className="text-sm text-gray-400">{statistics?.viewCount} views</p>
      </div>
    </div>
  );
};

// Higher-Order Component for Ad Video
export const AdVideoContainer = ({ info }) => {
  // enhancedcomponent
  return (
    <div className="border-red-900 p-2">
      {/* existing component */}
      <VideoCard info={info} />
      <p className="text-red-600 font-bold text-sm">Sponsored Ad</p>
    </div>
  );
};

export default VideoCard;
