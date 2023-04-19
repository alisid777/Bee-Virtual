
"use client";

import { useRef, useState } from "react";
import { OPTIONS } from "@/lib/constants";
import Option from "@/components/Option";




// client.js







export default function Home() {
  const promptRef = useRef();
  const [renderedImages, setRenderedImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const appendPrompt = (word) => {
    promptRef.current.value = promptRef.current.value.concat(", ", word);
  };

  const handleGenerateImage = async () => {
    setLoading(true);
    try {
      const resp = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: promptRef.current.value }),
      });

      if (!resp.ok) {
        throw new Error("Unable to generate the image");
      }

      const data = await resp.json();
      console.log(data);

      setRenderedImages(data.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };



  return (
    <main className="container  mx-auto">

      <section>

<nav class="bg-white border-gray-200 dark:bg-black">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center">
        
        <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Bee Virtual</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-black rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg-black md:dark:bg-black dark:black">
        <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-lime-500 rounded md:bg-transparent md:text-lime-500 md:p-0 dark:text-white md:dark:text-lime-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4    md:p-0  md:dark:hover:text-lime-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4    md:p-0  md:dark:hover:text-lime-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4    md:p-0  md:dark:hover:text-lime-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4    md:p-0  md:dark:hover:text-lime-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </section>

      

<section class="bg-white dark:bg-black" className="py-10">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">Revolutionize Your
Content Creation with
AI-Powered Images!</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Create AI Generated Images from text with our easy-to-use platform Transform your content into visually stunning images with just a few clicks.</p>
            <a id="scroll-btn" href="#" class="inline-flex items-center justify-center px-8 dark: bg-lime-500 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img className="rounded-2xl" src="https://openaicom.imgix.net/d3b684dc-eb13-4fbd-a77e-0a397e059fef/dall-e-2.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1024%2C1024&w=2600" />

        </div>                
    </div>
</section>
      
{/* In between */}
<div>
<h3 class="text-2xl text-center py-3">Welcome to the </h3>
<h1 class="text-4xl font-bold mb-4 text-center">Bee Virtual</h1>
<h3 class="text-2xl text-center" >The Interaction of AI, Art and Science</h3>
</div>


{/* Video  */} 


{/* cards  */}

<div className="flex flex-wrap justify-between py-10">

<div class="w-1/3 card max-w-sm  rounded-lg shadow dark:bg-black">
    <a href="#">
        <img class="rounded-t-lg" src="https://pbs.twimg.com/media/FRGHiOUVUAA5vt9?format=jpg&name=medium" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">An ancient Egyptian painting</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">An ancient Egyptian painting depicting an argument over whose turn it is to take out the trash</p>
        
    </div>
</div>
{/* Second Card  */}
<div class="w-1/3 card max-w-sm  rounded-lg shadow dark:bg-balck">
    <a href="#">
        <img class="rounded-t-lg" src="https://pbs.twimg.com/media/FRWdecRVUAAjNUG?format=jpg&name=small" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Olive oil and vinegar</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Olive oil and vinegar drizzled on a plate in the shape of the solar system</p>
        
    </div>
</div>
{/* Third Card  */}

<div class="w-1/3 card max-w-sm rounded-lg shadow dark:bg-black ">
    <a href="#">
        <img class="rounded-t-lg" src="https://preview.redd.it/zv6xrh8qnvta1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=f17b0d0d44e10abecb42e47594e0fb24ff3d9db5" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Superman doing Excel</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Superman doing Excel spreadsheets on his computer, 1930s comic</p>
        
    </div>
</div>

</div>







    <section className="max-w-4xl mx-auto py-10">

      <section className="flex items-center gap-2 px-6 py-6">
        <h1 className="text-xl">Prompt</h1>
        <input
          type="text"
          className="w-full outline-none py-2 px-6 bg-gray-600 rounded-3xl text-sm"
          placeholder="a woman walking her dog, a ballerina dancing, a dog with glasses, etc"
          defaultValue="a dog playing with a ball"
          ref={promptRef}
        />
      </section>

      <section className="grid grid-cols-2 gap-4">
        {/* LEFT */}
        <div className="flex flex-col gap-6 px-6 py-6">
          <button
            disabled={loading}
            onClick={handleGenerateImage}
            className="hover:opacity-80 py-2 px-6 bg-lime-600 rounded-3xl text-sm uppercase"
          >
            {loading ? "Generating, please wait" : "Generate"}
          </button>

          {renderedImages.length === 0 && (
            <div className="bg-gray-600 aspect-square flex items-center justify-center">
              Image will show up here
            </div>
          )}

          {renderedImages.map((image) => {
            return <img key={image.url} src={image.url} />;
          })}
        </div>

        {/* RIGHT */}
        <div className="py-6">
          <h2>Other Options</h2>

          {OPTIONS.map((option) => {
            return (
              <Option
                key={option.title}
                title={option.title}
                values={option.values}
                onAppend={appendPrompt}
              />
            );
          })}
        </div>
      </section>


      </section>



<footer class="bg-white rounded-lg shadow dark:bg-black m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#" class="flex items-center mb-4 sm:mb-0">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Bee Virtual</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Bee Virtual™</a>. All Rights Reserved.</span>
    </div>
</footer>




  
    <script srac="../path/to/flowbite/dist/flowbite.js"></script>
    </main>
   
  );
}