const Home = () => {
  return (
    <div className="px-4 py-9 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800 text-center">
        Welcome to my authentication app!!
      </h1>
      <p className="mb-3 text-slate-600">
        Welcome to our authentication application built using the MERN (MongoDB,
        Express, React, Node.js) stack! In a world where digital security is
        paramount, our app provides a seamless and secure user experience,
        offering a range of functionalities to ensure your data remains
        protected while delivering a user-friendly interface.
      </p>
      <p className="mb-3 text-slate-600">
        Our application is designed with your privacy in mind. It allows you to
        effortlessly sign up using your email and password, ensuring a
        straightforward and familiar registration process. Additionally, we've
        integrated Gmail authentication for a quick and hassle-free sign-up
        option, giving you the freedom to choose how you'd like to access your
        account.
      </p>
      <p className="mb-3 text-slate-600">
        Your password is never stored in plain text ,it's encrypted using
        industry-standard methods before being stored in our MongoDB database.
        We understand that life is dynamic, and your information might change.
        With our app, updating your data is a breeze.We also recognize that
        circumstances can change, and if you ever decide to move on, we've made
        account deletion a simple process.
      </p>
    </div>
  );
};

export default Home;
