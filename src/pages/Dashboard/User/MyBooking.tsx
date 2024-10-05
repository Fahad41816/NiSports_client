/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetUserBookingsQuery,
  useUpdateUserBookingsMutation,
} from "../../../Redux/Feature/Booking/BookingApi";
import { Card, Row, Col, Tag, Spin, Image, Button } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CalendarOutlined,
  DollarCircleOutlined,
  EnvironmentOutlined, 
  DeleteOutlined,
} from "@ant-design/icons";
import { toast, Toaster } from "sonner";

const MyBooking = () => {
  const { data = [], isLoading } = useGetUserBookingsQuery(undefined);

  console.log(data)

  const [CancleBooking] = useUpdateUserBookingsMutation();

  const HandleCancleBooking = (id: string) => {
    CancleBooking(id);
    toast.error("Your Booking Cancled!");
  };

  if (isLoading) {
    return <Spin fullscreen />;
  }

  return (
    <section>
      <Toaster/>
      {data?.data?.map((Booking: any) => (
        <Card
          actions={[
            <Button
              type="default"
              onClick={() => HandleCancleBooking(Booking._id)}
              danger
              icon={<DeleteOutlined />}
              hidden={Booking?.isBooked === "canceled"}
            >
              Cancel Booking
            </Button>,
          ]}
          style={{
            margin: "20px",
            borderRadius: "10px",
            borderColor: "#177C82",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Row gutter={[16, 16]}>
            {/* Transaction ID */}

            <Col span={24}>
              <h3 style={{ fontWeight: "bold", color: "#177C82" }}>
                Booking ID: {Booking?.TranId}
              </h3>
            </Col>

            {/* Date and Time */}
            <Col span={12}>
              <p>
                <CalendarOutlined style={{ marginRight: "5px" }} />
                Date: <span style={{ fontWeight: "500" }}>{Booking?.date}</span>
              </p>
              <p>
                Time:{" "}
                <span style={{ fontWeight: "500" }}>
                  {Booking?.startTime} - {Booking?.endTime}
                </span>
              </p>
            </Col>

            {/* Booking Status */}
            <Col span={12}>
              <p>
                Booking Status:{" "}
                {Booking?.isBooked == "confirmed" ? (
                  <Tag icon={<CheckCircleOutlined />} color="green">
                    Confirmed
                  </Tag>
                ) : (
                  <Tag icon={<CloseCircleOutlined />} color="red">
                    cancled
                  </Tag>
                )}
              </p>
            </Col>

            {/* Facility Image */}
            <Col span={24}>
              <Image
                width={400}
                src={Booking?.facility?.image}
                alt={Booking?.facility?.name}
                style={{ borderRadius: "8px" }}
              />
            </Col>

            {/* Facility Name and Description */}
            <Col span={24}>
              <h3
                style={{
                  margin: "10px 0",
                  fontWeight: "bold",
                  color: "#177C82",
                }}
              >
                {Booking?.facility?.name}
              </h3>
              <p>{Booking?.facility?.description}</p>
            </Col>

            {/* Facility Location and Price */}
            <Col span={12}>
              <p>
                <EnvironmentOutlined style={{ marginRight: "5px" }} />
                Location:{" "}
                <span style={{ fontWeight: "500" }}>
                  {Booking?.facility?.location}
                </span>
              </p>
            </Col>

            <Col span={12}>
              <p>
                <DollarCircleOutlined style={{ marginRight: "5px" }} />
                Price per Hour:{" "}
                <span style={{ fontWeight: "500" }}>
                  ${Booking?.facility?.pricePerHour}
                </span>
              </p>
              <p>
                Payable Amount:{" "}
                <span style={{ fontWeight: "500" }}>
                  ${Booking?.facility?.payableAmount}
                </span>
              </p>
            </Col>
          </Row>
        </Card>
      ))}
    </section>
  );
};

export default MyBooking;
