
import React from 'react';
import { useEffect, useState } from "react";
import { FaInstagram, FaTwitter ,FaRegHeart} from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const LandingPageView3 = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const username = "vishal12";
   

  useEffect(() => {
    const fetchLandingPageData = async () => {

      const response =
      {
        "artistPage": {
          "artistName": "Vishal Mishra",
          "stageTitles": "5-Star Performer | Chart-Topping Artist | Voice Artist",
          "artistBio": "Hello, my name is Vishal Mishra, a passionate musician creating soulful melodies.",
          "artistPhoto": "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_500x500.jpg",
          "gradientStart": "#BAD8B6",
          "gradientEnd": "#3A3960",
          "SongGradientStart": '#6a11cb',
          "SongGradientEnd": '#2575fc',   
          "TextColor": '#ffffff',             
          "ButtonColor": '#1c3faa',            
          "ButtonHoverColor": '#162d6a',      
        },
        "performances": [
          {
            "performanceId": "perf1",
            "eventTitle": "Live at Mumbai Arena",
            "description": "An acoustic performance for music lovers.",
            "ticketPrice": 1499,
            "durationMinutes": 120,
            "platform": "Stage",
            "performanceType": "Team",
            "Perfbackground": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2kt2kx9PpMGHDTZKghS_U9RblvAWMocDwA&s"
          },
          {
            "performanceId": "perf2",
            "eventTitle": "Melody Night",
            "description": "A night of soulful tunes.",
            "ticketPrice": 699,
            "durationMinutes": 30,
            "platform": "Party",
            "performanceType": "Solo",
            "Perfbackground": "https://vishal-mishra.com/wp-content/uploads/2024/05/2.jpg"
          },
          {
            "performanceId": "perf3",
            "eventTitle": "Symphony Session",
            "description": "A virtual symphony session with fans.",
            "ticketPrice": 499,
            "durationMinutes": 45,
            "platform": "Theater",
            "performanceType": "Solo",
            "Perfbackground": "https://vishal-mishra.com/wp-content/uploads/2024/05/4.jpg"
          }
        ],
        "merchandise": [
          {
            "merchId": "merc1",
            "merchName": "Signed TShirt + Signed Cup + Signed Vinyl",
            "merchDescription": "Limited edition signed merchandise.",
            "price": 399,
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
        {
          "videoId": "vid3",
          "title": "Rhythmic Reflections",
          "description": "An enchanting blend of rhythm and melody from my latest performance.",
          "platform": "YouTube",
          "redirectURL": "https://youtu.be/hpqvSU0Ynn0?si=S9ml-y5cHpNy3apF",
          "imageURL": "https://www.myfirstevent.com/wp-content/uploads/2023/06/vishal-mishra.jpg"
        },
        {
          "videoId": "vid4",
          "title": "Melody in Motion",
          "description": "A heartfelt rendition, capturing the essence of music.",
          "platform": "YouTube",
          "redirectURL": "https://youtu.be/CmZnYmWh5V4?si=uPVOlJxsA_EcjnQe",
          "imageURL": "https://i.ytimg.com/vi/tYlbthzV98w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAq_LVLi7egJRPwQhr0kTSX-AoyWg"
        }
      ],
        "fanMessages": {
          "title": "Message Vishal Mishra",
          "description": "Send me your thoughts or questions.",
          "promisedReplyTime": "3",
          "socialLinks": {
            "instagram": "https://instagram.com/vishalmishra",
            "twitter": "https://twitter.com/vishalmishra"
          }
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
    <div className="min-h-screen bg-gray-50" style={{
      background: `linear-gradient(to right, ${artistPage.gradientStart}, ${artistPage.gradientEnd})`
    }}>
      {/* Navbar Section */}
      <nav id="navbar" className="fixed top-0 w-full z-50">
        <Card className="rounded-none shadow-sm">
          <CardContent className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-xl">@{username}</h2>
              <Tabs>
                <TabsList className="hidden md:flex">
                  <TabsTrigger
                    value="performances"
                    onClick={() => scrollToSection('performances')}
                  >
                    Performances
                  </TabsTrigger>
                  <TabsTrigger
                    value="videos"
                    onClick={() => scrollToSection('videos')}
                  >
                    Videos
                  </TabsTrigger>
                  <TabsTrigger
                    value="songsSale"
                    onClick={() => scrollToSection('songsSale')}
                  >
                    Songs Sale
                  </TabsTrigger>
                  <TabsTrigger
                    value="merchandise"
                    onClick={() => scrollToSection('merchandise')}
                  >
                    Merchandise
                  </TabsTrigger>
                  <TabsTrigger
                    value="fanMessages"
                    onClick={() => scrollToSection('messages')}
                  >
                    Messages
                  </TabsTrigger>
                  <TabsTrigger
                    value="support"
                    onClick={() => scrollToSection('support')}
                  >
                    Support
                  </TabsTrigger>
                </TabsList>
              </Tabs>

            </div>
          </CardContent>
        </Card>
      </nav>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 pt-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div
            className="lg:col-span-4 lg:sticky lg:top-[100px] lg:h-[calc(100vh-100px)] overflow-auto"
            style={{ overflow: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Profile Section */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={profileImage || "/default-avatar.jpg"} alt="Profile" />
                    <AvatarFallback>{username}</AvatarFallback>
                  </Avatar>
                  <h2 className="text-2xl font-bold mt-4">{artistPage.artistName}</h2>
                  <Badge variant="secondary" className="mt-2">
                    {artistPage.stageTitles}
                  </Badge>
                </div>

                {/* Social Links Section */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Connect with me on:</h3>

                  <div className="flex flex-col gap-4">
                    {musicPlatformLinks.map((link) => (
                      <button
                        key={link.musicPlatform + link.url}
                        className="flex items-center p-2 border border-gray-300 rounded-full shadow-md hover:bg-gray-100 transition"
                        onClick={() => link.url && window.open(link.url, '_blank')}
                      >
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 mr-4">
                          {link.icon ? (
                            <img
                              src={link.icon}
                              alt={`${link.musicPlatform} icon`}
                              className="w-14 h-14 object-cover rounded-full"
                            />
                          ) : null}
                        </div>
                        <span className={`text-sm font-medium ${link.musicPlatform ? '' : 'opacity-50'}`}>
                          {link.musicPlatform || ' '}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-8">
            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
                <CardDescription>{artistPage.artistBio}</CardDescription>
              </CardHeader>
            </Card>


            {/* Music Videos Section */}
            <div id="videos" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Music Videos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {musicVideos.map((video) => (
                      <div
                        key={video.videoId}
                        className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg shadow-sm transition-all hover:shadow-md hover:bg-gray-200 cursor-pointer transform hover:-translate-y-1"
                        onClick={() => window.open(video.redirectURL, '_blank')}
                      >
                        {/* Video Thumbnail */}
                        <div className="w-15 h-16 flex-shrink-0">
                          <img
                            src={video.imageURL}
                            alt={video.title}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>

                        {/* Video Details */}
                        <div className="flex-grow">
                          <h3 className="font-semibold text-sm text-gray-800">{video.title}</h3>
                          <p className="text-xs text-gray-600">{video.description}</p>
                        </div>

                        {/* Watch Now Button */}
                        <Button
                          variant="ghost"
                          className="flex-shrink-0 px-4 py-2 text-sm text-blue-600 border border-blue-500 rounded-full transition-all duration-300 hover:bg-blue-600 hover:text-white"
                        >
                          Watch Now
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Scrollable Sections */}
            <ScrollArea className="">



             {/* Performances Section */}
            <div id="performances" className="mt-8">
              <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Performances</h2>

                {performances.map((perf) => (
                  <div
                    key={perf.performanceId}
                    className="relative mb-4 p-6 rounded-xl shadow-lg bg-black bg-opacity-60 text-white overflow-hidden"
                    style={{
                      backgroundImage: `url(${perf.Perfbackground})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-2">{perf.eventTitle}</h3>
                      <p className="mb-2">{perf.description}</p>
                      <p>Duration: {perf.durationMinutes} mins</p>
                      <p>Location: {perf.platform}</p>
                      <p>Price: ${perf.ticketPrice}</p>
                    </div>

                    <div className="relative z-10 mt-4">
                    <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full">
                      Book Now
                    </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>


                {/* Songs sales Section */}
                <div id="songsSale">
                  <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Songs for Sale</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {songSales.map((song) => (
                        <div
                          key={song.songId}
                          className="rounded-lg shadow-lg overflow-hidden flex flex-col"
                        >
                          {/* Image Section */}
                          <div className="h-48">
                            <img
                              src={song.imageURL}
                              alt={song.title}
                              className="object-cover w-full h-full"
                            />
                          </div>

                          {/* Content Section */}
                          <div
                            className="p-4 flex-grow flex flex-col justify-between"
                            style={{
                              background: `linear-gradient(to bottom, ${artistPage.SongGradientStart}, ${artistPage.SongGradientEnd})`,
                              color: artistPage.TextColor,
                            }}
                          >
                            <div>
                              <h3 className="text-xl font-bold mb-2">{song.title}</h3>
                              <p className="text-sm">
                                {song.description}
                                <br />
                                Pricing: {song.priceType}
                                {song.price && ` - $${song.price}`}
                              </p>
                            </div>
                            <button
                              className="mt-4 w-full px-4 py-2 rounded-lg transition duration-300"
                              style={{
                                backgroundColor: artistPage.ButtonColor,
                                color: artistPage.ButtonTextColor,
                              }}
                              onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = artistPage.ButtonHoverColor;
                                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
                              }}
                              onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = artistPage.ButtonColor;
                                e.currentTarget.style.boxShadow = 'none';
                              }}
                            >
                              View Songs
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>



{/* Merchandise Section */}
<div id="merchandise">
  <div className="p-6 max-w-6xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Merchandise</h2>

    <div className="space-y-6">
      {merchandise.map((merc) => (
        <div
          key={merc.merchId}
          className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden flex hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out"
        >
          {/* Image Section */}
          <div className="w-4/5">
            <img
              src={merc.imageURL}
              alt={merc.merchName}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 w-4/5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{merc.merchName}</h3>
              <p className="text-gray-600 text-base mb-3">
                {merc.merchDescription}
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Price:</strong> ${merc.price} <br />
                <strong>Type:</strong> {merc.merchType}
              </p>
            </div>
            <button
              className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View Bundle
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



              {/* Messages Section */}
              <div id="messages">
                {fanMessages && (
                  <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Fan Messages</h2>

                    <Card className="mb-4">
                      <CardHeader>
                        <CardTitle>Message Me</CardTitle>
                        <CardDescription>
                          {fanMessages.title}
                          <br />
                          {fanMessages.description}
                          <br />
                          Promised Reply Time: {fanMessages.promisedReplyTime} hours
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Button>Send Message</Button>

                          {/* Connect with me section and social links */}
                          <div className="flex items-center gap-4">
                            {fanMessages.socialLinks && (
                              <>
                                <p className="text-grey font-medium">Connect with me:</p>
                                <a 
                                  href={fanMessages.socialLinks.instagram} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="hover:scale-110 transition-transform"
                                >
                                  <FaInstagram size={30} color="#E4405F" />
                                </a>
                                <a 
                                  href={fanMessages.socialLinks.twitter} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="hover:scale-110 transition-transform"
                                >
                                  <FaTwitter size={30} color="#1DA1F2" />
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
              
              {/* Support Section */}
              <div id="support">
              {supportPage && (
                <div className="p-6 max-w-3xl mx-auto bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Support Me</h2>

                  <Card className="mb-4">
                    <CardHeader>
                      <CardTitle className="text-2xl font-semibold text-gray-900">{supportPage.title}</CardTitle>
                      <CardDescription className="text-gray-700 mt-2">
                        Show your support and help me achieve great things!
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-4">
                      <Button className="px-5 py-2 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition duration-200">
                        Support
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

              
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageView3;