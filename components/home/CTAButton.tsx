import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

const CTAButton = ({ locale }: { locale: any }) => {
  return (
    <Button
      asChild
      variant="default"
      className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white"
    >
      <Link
        href="https://www.instagram.com/optio.digital/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RocketIcon />
        {locale.title}
      </Link>
    </Button>
  );
};

export default CTAButton;
