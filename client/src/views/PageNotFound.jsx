import { Link } from "react-router-dom";

Link;

const PageNotFound = () => {
  return (
    <section className="body-notFound">
      <h1>
        4 <span>0</span> 4
      </h1>
      <h2>OOPS.. Looks like the page you're looking for no longer exists</h2>
      <p>
        Don't worry! Since you're variable to us we will bring you back to
        safety
      </p>

      <div class="flex mt-5">
        <input type="checkbox" id="choose-me" class="peer hidden" />
        <Link to={"/"}>
          <label
            for="choose-me"
            class="select-none cursor-pointer rounded-lg border-2 border-black
   py-3 px-6 font-bold text-black transition-colors duration-200 ease-in-out peer-checked:bg-slate-700 peer-checked:text-white peer-checked:border-gray-200 "
          >
            {" "}
            Back Home{" "}
          </label>
        </Link>
      </div>

      <img src="https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl_147933-106.jpg?w=826" />
    </section>
  );
};

export default PageNotFound;
