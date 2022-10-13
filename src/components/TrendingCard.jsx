const TrendingCard = ({ item }) => {
  return (
      <img
        className='w-[240px] h-[140px] snap-start rounded-lg object-cover md:w-[470px] md:h-[230px]'
        src={item.thumbnail.trending.large}
        alt={item.title}
      /> 
  );
};

export default TrendingCard;
