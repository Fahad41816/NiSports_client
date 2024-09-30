import TextTitle from "../Ui/TextTitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import InfoIcon from '@mui/icons-material/Info';
import PaymentIcon from '@mui/icons-material/Payment';

const HowItWork = () => {
  return (
    <section>
      <TextTitle Title={"How It Works"} />
      <div>
        <VerticalTimeline lineColor="#218390">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#177C82", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33,131,144)" }} 
            iconStyle={{ background: "green", color: "#fff" }}
            icon={<VerifiedUserIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Create an Account or Log In
            </h3>
            <p>
              To get started, you need to create an account or log in. Click on
              the ‘Sign Up’ button if you’re a new user or ‘Login’ if you
              already have an account
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Browse"
            contentStyle={{ background: "#177C82", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33,131,144)" }} 
            iconStyle={{ background: "green", color: "#fff" }}
            icon={<TravelExploreIcon/>}
          >
            <h3 className="vertical-timeline-element-title">
              Browse Facilities
            </h3>

            <p>
              Once logged in, explore our list of available sports facilities.
              Use the search feature or filters to find locations by sport type,
              date, and time.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Select"
            contentStyle={{ background: "#177C82", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33,131,144)" }} 
            iconStyle={{ background: "green", color: "#fff" }}
            icon={<AdsClickIcon/>}
          >
            <h3 className="vertical-timeline-element-title">Select Your Desired Facility</h3>
            
            <p>Click on a facility to view more details, including amenities, pricing, and availability.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Time"
            contentStyle={{ background: "#177C82", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33,131,144)" }} 
            iconStyle={{ background: "green", color: "#fff" }}
            icon={<HistoryToggleOffIcon/>}
          >
            <h3 className="vertical-timeline-element-title">Choose Your Time Slot</h3>
          
            <p>Select the date and time you wish to book. Our calendar shows real-time availability for your convenience.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Enter Your Information"
            contentStyle={{ background: "#177C82", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33,131,144)" }}  
            iconStyle={{ background: "green", color: "#fff" }}
            icon={<InfoIcon/>}
          >
            <h3 className="vertical-timeline-element-title">
            Enter Your Information
            </h3> 
            <p>Fill in your booking details, including any special requests. Ensure that your information is accurate.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Pay"
            contentStyle={{ background: "#177C82", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33,131,144)" }} 
            iconStyle={{ background: "green", color: "#fff" }}
            icon={<PaymentIcon/>}
          >
            <h3 className="vertical-timeline-element-title">
            Complete Payment And confirm Booking
            </h3> 
            <p>Proceed to payment to confirm your booking. We accept various payment methods to make it easy for you.</p>
          </VerticalTimelineElement> 
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            date="Successfull"
            icon={<CheckCircleOutlineIcon/>}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default HowItWork;
