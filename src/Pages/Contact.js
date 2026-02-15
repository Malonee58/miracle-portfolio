import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactDetails } from "../Details";

function Contact() {
	const { email, phone } = contactDetails;

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [buttonText, setButtonText] = useState("Send Message");
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});

		if (e.target.value.trim() !== "") {
			setErrors({ ...errors, [e.target.name]: false });
		}
	};

	const validateForm = () => {
		let newErrors = {};
		let isValid = true;

		Object.keys(formData).forEach((key) => {
			if (!formData[key].trim()) {
				newErrors[key] = true;
				isValid = false;
			}
		});

		setErrors(newErrors);
		return isValid;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			alert("Please fill in all fields");
			return;
		}

		setIsSubmitting(true);
		setButtonText("Sending...");

		const templateParams = {
			from_name: formData.name,
			from_email: formData.email,
			subject: formData.subject,
			message: formData.message,
		};

		try {
			// 1️⃣ Send message to YOU (Owner Template)
			await emailjs.send(
				process.env.REACT_APP_EMAIL_SERVICE_ID,
				process.env.REACT_APP_EMAIL_TEMPLATE_ID,
				templateParams,
				process.env.REACT_APP_EMAIL_PUBLIC_KEY
			);

			// 2️⃣ Send auto-reply to sender
			await emailjs.send(
				process.env.REACT_APP_EMAIL_SERVICE_ID,
				process.env.REACT_APP_EMAIL_AUTOREPLY_TEMPLATE_ID,
				templateParams,
				process.env.REACT_APP_EMAIL_PUBLIC_KEY
			);

			setButtonText("Message Sent!");
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
		} catch (error) {
			console.error("EmailJS Error:", error);
			alert("Something went wrong. Please try again.");
			setButtonText("Send Message");
		}

		setTimeout(() => {
			setButtonText("Send Message");
			setIsSubmitting(false);
		}, 2000);
	};

	return (
		<main className="container mx-auto max-w-6xl section py-20">
			<div className="text-center mb-16">
				<h1 className="text-3xl md:text-5xl font-bold text-dark-heading dark:text-light-heading">
					Let's Start a Conversation
				</h1>
				<p className="text-content mt-4 max-w-2xl mx-auto">
					Get in touch with me for any inquiries, collaborations. I'm always
					open to new opportunities and would love to hear from you.
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-12">
				<div className="space-y-6">
					<div className="p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
						<h3 className="text-xl font-semibold mb-2">Email</h3>
						<a href={`mailto:${email}`} className="text-gradient text-lg">
							{email}
						</a>
					</div>

					<div className="p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
						<h3 className="text-xl font-semibold mb-2">Phone</h3>
						<a href={`tel:${phone}`} className="text-gradient text-lg">
							{phone}
						</a>
					</div>
				</div>

				<div className="p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
					<form onSubmit={handleSubmit} className="space-y-6">
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							value={formData.name}
							onChange={handleChange}
							className={`w-full p-4 rounded-lg border ${
								errors.name ? "border-red-500" : "border-gray-300"
							} dark:bg-dark-bg`}
						/>

						<input
							type="email"
							name="email"
							placeholder="Your Email"
							value={formData.email}
							onChange={handleChange}
							className={`w-full p-4 rounded-lg border ${
								errors.email ? "border-red-500" : "border-gray-300"
							} dark:bg-dark-bg`}
						/>

						<input
							type="text"
							name="subject"
							placeholder="Subject"
							value={formData.subject}
							onChange={handleChange}
							className={`w-full p-4 rounded-lg border ${
								errors.subject ? "border-red-500" : "border-gray-300"
							} dark:bg-dark-bg`}
						/>

						<textarea
							name="message"
							placeholder="Your Message"
							value={formData.message}
							onChange={handleChange}
							rows="5"
							className={`w-full p-4 rounded-lg border ${
								errors.message ? "border-red-500" : "border-gray-300"
							} dark:bg-dark-bg`}
						/>

						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full py-4 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:opacity-90 transition disabled:opacity-70"
						>
							{buttonText}
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}

export default Contact;
