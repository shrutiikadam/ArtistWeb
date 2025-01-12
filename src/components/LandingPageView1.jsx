import React from 'react';
import { useEffect, useState,useRef } from "react";
import { Play,Send, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';
const LandingPageView1 = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const username = "vishal12";
  const [activeIndex, setActiveIndex] = useState(0); 
  const [showMenu, setShowMenu] = useState(false);
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
    const sectionVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
useEffect(() => {
  
    const fetchLandingPageData = async () => {

      const response =
      {
        "artistPage": {
          "artistName": "Vishal Mishra",
          "stageTitles": "5-Star Performer | Chart-Topping Artist | Voice Artist",
          "artistBio": " Vishal Mishra is a talented playback singer and composer in the Indian music industry, known for his soulful voice and memorable melodies. His work spans multiple Bollywood films.",
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
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg",
            "duration":"4:08",
            "views":"1M"
          },
          {
            "videoId": "vid2",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://clikrecords.com/wp-content/uploads/2022/09/Vishal-Mishra-2.jpg",
            "duration":"4:08",
            "views":"1M"
          },
          {
            "videoId": "vid2",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://clikrecords.com/wp-content/uploads/2022/09/Vishal-Mishra-2.jpg",
            "duration":"4:08",
            "views":"1M"
          },
          {
            "videoId": "vid2",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://clikrecords.com/wp-content/uploads/2022/09/Vishal-Mishra-2.jpg",
            "duration":"4:08",
            "views":"1M"
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
    <div className="min-h-screen bg-gray-50 " style={{
      background: `linear-gradient(to right, ${artistPage.gradientStart}, ${artistPage.gradientEnd})`
    }}>
      {/* Navbar Section */}
      <nav
      id="navbar"
      className="p-2 fixed top-0 w-full z-50 bg-black shadow-lg"
      style={{
        fontFamily: '"Edu AU VIC WA NT Hand", serif',
        fontWeight: 400,
        color: '#ccff00',
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
            <div className="absolute top-16 right-0 w-full bg-black bg-opacity-90 shadow-lg rounded-lg md:hidden">
              <ul className="flex flex-col items-center">
                <li>
                  <a
                    href="#performances"
                    className="block px-4 py-2 text-[#ccff00] hover:bg-gray-200"
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
                    className="block px-4 py-2 text-[#ccff00] hover:bg-gray-200"
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
                    className="block px-4 py-2 text-[#ccff00] hover:bg-gray-200"
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
                    className="block px-4 py-2 text-[#ccff00] hover:bg-gray-200"
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
                    className="block px-4 py-2 text-[#ccff00] hover:bg-gray-200"
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
                    className="block px-4 py-2 text-[#ccff00] hover:bg-gray-200"
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

      {/* Main Content Section */}
      <div className="pt-[71px]">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column */}
<div
  className="lg:col-span-5 lg:sticky lg:top-[71px] lg:h-[88vh] overflow-y-hidden" 
  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
>
  {/* Profile Section */}
  <Card
    style={{
      backgroundImage: `url(${profileImage || "/default-avatar.jpg"})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "520px", 
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white !important", 
      width: "100%", 
      margin: "0 auto",
    }}
    className="relative flex flex-col h-full"
  >
    <div
      className="absolute inset-0 bg-black bg-opacity-50"
      style={{
        zIndex: 1, 
      }}
    ></div>

    {/* Main Content Section */}
    <div
  className="relative z-10 text-left flex flex-col items-start text-white"
  style={{
    maxWidth: "100%",
    position: "relative",
    top: "-25%", 
  }}
>
  <h1
    className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide mb-2"
    style={{
      fontFamily: "Rubik Mono One",
      color: "#ccff00",
      textShadow: "0 0 5px #ccff00",
    }}
  >
    {artistPage.artistName}
  </h1>

  <h2 className="text-md sm:text-base md:text-lg lg:text-xl text-white mb-4 w-full sm:w-auto">
    {artistPage.stageTitles}
  </h2>
</div>


    {/* Spotify and JioSaavn buttons positioned together on the image */}
    <div className="absolute bottom-8 flex justify-center gap-8 w-full z-20">
    {musicPlatformLinks.map((link) => (
            <button
              key={link.musicPlatform + link.url}
              className="flex items-center p-2 border border-gray-300 rounded-full text-white shadow-md hover:bg-gray-100 transition hover:text-black"
              onClick={() => link.url && window.open(link.url, '_blank')}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 mr-2">
                {link.icon ? (
                  <img
                    src={link.icon}
                    alt={`${link.musicPlatform} icon`}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                ) : null}
              </div>
              <span className={`text-sm font-medium ${link.musicPlatform ? '' : 'opacity-50'}`}>
                {link.musicPlatform || ' '}
              </span>
            </button>
          ))}
    </div>
  </Card>
</div>


          {/* Right Column */}
          
<div className="lg:col-span-7 px-4 pt-3">
  {/* About Section */}
  <motion.div
      className="relative bg-trans text-white p-6 rounded-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center transform -rotate-2"
        style={{
          backgroundImage: 'url("https://vishal-mishra.com/wp-content/uploads/2024/05/2.jpg")',
          opacity: 0.4,
        }}
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
      ></motion.div>
      <motion.div
        className="relative z-10 bg-transparent bg-opacity-30 p-1 rounded-lg flex"
        variants={sectionVariants}
      >
        <motion.div
          className="w-1/2 p-2 bg-trans rounded-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="border-b-2 border-[#ccff00] pb-4 mb-4">
            <h2 className="text-3xl font-bold text-white">About</h2>
          </div>
          <p className="text-md text-[#ccff00]">{artistPage.artistBio}</p>
        </motion.div>
        <div className="w-1/2"></div>
      </motion.div>
    </motion.div>


  {/* Music Videos Section */}
  <Card className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg mt-8 border border-black text-center ">
    <CardTitle className="p-4 text-black text-3xl font-bold">Popular Videos</CardTitle>
    <div className="border-b-2 border-black pb-4 mb-4"></div>
    <div id="videos" className="p-4 space-y-0 text-white">
      {musicVideos.map((video) => (
        <div
          key={video.videoId}
          className="flex h-12 border border-yellow-300 rounded-lg items-center bg-black shadow-md overflow-hidden cursor-pointer hover:bg-[#1E201E] hover:scale-105 transition-all"
          onClick={() => window.open(video.redirectURL, '_blank')}
        >
          {/* Image */}
          <img
            src={video.imageURL}
            alt={video.title}
            className="w-10 h-10 object-cover rounded-lg ml-5"
            
          />
          {/* Text and Edit Button */}
          <div className="flex-1 flex justify-between items-center p-4 text-[#ccff00]" style={{
        fontFamily: '"Edu AU VIC WA NT Hand", serif',
        fontWeight: 400,
        color: '#ccff00',
      }}>
            <span className="text-md font-medium">{video.title}</span>
            <div className="text-sm text-gray-400">
              {video.duration} • {video.views} views
            </div>
            <Button variant="ghost" size="icon">
              <Play className="w-5 h-5" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  </Card>

  {/* Performances Section */}
  <div id="performances" className="mt-8">
  <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8 border border-black">
    <h2 className="text-3xl font-bold text-center text-black mb-6">
      Performances
    </h2>

    {/* Carousel Wrapper */}
    <div className="relative flex items-center justify-center h-[300px] overflow-hidden">
      {/* Previous Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none z-20"
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
      <div className="relative w-full h-full flex justify-center items-center">
        {performances.map((performance, index) => {
          const offset = (index - activeIndex + performances.length) % performances.length; 

          
          let style = "";
          if (offset === 0) {
            style = "z-10 scale-120 translate-x-0";
          } else if (offset === 1) {
            style = "z-5 scale-50 translate-x-32 rotateY(-25deg) blur-sm"; 
          } else if (offset === performances.length - 1) {
            style = "z-5 scale-50 -translate-x-32 rotateY(25deg) blur-sm"; 
          } else {
            style = "z-0 scale-90 opacity-0"; 
          }

          return (
            <div
              key={performance.performanceId}
              className={`absolute transition-all duration-700 ease-in-out transform ${style}`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="bg-black p-6 rounded-lg shadow-lg border border-black w-64">
                <h3
                  className="text-xl font-bold"
                  style={{
                    fontFamily: '"Edu AU VIC WA NT Hand", serif',
                    fontWeight: 400,
                    color: "#ccff00",
                  }}
                >
                  {performance.eventTitle}
                </h3>
                <p className="mt-2 text-gray-400">
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
                    className="z-20 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition border border-white"
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
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none z-20"
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
  </div>
</div>

  {/* Songs Sale Section */}


<div id="songsSale" className="mt-8">
  <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8 border border-black">
    <h2 className="text-3xl font-bold text-center text-black mb-6">Songs for Sale</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {songSales.map((song, index) => (
        <motion.div
          key={song.songId}
          className="bg-[#ccff00] bg-opacity-90 rounded-lg shadow-lg overflow-hidden flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}  
          transition={{ duration: 0.8 }}
        >
          {/* Numbering and Animated Line */}
          <div className="relative mb-1">
            {/* Numbering Section */}
            <motion.div
              className="absolute left-0 top-0 text-5xl font-bold text-black mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5 }}
            >
              #{String(index + 1).padStart(2, "0")}
            </motion.div>
            
            {/* Expanding Line */}
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
              <p className="text-sm text-gray-600">
                {song.description}
                <br />
                Pricing: {song.priceType}
                {song.price && ` - $${song.price}`}
              </p>
            </div>
            <button
              className="mt-4 w-full px-4 py-2 text-white bg-black hover:bg-gray-800 rounded-lg" 
              style={{fontFamily: '"Edu AU VIC WA NT Hand", serif', fontWeight:400, color:'#ccff00'}}
            >
              View Songs
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>


  {/* Merchandise Section */}
  <div id="merchandise" className="p-6 bg-white bg-opacity-30 rounded-lg shadow-lg mb-8 border border-black">
    {/* Scrolling Headline */}
    <div className="overflow-hidden whitespace-nowrap text-white text-2xl font-semibold mb-6 bg-red-600">
      <span className="animate-marquee">
        🛍️ Explore Our Exclusive Merchandise Offers 🛍️
      </span>
    </div>
    <h2 className="text-2xl font-bold text-center text-black mb-6 transition-transform transform hover:scale-105" style={{fontFamily: '"Edu AU VIC WA NT Hand", serif',
  fontWeight:400, color:'#000000'}}>
      Limited Time Offers on Merchandise
    </h2>
    <div className="flex flex-col gap-6">
      {merchandise.map((merc) => (
        <div
          key={merc.merchId}
          className="bg-black bg-opacity-90 rounded-lg shadow-xl overflow-hidden transform hover:scale-102 transition-all duration-300"
        >
          {/* Product Image */}
          <div className="h-60 overflow-hidden relative">
            <img
              src={merc.imageURL}
              alt={merc.merchName}
              className="object-cover w-full h-full rounded-t-lg"
            />
            {/* Offer Badge */}
            <div className="absolute top-2 left-2 p-2 bg-red-500 text-white font-bold rounded-full transform rotate-12 flex items-center justify-center">
  <i className="fas fa-tag mr-1"></i>
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
                style={{fontFamily: '"Edu AU VIC WA NT Hand", serif',
                  fontWeight:400, color:'#ccff00'}}>
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
  <div id="support" className="flex flex-col lg:flex-row gap-4 p-4">
  {/* Messages Section */}
  <Card className="bg-trans bg-opacity-30 backdrop-blur-lg rounded-lg flex-1">
    {fanMessages && (
      <div
        className="bg-[#f4e1a1] shadow-lg rounded-lg transform scale-95 w-full lg:max-w-sm mx-auto p-4 relative shake-tilt border border-black"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/abstract-crumpled-paper-texture-background-old-crumpled-brown-paper-background-texture_631222-254.jpg")',
          backgroundSize: 'cover',
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Paper Pin to the Corner */}
        <div className="absolute top-0 right-0 bg-trans rounded-full transform rotate-45">
                <i className="fas fa-thumbtack text-3xl text-red-600"></i>
              </div>
              
              {/* Content inside the Paper */}
              <h2 className="text-2xl lg:text-3xl font-bold text-center text-black mb-4 transition-transform transform hover:scale-105">
                Fan Messages
                <i className="fas fa-comments text-green-500 mr-2"></i>
              </h2>
              
              <Card className="bg-transparent">
                <CardHeader className="bg-transparent text-black pt-3 rounded-t-lg shadow-xl">
                  <CardTitle className="text-lg lg:text-xl font-semibold mb-2 flex items-center justify-between">
                    <span>
                      <i className="fas fa-envelope text-black mr-2"></i>
                      Message Me
                    </span>
                    <Send className="w-6 h-6 text-current" />
                  </CardTitle>
                  <CardDescription className="text-sm opacity-90">
                    <p className="font-medium text-black mb-2">
                      {fanMessages.title}
                    </p>
                    <p className="text-gray-800 leading-relaxed">
                      {fanMessages.description}
                    </p>
                    <br />
                    <span className="font-semibold text-gray-800">
                      Promised Reply Time:
                    </span>
                    <span className="text-red-700 font-bold">
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

  <div id="support1" className="flex justify-center items-center p-4 flex-1">
  {supportPage && (
    <div className="p-4 max-w-2xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8 transform transition-transform border border-black">
      <h2 className="text-3xl font-bold text-center text-black mb-6">
        
        Support Me
        
      </h2>

      <div className="bg-white rounded-lg shadow-lg mb-4 p-4 hover:shadow-2xl transition-shadow duration-300 border border-black">
        <div className="bg-transparent text-black pt-3 rounded-t-lg">
          <h3 className="text-2xl font-semibold mb-2 flex items-center">
            <i className="fas fa-hand-holding-heart text-red-500 mr-2"></i>
            {supportPage.title}
          </h3>
          <p className="text-gray-700 opacity-80 mt-2">
            Show your support and help me achieve great things!
          </p>
        </div>
        <div className="mt-4">
          <button
            className="w-full py-3 bg-black text-white font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2"
            style={{
              fontFamily: '"Edu AU VIC WA NT Hand", serif',
              fontWeight: 400,
              color: '#ccff00',
            }}
          >
            <i className="fas fa-donate"></i>
            Support Now
          </button>
        </div>
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
      </div>
    </div>
  );
};

export default LandingPageView1;
