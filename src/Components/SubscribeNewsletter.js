import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SubscribeNewsletter() {
  const [inputEmail, setInputEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleEmailInput = (event) => {
    setInputEmail(event.target.value);
  };

  const handleBookAppointmentClick = async () => {
    if (!isButtonDisabled) {
      if (emailRegex.test(inputEmail)) {
        try {
          setIsButtonDisabled(true);
          const response = await fetch("service_3qatksr", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: inputEmail }),
          });

          if (response.ok) {
            toast.success("Subscribed to Newsletter!", {
              position: toast.POSITION.TOP_CENTER,
              onOpen: () => setInputEmail(""),
            });
          } else {
            throw new Error("Subscription failed.");
          }
        } catch (error) {
          toast.error("Subscription failed. Please try again!", {
            position: toast.POSITION.TOP_CENTER,
          });
        } finally {
          setIsButtonDisabled(false);
        }
      } else {
        toast.error("Invalid Email Address!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };

  return (
    <div className="ft-info-p2">
      <p className="ft-input-title">Stay Updated with Our Newsletter</p>
      <input
        type="email"
        className="ft-input"
        placeholder="Enter your email address"
        value={inputEmail}
        onChange={handleEmailInput}
        autoComplete="true"
      />
      <button
        className="text-appointment-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleBookAppointmentClick}
      >
        Subscribe
      </button>

      <ToastContainer autoClose={4000} limit={1} closeButton={false} />
    </div>
  );
}

export default SubscribeNewsletter;
