const About = () => {
  return (
    <div className="px-4 py-9 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800 text-center">
        About
      </h1>
      <p className="mb-3 text-slate-600">
        Hello there! I'm <span className="text-red-600 text-lg">Deepesh</span>,
        a passionate and dedicated full stack developer. With a keen interest in
        crafting seamless digital experiences, I've immersed myself in the world
        of web development to create innovative and user-centered solutions.
      </p>
      <p className="mb-3 text-slate-600">
        Auth App is an advanced authentication application built using the MERN
        stack, delivering top-notch security and user experience. Users can
        easily sign up and log in through both traditional email and password
        methods, as well as via Google authentication powered by Firebase.
        Passwords are encrypted for utmost security, while profile management
        empowers users to keep their information current. The app also supports
        seamless account deletion. With React and Tailwind CSS on the front end,
        and Node.js, Express.js, and MongoDB on the back end, the project
        embodies modern development practices to ensure robustness and
        efficiency.
      </p>
    </div>
  );
};

export default About;
