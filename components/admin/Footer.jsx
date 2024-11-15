import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { footerSchema } from "../../schema/footer";
import axios from "axios";
import { toast } from "react-toastify";

const Footer = () => {
  const [iconName, setIconName] = useState("fa fa-");
  const [linkAddress, setLinkAddress] = useState("https://");

  const [footerData, setFooterData] = useState([]);
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);

  useEffect(() => {
    const getFooterData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`
        );
        setFooterData(res.data[0]);
        setSocialMediaLinks(res.data[0].socialMedia);
      } catch (err) {
        console.log(err);
      }
    };
    getFooterData();
  }, []);

  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/footer/${footerData._id}`,
        {
          location: values?.location,
          email: values?.email,
          phoneNumber: values?.phoneNumber,
          desc: values?.desc,
          openingHours: {
            day: values?.day,
            hour: values?.time,
          },
          socialMedia: socialMediaLinks,
        }
      );
      if (res.status === 200) {
        toast.success("Bilgiler Güncellendi.", { autoClose: 2000 });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        location: footerData?.location,
        email: footerData?.email,
        phoneNumber: footerData?.phoneNumber,
        desc: footerData?.desc,
        day: footerData?.openingHours?.day,
        time: footerData?.openingHours?.hour,
      },
      onSubmit,
      validationSchema: footerSchema,
    });
  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Konum",
      value: values.location,
      errorMessage: errors.location,
      touched: touched.location,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Emailiniz..",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "number",
      placeholder: "Telefon Numaranız..",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 4,
      name: "desc",
      type: "text",
      placeholder: "Logo Altı Açıklama",
      value: values.desc,
      errorMessage: errors.desc,
      touched: touched.desc,
    },
    {
      id: 5,
      name: "day",
      type: "text",
      placeholder: "Açık Günler",
      value: values.day,
      errorMessage: errors.day,
      touched: touched.day,
    },
    {
      id: 6,
      name: "time",
      type: "text",
      placeholder: "Açık Saatler",
      value: values.time,
      errorMessage: errors.time,
      touched: touched.time,
    },
  ];

  const handleCreate = (e) => {
    setSocialMediaLinks([
      ...footerData?.socialMedia,
      {
        icon: iconName,
        link: linkAddress,
      },
    ]);
    setLinkAddress("https://");
    setIconName("fa fa-");
  };
  return (
    <form className="p-8 flex-1" onSubmit={handleSubmit}>
      <Title addClass="text-[40px] text-center">Alt Bilgi Ayarları</Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
      </div>
      <div className="mt-6 flex justify-between md:items-center md:flex-row flex-col gap-4">
        <div className="flex items-center gap-4">
          <Input
            placeholder="Link"
            value={linkAddress}
            onChange={(e) => setLinkAddress(e.target.value)}
          />
          <Input
            placeholder="Icon Adı"
            value={iconName}
            onChange={(e) => setIconName(e.target.value)}
          />
          <button className="btn-primary" type="button" onClick={handleCreate}>
            EKLE
          </button>
        </div>
        <ul className="flex items-center gap-4">
          {socialMediaLinks.map((item, index) => (
            <li key={index} className="flex items-center">
              <i className={`${item.icon} text-xl`}></i>
              <button
                className="text-danger"
                onClick={() => {
                  setSocialMediaLinks((prev) =>
                    prev.filter((item, i) => i !== index)
                  );
                }}
                type="button"
              >
                <i className="fa fa-trash text-lg ml-2"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="btn-primary hover:text-secondary mt-6 items-center"
        type="submit"
      >
        GÜNCELLE
      </button>
    </form>
  );
};

export default Footer;
