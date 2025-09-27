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
    { id: 1, src: imagea, title: "Partner 1" },
    { id: 2, src: imageb, title: "Partner 2" },
    { id: 3, src: imagec, title: "Partner 3" },
    { id: 4, src: imaged, title: "Partner 4" },
    { id: 5, src: imagee, title: "Partner 5" },
    { id: 6, src: imagef, title: "Partner 6" },
    { id: 7, src: imageg, title: "Partner 7" },
    { id: 8, src: imageh, title: "Partner 8" },
    { id: 9, src: imagei, title: "Partner 9" },
    { id: 10, src: imagej, title: "Partner 10" },
    { id: 11, src: imagek, title: "Partner 11" },
    { id: 12, src: imagel, title: "Letter 1" },
    { id: 13, src: imagem, title: "Letter 2" },
    { id: 14, src: imagen, title: "Letter 3" },
  ];

  // Split images into 3 groups
  const group1 = Images.slice(0, 4); // first 4
  const group2 = Images.slice(4, 8); // next 4
  const group3 = Images.slice(12, 14); // last 3

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="!font-semibold !text-4xl">
            <b className="text-gbam-primary">#</b>GBAM Collaborations and
            Endorsements
          </h2>
        </div>

        {/* Three carousels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[group1, group2, group3].map((group, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg h-96"
            >
              <Slider {...settings}>
                {group.map((img) => (
                  <div key={img.id} className="relative h-96">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="!w-full !h-full !object-cover"
                    />
                    {/* Overlay title */}
                    <div className="absolute bottom-0 !border-t-1 border-black left-0 right-0 bg-white text-black font-semibold text-center py-3">
                      <h3 className="text-lg font-semibold">{img.title}</h3>
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
