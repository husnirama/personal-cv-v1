import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { MdOutlinePhonelink } from "react-icons/md";
import { IoIosMailOpen } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { RiTelegram2Line } from "react-icons/ri";

export type ContactFormValues = {
  Name: string;
  Title: string;
  Email: string;
  Company: string;
  Subject: string;
  Message: string;
};

type SubmitStatus = "idle" | "success" | "error";

const contactFormSchema = Yup.object({
  Name: Yup.string()
    .required("Name is required")
    .max(100, "Can't more than 100 character"),
  Title: Yup.string()
    .required("Title is required")
    .max(100, "Can't more than 100 character"),
  Email: Yup.string()
    .email("Must be valid email")
    .required("Email is required"),
  Company: Yup.string()
    .required("Company is required")
    .max(100, "Can't more than 100 character"),
  Subject: Yup.string().required("Subject Message is Required"),
  Message: Yup.string().required("Message is required"),
});

// ✅ This is the IMPORTANT mapping for EmailJS template variables
function toEmailJsParams(values: ContactFormValues) {
  return {
    name: values.Name,
    title: values.Title,
    email: values.Email,
    company: values.Company,
    subject: values.Subject,
    message: values.Message,
    // Optional (if you use {{time}} in template)
    time: new Date().toLocaleString(),
  };
}

async function handleSubmit(
  values: ContactFormValues,
  {
    resetForm,
    setSubmitting,
  }: {
    resetForm: () => void;
    setSubmitting: (isSubmitting: boolean) => void;
  },
  setStatus: React.Dispatch<React.SetStateAction<SubmitStatus>>,
) {
  try {
    const templateParams = toEmailJsParams(values);

    await emailjs.send(
      "service_6gh5zre", // <-- replace
      "template_casllve", // <-- replace
      templateParams,
      "IcttArUM1aVQ5CfTB", // <-- replace
    );

    setStatus("success");
    resetForm();
  } catch (error) {
    setStatus("error");
  } finally {
    setSubmitting(false);
    setTimeout(() => setStatus("idle"), 4000);
  }
}

function StatusBox({
  type,
  message,
}: {
  type: "success" | "error";
  message: string;
}) {
  const styles =
    type === "success"
      ? "border-green-500 text-green-400 bg-green-500/10"
      : "border-red-500 text-red-400 bg-red-500/10";

  return (
    <div
      className={`absolute -top-14 left-0 w-full rounded-md border px-4 py-2 text-sm ${styles}`}
      aria-live="polite"
    >
      {message}
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const initialValues: ContactFormValues = {
    Name: "",
    Title: "",
    Email: "",
    Company: "",
    Subject: "",
    Message: "",
  };

  return (
    <section id="contact">
      <div className="h-[calc(100vh-55px)] bg-[url(chat-gpt.png)] bg-cover">
        <div className="h-full mx-[285px] px-7.5 pb-25">
          <div className="h-full flex justify-center items-center">
            <div id="content" className=" w-full">
              <h4 className="mb-10 font-bold text-white text-[36px] font-josefin font-600 text-center">
                Get In Touch
              </h4>
              <Formik
                initialValues={initialValues}
                validationSchema={contactFormSchema}
                onSubmit={(values, actions) =>
                  handleSubmit(values, actions, setStatus)
                }
              >
                {({ isSubmitting, touched, errors }) => (
                  <Form className="relative grid gap-4 md:grid-cols-2">
                    {status === "success" && (
                      <StatusBox
                        type="success"
                        message="Your message has been sent successfully."
                      />
                    )}
                    {status === "error" && (
                      <StatusBox
                        type="error"
                        message="Failed to send message. Please try again."
                      />
                    )}

                    <div className="space-y-2 pt-[10px] pr-5">
                      <Field
                        name="Name"
                        placeholder={
                          touched.Name && errors.Name ? errors.Name : "Name *"
                        }
                        className={`input ${touched.Name && errors.Name ? "ring-red-500" : ""}`}
                      />
                      <ErrorMessage
                        name="Name"
                        component="p"
                        className="error-text"
                      />
                    </div>

                    <div className="space-y-2 pt-[10px]">
                      <Field
                        name="Title"
                        placeholder={
                          touched.Title && errors.Title
                            ? errors.Title
                            : "Job Title *"
                        }
                        className={`input ${touched.Title && errors.Title ? "ring-red-500" : ""}`}
                      />
                      <ErrorMessage
                        name="Title"
                        component="p"
                        className="error-text"
                      />
                    </div>

                    <div className="space-y-2 pt-[10px] pr-5">
                      <Field
                        name="Email"
                        type="email"
                        placeholder={
                          touched.Email && errors.Email
                            ? errors.Email
                            : "Email *"
                        }
                        className={`input ${touched.Email && errors.Email ? "ring-red-500" : ""}`}
                      />
                      <ErrorMessage
                        name="Email"
                        component="p"
                        className="error-text"
                      />
                    </div>

                    <div className="space-y-2 pt-[10px]">
                      <Field
                        name="Company"
                        placeholder={
                          touched.Company && errors.Company
                            ? errors.Company
                            : "Company Name*"
                        }
                        className={`input ${touched.Company && errors.Company ? "ring-red-500" : ""}`}
                      />
                      <ErrorMessage
                        name="Company"
                        component="p"
                        className="error-text"
                      />
                    </div>

                    <div className="space-y-2 pt-[10px] md:col-span-2">
                      <Field
                        name="Subject"
                        placeholder={
                          touched.Subject && errors.Subject
                            ? errors.Subject
                            : "Subject *"
                        }
                        className={`input ${touched.Subject && errors.Subject ? "ring-red-500" : ""}`}
                      />
                      <ErrorMessage
                        name="Subject"
                        component="p"
                        className="error-text"
                      />
                    </div>

                    <div className="space-y-2 pt-[10px] md:col-span-2">
                      <Field
                        as="textarea"
                        name="Message"
                        placeholder={
                          touched.Message && errors.Message
                            ? errors.Message
                            : "Message"
                        }
                        rows={5}
                        className={`input resize-none ${touched.Message && errors.Message ? "ring-red-500" : ""}`}
                      />
                      <ErrorMessage
                        name="Message"
                        component="p"
                        className="error-text"
                      />
                    </div>

                    <div className="md:col-span-2 mt-4 text">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-[130px] h-10 px-8 py-3 text-[15px] font-open font-bold text-white border-2 border-white bg-[#ffc107] overflow-hidden transition-all duration-300 hover:bg-transparent"
                      >
                        <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                          <RiTelegram2Line className="text-white text-xl" />
                        </span>
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              <div
                id="contact-bottom"
                className="w-[80%] flex justify-between items-center mt-15"
              >
                <div className="h-full flex justify-between items-center gap-5">
                  <MdOutlinePhonelink className="h-[25px] w-[25px] text-[#C49B66] font-extrabold" />
                  <div className="w-px h-10 border-l border-white"></div>
                  <div>
                    <h6 className="text-[14px] font-josefin font-bold text-white pb-1">
                      Phone
                    </h6>
                    <p className="text-[15px] font-open font-400 text-[#a3a3a3]">
                      +62 858 7143 9193
                    </p>
                  </div>
                </div>
                <div className="h-full flex justify-between items-center gap-5">
                  <IoIosMailOpen className="h-[25px] w-[25px] text-[#C49B66] font-extrabold" />
                  <div className="w-px h-10 border-l border-white"></div>
                  <div>
                    <h6 className="text-[14px] font-josefin font-bold text-white pb-1">
                      Email
                    </h6>
                    <p className="text-[15px] font-open font-400 text-[#a3a3a3]">
                      husniramandalubis@gmail.com
                    </p>
                  </div>
                </div>
                <div className="h-full flex justify-between items-center gap-5">
                  <FiMapPin className="h-[25px] w-[25px] text-[#C49B66] font-extrabold" />
                  <div className="w-px h-10 border-l border-white"></div>
                  <div>
                    <h6 className="text-[14px] font-josefin font-bold text-white pb-1">
                      Address
                    </h6>
                    <p className="text-[15px] font-open font-400 text-[#a3a3a3]">
                      Jakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
