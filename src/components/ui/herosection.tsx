/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UBvP8RvrMPN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"




export default function HeroSection () {

  const [activeSection, setActiveSection] = useState("hero")
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  function handleSectionClick(section: string) {
    setActiveSection(section)
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView ({ behavior: "smooth" })
    };
  };
  
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 4)
    }, 5000)
    return () => clearInterval(interval)
  }, []) 
  

  return <div className=" flex flex-col min-h-screen bg-gradient-to-br from-[#2b203d] to-[#8e859e]">
 

<header className="bg-gradient-to-b from-[#4158D0] to-[#C850C0] py-4 px-6">
        <div className="flex justify-between items-center">
          <Link href="#" className="flex items-center gap-2 text-white font-bold text-2xl 
          w-8 h-8 " prefetch={false}>
            <img
            src="https://i.imgur.com/g98YTSK.png"
            width={400}
                      height={400}
                      alt="Strangers Online logo"

            />
            
            <span className=" text-my-color font-blinker"> Strangers Online </span>
          </Link>
          <button className="text-white hover:underline md:hidden" onClick={toggleMenu}>
            <MenuIcon className="w-6 h-6" />
          </button>
          <nav
            className={`flex flex-col md:flex-row items-start md:items-center gap-4 ${
              menuOpen ? "block" : "hidden"
            } md:block`}
          >
            <button
              className={`text-white hover:underline ${activeSection === "hero" ? "font-bold" : ""}`}
              onClick={() => handleSectionClick("hero")}
            >
              
            </button>
            
            <button
              className={`text-white hover:underline ${activeSection === "gallery" ? "font-bold" : ""}`}
              onClick={() => handleSectionClick("gallery")}
            >
          
            </button>
            <button
              className={`text-white hover:underline ${activeSection === "news" ? "font-bold" : ""}`}
              onClick={() => handleSectionClick("news")}
            >
              
            </button>
          </nav>
        </div>
        </header>
      <main className="flex-1 p-8">
        <div className=" bg-white bg-opacity-100 rounded-lg shadow-lg">
          
          <section id="hero">
            <div className="bg-background-image bg-cover bg-no-repeat flex flex-col justify-center items-center rounded-lg" > 
              <Carousel
                className="w-full max-w-md"
               //@ts-ignore ts.ignore
                onSlideChange={(slideIndex: number) => setCurrentSlide(slideIndex)}
                opts={{ loop: true }}
              >
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src=" https://i.imgur.com/nczfm5c.png"
                      width={800}
                      height={450}
                      alt="Hero Image 1"
                      className="rounded-lg shadow-lg"
                      style={{ aspectRatio: "800/450", objectFit: "cover" }}
                    />
                    <div className="mt-4" >
                      <h1 className="text-4xl font-bold text-[#4CAF50] mb-4">¡Bienvenido a Strangers Online!</h1>
                      <p className="text-my-color font-bold text-[#757575] mb-6">
                        ¡Diviértete con juegos, descubre nuevos videos y disfruta informandote!
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src=""
                      width={800}
                      height={350}
                      alt="Hero Image 2"
                      className="rounded-lg shadow-lg"
                      style={{ aspectRatio: "800/450", objectFit: "cover" }}
                    />
                    <div className="mt-4">
                      <h1 className="text-4xl font-bold text-[#4CAF50] mb-4">Sabías que...</h1>
                      <p className="text-my-color font-blond text-[#757575] mb-6">
                        Podes comunicarte grátis a través de la línea 102 ante cualquier inquietud
                        o duda.
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src=""
                      width={800}
                      height={450}
                      alt="Hero Image 3"
                      className="rounded-lg shadow-lg"
                      style={{ aspectRatio: "800/450", objectFit: "cover" }}
                    />
                    <div className="mt-4">
                      <h1 className="text-4xl font-bold text-[#4CAF50] mb-4">Las leyes que nos amparan</h1>
                      <p className="text-my-color text-[#757575] mb-6">
                        Es importante sentirse seguro y conocer las leyes de nuestro país ante cualquier 
                        inconveniente o situación incómoda.
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src=""
                      width={800}
                      height={450}
                      alt="Hero Image 4"
                      className="rounded-lg shadow-lg"
                      style={{ aspectRatio: "800/450", objectFit: "cover" }}
                    />
                    <div className="mt-4">
                      <h1 className="text-4xl font-bold text-[#4CAF50] mb-4">Por eso...</h1>
                      <p className="text-my-color text-[#757575] mb-6">
                        En nuestro país contamos con la Ley 26.904 y la Ley 27.590 denominada Ley Micaela
                        Ortega.  
                      </p>
                      <Link href="https://www.argentinacibersegura.org/noalgrooming/ley-de-grooming" className="bg-[#4CAF50] text-my-color font-blond px-4 py-2 rounded-md hover:bg-[#388E3C]" target="_blank">
                        Más información sobre las leyes
                       </Link>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                
              </Carousel>
            </div>
            
          </section>
        </div>
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 mb-8">
          <section id="games" className="mb-8">
            <h2 className="text-3xl font-bold text-[#4CAF50] mb-4">Juegos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="bg-fondo flex flex-col items-center justify-center p-6">
                  <GamepadIcon className="w-12 h-12 text-[#FF6B6B] mb-4" />
                  <h3 className="text-2xl font-bold text-[#FF6B6B] mb-2">Laberinto</h3>
                
                  <p className="text-lg text-[#757575]">Ayuda al personaje a encontrar la salida del laberinto.</p>
                  
                  <Button
                    className="bg-[#FF6B6B] hover:bg-[#E53935] text-white font-bold py-2 px-4 rounded mt-4 rounded-lg"
                  
                  >
                    Jugar
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <PuzzleIcon className="w-12 h-12 text-[#9C27B0] mb-4" />
                  <h3 className="text-2xl font-bold text-[#9C27B0] mb-2">Rompecabezas</h3>
                  <p className="text-lg text-[#757575]">Arma el rompecabezas para revelar la imagen oculta.</p>
                 
                  <Button
                    className="bg-[#9C27B0] hover:bg-[#7B1FA2] text-white font-bold py-2 px-4 rounded mt-4 rounded-lg"
                  
                  >
                    Jugar
                  </Button>
                  <Link href="https://wordwall.net/es/resource/25288277/%c3%a9tica-y-ciudadan%c3%ada/grooming"
                      target="_blank"></Link>
                  
                </CardContent>
              </Card>
             <Card> 
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Dice1Icon className="w-12 h-12 text-[#673AB7] mb-4" />
                  <h3 className="text-2xl font-bold text-[#673AB7] mb-2">Dados</h3>
                  <p className="text-lg text-[#757575]">Lanza los dados y compite con tus amigos.</p>
                  <Button
                    className="bg-[#673AB7] hover:bg-[#512DA8] text-white font-bold py-2 px-4 rounded mt-4 rounded-lg"
                    
                  >
                    Jugar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 mb-8 justify-center p-6 ">
          <section id="gallery" className="mb-8">
            <h2 className="text-3xl font-bold text-[#4CAF50] mb-4"> El grooming </h2>
            <Carousel 
              className="w-full max-w-2x"
              //@ts-ignore
              currentSlide={currentSlide}
             //@ts-ignore
              onSlideChange={(slide) => setCurrentSlide(slide)}
            //@ts-ignore
              opts={{ autoplay: { delay: 5000, disableOnInteraction: false } }}
            >
              <CarouselContent>
                <CarouselItem>
                <button>
                <iframe width="800" height="450" src="https://www.youtube.com/embed/tch4ShnGwd0?si=3-w83nUcZwKeoSoB" title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                 className="rounded-lg shadow-lg"
                    style={{ aspectRatio: "800/450", objectFit: "cover" }}></iframe>
                    
                    
                  
             
                 
            
                  </button>
                  
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-[#4CAF50] mb-2">Pequeños cortos animados</h3>
                    <p className="text-lg text-[#757575]">Dejamos pequeños cortos de concientización.</p>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <button>

                  <iframe width="800" height="450" src="https://www.youtube.com/embed/O1bbS25JngQ?si=oi2Mti6EAFWcKtnh" 
                  title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </button>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-[#4CAF50] mb-2">¿Que es el grooming?</h3>
                    <p className="text-lg text-[#757575]"></p>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/4cKb-8LxCrE?si=7T0PJjEcpP2yRuny" 
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                    className="rounded-lg shadow-lg"
                    style={{ aspectRatio: "800/450", objectFit: "cover" }}></iframe>
                  
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-[#4CAF50] mb-2">Ciberseguridad</h3>
                    <p className="text-lg text-[#757575]">Aprendé a como proteger tu seguridad ante el internet.</p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2 shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary">
                <ChevronLeftIcon className="w-6 h-6 text-primary" />
              </CarouselPrevious>
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2 shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary">
                <ChevronRightIcon className="w-6 h-6 text-primary" />
              </CarouselNext>
            </Carousel>
          </section>
        </div>
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 mb-8">
          <section id="news" className="mb-8">
            <h2 className="text-3xl font-bold text-[#4CAF50] mb-4">Capacitarte</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <Card> 
                <CardContent className="p-6">
                  
                  <img
                    src="https://i.imgur.com/L6K9oZe.jpeg"
                    width={400}
                    height={225}
                    alt="News Image 1"
                    className="rounded-lg shadow-lg mb-4 cursor-pointer"
                    style={{ aspectRatio: "400/225", objectFit: "cover" }}
                  />
                  <h3 className="text-2xl font-bold text-[#FF6B6B] mb-2">Grooming para padres/madres</h3>
                  <p className="text-lg text-[#757575] mb-4">
                    
                  Si bien está establecido que nuestra pagina está más bien orientada para niños/jovenes,
                 también creemos que es importante el conocimiento en tutores y educadores. De igual manera como la forma
                  o técnicas de enseñanza de esta temática.
                  </p>
                  <a href="https://www.iprofesional.com/tecnologia/327561--grooming-que-es-cuando-comienza-y-como-se-manifiesta"></a>
                  <Button className="bg-[#FF6B6B] hover:bg-[#E53935] text-white font-bold py"> Haga click para ver más</Button> 
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    src="https://i.imgur.com/ma61sob.jpeg"
                    width={400}
                    height={225}
                    alt="News Image 1"
                    className="rounded-lg shadow-lg mb-4 cursor-pointer"
                    style={{ aspectRatio: "400/225", objectFit: "cover" }}
                  />
                  <h3 className="text-2xl font-bold text-[#9C27B0] mb-2">Video explicativo</h3>
                  <p className="text-lg text-[#757575]">Nos gusta lo interactivo, por lo tanto, también les dejamos
                     un video de como tratar el grooming desde una perspectiva de padre/madre/educador.</p>
                     <a href="https://www.youtube.com/watch?v=8Ry-Vy4Piws">

                  <Button
                    className="bg-[#9C27B0] hover:bg-[#7B1FA2] text-white font-bold py-2 px-4 rounded mt-4 rounded-lg"
                    
                  >
                    Ver video
                  </Button>
                  </a>
                </CardContent>
              </Card>

               <Card> 
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    src="https://i.imgur.com/zM9CFMm.jpeg"
                    width={400}
                    height={225}
                    alt="News Image 1"
                    className="rounded-lg  mb-4 cursor-pointer"
                    style={{ aspectRatio: "400/225", objectFit: "cover" }}
                  />
                  <h3 className="text-2xl font-bold text-[#673AB7] mb-2">¿Cómo puedo apoyar a mi hijo?</h3>
                  <p className="text-lg text-[#757575]">Formas de apoyo emocional.</p>
                  <Button
                    className="bg-[#673AB7] hover:bg-[#512DA8] text-white font-bold py-2 px-4 rounded mt-4 rounded-lg"
                    
                  >
                    Ver
                  </Button>
                </CardContent>
              </Card>
            
            </div>
            
          </section>
      
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
<p className="text-xs text-my-color text-muted-foreground">© 2024 Esc. Comercio N°2.</p>
<nav className="sm:ml-auto flex gap-4 sm:gap-6">

<Link href="https://www.facebook.com/share/15RnWCo53f/?mibextid=kFxxJD"
target="_blank">
        <img
          src="https://i.imgur.com/sAEVVs1.png"
          alt="Icono de facebook"
          width={32}
          height={32}
        
        />
      </Link>
  

<Link href="https://www.instagram.com/dgnyalarioja?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
target="_blank">
        <img
      
          src="https://i.imgur.com/rIRhjMy.png "
          alt="Icono de Instagram"
          width={32}
          height={32}
        
        />
      </Link>

      
  
  
<Link className="text-xs hover:underline underline-offset-4" href="https://buenosaires.gob.ar/que-es-el-grooming-y-que-podemos-hacer-para-combatirlo" 
        target='_blank' rel='noopener noreferrer'>
          Contacto de ayuda
        </Link>
  <a className="text-xs hover:underline underline-offset-4" href="#">
    Privacy
  </a>
</nav>
</footer>
    </div>
    
  
}

//@ts-ignore
function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

//@ts-ignore
function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

//@ts-ignore
function Dice1Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M12 12h.01" />
    </svg>
  )
}

//@ts-ignore
function GamepadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}

//@ts-ignore
function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

//@ts-ignore
function PuzzleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  )
}

//@ts-ignore
