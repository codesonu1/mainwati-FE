import { Container } from "@mui/material";

const Products = () => {
  return (
    <div className="bg-[#2782C2] py-[5rem]" >
      <Container>
        <span className="text-primary bg-[white] uppercase p-2  font-bold  rounded-full ">
          Products
        </span>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-flow-row gap-2">
          {products.map((ele, i) => {
            return (
              <div key={i} className="my-6" data-aos="zoom-in">
                <img
                  src={ele.img}
                  alt={ele.name}
                  className="w-full h-full rounded-md hover:opacity-80"
                />
                <p className="py-3    uppercase bg-secondery my-4 text-[black] border-[white] p-3 rounded-md text-center hover:bg-primary hover:text-secondery hover:border-[white] border cursor-pointer">{ele.name}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

const products = [
  {
    img: "https://www.mainawatisteel.com/images/products/high-mast.jpg",
    name: "high mast",
  },
  {
    img: "https://www.mainawatisteel.com/images/products/transmission-tower.jpg",
    name: "telecommunication and transmission towers",
  },
  {
    img: "https://www.mainawatisteel.com/images/products/swaged-poles.jpg",
    name: "Steel Tubular Swaged Poles",
  },
  {
    img: "https://www.mainawatisteel.com/images/products/galvanized-pipe.jpg",
    name: "GALVANIZED PIPES",
  },
];
export default Products;
