import React from "react";
import men from "./../assets/images/men.jpg";
import women from "./../assets/images/women.jpg";
import kids from "./../assets/images/kids.jpg";

    const category = [
  {
    title: "Men",
    imageUrl: men,
  },
  {
    title: "Women",
    imageUrl: women,
  },
  {
    title: "Kids",
    imageUrl: kids,
  }
];

const CategorySection = () => {

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
        {category.map((categ, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img 
              src={categ.imageUrl} 
              alt={categ.title} 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xl font-bold">{categ.title}</p>
              <p className="mt-2 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors duration-300">
                View All
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
