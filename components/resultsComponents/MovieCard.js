import Image from 'next/image';
import { BiLike } from 'react-icons/bi';

const MovieCard = ({ result }) => {
  const baseUrl = `https://image.tmdb.org/t/p/original`;
  return (
    <div className="p-3 cursor-pointer hover:text-white lg:hover:scale-110 transition-all duration-200">
      <Image
        layout="responsive"
        src={`${baseUrl}${result?.backdrop_path}`}
        width={200}
        height={100}
        alt={result?.title}
      />
      <div className="flex flex-col justify-start p-2">
        <p className="truncate text-lg">{result?.overview}</p>
        <h2 className="text-lg font-bold">{result?.title || result?.name}</h2>
        <div className="flex items-center space-x-4">
          <p className="text-sm">
            {result?.release_date || result?.first_air_date}
          </p>
          <div className="flex space-x-1 items-center text-sm">
            <BiLike size={20} />
            <p>{result?.vote_count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
