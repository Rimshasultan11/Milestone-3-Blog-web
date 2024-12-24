import React from 'react'
import Image from 'next/image'
import pic1 from '/public/pic1.png'
import pic2 from '/public/pic2.png'
import pic3 from '/public/pic3.jpg'
import pic4 from '/public/pic4.jpg'
import pic5 from '/public/pic5.jpg'
import pic6 from '/public/pic6.jpg'
import Link from 'next/link'
import Comment from '../../Comment'

// interface Product {
//     id: number;
//     img:any;
//     tittle: string;
//     description: string;
//   }
const blogList = [

    {
      id:"1",
      img: pic1,
      tittle: "Furniture Website",
      description: "We have designed a modern and user-friendly website for furniture enthusiasts 🪑✨. This platform not only meets the needs of its users but also delivers an elegant and professional look. The website features distinct categories for different types of furniture, such as bedroom, living room, and office furniture 🛋️🛏️💼.One of the standout features is its fully responsive design 📱💻, ensuring a seamless experience on both mobile and desktop devices. By implementing cutting-edge UI/UX principles, we’ve made it easy for users to find their desired products. The addition of a search bar and advanced filters enhances the shopping experience 🔍🎯.The website showcases high-quality images, detailed product descriptions, and pricing information, simplifying the decision-making process for buyers 🏷️📸. This design benefits not only business owners but also provides customers with an exceptional browsing experience 🤩.We used Tailwind CSS and Next.js to achieve a perfect blend of speed and aesthetics 🚀🎨. This project marks a new milestone in the furniture industry, bringing innovation and creativity to the forefront."  
     },
  
    {
      id: "2",
      img: pic2,
      tittle: "Todo List Project",
      description: "We developed a simple yet efficient Todo List application designed to help users manage their daily tasks effortlessly 🚀. This project focuses on enhancing productivity and organization by offering a clean and intuitive interface 🎯.The Todo List allows users to add, edit, and delete tasks with ease ✍️❌. Each task can be marked as completed with a single click, providing a sense of accomplishment for every finished item ✅🎉.One of the standout features is the responsive design 📱💻, ensuring the application works flawlessly on any device. The user-friendly experience is powered by modern web development tools, including TypeScript, React, and Tailwind CSS 🛠️🌟.With categories and prioritization options, the app caters to both personal and professional task management needs 📂🔥. Whether you're managing a busy schedule or keeping track of small goals, this project offers a reliable solution.This Todo List project reflects the power of simplicity in design while delivering robust functionality. It’s a perfect tool for anyone looking to stay on top of their tasks and get more done each day 💪🕒."
  
    },
    {
      id: "3",
      img: pic3,
      tittle: "Portfolio Project ",
      description: "A portfolio is the perfect way to display creativity and expertise, and that's exactly what we’ve achieved with this portfolio website project 🌟. Designed with a clean and professional layout, the website highlights skills, projects, and achievements in an engaging manner 🏆🚀.The website features a responsive design 📱💻, ensuring it looks stunning on every device. It includes interactive sections for projects, services, testimonials, and a personalized About Me page, giving visitors an in-depth understanding of the creator's journey ✨📖.We utilized Next.js, Tailwind CSS, and TypeScript to deliver a seamless user experience with blazing-fast performance 🚀🎨. The integration of a contact form and social media links makes it easy for potential clients or employers to connect 🤝📩. This portfolio project reflects the perfect combination of aesthetics and functionality, showcasing expertise in web development and design 🌐🎯. It’s a gateway to new opportunities, leaving a lasting impression on every visitor!"
  
    },
    {
      id: "4",
      img: pic4,
      tittle: "Bakery Website",
      description: "  We have created a deliciously designed website for a bakery offering a visually rich and user-friendly experience that showcases the mouth-watering treats 🧁🍪. The site features a vibrant, warm design that reflects the cozy atmosphere of a bakery, with detailed sections for different categories of baked goods like bread, cakes, pastries, and more 🍞🎂.The responsive layout 📱💻 ensures that customers can easily browse the menu and place orders whether they re on a mobile phone or desktop. We included an interactive gallery where users can view high-quality images of fresh-baked products, tempting their taste buds 🍩📸.For an enhanced customer experience, the website offers an easy-to-use online ordering system, along with a contact page to connect with the bakery for custom orders 🎯🛍️. We have used Next.js and Tailwind CSS for fast load times and smooth navigation 🚀✨.This bakery website isn’t just a place to view products—it’s an invitation to savor the experience of freshly baked treats, wherever you are 🥐❤️. Whether you’re browsing for inspiration or placing an order, this site delivers a taste of sweetness with every click! "
  
    },
  
    {
  
      id: "5",
      img: pic5,
      tittle: "TrendyWear Clothing web",
      description: " We have designed an elegant and user-friendly website for TrendyWear a fashion destination that brings the latest clothing trends right to your doorstep 🛍️✨. The site offers a sleek, modern design that reflects the youthful and vibrant energy of the brand, with categories ranging from casual wear to evening outfits 👖👠.The responsive layout 📱💻 ensures an optimal shopping experience on all devices, making it easy for fashion lovers to browse and shop for their favorite items anytime, anywhere. With high-quality images and detailed product descriptions 📸📝, users can find the perfect fit and style with just a few clicks.The TrendyWear website also features a powerful search bar 🔍 and advanced filters, so customers can easily navigate through clothing categories, sizes, and colors. Shopping has never been easier with a smooth and secure checkout process 💳🔒.We used Next.js and Tailwind CSS to ensure that the site loads quickly and offers an elegant, minimalist design with great functionality 🚀🎨. This project highlights the balance between aesthetics and performance, making TrendyWear a top choice for online fashion enthusiasts."
    },
    {
  
      id:"6",
      img: pic6,
      tittle: "E-commerce project",
      description: "We have developed a dynamic and user-friendly e-commerce website designed to offer a seamless shopping experience for customers 🌟. This project combines functionality with an intuitive design, making online shopping easy, enjoyable, and efficient 🎯.The website features a clean and modern design, with distinct categories for various products, such as electronics, clothing, and accessories 📱👗🎧. We’ve focused on ensuring that the layout is responsive, so customers can shop smoothly from any device 📱💻.Key features include a smart search bar 🔍, product filters, and detailed product pages, which help users find exactly what they need. The online shopping experience is enhanced with an easy-to-navigate checkout process, multiple payment options, and secure transactions 💳🔐.We’ve used Next.js for fast page loads and Tailwind CSS to ensure the design is sleek and responsive, adapting perfectly to every screen size 🌈. This e-commerce website aims to provide customers with a fast, safe, and delightful shopping experience that meets all their needs!."
  
    },
  ];


  const page = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const post = blogList.find((item) => item.id === id);
  
    if (!post) {
      return (
        <div>
          <h1>Post not found</h1>
        </div>
      );
    }
  
    return (
      <div className='w-full bg-gradient-to-r from-[#55175781] to-[#833b8a9c] py-4 '>
        <div className=" max-w-4xl  mx-auto bg-[#ffff] rounded-lg p-6  my-10">
          
          <div className=' flex flex-col md:flex-row items-center gap-8 md:items-start'>

          <div className='w-full  leading-8'>
          <h1 className='text-xl md:text-4xl my-4'>{post.tittle}</h1>
            <p className='text-justify'> {post.description}</p>
          </div>
          <div className='w-full'>
            <Image src={post.img} alt="pic" className='w-[400px] h-[500px] rounded-md' />
          </div>
        </div>
        <Link  href="#"><button className=' my-6 text-[#551757]  hover:text-[#804691]'>View Project</button></Link>
        <Comment postId={id} />
      </div>
      </div>
    );
  };
  

export default page
