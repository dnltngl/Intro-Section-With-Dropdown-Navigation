import ImageHeroMobile from "../assets/images/image-hero-mobile.png";
import ImageHeroDesktop from "../assets/images/image-hero-desktop.png";
import ImgDatabiz from "../assets/images/client-databiz.svg";
import ImgAudiophile from "../assets/images/client-audiophile.svg";
import ImgMaker from "../assets/images/client-maker.svg";
import ImgMeet from "../assets/images/client-meet.svg";

function LandingPage() {
  return (
    <section className="space-y-5 sm:max-w-screen-xxl justify-center  items-center ">
      <div className="sm:flex ">
        <picture className="order-2 sm:order-1 max-h-fit ">
          <source media="(min-width:465px)" srcSet={ImageHeroDesktop} />
          <img src={ImageHeroMobile} alt="Flowers" />
        </picture>

        <div className=" container sm:flex ml-10">
          <div className="items-center text-center sm:text-start">
            <h1 className="text-4xl font-Epilogue font-bold text-neutral-AlmostBlack font my-5 mt-10 subpixel-antialiased sm:text-8xl sm:mt-36 sm:max-w-[11ch] ">
              Make remote work
            </h1>
            <p className=" text-md text-neutral-MediumGray font-Epilogue font-semibold mb-6 max-w-[36ch] ml-4 tracking-normal sm:mt-14  sm:max-w-[40ch]   ">
              {" "}
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button
              className=" items-center text-center px-5 py-2.5 rounded-xl font-Epilogue font-semibold
             bg-neutral-AlmostBlack text-neutral-AlmostWhite mb-14 sm:mt-10 sm:px-6 sm:py-3 hover:bg-white hover:text-black border border-black"
            >
              Learn More
            </button>
            <div className="flex items-start gap-10 sm:mt-14">
              <img className="w-16" src={ImgDatabiz} alt="Databiz" />
              <img className="w-14" src={ImgAudiophile} alt="Audiophile" />
              <img className="w-16" src={ImgMeet} alt="Meet" />
              <img className="w-16" src={ImgMaker} alt="Maker" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
