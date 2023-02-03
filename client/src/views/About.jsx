import AllFooterPage from "../components/AllFooterPage";
import AllNavbarComponent from "../components/AllNavbarPage";


const About = () => {
  return (
    <section>
      <AllNavbarComponent />
      <div className="loading-normal tracking-normal text-white bg-white h-screen">
        <div className="container flex flex-row justify-between items-center py-16">
          <div className="w-[32%] flex flex-col space-y-12 ml-[150px] mb-[150px]">
            <div className="text-gray-600">
              <h2 className="font-semibold text-xl uppercase mt-[150px]">
                NIHON NO LIVE GROUP
              </h2>
              <p className="font-medium text-[17px] font-serif mt-4 text-justify">
                With over 50,000,000 fans across all their channels, Nihon No
                Live Group is the all-female talent group that belongs to the
                Nihon No Live agency production.
              </p>
            </div>
            <div className="flex items-center">
              <main className="flex items-center justify-center bg-gray-100">
                <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                  <div className="absolute inset-0 w-3 bg-[#5e7dc3] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-black group-hover:text-white">
                    Our Talents
                  </span>
                </button>
              </main>
            </div>
          </div>
          <div className="w-[650px] h-[20px] mb-[490px] mr-[50px] img-about">
            <img src="https://hololive.hololivepro.com/wp-content/themes/hololive/images/about_img.png" />
          </div>
        </div>
      </div>

      <div className="header-about-respon">
        <h1>Hear What Our Members Say</h1>
      </div>

      <div className="container-about-respon">
        <div className="card-about-respon card-1">
          <img src="https://images.unsplash.com/photo-1496347015999-56459d63a30a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="name-about-respon"> Brian Rizki</p>
          <p className="job-about-respon"> BE Developer</p>
        </div>
        <div className="card-about-respon card-2">
          <img src="https://images.unsplash.com/photo-1496347015999-56459d63a30a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="name-about-respon"> Brian Rizki</p>
          <p className="job-about-respon"> BE Developer</p>
        </div>
        <div className="card-about-respon card-3">
          <img src="https://images.unsplash.com/photo-1496347015999-56459d63a30a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="name-about-respon"> Brian Rizki</p>
          <p className="job-about-respon"> BE Developer</p>
        </div>
        <div className="card-about-respon card-1">
          <img src="https://images.unsplash.com/photo-1496347015999-56459d63a30a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="name-about-respon"> Brian Rizki</p>
          <p className="job-about-respon"> BE Developer</p>
        </div>
        <div className="card-about-respon card-2">
          <img src="https://images.unsplash.com/photo-1496347015999-56459d63a30a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="name-about-respon"> Brian Rizki</p>
          <p className="job-about-respon"> BE Developer</p>
        </div>
        <div className="card-about-respon card-3">
          <img src="https://images.unsplash.com/photo-1496347015999-56459d63a30a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="name-about-respon"> Brian Rizki</p>
          <p className="job-about-respon"> BE Developer</p>
        </div>
      </div>

      <AllFooterPage />
    </section>
  );
};

export default About;
