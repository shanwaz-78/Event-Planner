import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div
        className="text-center text-white"
        style={{
          background:
            "url('https://source.unsplash.com/random/1600x400?event')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="fw-bold">Contact Us</h2>
        <p>Home / Get in Touch</p>
      </div>

      <div className="container mt-5 text-center">
        <div className="row justify-content-center">
          <div className="col-md-3 p-3 bg-success text-white rounded me-3">
            <h6>📍 Address</h6>
            <p>38-2 Hilton Street, California</p>
          </div>
          <div className="col-md-3 p-3 bg-primary text-white rounded me-3">
            <h6>📞 Phone</h6>
            <p>+1 (123) 456 7890</p>
          </div>
          <div className="col-md-3 p-3 bg-dark text-white rounded">
            <h6>📧 Email</h6>
            <p>info@events.com</p>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <h5 className="text-start">📩 MESSAGE FORM</h5>
            <form className="mt-4">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Tel"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Where did you hear about us?"
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"

                  rows={2}
                  placeholder="Your Message..."
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="10+4"
                  required
                />
              </div>
              <button className="btn btn-danger w-100">Send Comment</button>
            </form>
          </div>

          <div className="col-md-6">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509304!2d144.9537353156679!3d-37.81627974201292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1fffd81%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1645572340000!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
