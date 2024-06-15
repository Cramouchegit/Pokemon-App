import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="w-full min-h-[600px] bg-slate-100 ">
        <div className="text-center 2xl:pt-[250px] xl:pt-[250px] lg:pt-[250px] md:pt-[250px] pt-[250px]">
          <h3 className="text-3xl font-bold text-center text-slate-600">404</h3>
          <p>Page Not Found</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
