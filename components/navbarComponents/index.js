import { useRouter } from 'next/router';
import requests from 'utils/requests';

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center space-x-8 bg-gray-600 text-gray-300 select-none  text-xl lg:text-2xl">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2
          className="m-6 cursor-pointer hover:opacity-70 transition-all duration-200 active:text-white active:opacity-100"
          key={key}
          onClick={() => router.push(`/?genre=${key}`)}
        >
          {title}
        </h2>
      ))}
    </div>
  );
};

export default Navbar;
