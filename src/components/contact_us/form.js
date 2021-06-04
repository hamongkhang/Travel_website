import React,{Component} from 'react';
import { useContext, useState } from "react";
import { AppContext } from "../../Context";

const Form = () => {
  const [newContact, setNewContact] = useState({});
  const {
   contact2
  } = useContext(AppContext);

  const addContact = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewContact({
      ...newContact,
      [field]: value,
    });
  };

  const addddContact = (e) => {
    e.preventDefault();
    contact2(newContact);
    e.target.reset();
  };

        return(
   <section className="innerpage-wrapper">
   <div id="contact-us" className="innerpage-section-padding">
     <div className="container">
       <div className="row">
         <div className="col-sm-12 col-md-5 no-pd-r">
           <div className="custom-form contact-form">
             <h3>Contact Us</h3>
             <p>Welcome to Starttravel. Your informations will be secured carefully. Please fill informations fully. Contact us if you get any problems.</p>
             <form className="insertForm" onSubmit={addddContact}>
               <div className="form-group">
                 <input type="text" className="form-control" onChange={(event) => addContact(event)} name="name" placeholder="Name" required />
                 <span><i className="fa fa-user" /></span>
               </div>
               <div className="form-group">
                 <input type="email" className="form-control" onChange={(event) => addContact(event)} name="email" placeholder="Email" required />
                 <span><i className="fa fa-envelope" /></span>
               </div>
               <div className="form-group">
                 <input type="text" className="form-control" onChange={(event) => addContact(event)} placeholder="Subject" name="subject" required />
                 <span><i className="fa fa-info-circle" /></span>
               </div>
               <div className="form-group">
                 <textarea className="form-control" rows={4} name="message" onChange={(event) => addContact(event)} placeholder="Your Message" defaultValue={""} />
                 <span><i className="fa fa-pencil" /></span>
               </div>
               <button type="submit" className="btn btn-orange btn-block">Send</button>
             </form>
           </div>
           {/* end contact-form */}
         </div>
         {/* end columns */}
         <div className="col-sm-12 col-md-7 no-pd-l">
           <div className="map">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5422.217680878009!2d108.24220260953769!3d16.06098018315957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177f2ced6d8b%3A0xe282c779264f7088!2zVHLGsOG7nW5nIENhbyDEkOG6s25nIE5naOG7gSDEkMOgIE7hurVuZw!5e0!3m2!1svi!2skr!4v1611308637342!5m2!1svi!2skr" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
           </div>
           {/* end map */}
         </div>
         {/* end columns */}
       </div>
       {/* end row */}
     </div>
     {/* end container */}
   </div>
   {/* end contact-us */}
 </section>
    );
}
export default Form;