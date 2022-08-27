import Image from 'next/image';
import ImdbLogo96 from 'public/images/imdb-96.png';
import ImdbLogo from 'public/images/imdb-logo.png';
import LeftIconItem from './LeftIconItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill, BsFillInfoCircleFill } from 'react-icons/bs';
import { IoMdCall } from 'react-icons/io';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col space-y-9 md:flex-row md:space-y-0  px-3 py-4 md:py-1 mx-4 items-center justify-between h-48">
      <div className="flex items-center space-x-7 ">
        <LeftIconItem title={'home'} onClick={() => router.push('/')}>
          <AiFillHome size={25} />
        </LeftIconItem>
        <LeftIconItem title={'account'} onClick={() => router.push('/account')}>
          <BsFillPersonFill size={25} />
        </LeftIconItem>
        <LeftIconItem title={'contact'} onClick={() => router.push('/contact')}>
          <IoMdCall size={25} />
        </LeftIconItem>
        <LeftIconItem title={'about'} onClick={() => router.push('/about')}>
          <BsFillInfoCircleFill size={25} />
        </LeftIconItem>
      </div>
      <div
        className=" cursor-pointer hover:scale-105 transition-all duration-200 translate-y-2"
        onCanPlay={() => router.push('/')}
      >
        <Image
          src={ImdbLogo}
          width={100}
          height={50}
          alt="Imdb"
          className="hover:brightness-110 transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default Header;
