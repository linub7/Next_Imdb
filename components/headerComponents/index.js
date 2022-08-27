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
    <div className="flex px-3 py-2 mx-4 items-center justify-between">
      <div className="flex items-center space-x-7 mt-5">
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
        className="mt-5 hidden sm:block cursor-pointer"
        onCanPlay={() => router.push('/')}
      >
        <Image src={ImdbLogo} width={100} height={50} alt="Imdb" />
      </div>
    </div>
  );
};

export default Header;
