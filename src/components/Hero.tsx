import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="grid place-items-center">
    <img src={hero} className="w-400 max-h-[650px]" />
  </div>
  
  );
};

export default Hero;
