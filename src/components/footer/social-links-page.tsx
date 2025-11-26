/** @format */

"use client";

import { FormEvent } from "react";
import {
	SiInstagram,
	SiTiktok,
	SiFacebook,
	SiGithub,
	SiTelegram,
} from "react-icons/si";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "motion/react";

export default function SocialLinksPage() {
	const { t, locale } = useTranslation("common");
	const contactEmail = "narakleng168@gmail.com";

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const name = (formData.get("name") as string) || "";
		const email = (formData.get("email") as string) || "";
		const subject = (formData.get("subject") as string) || t("contact.subject");
		const message = (formData.get("message") as string) || "";

		const composedSubject = `[Portfolio] ${subject.trim()}`;
		const composedBody = `${t("contact.name")}: ${name}\n${t(
			"contact.email"
		)}: ${email}\n\n${t("contact.message")}:\n${message}`;

		window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
			composedSubject
		)}&body=${encodeURIComponent(composedBody)}`;
		event.currentTarget.reset();
	};

	const socialLinks = [
		{
			name: "FACEBOOK",
			icon: SiFacebook,
			url: "https://www.facebook.com/share/1ZsK6N1HRU/?mibextid=wwXIfr",
		},
		{
			name: "INSTAGRAM",
			icon: SiInstagram,
			url: "https://www.instagram.com/lengnarak?igsh=MmNvMjBkNHVlemp1&utm_source=qr",
		},
		{ name: "TELEGRAM", icon: SiTelegram, url: "https://t.me/Narak_Leng" },
		{
			name: "TIKTOK",
			icon: SiTiktok,
			url: "https://www.tiktok.com/@testing_user01?_r=1&_t=ZS-91a0Jg08njN",
		},
		{ name: "GITHUB", icon: SiGithub, url: "https://github.com/Narak-168" },
	];

	return (
		<main
			id='contact'
			className='min-h-screen flex flex-col items-center justify-between'
			key={locale}>
			<div className='w-full flex flex-1 flex-col lg:flex-row gap-0'>
				{/* Left side - Contact Form */}
				<div
					className='flex-1 flex items-center justify-center bg-gray-800 dark:bg-gray-950 px-4 sm:px-6 md:px-8 py-12 sm:py-16'
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
						backgroundRepeat: "repeat",
					}}>
					<div
						className={`w-full max-w-xl space-y-8 text-white ${
							locale === "km" ? "font-khmer" : ""
						}`}>
						<div className='relative rounded-2xl sm:rounded-3xl lg:rounded-4xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl shadow-[0_0_60px_rgba(15,23,42,0.45)]'>
							<div className='absolute inset-0 rounded-2xl sm:rounded-3xl lg:rounded-4xl border border-white/5 pointer-events-none'></div>
							<form
								onSubmit={handleSubmit}
								className='relative z-10 grid gap-3 sm:gap-4 p-4 sm:p-6 md:p-8'>
								<label className='flex flex-col gap-2 text-sm text-slate-300'>
									<span>{t("contact.name")}</span>
									<input
										type='text'
										name='name'
										required
										className='w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-white/40 focus:bg-white/20 focus:outline-none'
										placeholder='Leng Narak'
										autoComplete='name'
									/>
								</label>
								<label className='flex flex-col gap-2 text-sm text-slate-300'>
									<span>{t("contact.email")}</span>
									<input
										type='email'
										name='email'
										required
										className='w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-white/40 focus:bg-white/20 focus:outline-none'
										placeholder='hello@example.com'
										autoComplete='email'
									/>
								</label>
								<label className='flex flex-col gap-2 text-sm text-slate-300'>
									<span>{t("contact.subject")}</span>
									<input
										type='text'
										name='subject'
										className='w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-white/40 focus:bg-white/20 focus:outline-none'
										placeholder='Collaboration Inquiry'
									/>
								</label>
								<label className='flex flex-col gap-2 text-sm text-slate-300'>
									<span>{t("contact.message")}</span>
									<textarea
										name='message'
										rows={4}
										required
										className='w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-white/40 focus:bg-white/20 focus:outline-none'
										placeholder='Tell me about your project or idea...'
									/>
								</label>
								<button
									type='submit'
									className='group mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-white/90 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-white'>
									{t("contact.submit")}
									<span className='transition-transform group-hover:translate-x-1'>
										↗
									</span>
								</button>
							</form>
						</div>
					</div>
				</div>
				{/* Right side - Social Links */}
				<div
					className='flex-1 flex flex-col gap-6 sm:gap-8 bg-gray-800 dark:bg-gray-950 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 items-center lg:items-start lg:justify-center'
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
						backgroundRepeat: "repeat",
					}}>
					{/* Follow Me Label */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='flex items-center gap-4'>
						<div className='h-0.5 w-8 bg-white'></div>
						<span className='text-white text-sm font-bold tracking-widest'>
							FOLLOW ME
						</span>
					</motion.div>

					{/* Social Links */}
					<div className='space-y-4 sm:space-y-5 lg:space-y-6 w-full max-w-md'>
						{socialLinks.map((link, index) => (
							<motion.a
								key={index}
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								href={link.url}
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center justify-between group cursor-pointer transition-all duration-300 hover:translate-x-2'>
								<h2 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none'>
									{link.name}
								</h2>
								<div className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl ml-3 sm:ml-4 md:ml-6 group-hover:scale-110 transition-transform'>
									<link.icon />
								</div>
							</motion.a>
						))}
					</div>
				</div>
			</div>
			<div
				className={`w-full py-4 sm:py-5 md:py-6 text-center text-xs sm:text-sm text-black font-medium bg-[#a7f175] ${
					locale === "km" ? "font-khmer" : ""
				}`}>
				{t("footer.copyright")} {t("footer.allRightsReserved")}
			</div>
		</main>
	);
}
