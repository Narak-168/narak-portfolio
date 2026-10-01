/** @format */

"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { personalInfo } from "@/data/portfolio-data";
import { useTranslation } from "@/hooks/useTranslation";
import {
	Mail,
	Send,
	CheckCircle2,
	AlertCircle,
	Copy,
	Check,
	ExternalLink,
	MessageSquare,
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
			newErrors.email = "Please enter your email address.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			newErrors.email = "Please enter a valid email address.";
		}

		if (!message.trim()) {
			newErrors.message = "Please enter your message.";
		} else if (message.trim().length < 10) {
			newErrors.message = "Message must be at least 10 characters long.";
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

	return (
		<section id='contact' className='py-20 sm:py-28 relative'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Section Header */}
				<div className='text-center max-w-2xl mx-auto mb-16'>
					<span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-green/15 text-[rgb(58,117,22)] dark:text-[rgb(167,241,117)] border border-[rgb(167,241,117)]/30 mb-3'>
						<MessageSquare className='w-3.5 h-3.5 text-[rgb(255,87,87)]' />
						GET IN TOUCH
					</span>
					<h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white'>
						Let&apos;s Talk
					</h2>
					<p className='text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed'>
						I&apos;m always interested in new opportunities, interesting
						projects, and collaborations. Feel free to get in touch.
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
					{/* Left Column: Direct Contact & Social Links */}
					<div className='lg:col-span-5 space-y-6'>
						{/* Email Card with 1-click Copy */}
						<div className='p-6 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800/90 shadow-xs'>
							<div className='flex items-center justify-between mb-3'>
								<div className='flex items-center gap-2.5'>
									<div className='h-9 w-9 rounded-xl bg-[rgb(255,87,87)]/15 text-[rgb(255,87,87)] flex items-center justify-center font-bold'>
										<Mail className='w-4 h-4' />
									</div>
									<div>
										<p className='text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase'>
											Direct Email
										</p>
										<p className='text-sm font-semibold text-zinc-900 dark:text-white'>
											{personalInfo.email}
										</p>
									</div>
								</div>

								<button
									onClick={handleCopyEmail}
									className='inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer'
									title='Copy email to clipboard'>
									{copiedEmail ?
										<>
											<Check className='w-3.5 h-3.5 text-[rgb(58,117,22)] dark:text-[rgb(167,241,117)]' />
											<span className='text-[rgb(58,117,22)] dark:text-[rgb(167,241,117)] font-semibold'>
												Copied!
											</span>
										</>
									:	<>
											<Copy className='w-3.5 h-3.5' />
											<span>Copy</span>
										</>
									}
								</button>
							</div>
						</div>

						{/* Social Channels List */}
						<div className='p-6 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800/90 shadow-xs space-y-3'>
							<h3 className='text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2'>
								Online Channels
							</h3>

							{/* LinkedIn */}
							<a
								href={personalInfo.linkedinUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-100 dark:border-zinc-700/60 transition-colors group'>
								<div className='flex items-center gap-3'>
									<FaLinkedin className='w-5 h-5 text-[#0A66C2]' />
									<div>
										<p className='text-sm font-semibold text-zinc-900 dark:text-white'>
											LinkedIn
										</p>
									</div>
								</div>
								<ExternalLink className='w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors' />
							</a>

							{/* GitHub */}
							<a
								href={personalInfo.githubUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-100 dark:border-zinc-700/60 transition-colors group'>
								<div className='flex items-center gap-3'>
									<SiGithub className='w-5 h-5 text-zinc-900 dark:text-white' />
									<div>
										<p className='text-sm font-semibold text-zinc-900 dark:text-white'>
											GitHub
										</p>
									</div>
								</div>
								<ExternalLink className='w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors' />
							</a>

							{/* Telegram */}
							<a
								href={personalInfo.telegramUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-100 dark:border-zinc-700/60 transition-colors group'>
								<div className='flex items-center gap-3'>
									<SiTelegram className='w-5 h-5 text-[#229ED9]' />
									<div>
										<p className='text-sm font-semibold text-zinc-900 dark:text-white'>
											Telegram
										</p>
									</div>
								</div>
								<ExternalLink className='w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors' />
							</a>
						</div>

						{/* Response speed badge */}
						<div className='p-4 rounded-xl bg-brand-green/10 border border-brand-green/25 text-xs text-[rgb(46,91,21)] dark:text-[rgb(167,241,117)] flex items-center gap-2'>
							<span className='h-2 w-2 rounded-full bg-brand-green animate-pulse' />
							<span>
								Active & responsive — typical turnaround within 24 hours.
							</span>
						</div>
					</div>

					{/* Right Column: Modern Contact Form */}
					<div className='lg:col-span-7'>
						<div className='p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800/90 shadow-sm'>
							{isSubmitted ?
								<motion.div
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									className='py-12 text-center space-y-4'>
									<div className='h-14 w-14 rounded-full bg-brand-green/20 text-[rgb(58,117,22)] dark:text-[rgb(167,241,117)] flex items-center justify-center mx-auto'>
										<CheckCircle2 className='w-8 h-8' />
									</div>
									<h3 className='text-2xl font-bold text-zinc-900 dark:text-white'>
										Message Sent Successfully!
									</h3>
									<p className='text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto'>
										Thank you for reaching out. I will review your message and
										get back to you promptly.
									</p>
									<div className='pt-4'>
										<button
											onClick={() => setIsSubmitted(false)}
											className='px-5 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:opacity-90 transition-opacity cursor-pointer'>
											Send Another Message
										</button>
									</div>
								</motion.div>
							:	<form onSubmit={handleSubmit} className='space-y-5' noValidate>
									{/* Name field */}
									<div>
										<label
											htmlFor='name'
											className='block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 uppercase mb-2'>
											Your Name{" "}
											<span className='text-[rgb(255,87,87)] font-bold'>*</span>
										</label>
										<input
											id='name'
											type='text'
											value={name}
											onChange={(e) => {
												setName(e.target.value);
												if (errors.name) setErrors({ ...errors, name: "" });
											}}
											placeholder='e.g. Sokha Chan'
											className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none transition-colors ${
												errors.name ?
													"border-red-500 focus:border-red-500"
												:	"border-zinc-200 dark:border-zinc-700 focus:border-brand-green dark:focus:border-brand-green"
											}`}
										/>
										{errors.name && (
											<p className='flex items-center gap-1 text-xs text-red-500 mt-1.5'>
												<AlertCircle className='w-3.5 h-3.5' />
												<span>{errors.name}</span>
											</p>
										)}
									</div>

									{/* Email field */}
									<div>
										<label
											htmlFor='email'
											className='block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 uppercase mb-2'>
											Email Address{" "}
											<span className='text-[rgb(255,87,87)] font-bold'>*</span>
										</label>
										<input
											id='email'
											type='email'
											value={email}
											onChange={(e) => {
												setEmail(e.target.value);
												if (errors.email) setErrors({ ...errors, email: "" });
											}}
											placeholder='name@example.com'
											className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none transition-colors ${
												errors.email ?
													"border-red-500 focus:border-red-500"
												:	"border-zinc-200 dark:border-zinc-700 focus:border-[rgb(167,241,117)] dark:focus:border-[rgb(167,241,117)]"
											}`}
										/>
										{errors.email && (
											<p className='flex items-center gap-1 text-xs text-red-500 mt-1.5'>
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
												className='block text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 uppercase'>
												Message{" "}
												<span className='text-[rgb(255,87,87)] font-bold'>
													*
												</span>
											</label>
											<span className='text-[10px] text-zinc-400 font-mono'>
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
												if (errors.message)
													setErrors({ ...errors, message: "" });
											}}
											placeholder='Tell me about your project, idea, or opportunity...'
											className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none transition-colors resize-none ${
												errors.message ?
													"border-red-500 focus:border-red-500"
												:	"border-zinc-200 dark:border-zinc-700 focus:border-[rgb(167,241,117)] dark:focus:border-[rgb(167,241,117)]"
											}`}
										/>
										{errors.message && (
											<p className='flex items-center gap-1 text-xs text-red-500 mt-1.5'>
												<AlertCircle className='w-3.5 h-3.5' />
												<span>{errors.message}</span>
											</p>
										)}
									</div>

									{/* Submit Button */}
									<button
										type='submit'
										disabled={isSubmitting}
										className='w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold bg-[rgb(167,241,117)] hover:bg-[rgb(150,224,98)] text-zinc-950 transition-all shadow-md shadow-[rgb(167,241,117)]/20 hover:shadow-lg hover:shadow-[rgb(167,241,117)]/30 disabled:opacity-50 cursor-pointer'>
										{isSubmitting ?
											<span className='inline-flex items-center gap-2'>
												<span className='h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin' />
												Sending Message...
											</span>
										:	<span className='inline-flex items-center gap-2'>
												<Send className='w-4 h-4' />
												Send Message
											</span>
										}
									</button>
								</form>
							}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
