/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pagination } from "antd";
import FacilityCard from "../../components/FacilityCard/FacilityCard";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HowItWork from "../../components/HowToWordStep/HowItWork";
import OurPlayer from "../../components/OurPlayer/OurPlayer";
import Testimonial from "../../components/TestimonialCard/Testimonial";
import TextTitle from "../../components/Ui/TextTitle";
import { useGetFacilityQuery } from "../../Redux/Feature/Facility/FacilityApi";
import { useEffect, useState } from "react";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const ClintTestiMonialData = [
  {
    name: "Sarah Johnson",
    position: "Soccer Coach",
    testimonial:
      "Booking facilities through [Your Platform Name] has been a game-changer for my team. The process is so easy, and we can find available fields quickly. Highly recommended!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18r4NC_pzJ3KV6wbdcWLAe3k-2j8zi7XMzQ&s",
  },
  {
    name: "Mark Thompson",
    position: "Basketball Player",
    testimonial:
      "I love how user-friendly the platform is! It saves me so much time when trying to book a court for practice. The confirmation email makes it so easy to keep track of my bookings.",
    image:
      "https://images.squarespace-cdn.com/content/v1/56d0fff57da24f7ba20563d3/1540600620647-HME1I40TVZ3DFTYDIO16/verdi-studio-client-testimonial-susan+2.jpg",
  },
  {
    name: "Emily Wang",
    position: "Event Organizer",
    testimonial:
      "We organized a charity tournament, and the booking process was seamless. The customer support was fantastic, and we got everything we needed without any hassle.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYpAHkwCU3PgYDN0YPsVCCo9VCScF-AM5-FpsvEky-knvT7ZU6yTBQkOdFwnh4I4Q7GS8&usqp=CAU",
  },
];

const PlayerData = [
  {
    id: 1,
    name: "John Doe",
    position: "Forward",
    age: 25,
    rating: 4.5,
    available: true,
    price_per_game: 50,
    image_url:
      "https://www.arsenal.com/sites/default/files/styles/player_card_small/public/images/Nelson_17.jpg?auto=webp&itok=7ZfGVHWJ",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Midfielder",
    age: 22,
    rating: 4.8,
    available: false,
    price_per_game: 60,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGL8w60pnO4nDirsVAOFf7dhL7XMVCNWEV1w&s",
  },
  {
    id: 3,
    name: "David Lee",
    position: "Defender",
    age: 30,
    rating: 4.2,
    available: true,
    price_per_game: 45,
    image_url:
      "https://media.gettyimages.com/id/1468586173/photo/portrait-of-a-female-soccer-player-holding-a-soccer-ball-in-the-field.jpg?s=612x612&w=gi&k=20&c=N8Sbn1MZffzKlZzxsnr4i8WqZdhcceGiae46_euZyAk=",
  },
];

const Home = () => {
  const [Page, setPage] = useState(1);

  const { data: facilitys } = useGetFacilityQuery({
    search: undefined,
    page: Page,
    limit : 3,
    filter: undefined
  });

  const [showButton, setShowButton] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <HomeBanner />

      {/* Facility item show  */}
      <TextTitle Title={"Featured Facilities"} />
      <section className="w-full my-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {facilitys?.data?.data.map((Facility: any) => (
          <FacilityCard
            key={Facility?._id}
            RedirectLink={`Facility/${Facility._id}`}
            Facility={Facility}
          />
        ))}
      </section>
      <div className="flex item-center justify-center   p-3">
        <Pagination
          onChange={(e) => setPage(e)} 
          current={Page}
          pageSize={3}
          total={facilitys?.data?.Total}
        />
      </div>

      {/* How It Work  */}
      <HowItWork />

      {/* Client testimonial  */}
      <TextTitle Title={"Our Customer Testimonials"} />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {ClintTestiMonialData.map((testtimonial) => (
          <Testimonial testtimonial={testtimonial} />
        ))}
      </section>

      {/* Player testimonial  */}
      <TextTitle Title={"Our Player"} />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {PlayerData.map((Player) => (
          <OurPlayer key={Player.id} Player={Player} />
        ))}
      </section>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-4 rounded-full bg-[#218491] text-white shadow-lg hover:bg-[#196670] focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
        >
          <ArrowCircleUpIcon className="text-xl"/>
        </button>
      )}
    </>
  );
};

export default Home;
