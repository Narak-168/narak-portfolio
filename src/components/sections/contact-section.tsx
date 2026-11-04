/** @format */

"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { personalInfo } from "@/data/portfolio-data";
import { useTranslation } from "@/hooks/useTranslation";
import { SectionHeader } from "@/components/ui/section-header";
import {
	Mail,
	Send,
	CheckCircle2,
	AlertCircle,
	Copy,
	Check,
	ChevronRight,
} from "lucide-react";
import { SiGithub, SiTelegram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

export function ContactSection() {
	const { t } = useTranslation();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [copiedEmail, setCopiedEmail] = useState(false);

	const handleCopyEmail = () => {
		navigator.clipboard.writeText(personalInfo.email);
		setCopiedEmail(true);
		setTimeout(() => setCopiedEmail(false), 2500);
	};

	const validateForm = () => {
		const newErrors: { [key: string]: string } = {};

		if (!name.trim()) {
			newErrors.name = t("contact.errors.nameRequired");
		} else if (name.trim().length < 2) {
			newErrors.name = t("contact.errors.nameShort");
		}

		if (!email.trim()) {
			newErrors.email = t("contact.errors.emailRequired");
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			newErrors.email = t("contact.errors.emailInvalid");
		}

		if (!message.trim()) {
			newErrors.message = t("contact.errors.messageRequired");
		} else if (message.trim().length < 10) {
			newErrors.message = t("contact.errors.messageShort");
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validateForm()) return;

		setIsSubmitting(true);

		// Simulate server submission or prepare mailto
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
			setName("");
			setEmail("");
			setMessage("");
			setErrors({});
		}, 1200);
	};

	const fieldClass = (hasError: boolean) =>
		`w-full px-4 py-3.5 rounded-xl bg-white dark:bg-black border text-[15px] text-[#1d1d1f] dark:text-white placeholder-[#86868b] focus:outline-none transition-colors ${
			hasError ?
				"border-[#e30000] focus:ring-4 focus:ring-[#e30000]/15"
			:	"border-[#d2d2d7] dark:border-[#424245] focus:border-[#0066cc] dark:focus:border-[#2997ff] focus:ring-4 focus:ring-[#0071e3]/25"
		}`;

	const socials = [
		{
			label: "LinkedIn",
			href: personalInfo.linkedinUrl,
			icon: <FaLinkedin className='w-5 h-5 text-[#0A66C2]' />,
		},
		{
			label: "GitHub",
			href: personalInfo.githubUrl,
			icon: <SiGithub className='w-5 h-5 text-[#1d1d1f] dark:text-white' />,
		},
		{
			label: "Telegram",
			href: personalInfo.telegramUrl,
			icon: <SiTelegram className='w-5 h-5 text-[#229ED9]' />,
		},
	];

	return (
		<section id='contact' className='section-white py-24 sm:py-32'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<SectionHeader
					eyebrow={t("contact.badge")}
					title={t("contact.title")}
					subtitle={t("contact.subtitle")}
				/>

				<div className='grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch'>
					{/* Left Column: Direct Contact & Social Links */}
					<div className='lg:col-span-5 flex flex-col gap-4 sm:gap-5'>
						{/* Email Tile with 1-click Copy */}
						<div className='tile-gray p-8'>
							<Mail className='w-8 h-8 text-[#bf4800] dark:text-[#f56300]' />
							<p className='mt-5 text-sm text-[#86868b]'>
								{t("contact.directEmail")}
							</p>
							<a
								href={`mailto:${personalInfo.email}`}
								className='mt-1 block text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#1d1d1f] dark:text-[#f5f5f7] break-all hover:underline underline-offset-4'>
								{personalInfo.email}
							</a>
							<button
								onClick={handleCopyEmail}
								className='link-more mt-4'
								title='Copy email to clipboard'>
								{copiedEmail ?
									<>
										<Check className='w-4 h-4' />
										{t("contact.copied")}
									</>
								:	<>
										<Copy className='w-4 h-4' />
										{t("contact.copy")}
									</>
								}
							</button>
						</div>

						{/* Social Channels List */}
						<div className='tile-gray p-3'>
							{socials.map((social, idx) => (
								<a
									key={social.label}
									href={social.href}
									target='_blank'
									rel='noopener noreferrer'
									className={`flex items-center justify-between px-5 py-4 rounded-2xl hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors ${
										idx > 0 ?
											"border-t border-black/5 dark:border-white/10"
										:	""
									}`}>
									<span className='flex items-center gap-3.5 text-[15px] font-medium text-[#1d1d1f] dark:text-[#f5f5f7]'>
										{social.icon}
										{social.label}
									</span>
									<ChevronRight className='w-4 h-4 text-[#86868b]' />
								</a>
							))}
						</div>

						{/* Response note */}
						<p className='px-2 flex items-center gap-2.5 text-sm text-[#6e6e73] dark:text-[#86868b]'>
							<span className='h-2 w-2 rounded-full bg-[#0071e3] animate-pulse shrink-0' />
							{t("contact.responseBadge")}
						</p>
					</div>

					{/* Right Column: Contact Form */}
					<div className='lg:col-span-7 tile-gray p-8 sm:p-10'>
						{isSubmitted ?
							<motion.div
								initial={{ opacity: 0, scale: 0.97 }}
								animate={{ opacity: 1, scale: 1 }}
								className='h-full py-12 flex flex-col items-center justify-center text-center'>
								<CheckCircle2 className='w-14 h-14 text-[#0066cc] dark:text-[#2997ff]' />
								<h3 className='mt-5 text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#1d1d1f] dark:text-[#f5f5f7]'>
									{t("contact.successTitle")}
								</h3>
								<p className='mt-3 text-[15px] text-[#6e6e73] dark:text-[#86868b] max-w-sm'>
									{t("contact.successDesc")}
								</p>
								<button
									onClick={() => setIsSubmitted(false)}
									className='link-more mt-6'>
									{t("contact.sendAnother")}
									<ChevronRight className='w-4 h-4' />
								</button>
							</motion.div>
						:	<form onSubmit={handleSubmit} className='space-y-5' noValidate>
								<h3 className='text-2xl font-semibold tracking-[-0.02em] text-[#1d1d1f] dark:text-[#f5f5f7]'>
									{t("contact.formTitle")}
								</h3>

								{/* Name field */}
								<div>
									<label
										htmlFor='name'
										className='block text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7] mb-2'>
										{t("contact.name")}
									</label>
									<input
										id='name'
										type='text'
										value={name}
										onChange={(e) => {
											setName(e.target.value);
											if (errors.name) setErrors({ ...errors, name: "" });
										}}
										placeholder={t("contact.namePlaceholder")}
										className={fieldClass(!!errors.name)}
									/>
									{errors.name && (
										<p className='flex items-center gap-1 text-xs text-[#e30000] mt-1.5'>
											<AlertCircle className='w-3.5 h-3.5' />
											<span>{errors.name}</span>
										</p>
									)}
								</div>

								{/* Email field */}
								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7] mb-2'>
										{t("contact.email")}
									</label>
									<input
										id='email'
										type='email'
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
											if (errors.email) setErrors({ ...errors, email: "" });
										}}
										placeholder={t("contact.emailPlaceholder")}
										className={fieldClass(!!errors.email)}
									/>
									{errors.email && (
										<p className='flex items-center gap-1 text-xs text-[#e30000] mt-1.5'>
											<AlertCircle className='w-3.5 h-3.5' />
											<span>{errors.email}</span>
										</p>
									)}
								</div>

								{/* Message field */}
								<div>
									<div className='flex items-center justify-between mb-2'>
										<label
											htmlFor='message'
											className='block text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7]'>
											{t("contact.message")}
										</label>
										<span className='text-xs text-[#86868b]'>
											{message.length} / 500
										</span>
									</div>
									<textarea
										id='message'
										rows={5}
										maxLength={500}
										value={message}
										onChange={(e) => {
											setMessage(e.target.value);
											if (errors.message) setErrors({ ...errors, message: "" });
										}}
										placeholder={t("contact.messagePlaceholder")}
										className={`${fieldClass(!!errors.message)} resize-none`}
									/>
									{errors.message && (
										<p className='flex items-center gap-1 text-xs text-[#e30000] mt-1.5'>
											<AlertCircle className='w-3.5 h-3.5' />
											<span>{errors.message}</span>
										</p>
									)}
								</div>

								<button
									type='submit'
									disabled={isSubmitting}
									className='btn-pill w-full py-3.5 disabled:opacity-60'>
									{isSubmitting ?
										<>
											<span className='h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin' />
											{t("contact.submitting")}
										</>
									:	<>
											<Send className='w-4 h-4' />
											{t("contact.submit")}
										</>
									}
								</button>
							</form>
						}
					</div>
				</div>
			</div>
		</section>
	);
}
