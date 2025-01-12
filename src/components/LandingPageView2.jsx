
import React from 'react';
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Play,Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const LandingPageView2 = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const username = "vishal12";
  const [activeIndex, setActiveIndex] = useState(0); 
  const [itemsToShow, setItemsToShow] = useState(3); 
  const [showMenu, setShowMenu] = useState(false);


const loadMoreItems = () => {
  setItemsToShow(prev => prev + 3); 
};

    // Handle navigation
    const handleNext = () => {
      if (activeIndex < performances.length - 1) {
        setActiveIndex((prevIndex) => prevIndex + 1);
      }
    };
  
    const handlePrev = () => {
      if (activeIndex > 0) {
        setActiveIndex((prevIndex) => prevIndex - 1);
      }
    };
  useEffect(() => {
    const fetchLandingPageData = async () => {
      // const response = await fetchLandingPageByUsername(username);
      const response =
      {
        "artistPage": {
          "artistName": "Vishal Mishra",
          "stageTitles": "5-Star Performer | Chart-Topping Artist | Voice Artist",
          "artistBio": "Hello, my name is Vishal Mishra, a passionate musician dedicated to creating soulful melodies that resonate with the heart. With a deep love for music, I blend traditional and contemporary sounds to craft unique compositions. My journey in music has been one of exploration, innovation, and connection, aiming to inspire and uplift listeners. Whether through soothing ballads or energetic tracks, my goal is to evoke emotions and tell stories that touch the soul. Join me as I continue to explore the endless possibilities of music and share my passion with the world.",

          "artistPhoto": "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_500x500.jpg",
          "gradientStart": "#000000",
          "gradientEnd": "#000000"
        },
        "performances": [
          {
            "performanceId": "perf1",
            "eventTitle": "Live at Mumbai Arena",
            "description": "An acoustic performance for music lovers.",
            "ticketPrice": 1499,
            "durationMinutes": 120,
            "platform": "Stage",
            "performanceType": "Team"
          },
          {
            "performanceId": "perf2",
            "eventTitle": "Melody Night",
            "description": "A night of soulful tunes.",
            "ticketPrice": 699,
            "durationMinutes": 30,
            "platform": "Party",
            "performanceType": "Solo"
          },
          {
            "performanceId": "perf3",
            "eventTitle": "Symphony Session",
            "description": "A virtual symphony session with fans.",
            "ticketPrice": 499,
            "durationMinutes": 45,
            "platform": "Theater",
            "performanceType": "Solo"
          }
        ],
        "merchandise": [
          {
            "merchId": "merc1",
            "merchName": "Signed TShirt + Signed Cup + Signed Vinyl",
            "merchDescription": "Limited edition signed merchandise.",
            "discount":30,
            "originalPrice": 399,
            "offerPrice":280,
            "merchType": "Exclusive",
            "imageURL": "https://img.freepik.com/premium-psd/assortment-merchandising-items_23-2150799377.jpg?semt=ais_hybrid"
          },
          
          {
            "merchId": "merc1",
            "merchName": "Signed TShirt + Signed Cup + Signed Vinyl",
            "merchDescription": "Limited edition signed merchandise.",
            "discount":30,
            "originalPrice": 399,
            "offerPrice":280,
            "merchType": "Exclusive",
            "imageURL": "https://img.freepik.com/premium-psd/assortment-merchandising-items_23-2150799377.jpg?semt=ais_hybrid"
          }
        ],
        "songSales": [
          {
            "songId": "song1",
            "title": "Melody of Dreams",
            "priceType": "Variable",
            "description": "An enchanting melody inspired by the beauty of nature.",
            "imageURL": "https://images.t2online.in/cdn-cgi/image/width=1280,quality=70/https://apis.t2online.in/image/journal/article.jpg?img_id=1204123&t=1730672058584"
          },
          {
            "songId": "song2",
            "title": "Echoes of the Heart",
            "priceType": "Set",
            "price": 100,
            "description": "A heartfelt ballad that resonates deeply with listeners.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/5.jpg"
          },
          {
            "songId": "song3",
            "title": "Rhythm of the Night",
            "priceType": "Set",
            "price": 200,
            "description": "A vibrant and energetic track perfect for dancing.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/1.jpg"
          },
          {
            "songId": "song4",
            "title": "Journey Within",
            "priceType": "Set",
            "price": 50,
            "description": "A soulful piece reflecting the artist's inner journey.",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          }
        ],
        "musicVideos": [
          {
            "videoId": "vid1",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          },
          {
            "videoId": "vid2",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://clikrecords.com/wp-content/uploads/2022/09/Vishal-Mishra-2.jpg"
          },
          
        ],
        "fanMessages": {
          "title": "Message Vishal Mishra",
          "description": "Send me your thoughts or questions.",
          "promisedReplyTime": "3"
        },
        "supportPage": {
          "title": "Show Your Love"
        },
        "musicPlatformLinks": [
          {
            "musicPlatform": "JioSaavan",
            "url": "https://www.jiosaavn.com/artist/vishal-mishra-songs/f0sXoS0mUnE_",
            "icon": "https://images.sftcdn.net/images/t_app-icon-m/p/4b3bebe9-f429-42cc-89db-2a9493062a5e/2230401414/jiosaavn-logo"
          },
          {
            "musicPlatform": "Spotify",
            "url": "https://open.spotify.com/artist/5wJ1H6ud777odtZl5gG507",
            "icon": "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
          }
        ]
      }

      setLandingPageData(response);
      setProfileImage(response.artistPage.artistPhoto);
    };
    fetchLandingPageData();
  }, [username]);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar.offsetHeight;

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    } else {
      console.log(`Section with ID ${id} not found`);
    }
  };


  if (!landingPageData) {
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardContent className="pt-6">
          <div className="text-center">Landing page not found</div>
        </CardContent>
      </Card>
    );
  }

  const { artistPage, performances, merchandise, songSales, musicVideos, fanMessages, supportPage, musicPlatformLinks } = landingPageData;



  return (
    <div
      className="min-h-screen bg-gray-50 flex flex-col items-center"
      style={{
        background: `linear-gradient(to right, ${artistPage.gradientStart}, ${artistPage.gradientEnd})`
      }}
    >
      {/* Navbar Section */}
      <nav
      id="navbar"
      className="fixed top-0 w-full z-50 bg-trans shadow-lg"
      style={{
        fontFamily: '"Edu AU VIC WA NT Hand", serif',
        fontWeight: 400,
        color: '#FF005C',
      }}
    >
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&display=swap');`}
      </style>

      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl">@{username}</h2>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>

          {/* Desktop Tabs */}
          <div
            className="hidden md:flex space-x-4"
            style={{
              fontFamily: '"Edu AU VIC WA NT Hand", serif',
              fontWeight: 400,
              color: '#EDEDED',
            }}
          >
            <a href="#performances" onClick={() => scrollToSection('performances')}>
              Performances
            </a>
            <a href="#videos" onClick={() => scrollToSection('videos')}>
              Videos
            </a>
            <a href="#songsSale" onClick={() => scrollToSection('songsSale')}>
              Songs Sale
            </a>
            <a href="#merchandise" onClick={() => scrollToSection('merchandise')}>
              Merchandise
            </a>
            <a href="#support" onClick={() => scrollToSection('support')}>
              Messages
            </a>
            <a href="#support" onClick={() => scrollToSection('support')}>
              Support
            </a>
          </div>

          {/* Mobile Menu */}
          {showMenu && (
            <div className="absolute top-16 right-0 w-full bg-black shadow-lg rounded-lg md:hidden">
              <ul className="flex flex-col items-center">
                <li>
                  <a
                    href="#performances"
                    className="block px-4 py-2 text-white hover:bg-gray-200"
                    onClick={() => {
                      scrollToSection('performances');
                      setShowMenu(false);
                    }}
                  >
                    Performances
                  </a>
                </li>
                <li>
                  <a
                    href="#videos"
                    className="block px-4 py-2 text-white hover:bg-gray-200"
                    onClick={() => {
                      scrollToSection('videos');
                      setShowMenu(false);
                    }}
                  >
                    Videos
                  </a>
                </li>
                <li>
                  <a
                    href="#songsSale"
                    className="block px-4 py-2 text-white hover:bg-gray-200"
                    onClick={() => {
                      scrollToSection('songsSale');
                      setShowMenu(false);
                    }}
                  >
                    Songs Sale
                  </a>
                </li>
                <li>
                  <a
                    href="#merchandise"
                    className="block px-4 py-2 text-white hover:bg-gray-200"
                    onClick={() => {
                      scrollToSection('merchandise');
                      setShowMenu(false);
                    }}
                  >
                    Merchandise
                  </a>
                </li>
                <li>
                  <a
                    href="#support"
                    className="block px-4 py-2 text-white hover:bg-gray-200"
                    onClick={() => {
                      scrollToSection('support');
                      setShowMenu(false);
                    }}
                  >
                    Messages
                  </a>
                </li>
                <li>
                  <a
                    href="#support"
                    className="block px-4 py-2 text-white hover:bg-gray-200"
                    onClick={() => {
                      scrollToSection('support');
                      setShowMenu(false);
                    }}
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>

      {/* Main Content Container */}
      <div className="w-full space-y-1">
        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start h-screen bg-[url('https://vishal-mishra.com/wp-content/uploads/2024/05/6.jpg')] bg-cover bg-center z-0">
  {/* Overlay for fade effect */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

  {/* Card Section */}
  <div className="z-20 w-full max-w-lg lg:w-2/3 p-12 lg:p-12 bg-trans rounded-lg mt-8 sm:mt-12 lg:mt-32">

    {/* Artist Name */}
    <h2 className=" z-20 text-5xl sm:text-4xl lg:text-6xl xl:text-5xl font-bold text-center lg:text-left text-white">
      {artistPage.artistName}
    </h2><br></br>
    
    {/* Stage Titles */}
    <h4 className="text-md sm:text-lg lg:text-xl mt-2 font-semibold text-center lg:text-left text-white">
      {artistPage.stageTitles}
    </h4>

    {/* Social Links Section */}
    <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 hover:text-black">
      {musicPlatformLinks.map((link) => (
        <button
          key={link.musicPlatform + link.url}
          className="flex items-center w-full sm:w-auto p-3 border border-gray-300 rounded-full shadow-md hover:bg-gray-100 transition hover:text-black"
          onClick={() => link.url && window.open(link.url, '_blank')}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 mr-3">
            {link.icon ? (
              <img
                src={link.icon}
                alt={`${link.musicPlatform} icon`}
                className="w-10 h-10 object-cover rounded-full"
              />
            ) : null}
          </div>
          <span className="text-sm sm:text-md font-bold text-white hover:text-black">
            {link.musicPlatform || ' '}
          </span>
        </button>
      ))}
    </div>
  </div>

</div>


        {/* About Section */}


        <Card 
      className="shadow-lg rounded-lg" 
      style={{
        backgroundImage: `url('https://png.pngtree.com/png-clipart/20220804/ourmid/pngtree-audiences-in-club-musical-png-image_6098435.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '360px'
      }}
    >
      <div className="bg-black bg-opacity-90 p-6 rounded-lg h-400">
        <div className="flex flex-col md:flex-row">
          {/* Left Column: Image with scroll-triggered Framer Motion */}
          <div className="md:w-1/3 flex justify-center items-center">
            <motion.img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBYxKMnj7sfhsp_KnR7e1sTHcVosExrUTp6I0sS7pueH-_p4NHf_WD3gCKQgX_Ts__9PjTzv7EjAjdBcgOE36XqOrsLyvdxF9n-6PZeiO8TSGMcTOiXl6UK4C6YG4tNuPT_EpdMKKLxb_t-3OWPkJUxtI3QUuLcmR80z3ppee3KrAokZndR2bc03Pd76AV/s1213/vishal.jpg" 
              alt="Artist Image" 
              className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }} // Starting state
              whileInView={{ opacity: 1, scale: 1 }} // Triggered when the image comes into view
              viewport={{ once: true, amount: 0.5 }} // Triggers animation when 50% of the image is visible
              transition={{ duration: 1 }} // Duration of animation
            />
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-2/3 md:px-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }} // Start from left and invisible
              whileInView={{ opacity: 1, x: 0 }} // Fade in and slide to the center
              viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the content is visible
              transition={{ duration: 1 }} // Duration of animation
            >
              <CardHeader>
                <CardTitle className="text-white text-2xl sm:text-3xl font-bold text-center md:text-left">
                  About
                </CardTitle>
                <CardDescription className="text-white text-base sm:text-lg mt-4 text-center md:text-left">
                  {artistPage.artistBio}
                </CardDescription>
              </CardHeader>
            </motion.div>
          </div>
        </div>
      </div>
    </Card>



        {/* Music Videos Section */}
        <div 
  id="videos" 
  className="p-4 bg-white bg-opacity-10 rounded-lg shadow-lg mb-8 border border-white w-full max-w-none mx-auto relative" 
  style={{
    backgroundImage: "url('https://t3.ftcdn.net/jpg/04/07/49/38/240_F_407493824_JHxbw6baOfgk6bwb0KxC4hotEAsypRRy.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)', // For Safari
  }}
>
<div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
  <div className="relative z-10">
    <Card>
      <CardHeader>
        <CardTitle></CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-start gap-4 items-center">
          {/* Left section with title */}
          <div className="flex-grow h-full lg:w-1/2 flex items-center px-4 sm:px-6 lg:px-8 text-center lg:text-left md:w-2/3">
            <div className="flex-shrink-0 w-full text-white">
              <h2 className='text-3xl'>Music Videos</h2><br></br>
              <p>Explore our latest music videos and enjoy the beats!</p>
              <p>Whether you're a fan of upbeat tracks, smooth melodies, or energetic performances, there's something here for every music lover. Dive into the world of music like never before, and let the rhythm take over!</p>
            </div>
          </div>

          {/* Right section with videos */}
          <div className="flex-grow md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-trans">
              {musicVideos.map((video) => (
                <Card
                  key={video.videoId}
                  className="overflow-hidden cursor-pointer w-full bg-trans"
                  onClick={() => window.open(video.redirectURL, '_blank')}
                >
                  <div className="relative">
                    <div className="w-full" style={{ paddingTop: '66.66%' }}>
                      <img
                        src={video.imageURL}
                        alt={video.title}
                        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover bg-black rounded-lg"
                      />
                    </div>
                    <div className="p-2 bg-white/90 backdrop-blur-sm flex justify-between items-center">
                      <span className="font-medium">{video.title}</span>
                      <Button variant="ghost" size="icon">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</div>




          {/* Performances Section */}
          
          <div
  id="performances"
  className="p-4 bg-white bg-opacity-10 rounded-lg shadow-lg mb-8 w-full max-w-none mx-auto relative"
  style={{
    backgroundImage: "url('https://png.pngtree.com/png-clipart/20220804/ourmid/pngtree-audiences-in-club-musical-png-image_6098435.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)', // For Safari
  }}
>
  <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

  <h2 className="text-3xl font-bold text-center text-white z-20 relative mb-6">
  
  </h2>

  <div className="relative z-20 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 h-auto lg:h-[350px]">
    {/* Carousel Section */}
    <div className="relative justify-center flex-grow w-full lg:w-1/2 h-[350px] md:h-[300px] lg:h-full overflow-hidden">
      {/* Previous Button */}
      <button
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 md:p-3 rounded-full focus:outline-none z-40"
        onClick={handlePrev}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Cards */}
      <div className="relative w-full h-full p-4 flex justify-center items-center" >
        {performances.map((performance, index) => {
          const offset = (index - activeIndex + performances.length) % performances.length;
          let style = "";
          if (offset === 0) {
            style = "z-40 scale-110 translate-x-0";
          } else if (offset === 1) {
            style = "z-30 scale-90 translate-x-16 md:translate-x-32 rotate-y-6 blur-sm";
          } else if (offset === performances.length - 1) {
            style = "z-30 scale-90 -translate-x-16 md:-translate-x-32 rotate-y--6 blur-sm";
          } else {
            style = "z-0 scale-75 opacity-0";
          }

          return (
            <div
              key={performance.performanceId}
              className={`absolute transition-all duration-700 ease-in-out transform ${style} border border-white rounded-lg`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="bg-black p-4 md:p-6 rounded-lg shadow-lg border border-black w-56 sm:w-64">
                <h3
                  className="text-lg md:text-xl font-bold"
                  style={{
                    fontFamily: '"Edu AU VIC WA NT Hand", serif',
                    fontWeight: 400,
                    color: "#ccff00",
                  }}
                >
                  {performance.eventTitle}
                </h3>
                <p className="mt-2 text-gray-400 text-sm md:text-base">
                  {performance.description}
                  <br />
                  <span className="block mt-2">
                    Duration: {performance.durationMinutes} mins
                  </span>
                  <span className="block mt-2">
                    Location: {performance.platform}
                  </span>
                  <span className="block mt-2 font-bold text-red-600">
                    Price: ${performance.ticketPrice}
                  </span>
                </p>
                <div className="mt-4">
                  <button
                    className="bg-black text-black px-4 py-2 rounded-md hover:bg-[#C80036] hover:text-black transition border border-white"
                    style={{
                      fontFamily: '"Edu AU VIC WA NT Hand", serif',
                      fontWeight: 400,
                      color: "#ccff00",
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 md:p-3 rounded-full focus:outline-none z-30"
        onClick={handleNext}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>

    {/* Text Section */}
    <div className="flex-grow h-full lg:w-1/2 flex items-center px-4 sm:px-6 lg:px-8 text-center lg:text-left">
  <p className="text-lg text-white">
    <strong className="text-3xl">Performances</strong>
    <br />
    Discover our range of thrilling performances, crafted to captivate and entertain. From mesmerizing musical acts to awe-inspiring stage shows, there's something for everyone. Book your tickets now and be part of the unforgettable experience!
  </p>
</div>

  </div>
</div>


          
            {/* Songs Sale Section */}
          
          
            <div id="songsSale" className="mt-8 w-full px-4 sm:px-6 lg:px-8 pb-10 pt-10 border border-white"
            style={{
              backgroundImage: "url('https://t3.ftcdn.net/jpg/04/07/49/38/240_F_407493824_JHxbw6baOfgk6bwb0KxC4hotEAsypRRy.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)', // For Safari
            }}>
              <div className="absolute inset-0 bg-black opacity-70 -z-10"></div>
    <h2 className="text-3xl font-bold text-center text-white mb-6">Songs for Sale</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {songSales.slice(0, itemsToShow).map((song, index) => (
        <motion.div
          key={song.songId}
          className="bg-[#C80036] bg-opacity-90 rounded-lg shadow-lg overflow-hidden flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Numbering and Animated Line */}
          <div className="relative mb-1">
            <motion.div
              className="absolute left-0 top-0 text-5xl font-bold text-black mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5 }}
            >
              #{String(index + 1).padStart(2, "0")}
            </motion.div>
            <motion.div
              className="absolute left-0 top-[50%] w-full bg-black"
              style={{ height: '2px' }}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
          </div>
          {/* Image Section */}
          <div className="h-48">
            <img 
              src={song.imageURL}
              alt={song.title}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Content Section */}
          <div className="p-4 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2" style={{fontFamily: '"Edu AU VIC WA NT Hand", serif', fontWeight:400, color:'#000000'}}>{song.title}</h3>
              <p className="text-sm text-black">
                {song.description}
                <br />
                Pricing: {song.priceType}
                {song.price && ` - $${song.price}`}
              </p>
            </div>
            <button
              className="mt-4 w-full px-4 py-2 text-white bg-black hover:bg-white rounded-lg" 
              style={{fontFamily: '"Edu AU VIC WA NT Hand", serif', fontWeight:400, color:'red'}}
            >
              View Songs
            </button>
          </div>
        </motion.div>
      ))}
    </div>
    {/* More Button */}
    {itemsToShow < songSales.length && (
      <div className="text-center mt-6">
        <button
          onClick={loadMoreItems}
          className="px-6 py-2 text-white bg-black hover:bg-[#C80036] rounded-lg border border-white"
        >
          More
        </button>
      </div>
    )}
  
</div>


          {/* Merchandise Section */}
          <div 
  id="merchandise" 
  className="p-4 bg-white bg-opacity-30 rounded-lg shadow-lg mb-8 border border-black w-full max-w-none mx-auto pb-12"
  style={{
    minHeight: '60vh', // Full screen height
    backgroundImage: "url('https://png.pngtree.com/png-clipart/20220804/ourmid/pngtree-audiences-in-club-musical-png-image_6098435.png')", // Replace with your desired background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)', // For Safari
  }}
>
<div className="absolute inset-0 bg-black opacity-80 -z-10"></div>
  {/* Scrolling Headline */}
  <div className="z-30 overflow-hidden whitespace-nowrap text-white text-2xl font-semibold mb-6 bg-[#C80036]">
    <span className="z-30 animate-marquee">
      🛍️ Explore Our Exclusive Merchandise Offers 🛍️
    </span>
  </div>
  <h2 
    className="z-40 text-2xl font-bold text-center text-white mb-6 transition-transform transform hover:scale-105"
    style={{
      fontFamily: '"Edu AU VIC WA NT Hand", serif',
      fontWeight: 400,
      color: '#ffffff',
    }}
  >
    Limited Time Offers on Merchandise
  </h2>
  <div className="z-40 grid grid-cols-1 sm:grid-cols-2 gap-6">
    {merchandise.map((merc) => (
      <div
        key={merc.merchId}
        className="bg-black bg-opacity-90 rounded-lg shadow-xl overflow-hidden transform hover:scale-102 transition-all duration-300"
      >
        {/* Product Image */}
        <div className="h-48 overflow-hidden relative">
          <img
            src={merc.imageURL}
            alt={merc.merchName}
            className="object-cover w-full h-full rounded-t-lg"
          />
          {/* Offer Badge */}
          <div className="absolute top-2 left-2 p-2 bg-red-500 text-white font-bold rounded-full transform rotate-12">
            {merc.discount}% OFF
          </div>
        </div>
        {/* Content Section */}
        <div className="p-4 flex-grow flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-white mb-2">{merc.merchName}</h3>
          <p className="text-sm text-gray-200 mb-2">{merc.merchDescription}</p>
          <div className="flex justify-between items-center">
            <p className="font-bold text-2xl text-red-600">
              ${merc.offerPrice}
              <span className="text-sm line-through text-gray-500">
                ${merc.originalPrice}
              </span>
            </p>
            <button
              className="px-4 py-2 bg-black text-white rounded-full shadow-lg transform transition-transform border border-white hover:scale-105"
              style={{
                fontFamily: '"Edu AU VIC WA NT Hand", serif',
                fontWeight: 400,
                color: '#ccff00',
              }}
            >
              View Bundle
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

{/* CSS for Scrolling Headline */}
<style jsx>
  {`
    .animate-marquee {
      display: inline-block;
      animation: marquee 20s linear infinite;
    }
    @keyframes marquee {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `}
</style>


  

<div
  id="support"
  className="flex flex-col lg:flex-row gap-4 p-4 border border-white"
  style={{
    minHeight: '60vh',
    backgroundImage: "url('https://t3.ftcdn.net/jpg/04/07/49/38/240_F_407493824_JHxbw6baOfgk6bwb0KxC4hotEAsypRRy.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)', // For Safari
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-70 -z-10"></div>

  {/* Messages Section */}
  <Card className="bg-trans bg-opacity-30 backdrop-blur-lg rounded-lg flex-1 pt-10">
  {fanMessages && (
    <div
      className="bg-[#f4e1a1] shadow-lg rounded-lg transform scale-95 w-full max-w-md lg:max-w-sm mx-auto p-4 relative shake-tilt border border-red"
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/736x/de/84/0d/de840dbdd6b304b0e5b0f5b11471479e.jpg")',
        backgroundSize: 'cover',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div> 
      {/* Pin Icon */}
      <div className="absolute top-0 right-0 p-2 bg-red-500 rounded-full shadow-md transform rotate-45">
        <i className="fas fa-thumbtack text-white"></i>
      </div>
      
      {/* Content inside the Paper */}
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-white mb-4 transition-transform transform hover:scale-105">
        <i className="fas fa-comments text-white mr-2"></i>
        Fan Messages
      </h2>
      
      <Card className="bg-transparent">
        <CardHeader className="bg-transparent text-white pt-3 rounded-t-lg shadow-xl">
          <CardTitle className="text-lg lg:text-xl font-semibold mb-2 flex items-center justify-between">
            <span>
              <i className="fas fa-envelope text-white mr-2"></i>
              Message Me
            </span>
            <Send className="w-6 h-6 text-current" />
          </CardTitle>
          <CardDescription className="text-sm opacity-90">
            <p className="font-medium text-gray-300 mb-2">
              {fanMessages.title}
            </p>
            <p className="text-gray-200 leading-relaxed">
              {fanMessages.description}
            </p>
            <br />
            <span className="font-semibold text-gray-200">
              Promised Reply Time:
            </span>
            <span className="text-white font-bold">
              {fanMessages.promisedReplyTime} hours
            </span>
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-4">
          <Button
            className="flex items-center justify-center gap-3 w-full py-3 px-6 text-white bg-black rounded-full shadow-xl transform transition-transform hover:scale-105 border border-red"
            style={{
              fontFamily: '"Edu AU VIC WA NT Hand", serif',
              fontWeight: 400,
              color: 'white',
            }}
            onClick={() => alert('Message Sent!')}
          >
            <i className="fas fa-paper-plane"></i>
            Send Message
          </Button>
        </CardContent>
      </Card>
    </div>
  )}
</Card>

  {/* Support Section */}
  <div id="support1" className="flex justify-center items-center p-4 flex-1">
  {supportPage && (
    <div className="w-full max-w-md lg:max-w-md mx-auto p-4 bg-[#C80036] bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg mb-8 transform transition-transform border border-white">
      
      {/* Support Header */}
      <h2 className="text-3xl font-bold text-center text-white mb-6 flex items-center justify-center gap-2">
        <i className="fas fa-hands-helping text-white text-4xl"></i>
        Support My Journey
      </h2>
      
      {/* Support Card */}
      <div className="bg-white rounded-lg shadow-lg mb-4 p-6 hover:shadow-2xl transition-shadow duration-300 border border-black">
        <div className="text-black pt-3">
          <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <i className="fas fa-route text-black"></i>
            {supportPage.title}
          </h3>
          <p className="text-gray-700 opacity-80 mt-2">
            Your support fuels my passion and helps me achieve incredible milestones. Together, we can create something extraordinary!
          </p>
        </div>
        
        {/* Support Button */}
        <div className="mt-6 flex justify-center">
          <button
            className="w-full sm:w-auto px-8 py-3 bg-black text-white font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2"
            style={{
              fontFamily: '"Edu AU VIC WA NT Hand", serif',
              fontWeight: 400,
            }}
          >
            <i className="fas fa-heart"></i>
            Support Now
          </button>
        </div>
      </div>
      
      {/* Thank You Message */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
          <i className="fas fa-star text-yellow-400"></i>
          Thank you for being a part of this journey. Your support means the world to me!
        </p>
      </div>
    </div>
  )}
</div>

</div>

<style jsx>
  {`
    @keyframes shake {
      0%, 100% { transform: rotate(-2deg); }
      25%, 75% { transform: rotate(2deg); }
      50% { transform: rotate(0deg); }
    }

    .shake-tilt {
      animation: shake 2s infinite;
      transform-origin: center top;
      transform: rotate(-2deg);
    }
  `}
</style>
       
      </div>
    </div>
  );
};

export default LandingPageView2;
