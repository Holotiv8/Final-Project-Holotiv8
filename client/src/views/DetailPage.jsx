import AllNavbarComponent from "../components/AllNavbarPage";
import AllFooterPage from "../components/AllFooterPage";
import Carousel from "../components/Carousel";

const DetailPage = () => {
  return (
    <>
      <AllNavbarComponent />
        <section className="bg-gradient-to-b from-white via-sky-200 to-sky-400">
            <div id="header_detail" className="flex w-full justify-around items-start pl-16 pr-12 py-8">
                <img className="" width={280} height={500} src="https://hololive.hololivepro.com/wp-content/uploads/2021/04/unnamed-file-6-556x1000.png" alt="talent img" />
                <div className="w-6/12 flex flex-col gap-3 items-start">
                    <div id="name" className="text-4xl font-medium">Tokino Soro</div>
                    <div id="name_hiragana" className="font-semibold">ときのそら</div>
                    <div id="description" className="text-sm text-left w-5/6">“Hey, Sora-tomo! How are you all doing? It's me, Tokino Sora!”
                    <br />
                    <br />
                    Hololive Production's first virtual idol, debuting on September 7, 2017. She loves horror games and singing, and has always dreamed of performing in Yokohama Arena.\nShe signed a record deal with Victor Entertainment in March 2019. She is active in various forms of media, such as appearing in Watanuki-san Chi no and hosting Sora Ao to!, a radio show.\nShe held her first solo concert, Dream!, on October 6, 2019, taking one step closer to her ultimate goal.</div>
                    <iframe className="w-[450px] h-[250px] rounded-md" src="https://www.youtube.com/embed/68KV7JnrvDo/autoplay=1&rel=0" allow='autoplay' frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </section>

        {/* <section id="youtube" class/Name=""> */}
          <Carousel title={'Videos'}/>
        {/* </section> */}
      <AllFooterPage />
    </>
  );
};

export default DetailPage;