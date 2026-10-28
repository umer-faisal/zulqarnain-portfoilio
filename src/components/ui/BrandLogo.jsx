import Image from "next/image";
import { site } from "@/config/site";

export default function BrandLogo({ priority = false }) {
  return (
    <Image
      src={site.logo.src}
      alt={site.logo.alt}
      width={site.logo.width}
      height={site.logo.height}
      sizes="76px"
      priority={priority}
      className="logo-image"
    />
  );
}
