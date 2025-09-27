import Navbar from "@/components/layout/Navbar";
import abtPic from "../assets/images/hero-img.avif";
import Carousel from "@/components/Carousel";
import image1 from "../assets/images/radio/image1.webp";
import image2 from "../assets/images/radio/image2.webp";
import image3 from "../assets/images/radio/image3.webp";
import image4 from "../assets/images/radio/image4.webp";
import image5 from "../assets/images/radio/image5.webp";
import image6 from "../assets/images/radio/image6.webp";
import image7 from "../assets/images/radio/image7.webp";
import image8 from "../assets/images/radio/image8.webp";
import image9 from "../assets/images/radio/image9.webp";
import image10 from "../assets/images/radio/image10.webp";
import image11 from "../assets/images/radio/image11.webp";
import image12 from "../assets/images/radio/image12.webp";
import image13 from "../assets/images/radio/image13.webp";
import TeamMembers from "@/components/dashboard/TeamMembers";
import Colaborations from "@/components/dashboard/Colaborations";

function LearnMore() {
  const carouselImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ];


  return (
    <>
      <Navbar />
      <div className="pt-24 w-full bg-gradient-to-r from-gray-100 to-gray-200 lg:px-24 px-4">
        <h2 className="w-full text-center !font-bold !text-5xl">ABOUT US</h2>{" "}

        <section className="pb-12">
          <h2 className="text-center !font-semibold !mt-5 !text-3xl py-4">
            Welcome to <b className="text-gbam-primary">#</b> GBAM, Graffiti
            Basketball and Music{" "}
          </h2>
          <div className="flex flex-col md:mt-8 md:grid grid-cols-2 gap-8 px-4">
              <p className="lg:text-[1.3rem] !h-full">
              A canvas of dreams, a court of purpose, a stage for change. In a
              world where lines are drawn to divide, #GBAM uses them to design.
              We are the convergence of rhythm, rivalry, and revolution a
              movement where basketball meets beats, and creativity meets
              community. Born from the soul of the streets and the spirit of
              unity, #GBAM is not just an event it's a renaissance. Here, the
              court becomes a classroom, the mic a megaphone, and every dribble
              or dance step a declaration of hope, hustle, and heritage. From
              Kaduna to the continent, we are building a blueprint where youth
              expression becomes economic empowerment and local pride becomes
              global relevance. Innovation. Impact. Identity.This is #GBAM where
              culture competes, and community wins.
            </p>

            
            <div className="relative md:h-[28rem]">
              <div className="absolute -left-4 -top-2 w-full h-full bg-gbam-primary/20 rounded-lg transform rotate-1"></div>
              <img
                className="relative !h-full !w-full !object-cover z-10"
                src={abtPic}
                alt=""
              />
              <div className="absolute -right-1 -bottom-4 w-1/2 h-1/2 bg-gbam-secondary/20 rounded-lg transform -rotate-9"></div>
            </div>
          </div>
        </section>
        <section className="px-4 ">
          <h2 className="text-center !font-semibold md:!text-4xl pb-8 !text-3xl py-4">
            From Airwaves to Arenas. From Talk to Transformation.
          </h2>
          <div className="flex flex-col-reverse md:grid grid-cols-2 gap-8">
            <div className="relative">
              <div className="absolute -left-4 -top-2 w-full h-full bg-gbam-primary/20 rounded-lg transform rotate-1"></div>
              <Carousel
                className="py-4 !h-full relative z-10"
                images={carouselImages}
              />
              <div className="absolute -right-1 -bottom-4 w-1/2 h-1/2 bg-gbam-secondary/20 rounded-lg transform -rotate-9"></div>
            </div>

            <p className="lg:text-[1.3rem] !h-full">
              #GBAM began in 2014 not with stadiums or stages but with stories.
              What started as a radio program became a clarion call for creative
              activism. Over time, Graffiti Entertainment Consultancy Ltd
              evolved into a full-fledged platform where art, music, and sport
              are not just pastimes but pathways. Since 2019, #GBAM has grown
              into a movement of movements blending grassroots energy with grand
              vision, uplifting young voices from Kaduna's corners to Nigeria's
              corridors of power. Every tournament, concert, and campaign is a
              statement of belief: that youth are not just the future, they are
              the now. With a team of visionary coaches, creatives, and
              community-builders, we are cultivating not just talent, but
              transformation. Every jump shot, freestyle, or brushstroke is part
              of a bigger picture a vision of a continent reborn through
              culture, competition, and compassion.
            </p>
          </div>
        </section>

        <Colaborations />
        
      </div>
      <TeamMembers />
    </>
  );
}

export default LearnMore;
