import "./contact.css";

const Contact = () => {
	return (
		<div className="contact">
			<div className="contactSection">
				<form action="">
					<h1 className="contactTitle">Let&apos;s Keep in Touch</h1>
					<div className="formItem">
						<label htmlFor="name">Name</label>
						<input id="name" type="text" placeholder="John Doe" />
					</div>
					<div className="formItem">
						<label htmlFor="email">Email</label>
						<input id="email" type="text" placeholder="John@gmail.com" />
					</div>
					<div className="formItem">
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							rows={10}
							placeholder="Write your message..."
						/>
					</div>
					<button className="formButton">Send</button>
				</form>
			</div>
			<div className="contactSection">SVG</div>
		</div>
	);
};

export default Contact;
