import { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeading from "../Components/SectionHeading";
import { contactDetails } from "../Details";

const FIELDS = [
	{ name: "name", label: "Your Name", type: "text" },
	{ name: "email", label: "Your Email", type: "email" },
	{ name: "subject", label: "Subject", type: "text" },
];

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
	const [status, setStatus] = useState(null); // "success" | "error" | null
	const [statusMessage, setStatusMessage] = useState("");

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
		setStatus(null);

		if (!validateForm()) {
			setStatus("error");
			setStatusMessage("Please fill in all fields before sending.");
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
				process.env.REACT_APP_EMAIL_PUBLIC_KEY,
			);

			// 2️⃣ Send auto-reply to sender
			await emailjs.send(
				process.env.REACT_APP_EMAIL_SERVICE_ID,
				process.env.REACT_APP_EMAIL_AUTOREPLY_TEMPLATE_ID,
				templateParams,
				process.env.REACT_APP_EMAIL_PUBLIC_KEY,
			);

			setButtonText("Message Sent!");
			setStatus("success");
			setStatusMessage("Thanks for reaching out — I'll get back to you soon.");
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
		} catch (error) {
			console.error("EmailJS Error:", error);
			setStatus("error");
			setStatusMessage("Something went wrong. Please try again.");
			setButtonText("Send Message");
		}

		setTimeout(() => {
			setButtonText("Send Message");
			setIsSubmitting(false);
		}, 2000);
	};

	return (
		<main className="container mx-auto max-width section pb-28">
			<SectionHeading
				eyebrow=" get in touch"
				title="Let's Start a Conversation"
				description="Get in touch for any inquiries or collaborations. I'm always open to new opportunities and would love to hear from you."
				align="center"
			/>

			<div className="grid md:grid-cols-2 gap-8 pt-14 max-w-5xl mx-auto">
				<div className="space-y-6">
					<div className="card-surface p-6">
						<h3 className="font-mono-tag text-heading/70 mb-2">Email</h3>
						<a
							href={`mailto:${email}`}
							className="text-gradient text-lg font-medium break-all"
						>
							{email}
						</a>
					</div>

					<div className="card-surface p-6">
						<h3 className="font-mono-tag text-heading/70 mb-2">Phone</h3>
						<a
							href={`tel:${phone}`}
							className="text-gradient text-lg font-medium"
						>
							{phone}
						</a>
					</div>

					<div className="card-surface p-6">
						<h3 className="font-mono-tag text-heading/70 mb-2">
							Response time
						</h3>
						<p className="text-body text-sm leading-relaxed">
							I usually reply within 24–48 hours on weekdays.
						</p>
					</div>
				</div>

				<div className="card-surface p-6 md:p-8">
					<form onSubmit={handleSubmit} noValidate className="space-y-5">
						{FIELDS.map((field) => (
							<FloatingInput
								key={field.name}
								field={field}
								value={formData[field.name]}
								error={errors[field.name]}
								onChange={handleChange}
							/>
						))}

						<div className="relative">
							<textarea
								id="message"
								name="message"
								placeholder=" "
								value={formData.message}
								onChange={handleChange}
								rows="5"
								className={`peer w-full px-4 pt-5 pb-2 rounded-lg bg-surface-2 dark:bg-surface-2-dark border text-heading placeholder-transparent outline-none transition-colors duration-200 resize-none ${
									errors.message
										? "border-red-400 focus:border-red-500"
										: "border-borderc dark:border-borderc-dark focus:border-indigo-accent"
								}`}
							/>
							<label
								htmlFor="message"
								className="absolute left-4 top-3.5 text-body text-sm transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-indigo-accent peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs"
							>
								Your Message
							</label>
						</div>

						<button
							type="submit"
							disabled={isSubmitting}
							className="btn-primary w-full"
						>
							{buttonText}
						</button>

						{status && (
							<div
								role="status"
								className={`reveal reveal-visible text-sm rounded-lg px-4 py-3 border ${
									status === "success"
										? "bg-green-50 dark:bg-green-500/10 border-green-300/60 text-green-700 dark:text-green-400"
										: "bg-red-50 dark:bg-red-500/10 border-red-300/60 text-red-700 dark:text-red-400"
								}`}
							>
								{statusMessage}
							</div>
						)}
					</form>
				</div>
			</div>
		</main>
	);
}

function FloatingInput({ field, value, error, onChange }) {
	return (
		<div className="relative">
			<input
				id={field.name}
				type={field.type}
				name={field.name}
				placeholder=" "
				value={value}
				onChange={onChange}
				className={`peer w-full px-4 pt-5 pb-2 rounded-lg bg-surface-2 dark:bg-surface-2-dark border text-heading placeholder-transparent outline-none transition-colors duration-200 ${
					error
						? "border-red-400 focus:border-red-500"
						: "border-borderc dark:border-borderc-dark focus:border-indigo-accent"
				}`}
			/>
			<label
				htmlFor={field.name}
				className="absolute left-4 top-3.5 text-body text-sm transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-indigo-accent peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs"
			>
				{field.label}
			</label>
		</div>
	);
}

export default Contact;
