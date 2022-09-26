interface ButtonProps {
  hidden?: string;
  children: React.ReactNode;
  px?: string;
  py?: string;
  textSize?: string | 'text-md';
}

const Button: React.FC<ButtonProps> = ({ hidden, children, px, py, textSize }) => {
  return (
    <div
      id="resume"
      className={`${textSize} mt-2 ${hidden} ${py} ${px} animate-pulse rounded-lg bg-blue-500 text-center text-white shadow-lg hover:animate-none hover:cursor-pointer hover:border-none hover:bg-blue-700 hover:shadow-xl active:shadow-lg md:py-2 md:px-4 md:text-lg lg:block lg:text-2xl`}
    >
      <a
        className="drop-shadow-xl focus:outline-blue-700"
        href="/assets/resume/Resume_tech.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        {children}
      </a>
    </div>
  );
};

export default Button;
