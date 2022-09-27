interface ButtonProps {
  hidden?: string;
  children: React.ReactNode;
  px?: string;
  py?: string;
  textSize?: string | 'text-md';
  marginTop: string;
}

const Button: React.FC<ButtonProps> = ({ hidden, children, px, py, textSize, marginTop }) => {
  return (
    <div
      id="resume"
      className={`${textSize} ${marginTop} ${hidden} ${py} ${px} rounded-lg bg-blue-500 text-center text-white shadow-lg hover:cursor-pointer hover:border-none hover:bg-blue-700 hover:shadow-xl active:shadow-lg md:text-lg lg:block lg:text-2xl`}
    >
      <a
        className="drop-shadow-lg focus:outline-blue-700"
        href="/assets/resume/MASON_DUBELBEIS_RESUME.pdf"
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
