import { useEffect } from "react";
import Slider from "react-slick";
import localGov from "../../assets/images/championship/JABI0283.webp";
import secSchool from "../../assets/images/championship/secSch1.webp";
import secSchool1 from "../../assets/images/championship/secSch1.webp";
import secSchool2 from "../../assets/images/championship/secSch2.webp";
import secSchool3 from "../../assets/images/championship/secSch3.webp";
import secSchool4 from "../../assets/images/championship/secSch4.webp";
import Adult from "../../assets/images/championship/competition3.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ChampionshipCardProps {
  title: string;
  description: string;
  images: string[]; // now supports multiple images
  buttonText?: string;
  className?: string;
}

const ChampionshipCard: React.FC<ChampionshipCardProps> = ({
  title,
  description,
  images,
  buttonText,
}) => {
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
    <div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      data-aos="fade-up"
    >
      {/* Image Carousel */}
      <div className="h-56 overflow-hidden">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className="h-56">
              <img
                src={img}
                alt={`${title} ${idx + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gbam-dark font-display mb-3">
          {title}
        </h3>
        <p className="text-gbam-dark/80 mb-5">{description}</p>
        {buttonText && (
          <button className="bg-gbam-secondary hover:bg-gbam-secondary/90 text-white w-full py-2 rounded-md">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

const ChampionshipsSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <section className="py-20 bg-gbam-light px-4 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="!text-4xl md:!text-5xl !font-bold !font-display !mb-4">
            <span className="text-gbam-primary">#</span>
            <span className="text-gbam-dark">GBAM</span> Championships
          </h2>
          <p className="text-gbam-dark/80 !max-w-3xl 1mx-auto !font-medium !text-xl">
            Competitive basketball events that inspire teamwork, leadership, and
            community pride.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ChampionshipCard
            title="Secondary Schools Championship"
            description="Young kings and queens taking their first shot at greatness through teamwork, leadership, and fun."
            images={[secSchool, secSchool1, secSchool2, secSchool3, secSchool4]} // you can add more images here
          />

          <ChampionshipCard
            title="Adult Championship"
            description="A dynamic tournament for men and women at tertiary and professional levels fostering competition and connection."
            images={[Adult, Adult]} // replace with multiple Adult images if you have them
          />

          <ChampionshipCard
            title="Inter-LGA Adult Championships"
            description="Local governments battle not with bitterness but with brilliance showcasing culture, talent, and the strength of collective spirit."
            images={[localGov, localGov]} // replace with multiple localGov images if available
          />
        </div>
      </div>
    </section>
  );
};

export default ChampionshipsSection;
