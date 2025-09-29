import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../../assets/images/logos/img1.webp";
import img2 from "../../assets/images/logos/img2.webp";
import img3 from "../../assets/images/logos/img3.webp";
import img4 from "../../assets/images/logos/img4.webp";
import img5 from "../../assets/images/logos/img5.webp";
import img6 from "../../assets/images/logos/img6.webp";
import img7 from "../../assets/images/logos/img7.webp";
import img8 from "../../assets/images/logos/img8.webp";
import img9 from "../../assets/images/logos/img9.webp";
import img10 from "../../assets/images/logos/img10.webp";
import img11 from "../../assets/images/logos/img11.webp";
import img12 from "../../assets/images/logos/img12.webp";
import img13 from "../../assets/images/logos/img13.webp";
import img14 from "../../assets/images/logos/img14.webp";
import img15 from "../../assets/images/logos/img15.webp";
import img16 from "../../assets/images/logos/img16.webp";
import img17 from "../../assets/images/logos/img17.webp";
import img18 from "../../assets/images/logos/img18.webp";
import img19 from "../../assets/images/logos/img19.webp";
import img20 from "../../assets/images/logos/img20.webp";
import img21 from "../../assets/images/logos/img21.webp";
import img22 from "../../assets/images/logos/img22.webp";
import img23 from "../../assets/images/logos/img23.webp";
import img24 from "../../assets/images/logos/img24.webp";
import img25 from "../../assets/images/logos/img25.webp";
import img26 from "../../assets/images/logos/img26.webp";
import img27 from "../../assets/images/logos/img27.webp";
import img28 from "../../assets/images/logos/img28.webp";

const MarqueeContainer: React.FC = () => {
  const firstHalf = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];

  const secondHalf = [
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
  ];

  return (
    <div className="bg-white py-4 pb-10 space-y-6">
      {/* First Marquee (left by default) */}
      <div className="text-center mx-auto">
        <h2 className="text-gbam-dark !font-bold !text-3xl md:!text-4xl lg:!text-5xl">
            <b className="text-gbam-primary">#</b>
            GBAM Partners Over the Years
        </h2>
      </div>
      <Marquee speed={100} pauseOnHover gradient={false}>
        {firstHalf.map((src, idx) => (
          <div
            key={`row1-${idx}`}
            className="flex items-center justify-center mx-6 h-auto w-40"
          >
            <img
              src={src}
              alt={`logo ${idx + 1}`}
              className="h-20 md:h-32 max-w-32 cursor-pointer md:max-w-40 w-auto object-contain lg:grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </Marquee>

      {/* Second Marquee (right direction) */}
      <Marquee speed={100} gradient={false} pauseOnHover direction="right">
        {secondHalf.map((src, idx) => (
          <div
            key={`row2-${idx}`}
            className="flex items-center justify-center mx-6 h-auto  w-40"
          >
            <img
              src={src}
              alt={`marquee-row2-${idx}`}
              className="h-20 md:h-32 max-w-32 cursor-pointer md:max-w-40 w-auto object-contain lg:grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeContainer;
