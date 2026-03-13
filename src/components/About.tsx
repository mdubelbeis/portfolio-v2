import Button from '../ui/Button';

const About = () => {
    return (
        <section className="font-hero-text flex h-screen flex-col items-center justify-center gap-6 bg-slate-100 py-32 tracking-wider text-black lg:gap-10 lg:tracking-wider">
            <div className="font-hero-text flex flex-col items-center justify-center lg:flex-row-reverse">
                <div className="flex flex-col items-center justify-center gap-2 p-4 text-lg">
                    <div className="flex flex-col gap-6 px-1 text-center font-mono md:m-10 lg:m-0 lg:gap-10 lg:text-2xl">
                        <div className="text-2xl font-bold md:text-3xl lg:text-6xl">
                            <p>Hello,</p>
                            <p>Let's Connect</p>
                        </div>
                        <sub>Software Engineer | Java • Spring Boot • APIs • Docker • SQL</sub>
                        <p className="mx-auto max-w-xl">
                            I’m Mason Dubelbeis — a backend-focused software engineer who builds clean, tested Spring Boot APIs and ships them with Docker and PostgreSQL.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-auto">
                <Button py="py-4" px="px-6" textSize="text-xl" marginTop="mt-4">
                    DOWNLOAD RESUME
                </Button>
            </div>
        </section>
    );
};

export default About;
