


import ContactForm from "./ContactForm";
export default function Contact() {


  return (
    <div className="col-xxl-8 col-xl-9">
      <div className="bostami-page-content-wrap">
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title">contact</h2>
          </div>
        </div>

        <div className="section-wrapper pr-60 pl-60 mb-60">
          <div className="contact-area bg-light-white-2">
            <h5 className="contact-title">
              I'm always open to discussing produuct
            </h5>
            <h5 className="contact-title-b">design work or partnerships.</h5>
           <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  );
}
