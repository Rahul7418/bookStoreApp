import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className=" mt-16 min-h-screen bg-gray-100 dark:bg-slate-900 text-gray-800 dark:text-gray-200">
                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <p className="max-w-2xl text-lg">
                        Empowering learners and professionals with modern technology,
                        practical skills, and innovative learning solutions.
                    </p>
                </section>

                {/* Our Story */}
                <section className="max-w-5xl mx-auto py-16 px-6">
                    <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
                    <p className="leading-relaxed text-lg mb-4">
                        We started with a simple idea: learning should be engaging,
                        accessible, and practical. Over the years, we’ve grown into a
                        platform trusted by students, developers, and professionals worldwide.
                    </p>
                    <p className="leading-relaxed text-lg">
                        Our mission is to bridge the gap between theory and real-world
                        applications. Whether you`re a beginner or an expert, we provide
                        resources that help you learn, build, and succeed.
                    </p>
                </section>

                {/* Mission & Values */}
                <section className="bg-white dark:bg-slate-800 py-16 px-6">
                    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">🎯 Our Mission</h3>
                            <p>
                                To make learning simple, modern, and impactful by providing
                                structured guidance and practical projects.
                            </p>
                        </div>
                        <div className="p-6 shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">🌍 Our Vision</h3>
                            <p>
                                To empower millions worldwide with the skills needed to shape the
                                future of technology and innovation.
                            </p>
                        </div>
                        <div className="p-6 shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">💡 Our Values</h3>
                            <p>
                                Knowledge, Innovation, Collaboration, and Lifelong Learning are at
                                the core of everything we do.
                            </p>
                        </div>
                    </div>
                </section>

                {/* What We Do */}
                <section className="max-w-5xl mx-auto py-16 px-6">
                    <h2 className="text-3xl font-bold text-center mb-10">What We Do</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">📚 Online Courses</h3>
                            <p>
                                Learn modern technologies like React, Node.js, Python, and Cloud
                                with structured guidance.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">🛠 Hands-on Projects</h3>
                            <p>
                                Apply what you learn by building real-world projects with step-by-step guidance.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">👨‍👩‍👧‍👦 Community</h3>
                            <p>
                                Join a growing community of learners and professionals, share
                                ideas, and grow together.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="bg-gray-200 dark:bg-slate-700 py-16 px-6">
                    <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
                    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center shadow-md">
                            <img
                                src="https://picsum.photos/100"
                                alt="Team member"
                                className="mx-auto rounded-full mb-4"
                            />
                            <h3 className="font-semibold">Rahul Pawar</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Founder</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center shadow-md">
                            <img
                                src="https://picsum.photos/100"
                                alt="Team member"
                                className="mx-auto rounded-full mb-4"
                            />
                            <h3 className="font-semibold">Ishika Rathore</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Frontend Developer
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center shadow-md">
                            <img
                                src="https://picsum.photos/100"
                                alt="Team member"
                                className="mx-auto rounded-full mb-4"
                            />
                            <h3 className="font-semibold">Tarun Pawar</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                UI/UX Designer
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center py-16">
                    <h2 className="text-2xl font-bold mb-4">Ready to start your journey?</h2>
                    <p className="mb-6">
                        Join us today and be a part of our growing community of learners.
                    </p>
                    <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-700 duration-200">
                        Get Started
                    </button>
                </section>
            </div>

            <div>
                <Footer />
            </div>

        </>
    );
};

export default About;
