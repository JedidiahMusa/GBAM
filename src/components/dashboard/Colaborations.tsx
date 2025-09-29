import Slider from "react-slick";
import imagea from "../../assets/images/colaborations/image1.webp";
import imageb from "../../assets/images/colaborations/image2.webp";
import imagec from "../../assets/images/colaborations/image3.webp";
import imaged from "../../assets/images/colaborations/image4.webp";
import imagee from "../../assets/images/colaborations/image5.webp";
import imagef from "../../assets/images/colaborations/imagef.webp";
import imageg from "../../assets/images/colaborations/image7.webp";
import imageh from "../../assets/images/colaborations/image8.webp";
import imagei from "../../assets/images/colaborations/image9.webp";
import imagej from "../../assets/images/colaborations/image10.webp";
import imagek from "../../assets/images/colaborations/image11.webp";
import imagel from "../../assets/images/colaborations/letter.webp";
import imagem from "../../assets/images/colaborations/letter1.webp";
import imagen from "../../assets/images/colaborations/letter2.webp";
import imageo from "../../assets/images/colaborations/imageo.webp";
import imageq from "../../assets/images/colaborations/imageq.webp";
import imagep from "../../assets/images/colaborations/imagep.webp";
import imager from "../../assets/images/colaborations/imager.webp";
import images from "../../assets/images/colaborations/images.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Collaboration {
  id: number;
  src: string;
  name: string;
  title?: string;
  title2?: string;
}

function Colaborations() {
  // Group 1: People
  const group1: Collaboration[] = [
    { id: 1, src: imagea, title: "Director General of the National Gallery of Art(NGA)", name: "ahmed sodangi" },
    { id: 2, src: imageb, title: "Deputy Majority leader, Kaduna State House of Assembly", name: "hon. munira suleiman tanimu" },
    { id: 3, src: imagec, title: "Honourable Minister of State", title2: "Federal Ministry of Youth Development", name: "ayodele olawande" },
    { id: 4, src: imaged, title: "Executive Secretary, Kaduna State Social Investment Programme Agency (KADSIPA)", name: "umar sani maikudi" },
    { id: 5, src: imagee, title: "Chief of Defence Staff", name: "general christopher musa" },
    { id: 6, src: imagef, title: "Honorable Commissioner of Sports Development, Kaduna", name: "prof. benjamin.k.gugong" },
    { id: 7, src: imageq, title: "Honorable Commissioner of Business, Innovation and Technology, Kaduna", name: "mrs patience fakai" },
    { id: 8, src: imager, title: "Executive Secretary, Kaduna Investment & Promotions Agency(KADIPA)", name: "SADIQ MOHAMMED" },
    { id: 9, src: images, title: "CEO. Dan Hausawa Media", name: "SAMAILA ADOYI (D.H)" },
    { id: 10, src: imagep, title: "Chairman, APC Youth Stakeholders Forum & CoordinatorRenewed Hope Youth Engagement", name: "HON. ABDULAZEEz kaka" },
    { id: 11, src: imageo, title: "Executive Chairman, Kaduna State Internal Revenue Service(KADIRS)", name: "mr jerry adams" },
    { id: 12, src: imageg, title: "State Coordinator, Prime Guage Solutions", name: "aliyu yakubu ahmadu" },
    { id: 13, src: imageh, title: "Chairman, Nigerian Sports Commission", name: "shehu dikko" },
    { id: 14, src: imagei, title: "Zenith Bank", name: "mr james x mrs hauwa" },
    { id: 15, src: imagej, name: "hon(dr) gideon jok" },
    { id: 16, src: imagek, title: "Deputy Governor of Economic Policy at the Central Bank of Nigeria(CBN)", name: "muhammed sani abdullahi" },
  ];

  // Group 2: Letters
  const group2: Collaboration[] = [
    { id: 17, src: imagel, name: "Letter of Support from the Ministry of Sports Development" },
    { id: 18, src: imagem, name: "Nigerian Basketball Federation(NBBF) Letter" },
    { id: 19, src: imagen, name: "Federal Ministry of Youth Development Letter" },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <section className="py-12 lg:px-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="!font-semibold !text-4xl">
            <b className="text-gbam-primary">#</b>GBAM Collaborations and Endorsements
          </h2>
        </div>

        {/* Two carousels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {[group1, group2].map((group, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg h-[28rem] lg:h-[30rem]"
            >
              <Slider {...settings}>
                {group.map((img) => (
                  <div key={img.id} className="relative h-[28rem] lg:h-[30rem]">
                    <img
                      src={img.src}
                      alt={img.title || img.name}
                      className="!w-full !h-full !object-cover"
                    />
                    {/* Overlay title */}
                    <div className="!absolute !bottom-0 !border-t !border-black/30 !left-0 !right-0 bg-white !px-3 text-black font-semibold text-center !py-5">
                      <h3 className="!font-bold uppercase !text-[1.2rem]">{img.name}</h3>
                      {img.title && (
                        <p className="font-medium text-gray-700 text-[.9rem]">{img.title}</p>
                      )}
                      {img.title2 && (
                        <p className="font-medium text-gray-700 text-[.9rem]">{img.title2}</p>
                      )}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Colaborations;
