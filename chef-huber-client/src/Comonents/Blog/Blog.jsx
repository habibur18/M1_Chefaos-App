import React from "react";
import { useTitle } from "../../hooks/useTitle";

const ChefBlog = () => {
  // Sample data (replace it with your actual data)
  const blogData = [
    {
      id: 1,
      title: "Chef's Special Dish",
      content:
        "Explore the delightful flavors of our chef's special dish. This exquisite culinary creation is a perfect blend of savory and sweet, leaving your taste buds craving for more.",
      image:
        "https://i.guim.co.uk/img/media/3cfd4dc25e5f1dbc378ab3adc817a1081264a5df/0_224_6720_4032/master/6720.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=da5554002604cbe2d539c72fe891a26c",
    },
    {
      id: 2,
      title: "Secret Recipe Revealed",
      content:
        "Unlock the mystery behind our chef's secret recipe. Dive into the behind-the-scenes journey of crafting this mouthwatering masterpiece. Get ready to embark on a culinary adventure!",
      image:
        "https://media.30seconds.com/tip/lg/Knife-Tips-From-Chefs-3-Ways-to-Save-Your-Knives-While-Coo-22573-0c873fd071-1619459903.jpg",
    },
    {
      id: 3,
      title: "A Glimpse into Chef's Daily Routine",
      content:
        "Ever wondered what goes on behind the scenes in a chef's daily life? Join us as we take you on a journey through a day in the life of our talented chef. From early morning prep to creating culinary wonders, discover the magic of the kitchen.",
      image: "https://static.cordonbleu.edu/Files/MediaFile/63768.png",
    },
    {
      id: 4,
      title: "Chef's Tips: Perfecting Your Grilling Technique",
      content:
        "Master the art of grilling with our chef's expert tips. Learn the secrets to achieving the perfect grill marks and infusing your dishes with smoky goodness. Elevate your barbecue game to new heights!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPKVPaPsDbZgPlT22BJoJevAimpeYXcbcWQ&usqp=CAU",
    },
    {
      id: 5,
      title: "Featured Recipe: Mediterranean Delight",
      content:
        "Indulge in the flavors of the Mediterranean with our featured recipe. This vibrant and healthy dish combines fresh ingredients and bold spices for a culinary journey to the sunny shores of the Mediterranean.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxTly4mvobKtcho79D6b2lmguX3viwlH9RVqWCyBUVqy_q-jd8GamIBfHW00gtCFGXGEQ&usqp=CAU",
    },
  ];
  useTitle("Blog");

  return (
    <div>
      {/* Background Image */}
      <div
        className="h-[50vh] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMd3ZyBOXQliltCpwdDmc3XzljPc2S6lX2VA1QNpsSkY3XjTy4gmcamLXO6-YTAeAuT0&usqp=CAU')",
          objectFit: "cover",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content Container */}
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-opacity-90 text-white p-8 mt-28">
          {/* Social Media Icons */}
          <div className="flex justify-end mb-4 space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-32 h-32"
                src="https://img.freepik.com/premium-vector/social-media-icon-illustration-facebook-facebook-icon-vector-illustration_561158-2134.jpg"
                alt="Facebook"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-32 h-32"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7vt1ZPU-D13K0wo_n2nwcuN6wvoaAhxA8y6mDmpQwvan7fNE8jKtTfocjL3XoomuLaY&usqp=CAU"
                alt="Twitter"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-32 h-32"
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                alt="Instagram"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-32 h-32"
                src="https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc=w600-h300-pc0xffffff-pd"
                alt="YouTube"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Section with Gradient Background */}
      <div className="bg-gradient-to-r from-gray-100 to-white p-8">
        {/* Latest Posts Section */}
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-1/4 pr-8 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
            <ul>
              {blogData.map((post) => (
                <li key={post.id} className="mb-2">
                  <a
                    href={`#${post.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Article */}
          <div className="md:w-3/4">
            {blogData.map((post) => (
              <div key={post.id} className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <img
                  src={post.image}
                  alt={post.title}
                  className="mb-4 rounded-lg"
                />
                <p>{post.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chef's Tips Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Chef's Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.slice(3, 6).map((post) => (
              <div key={post.id}>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <img
                  src={post.image}
                  alt={post.title}
                  className="mb-4 rounded-lg"
                />
                <p>{post.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Recipes Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Featured Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.slice(6, 9).map((post) => (
              <div key={post.id}>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <img
                  src={post.image}
                  alt={post.title}
                  className="mb-4 rounded-lg"
                />
                <p>{post.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefBlog;
