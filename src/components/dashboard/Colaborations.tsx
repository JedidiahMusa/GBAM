import Slider from "react-slick";
import imagea from "../../assets/images/colaborations/image1.webp";
import imageb from "../../assets/images/colaborations/image2.webp";
import imagec from "../../assets/images/colaborations/image3.webp";
import imaged from "../../assets/images/colaborations/image4.webp";
import imagee from "../../assets/images/colaborations/image5.webp";
import imagef from "../../assets/images/colaborations/image6.webp";
import imageg from "../../assets/images/colaborations/image7.webp";
import imageh from "../../assets/images/colaborations/image8.webp";
import imagei from "../../assets/images/colaborations/image9.webp";
import imagej from "../../assets/images/colaborations/image10.webp";
import imagek from "../../assets/images/colaborations/image11.webp";
import imagel from "../../assets/images/colaborations/letter.webp";
import imagem from "../../assets/images/colaborations/letter1.webp";
import imagen from "../../assets/images/colaborations/letter2.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Colaborations() {
  const Images = [
    { id: 1, src: imagea, title: "Director General of the National Gallery of Art(NGA)", name:"ahmed sodangi" },
    { id: 2, src: imageb, title: "Deputy Majority leader, Kaduna State House of Assembly", name:"hon. munira suleiman tanimu" },
    { id: 3, src: imagec, title: "Honourable Minister of State", title2:"Federal Ministry of Youth Development", name:"ayodele olawande" },
    { id: 4, src: imaged, title: "Executive Secretary, Kaduna State Social Investment Programme Agency (KADSIPA)", name:"umar sani maikudi" },
    { id: 5, src: imagee, title: "Chief of Defence Staff", name:"general christopher musa" },
    { id: 6, src: imagef, title: "Partner 6" },
    { id: 7, src: imageg, title: "State Coordinator, Prime Guage Solutions", name:"aliyu yakubu ahmadu" },
    { id: 8, src: imageh, title: "Chairman, Nigerian Sports Commission", name:"shehu dikko" },
    { id: 9, src: imagei, title: "Zenith Bank", name:"mr james x mrs hauwa" },
    { id: 10, src: imagej, name:"hon(dr) gideon jok" },
    { id: 11, src: imagek, title: "Deputy Governor of Economic Policy at the Central Bank of Nigeria(CBN)", name:"muhammed sani abdullahi" },
    { id: 12, src: imagel, title: "Letter 1" },
    { id: 13, src: imagem, title: "Letter 2" },
    { id: 14, src: imagen, title: "Letter 3" },
  ];

  // Split images into 2 groups
  const group1 = Images.slice(0, 11);
  const group2 = Images.slice(12, 14); // last 3

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
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
            <b className="text-gbam-primary">#</b>GBAM Collaborations and
            Endorsements
          </h2>
        </div>

        {/* Three carousels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {[group1, group2].map((group, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg h-[28rem] lg:h-[30rem]"
            >
              <Slider {...settings}>
                {group.map((img) => (
                  <div key={img.id} className="relative h-[28rem] lg:h-[30rem] ">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="!w-full !h-full !object-cover"
                    />
                    {/* Overlay title */}
                    <div className="!absolute !bottom-0 !border-t-1 !border-black/30 !left-0 !right-0 bg-white !px-3 text-black font-semibold text-center !py-5">
                      <h3 className="!font-bold uppercase !text-[1.2rem]">{img.name}</h3>
                      <p className="font-medium text-gray-700 text-[.9rem]">{img.title}</p>
                      <p className="font-medium text-gray-700 text-[.9rem]">{img.title2}</p>
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
