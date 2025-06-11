"use client";
import Header from "./components/Header";
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className="bg-white w-full flex flex-col border-2">
      {/* <Header /> */}
      <div className="md:h-153 flex pt-10 md:pt-18 justify-center" style={{ backgroundColor: '#faefdd' }}>
        <img src="/compassbg.png" alt="Corner decoration" className="absolute hidden sm:block rotate-45 animate-spin top-15 left-8 w-64 h-64 object-cover" style={{animationDuration: '148s'}}/>
        <img src="/ombg.png" alt="Corner decoration" className="absolute hidden sm:block top-24 rotate-25 left-110 w-34 h-34 object-cover" />
        <img src="/stt.png" alt="Corner decoration" className="absolute hidden sm:block rotate-45 top-25 left-54 w-24 h-24 object-cover" />
        <img src="/stt.png" alt="Corner decoration" className="absolute hidden sm:block top-45 right-54 w-24 h-24 object-cover" />
        <img src="/turbbg.png" alt="Corner decoration" className="absolute hidden sm:block rotate-100 top-75 right-4 w-54 h-54 object-cover" />
        <img src="/ombg.png" alt="Corner decoration" className="absolute hidden sm:block top-24 rotate-25 right-24 w-34 h-34 object-cover" />
        <img src="/spiralbg.png" alt="Corner decoration" className="absolute hidden sm:block -bottom-24 rotate-25 left-14 w-34 h-34 object-cover" />
        <img src="/star-removebg-preview.png" alt="Corner decoration" className="absolute hidden sm:block rotate-145  bottom-24 left-24 w-24 h-24 object-cover" />
        <img src="/sun.png" alt="Corner decoration" className="absolute hidden sm:block -bottom-24 right-10 w-44 h-44 animate-spin object-cover -scale-x-100" style={{animationDuration: '200s'}}/>
        <div className="flex flex-col items-center text-center">
          <p className={`${pacifico.className} text-4xl font-bold mb-6`}><span className="text-5xl md:text-8xl"> Mithira Grace </span><br/> <br/>Working through the night to bring wise ideas to light. <br></br> Creative UI/UX Designer.</p>
          <p className="items-left text-left text-lg space-y-0">
              <span className="flex items-start md:items-center"><span className="text-4xl mr-2">➼</span> Design for me is about solving problems through intuitive and meaningful experiences.</span>
              <span className="flex items-start md:items-center"><span className="text-4xl mr-2">➼</span> I love turning complex ideas into clean, user-friendly interfaces.</span>
              <span className="flex items-center hidden sm:block"><span className="text-4xl mr-2">➼</span> My work blends functionality with aesthetics to create thoughtful digital products.</span>
              <span className="flex items-start md:items-center"><span className="text-4xl mr-2">➼</span> New design trends and tools excite me and fuel my growth.</span>
              <span className="flex items-start md:items-center"><span className="text-4xl mr-2">➼</span> Every project is an opportunity to learn something new.</span>
              <span className="flex items-start md:items-center"><span className="text-4xl mr-2">➼</span> I strive to design with empathy, purpose, and clarity.</span>
              <a href="https://furtive-impulse-6ee.notion.site/Mithira-Grace-1e562afa4f4380f3ad86ed5d27be5054" className="text-center italic underline" target="_blank"><p className="hover:scale-110 transition-transform duration-300">View more info --&gt;&gt;</p></a>
          </p>
        </div>
      </div>
      <div className="md:h-250 flex text-white items-center justify-center" style={{ backgroundColor: '#292420',
        backgroundImage: 'url(/map.png)'
       }}>
        <div className="text-center m-5 px-5 md:px-15 border-1 md:h-240 md:w-full w-73">
          <div style={{color: '#faefdd '}} className={`${pacifico.className} md:h-33 text-4xl my-5 md:text-5xl flex items-center justify-center`}>Feature work</div>
          <div className="md:grid md:grid-cols-3 gap-4 place-items-center">
            <div className="md:w-80 md:h-60 w-60 h-50  border-1 mb-5 flex items-center justify-center">
             <a href="https://www.figma.com/design/vWHAEDuNj9wFVYyKk3MxNn/MAHINDRA?node-id=0-1&t=WrIVMl4uCNhzXquV-1" target="_blank"><div className="hover:scale-109 transition-transform duration-300 bg-cover md:h-50 md:w-70 h-43 w-50" style={{backgroundImage: 'url(/mahendra2.jpg)',backgroundColor: '#faefdd'}}></div></a> 
            </div>
            <div className="md:w-80 md:h-60 w-60 h-50 border-1 mb-5 flex items-center justify-center">
              <a href="https://www.figma.com/design/nQAk46VsRZjCc21V5b9OXv/RATAN-TATA?node-id=0-1&t=xdQhP9a4xIj88bIP-1" target="_blank"><div className="hover:scale-109 transition-transform duration-300 bg-cover md:h-50 md:w-70 h-43 w-50" style={{backgroundImage: 'url(/tata2.jpg)',backgroundColor: '#faefdd'}}></div></a> 
            </div>
            <div className="md:w-80 md:h-60 w-60 h-50 border-1 mb-5 flex items-center justify-center">
              <a href="https://www.figma.com/design/UHk9bHIl3TMVO9FdQt98je/Magazine-2nd-edition-?node-id=229-589&t=9qrU4KLIrX3JDg8n-1" target="_blank"><div className="hover:scale-109 transition-transform duration-300 bg-cover md:h-50 md:w-70 h-43 w-50" style={{backgroundImage: 'url(/magazine2.jpg)',backgroundColor: '#faefdd'}}></div></a> 
            </div>
            <div className="md:w-80 md:h-60 w-60 h-50 border-1 mb-5 flex items-center justify-center">
              <a href="https://www.figma.com/design/pBg7YUSqZz2wJI8toz2Oqd/DREAM-11?node-id=0-1&t=xNODNZfFdvGQWoDJ-1" target="_blank"><div className="hover:scale-109 transition-transform duration-300 bg-cover md:h-50 md:w-70 h-43 w-50" style={{backgroundImage: 'url(/dream112.jpg)',backgroundColor: '#faefdd'}}></div></a> 
            </div>
            <div className="md:w-80 md:h-60 w-60 h-50 border-1 mb-5 flex items-center justify-center">
              <a href="https://www.figma.com/proto/j0NxvnXRQFV1d6PGr8ODhf/PERSIST-VENTURES?page-id=0%3A1&node-id=9-2&starting-point-node-id=9%3A2&t=8nMxJeZMbVXxsJ7j-1" target="_blank"><div className="hover:scale-109 transition-transform duration-300 bg-cover md:h-50 md:w-70 h-43 w-50" style={{backgroundImage: 'url(/mob.jpg)',backgroundColor: '#faefdd'}}></div></a> 
            </div>
            <div className="md:w-80 md:h-60 w-60 h-50 border-1 mb-5 flex items-center justify-center">
              <a href="https://www.figma.com/design/0mgM0IouXCkPxPZvZRmLkr/ICE-CREAM-DUPLICATE?node-id=0-1&t=rnvOvCl5ZT7bdZUi-1" target="_blank"><div className="hover:scale-109 transition-transform duration-300 bg-cover md:h-50 md:w-70 h-43 w-50" style={{backgroundImage: 'url(/ice.jpg)',backgroundColor: '#faefdd'}}></div></a> 
            </div>
          </div>
          <div className="text-lg text-left space-y-1 mt-2 flex flex-col" style={{color: '#faefdd '}}>
            <p><span className="text-4xl mr-2">➼</span>My design Gallery, a curated collection of my work across UI/UX, graphic, and digital design.</p>
            <p><span className="text-4xl mr-2">➼</span>Each project showcases my creative process—from research and ideation to final execution.</p>
            <p><span className="text-4xl mr-2">➼</span>You'll find a variety of projects including mobile apps, websites, branding concepts, digital illustrations, and more. </p>
            <p><span className="text-4xl mr-2">➼</span>I focus on creating clean, user-centered designs that are not only visually appealing but also functional and intuitive.</p>
          </div>
        </div>
      </div>
      <div className="md:h-140 flex items-center justify-center" style={{ backgroundColor: '#faefdd' }}>
        <div className="text-center max-w-6xl mx-auto px-8">
          <h2 className={`${pacifico.className} text-5xl font-bold mb-12 mt-5 text-gray-800`}>My Expertise</h2>
          
          <div className="grid md:grid-cols-3 md:gap-18 gap-10 mb-5">
            {/* Skills Section */}
            <div className="bg-transparent border-1 rounded-xl shadow-lg p-6 pt-0 transform hover:scale-105 transition-transform duration-300">
              <div className=" w-30 h-30 rounded-full flex items-center justify-center mx-auto">
                <img src="/skillbg.png" height={200} width={200}/>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">UI & UX Design</h3>
              <div className="text-left space-y-2">
                <p className="flex items-center text-gray-700"><span className=" mr-2">◈</span> Wireframing</p>
                <p className="flex items-center text-gray-700"><span className="mr-2">◈</span> Prototyping</p>
                <p className="flex items-center text-gray-700"><span className="mr-2">◈</span> Responsive Design</p>
                <p className="flex items-center text-gray-700"><span className="mr-2">◈</span> Usability Testing</p>
              </div>
            </div>

            {/* Apps Section */}
            <div className="bg-transparent border-1 rounded-xl shadow-lg p-6 pt-0 transform hover:scale-105 transition-transform duration-300">
             <div className=" w-30 h-30 rounded-full flex items-center justify-center mx-auto">
                <img src="/appbg.png" height={200} width={200}/>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Apps</h3>
              <div className="text-left space-y-2">
                <p className="flex items-center text-gray-700"><span className="60 mr-2">◈</span> Figma</p>
                <p className="flex items-center text-gray-700"><span className="60 mr-2">◈</span> Canva</p>
                <p className="flex items-center text-gray-700"><span className="60 mr-2">◈</span> Sketch</p>
                <p className="flex items-center text-gray-700"><span className="60 mr-2">◈</span> Adobe InDesign</p>
                <p className="flex items-center text-gray-700"><span className="60 mr-2">◈</span> Webflow</p>
              </div>
            </div>

            {/* Languages Section */}
            <div className="bg-transparent border-1 pt-0 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className=" w-30 h-30 rounded-full flex items-center justify-center mx-auto">
                <img src="/langbg.png" height={200} width={200}/>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Languages</h3>
              <div className="text-left space-y-2">
                <p className="flex items-center text-gray-700"><span className=" mr-2">◈</span> English</p>
                <p className="flex items-center text-gray-700"><span className=" mr-2">◈</span> Tamil</p>
                <p className="flex items-center text-gray-700"><span className=" mr-2">◈</span> Kannada</p>
                <p className="flex items-center text-gray-700"><span className=" mr-2">◈</span> Hindi</p>
                <p className="flex items-center text-gray-700"><span className=" mr-2">◈</span> Telugu</p>
                <p className="flex items-center text-gray-700"><span className=" mr-2">◈</span> Malayalam</p>
                <p className="flex items-center text-gray-700"><span className=" mr-2">◈</span> Hebrew</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Header /> */}
    </div>
  );
}