/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, List, Modal, Upload } from "antd";
import {
  useAddFacilityMutation,
  useDeleteFacilityMutation,
  useGetFacilityQuery,
  useUpdateFacilityMutation,
} from "../../../Redux/Feature/Facility/FacilityApi";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Form, Input, InputNumber } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { toast, Toaster } from "sonner";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const FacilityManagement = () => {


  const { data: facility, isLoading } = useGetFacilityQuery({  Search: undefined,
    page: 1, 
    limit : 10,
    filter: undefined});

  const [isAddFacilityModalOpen, setisAddFacilityModalOpen] = useState(false);
  const [isEditFacilityModalOpen, setisEditFacilityModalOpen] = useState(false);
  const [UpdatedfacilityData, setUpdatedfacilityData] : any = useState();

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const showAddFacilityModal = () => {
    setisAddFacilityModalOpen(true);
  };

  const addFacilityHandleOk = () => {
    setisAddFacilityModalOpen(false);
  };

  const addFacilityHandleCancel = () => {
    setisAddFacilityModalOpen(false);
  };

  const showeditFacilityModal = (data : any) => {
    setisEditFacilityModalOpen(true);
    setUpdatedfacilityData(data);
  };

  const editFacilityHandleOk = () => {
    setisEditFacilityModalOpen(false);
  };

  const editFacilityHandleCancel = () => {
    setisEditFacilityModalOpen(false);
  };

  // image handler

 

  const [addFacility] = useAddFacilityMutation();

  // Function to handle image upload
  const handleUploadImage = async (imageFile: any) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    const apiKey = "335c35b1bcfdd90384cd76f79928ad94"; // Replace with your ImgBB API key
    const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        return data.data.url; // Return the uploaded image URL
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  // Main function to handle form submission
  const onFinish = async (values: any) => {
    try {
      // Step 1: Show a loading message while uploading the image
      toast.info("Uploading image, please wait...");

      // Step 2: Upload the image and wait for the image URL
      const imageUrl = await handleUploadImage(
        values.UploadImage[0].originFileObj
      );

      // Step 3: Prepare facility data after image upload is successful
      const AddFacilityData = {
        name: values.Name,
        image: imageUrl, // Use the image URL obtained from handleUploadImage
        popular: false,
        description: values.description,
        location: values.Location,
        pricePerHour: values.pricePerHour,
      };

      console.log(AddFacilityData);

      // Step 4: Add facility data to the database
      await addFacility(AddFacilityData);

      // Step 5: Show success message
      toast.success("Facility added successfully!");
      setisAddFacilityModalOpen(false)
    } catch (error) {
      // Step 6: Handle errors during image upload or facility addition
      console.error("Error adding facility:", error);
      toast.error("Failed to add facility.");
    }
  };

  const [DeletFacility] = useDeleteFacilityMutation();

  const DeleteFacility = (id: string) => {
    toast.success("Facility Deleted.");
    DeletFacility(id);
  };

  const [formData, setFormData] = useState({
    name: UpdatedfacilityData?.name || "",
    description: UpdatedfacilityData?.description || "",
    location: UpdatedfacilityData?.location || "",
    pricePerHour: UpdatedfacilityData?.pricePerHour || "",
    image: UpdatedfacilityData?.image || "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: any) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const [UpdateFacility] = useUpdateFacilityMutation();

  const handleUpdateFacility = async (formData: any) => {
    try {
      let imageUrl = UpdatedfacilityData.image; // Default to existing image URL

      // Step 1: If an image is selected, upload it first
      if (formData.image) {
        const uploadedImageUrl = await handleUploadImage(formData.image); // Image upload function
        imageUrl = uploadedImageUrl; // Update image URL
      }

      // Step 2: Prepare the updated facility data
      const updatedFacilityData = {
        name: formData.name,
        description: formData.description,
        location: formData.location,
        pricePerHour: Number(formData.pricePerHour),
        image: imageUrl,
      };

      UpdateFacility({ id: formData._id, updateData: updatedFacilityData });
      toast.success("Facility Updated successfully!");
      setisEditFacilityModalOpen(false)
    } catch (error) {
      console.error("Error updating facility:", error);
      toast.error("Error updating facility.");
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    handleUpdateFacility(formData);
  };

  return (
    <div
      id="scrollableDiv"
      style={{
        padding: "0 16px",
        borderTop: "1px solid #eee",
      }}
    >
      <Toaster richColors position="top-right"/> 
      <div className="mb-2">
        <Button
          style={{ background: "#177C82", color: "#fff" }}
          onClick={showAddFacilityModal}
        >
          <AddCircleIcon /> Add Facility
        </Button>
      </div>
      <List
        dataSource={facility?.data?.data}
        loading={isLoading}
        renderItem={(item: any) => (
          <List.Item
            key={item?._id}
            style={{
              height: "auto",
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
              padding: "5px",
            }}
          >
            <img className="w-40 h-32 object-fill" src={item?.image} />
            <List.Item.Meta
              title={<a>{item?.name}</a>}
              description={item?.description}
            />
            <div className=" flex flex-col gap-3 items-center justify-center ">
              <span onClick={() => DeleteFacility(item?._id)}>
                <DeleteSweepIcon className="cursor-pointer text-red-500 " />
              </span>

              <span>
                <Button
                  onClick={() => {
                    showeditFacilityModal(item);
                    setFormData(item);
                  }}
                >
                  <DesignServicesIcon className="cursor-pointer text-blue-500 " />
                </Button>
              </span>
            </div>
          </List.Item>
        )}
      />

      {/* Add Facility Model  */}
      <Modal
        title="Add Facility"
        open={isAddFacilityModalOpen}
        onOk={addFacilityHandleOk}
        onCancel={addFacilityHandleCancel}
        okText="ok"
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{ hidden: true }}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{ width: "100%" }}
          validateMessages={validateMessages}
          layout="vertical"
        >
          <Form.Item
            name="UploadImage"
            label="Facility Image Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action="/upload.do" listType="picture-card">
              <button style={{ border: 0, background: "none" }} type="button">
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="Name"
            label="Name"
            rules={[{ required: true }]}
            layout="vertical"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Location"
            label="location"
            rules={[{ type: "string", required: true }]}
            layout="vertical"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="pricePerHour"
            label="pricePerHour"
            rules={[{ type: "number", required: true }]}
            layout="vertical"
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            required={true}
            layout="vertical"
            name="description"
            label="description"
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            style={{ width: "100%" }}
            wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
          >
            <Button
              style={{
                width: "200px",
                height: "50px",
                background: "#177C82",
                color: "#fff",
              }}
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Edit Facility Model  */}
      <Modal
        title="Basic Modal"
        open={isEditFacilityModalOpen}
        onOk={editFacilityHandleOk}
        onCancel={editFacilityHandleCancel}
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{ hidden: true }}
      >
        <h2 className="text-2xl font-semibold mb-4">Update Facility</h2>
        <form onSubmit={handleSubmit}>
          {/* Image Upload Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Upload Image
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Facility Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Location Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Price Per Hour Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Price Per Hour
            </label>
            <input
              type="number"
              name="pricePerHour"
              value={formData.pricePerHour}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#177C82] text-white px-6 py-2 rounded-md hover:bg-[#0e5b5c] transition-colors duration-200"
            >
              Update Facility
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default FacilityManagement;
