import './App.css';


function Contact() {
  return (
    <div className="App">
        <header>Contact</header>
     <div className="Name" type="input">
        Name
     </div>
    
     <div className="Email" type="input">
        Email Address
     </div>
     <div className="Message" type="input">
        Message
     </div>
     <button className="submit">Submit</button>
     

    </div>
  );
}

export default Contact;

