import { SiInstagram } from "react-icons/si";
import { siteConfig } from "@/config/site";
import { TestimonialsData } from "@/config/testimonials";
import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

const Testimonials = ({ id, locale }: { id: string; locale: any }) => {
  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center pt-16 gap-12 max-w-[88%]"
    >
      <div className="flex flex-col text-center max-w-xl gap-4">
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color="#059669">
            {locale.title}
          </RoughNotation>
        </h2>
        <p className="text-large text-default-600">
          {/* Don't take our word for it. Here's what they have to say. */}
          {locale.description1}{" "}
          <Link
            href={siteConfig.authors[0].twitter as string}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary underline"
            aria-label="OPTIO on Instagram"
          >
            {locale.description2}
          </Link>
          {locale.description3}
        </p>
      </div>
      <div className="w-full flex justify-center px-2">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {TestimonialsData.map((testimonial, index) => (
          <div className="w-full min-w-0" key={index}>
            <div className="border border-slate/10 rounded-lg p-4 flex flex-col items-start gap-3 h-full">
              <div className="flex items-start justify-between w-full">
                <div className="flex items-start gap-2">
                  <Image
                    src={testimonial.user.image}
                    alt={`${testimonial.user.name} profile photo`}
                    height={40}
                    width={40}
                    className="w-12 h-12 rounded-full object-cover object-top"
                  />
                  <div className="flex flex-col items-start">
                    <p className="font-bold">{testimonial.user.name}</p>
                    <p className="dark:text-zinc-300">
                      @{testimonial.user.username}
                    </p>
                  </div>
                </div>
                <Link
                  href={
                    siteConfig.authors[0]?.url ||
                    "https://www.instagram.com/optio.digital/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="OPTIO on Instagram"
                >
                  <SiInstagram className="w-8 h-8" />
                </Link>
              </div>
              <p className="dark:text-zinc-200 text-[14px]">
                {testimonial.content}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
