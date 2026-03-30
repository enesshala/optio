import { siteConfig } from "@/config/site";
import Link from "next/link";

const FooterProducts = () => {
  const footerProducts = siteConfig.footerProducts;

  return (
    <div className="flex space-x-2 flex-wrap justify-center">
      {footerProducts.map((product, index) => {
        const isExternal =
          product.url.startsWith("http://") ||
          product.url.startsWith("https://");
        return (
          <span key={product.url}>
            <Link
              href={product.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              {product.name}
            </Link>
            {index !== footerProducts.length - 1 ? (
              <>
                <span>{" • "}</span>
              </>
            ) : (
              <></>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default FooterProducts;
