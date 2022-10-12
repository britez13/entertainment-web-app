
import IconSearch from "../assets/icon-search.svg"

const SearchBar = ({text}) => {
  return (
    <section className='flex items-center gap-4'>
      <img className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]' src={IconSearch} alt='icon serch' />
      <input
        className='bg-darkBlue text-white text-base font-light font outline-0 placeholder:opacity-50 placeholder:mix-blond-normal md:text-2xl'
        type='text'
        placeholder={text}
      />
    </section>
  );
};

export default SearchBar


