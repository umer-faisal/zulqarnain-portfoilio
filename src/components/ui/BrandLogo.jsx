import Image from "next/image";
import { site } from "@/config/site";

export default function BrandLogo({ priority = false }) {
  return (
    <Image
      src={site.logo.src}
      alt={site.logo.alt}
      width={site.logo.width}
      height={site.logo.height}
      sizes="(max-width: 760px) 32px, 40px"
      priority={priority}
      className="logo-image w-8 h-8 md:w-[2.375rem] md:h-[2.375rem] rounded-full object-cover shrink-0 block"
    />
  );
}
