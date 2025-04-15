import { GitHub } from './icons/github';
import { LinkedIn } from './icons/linkedin';
import { Twitter } from './icons/twitter';

const Footer: React.FC = () => {
  const email = 'seiichi19881101@gmail.com';
  return (
    <footer className="footer bg-black relative pt-1 border-t-2">
      <div className="container mx-auto  px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-around">
            <div className="flex flex-col">
              <span className="font-bold text-gray-300 uppercase mt-2">E-mail</span>
              <button
                className=""
                onClick={() => {
                  window.open(`mailto:${email}?subject=&body=`);
                }}>
                <span className="text-gray-400 hover:text-white float-left">{email}</span>
              </button>
            </div>

            <div className="flex">
              <a
                className="w-10 h-10 m-4"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/seiichi1101">
                <GitHub />
              </a>
              <a
                className="w-10 h-10 m-4"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/seiichi-arai-6986a6157/">
                <LinkedIn />
              </a>
              <a
                className="w-10 h-10 m-4"
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/seiichi19881101">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-gray-400 font-bold mb-2">© seiichi arai 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
