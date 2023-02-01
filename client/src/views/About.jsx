const About = () => {
  return (
    <section>
      <div className="loading-normal tracking-normal text-white gradient h-screen">
        <div className="container flex flex-row justify-between items-center py-16">
          <div className="w-[32%] flex flex-col space-y-12 ml-[100px] mb-[100px]">
            <div className="text-gray-600">
              <h2 className="font-semibold text-xl uppercase mt-[100px]">
                Now Taking Online Orders
              </h2>
              <p className="font-medium text-[17px] font-sans mt-4 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="flex items-center">
              <main className="flex items-center justify-center bg-gray-100">
                <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                  <div className="absolute inset-0 w-3 bg-[#5e7dc3] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-black group-hover:text-white">
                    Get Started
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
    </section>
  );
};

export default About;
