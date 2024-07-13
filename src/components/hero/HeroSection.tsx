import Avatar from "../../assets/icons/HighlightedNFTAvatarPlaceholder.svg";
import Rocket from "../../assets/icons/RocketLaunch.svg";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";

const HeroData = () => {
  const { collections, status, error } = useAppSelector(
    (state: RootState) => state.colections
  );

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const visibleCollections = collections.slice(5, 6);

  return (
    <>
      {visibleCollections.map((item, i) => {
        return (
          <section
            key={i}
            className="flex flex-col md:flex-row justify-between items-center gap-[30px] py-[40px] md:py-[80px] lg:px-[195px] lg:py-[80px]"
          >
            <div className="flex flex-col items-start gap-[30px] w-full md:w-1/2 lg:w-1/3 mb-10 md:mb-0 md:mr-10">
              <div className="flex flex-col items-start gap-[20px]">
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold capitalize">
                  Discover digital art & Collect NFTs
                </h1>
                <p className="text-white text-base md:text-lg lg:text-xl">
                  NFT marketplace UI created with Anima for Figma. Collect, buy
                  and sell art from more than 20k NFT artists.
                </p>
              </div>
              <button className="flex items-center justify-center w-[224px] h-[60px] md:w-auto bg-purple-600 text-white px-[50px] gap-[12px] rounded-[20px] text-base md:text-lg lg:text-xl">
                <img src={Rocket} alt="Rocket" className="w-[20px] h-[20px]" />
                <span>Get Started</span>
              </button>

              <div className="flex justify-center md:justify-start text-white">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold">240k+</h3>
                  <p className="text-lg">Total Sale</p>
                </div>
                <div className="text-center md:text-left ml-8 md:ml-12">
                  <h3 className="text-2xl font-semibold">100k+</h3>
                  <p className="text-lg">Auction</p>
                </div>
                <div className="text-center md:text-left ml-8 md:ml-12">
                  <h3 className="text-2xl font-semibold">240k+</h3>
                  <p className="text-lg">Artist</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:w-2/3 lg:w-2/3 gap-0">
              <Link
                to={`collection/${item?.collection}`}
                key={item?.collection}
              >
                <div
                  className="ls:w-[510px] sm:w-[330px] sm:h-[221px] w-[315px] h-[206px] bg-center bg-cover rounded-tl-[20px] rounded-tr-[22px] overflow-hidden ls:h-[401px]"
                  style={{
                    backgroundImage: `url(${item.image_url})`,
                  }}
                ></div>
              </Link>
              <div className="flex flex-col justify-center items-start ls:w-[510px] h-[109px] sm:w-[330px] w-[315px] bg-[#3B3B3B] p-2 rounded-bl-[22px] rounded-br-[22px]">
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold capitalize">
                  {item.collection}
                </h2>
                <div className="flex items-center gap-3 mt-2">
                  <div
                    className="w-8 h-8 bg-center bg-cover rounded-full"
                    style={{ backgroundImage: `url(${Avatar})` }}
                  ></div>
                  <Link
                    to={`/collection/${item?.collection}`}
                    key={item?.category}
                  >
                    <span className="text-white text-base md:text-lg">
                      {item.name}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default HeroData;
