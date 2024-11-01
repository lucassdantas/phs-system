import { Section } from "@/components/Section";
import { Link } from "react-router-dom";

type HeroProps = {
  pageTitle:string;
  lastPage?:{title:string;route:string;};
}
export const Hero = ({ pageTitle, lastPage={title:'Home',route:'/'}}:HeroProps) => {
  return (
    <Section className="relative bg-[#005B8E] text-white h-52 flex items-center overflow-hidden">
      <div className="relative z-10 text-left">
        <h1 className="text-4xl font-bold">{pageTitle}</h1>
        <p className="mt-2 text-gray-300">
          <Link to={'/'+lastPage.route}>{lastPage.title}</Link> &raquo; <Link to={location.pathname}>{pageTitle}</Link>
        </p>
      </div>
      <div
        className="absolute top-0 right-0 w-[25%] h-full opacity-50"
        style={{
          background: 'repeating-linear-gradient(45deg, transparent, transparent 25px, lime 30px, lime 32px)',
        }}
      />
    </Section>
  )
}
