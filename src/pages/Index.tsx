import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { User, Code, Music, Zap, Tv, Piano, Sparkles } from "lucide-react";
import CartwheelDodge from "@/components/CartwheelDodge";

const storyMemories = [
  {
    title: "Late‑Night Rooftop Dance 💃",
    text: "Danced barefoot under moonlight as Ginny & Georgia played softly from my phone. The city lights were my audience.",
    img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Cozy Drama Marathon 🎬",
    text: "Wrapped in a pink blanket fort, tissues at hand, mid‑episode 7 trauma with Ginny and Georgia — total emotional collapse.",
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Snack‑Baking Cameo 🍪",
    text: "Paused a scene to bake cookies mid‑show. The aroma filled the room just as drama heated up—sabotage by snack!",
    img: "https://images.unsplash.com/photo-1511688878358-8e36a9f5f1cd?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Rainy Scene Journaling ☔",
    text: "Built a tiny journal on my lap while rain tapped on the window—and Georgia revealed a secret in the next scene.",
    img: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Moonlight Piano Interlude 🎹",
    text: "Played random piano chords to echo the show's mood. Ginny's tears became my melody in that spontaneous jam.",
    img: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=400&q=80"
  },
];

function PolaroidCarousel() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % storyMemories.length);
  const prev = () => setIdx((i) => (i - 1 + storyMemories.length) % storyMemories.length);

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <h2 className="text-3xl font-bold text-center mb-8">Story Time Scrapbook 📸</h2>
      <div className="relative max-w-md mx-auto">
        <div
          className="shadow-xl rounded-lg bg-white p-4 transform hover:scale-105 transition duration-300"
          style={{
            border: '12px solid white',
            borderBottom: '48px solid white',
          }}
        >
          <img
            src={storyMemories[idx].img}
            alt={storyMemories[idx].title}
            className="w-full h-64 object-cover mb-2 rounded"
          />
          <h3 className="text-lg font-semibold">{storyMemories[idx].title}</h3>
          <p className="text-gray-700 mt-1">{storyMemories[idx].text}</p>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={prev}
            className="px-4 py-2 bg-white rounded shadow hover:bg-gray-100 text-sm font-medium"
          >
            ← Prev
          </button>
          <button
            onClick={next}
            className="px-4 py-2 bg-white rounded shadow hover:bg-gray-100 text-sm font-medium"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}


const Index = () => {
  const jokes = [
  "Did you know if you clean a vacuum cleaner… you *become* a vacuum cleaner? 🤯",
  "If Mondays had a face, I'd accidentally hit it with a cartwheel. 😒🤸‍♀️",
  "I asked my mirror who the drama queen was… and it showed me twice. 👑🪞",
  "I danced so hard, my shadow filed a complaint. 💃🌑",
  "Tried baking cookies at 2 AM… now the kitchen looks like a K-drama fight scene. 🍪🔥",
  "I once whispered to my diary… and it spilled the tea on page 42. 📓🫖",
  "Why did my pillow sue me? Emotional damage from late-night sobs. 😭🛏️",
  "Practiced a cartwheel in the hallway… now mom's flower vase is history. 🫣🌀",
  "I took a 5-minute nap… in 2007. Still recovering. 😴⏳",
  "The only thing I run from is responsibility… and maybe horror movie dolls. 🏃‍♀️👻"
];

  const [currentJoke, setCurrentJoke] = useState(() => {
    return jokes[Math.floor(Math.random() * jokes.length)];
  });
  
  const handleNewJoke = () => {
    let newJoke;
    do {
      newJoke = jokes[Math.floor(Math.random() * jokes.length)];
    } while (newJoke === currentJoke && jokes.length > 1);
    setCurrentJoke(newJoke);
  };
  
  const vacationTimeline = [
    { time: "9:00 AM", activity: "😴 Sleep in like royalty — no alarms, no stress." },
    { time: "10:00 AM", activity: "☕️ Slow breakfast with lo-fi and journaling." },
    { time: "11:00 AM", activity: "🧘‍♀️ Stretch or freestyle dance warm-up on the balcony." },
    { time: "12:00 PM", activity: "🎬 K-drama binge session begins (tissues nearby)." },
    { time: "2:00 PM", activity: "🍱 Comfort food lunch — extra cheese encouraged." },
    { time: "3:30 PM", activity: "💃 Freestyle choreography session in room mirror." },
    { time: "5:00 PM", activity: "🎹 Piano time — random melodies, full of feeling." },
    { time: "6:30 PM", activity: "🚿 Refresh and skincare, outfit switch just for fun." },
    { time: "7:30 PM", activity: "🍪 Bake cookies while lip-syncing to BTS." },
    { time: "9:00 PM", activity: "🌆 Evening walks with K-pop and dreams in my ears." },
    { time: "10:30 PM", activity: "📓 Late-night journaling + future stage dreams." },
    { time: "12:00 AM", activity: "🌌 Stargazing and soft music until sleep takes over." }
  ];
  
  const [currentStep, setCurrentStep] = useState(0);
  
  const handleNextStep = () => {
    if (currentStep < vacationTimeline.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  
  const funFacts = [
    "Siyonaa can solve a Rubik's cube in under 2 minutes!",
    "She once performed a dance routine to 15 different K-drama OSTs in one show",
    "Siyonaa choreographs her own dances, often inspired by her favorite K-dramas",
    "She can do a perfect cartwheel on both sides (a rare gymnastics skill!)",
    "Siyonaa has watched over 50 K-dramas and remembers every plot twist",
    "She composed her first piano piece at age 11 inspired by a rainy day",
    "Siyonaa can type 65 words per minute while humming her favorite songs",
    "She once stayed up all night perfecting a dance performance and nailed it on stage",
    "Siyonaa's favorite late-night snack is homemade chocolate chip cookies",
    "She dreams in dance choreography and dramatic OST lyrics",
    "Siyonaa can name all BTS members and their birth years in under 10 seconds",
    "She practices piano scales while daydreaming about her next big stage performance"
  ];
  
  
    const [currentFact, setCurrentFact] = useState(() => {
      return funFacts[Math.floor(Math.random() * funFacts.length)];
    });
  
    const handleGenerateFact = () => {
      let newFact;
      do {
        newFact = funFacts[Math.floor(Math.random() * funFacts.length)];
      } while (newFact === currentFact && funFacts.length > 1);
      setCurrentFact(newFact);
    };

  const handleStartConversation = () => {
    window.open('mailto:your-email@example.com?subject=Let\'s start a conversation!', '_blank');
  };

  const handleGetInTouch = () => {
    window.open('mailto:your-email@example.com?subject=Getting in touch', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-8 shadow-lg">
            <img 
              src="/lovable-uploads/cd5b68d1-490c-40cb-98f2-23fbfb6ba51e.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hey, I'm a Creator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Beginner vibe coder • Professional dancer • Average gymnast • Fun to be around human being
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 transition-colors"
              onClick={handleStartConversation}
            >
              Start a Conversation
            </Button>
            <Button 
              variant="outline" 
              className="border-purple-300 text-purple-600 hover:bg-purple-50"
              onClick={handleGetInTouch}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Coding Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-blue-500">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-blue-600">Coding</CardTitle>
              <CardDescription>Beginner but growing every day</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                Learning the ropes of web development with curiosity and determination. 
                Every bug is a lesson, every feature is progress.
              </p>
            </CardContent>
          </Card>

          {/* Dance Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-purple-500">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <Music className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-purple-600">Dance</CardTitle>
              <CardDescription>Professional level passion</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                Movement is my language. From stage performances to studio sessions, 
                dance brings rhythm to everything I do.
              </p>
            </CardContent>
          </Card>

          {/* Gymnastics Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-green-500">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-green-600">Gymnastics</CardTitle>
              <CardDescription>Average but enthusiastic</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                Not winning medals, but having a blast. Balance, strength, and the 
                occasional successful routine keep me coming back.
              </p>
            </CardContent>
          </Card>
          {/* Student Life */}
    <Card className="border-l-4 border-l-orange-500 hover:shadow-md transition">
      <CardHeader className="text-center">
        <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
          <User className="w-8 h-8 text-orange-600" />
        </div>
        <CardTitle className="text-orange-600">Student Life</CardTitle>
        <CardDescription>Ryan International School Bangalore</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-center">
          Currently pursuing my education at Ryan International School in Bangalore, balancing academics with my creative pursuits.
        </p>
      </CardContent>
    </Card>

    {/* K-Drama Enthusiast */}
    <Card className="border-l-4 border-l-pink-500 hover:shadow-md transition">
      <CardHeader className="text-center">
        <div className="w-16 h-16 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-4">
          <Tv className="w-8 h-8 text-pink-600" />
        </div>
        <CardTitle className="text-pink-600">K-Drama Enthusiast</CardTitle>
        <CardDescription>Always ready for the next binge session</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-center">
          I enjoy watching lots of K-dramas and getting lost in their amazing storylines, characters, and emotional rollercoasters.
        </p>
      </CardContent>
    </Card>

    {/* Piano Player */}
    <Card className="border-l-4 border-l-yellow-500 hover:shadow-md transition">
      <CardHeader className="text-center">
        <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4">
          <Piano className="w-8 h-8 text-yellow-600" />
        </div>
        <CardTitle className="text-yellow-600">Piano Player</CardTitle>
        <CardDescription>Creating melodies at home</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-center">
          I play piano at home once in a while, enjoying the peaceful moments and the joy of creating music in my free time.
        </p>
      </CardContent>
    </Card>
        </div>
      </section>

      {/* Polaroid Story Time Carousel */}
      <PolaroidCarousel />
{/* Jokes Section */}
<section className="container mx-auto px-4 py-16">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Silly Siyonaa Says 😂</h2>
    <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mb-4">
          <Sparkles className="w-8 h-8 text-yellow-600" />
        </div>
        <CardTitle className="text-yellow-600">Two-Liner Giggles</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="min-h-[60px] flex items-center justify-center">
          <p className="text-lg text-gray-700 font-medium leading-relaxed animate-fade-in">
            {currentJoke}
          </p>
        </div>
        <Button 
          onClick={handleNewJoke}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-2 transform hover:scale-105 transition-all duration-200"
        >
          😂 Tell Me Another!
        </Button>
      </CardContent>
    </Card>
  </div>
</section>

      {/* A Day in Siyonaa's Shoes – Vacation Edition (with navigation) */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">A Day in Siyonaa's Shoes 👟</h2>
          <p className="text-lg text-gray-600">
            During vacations, my timeline looks like this — cozy, creative, and full of good vibes.
          </p>

          <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-pink-600" />
              </div>
              <CardTitle className="text-pink-600">Vacation Timeline</CardTitle>
              <CardDescription>One moment at a time 💫</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="min-h-[100px] flex flex-col items-center justify-center">
                <time className="text-sm text-pink-500 font-semibold">{vacationTimeline[currentStep].time}</time>
                <p className="text-lg text-gray-700 font-medium leading-relaxed mt-2">
                  {vacationTimeline[currentStep].activity}
                </p>
              </div>
              <div className="flex justify-between gap-4">
                <Button
                  variant="outline"
                  className="border-pink-300 text-pink-600 hover:bg-pink-50 w-full"
                  onClick={handlePrevStep}
                  disabled={currentStep === 0}
                >
                  ← Previous
                </Button>
                <Button
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white w-full"
                  onClick={handleNextStep}
                  disabled={currentStep === vacationTimeline.length - 1}
                >
                  Next →
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cartwheel Dodge Game */}
      <CartwheelDodge />

      {/* Random Fun Facts Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Random Fun Facts</h2>
          <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-indigo-600" />
              </div>
              <CardTitle className="text-indigo-600">Did You Know?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="min-h-[60px] flex items-center justify-center">
                <p className="text-lg text-gray-700 font-medium leading-relaxed animate-fade-in">
                  {currentFact}
                </p>
              </div>
              <Button 
                onClick={handleGenerateFact}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 transform hover:scale-105 transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Another Fun Fact!
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white/70 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">The Human Behind It All</h2>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm the kind of person who finds joy in the journey, whether that's debugging code at 2 AM, 
                nailing a new dance routine, or attempting (and sometimes succeeding at) a gymnastics move. 
                I believe in authenticity over perfection, progress over performance, and that the best 
                conversations happen when people are genuinely themselves.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Always Learning
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Creative Spirit
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                  Good Vibes
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Let's Connect</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you want to talk code, swap dance moves, or just have a good conversation, 
            I'm always up for meeting new people.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            onClick={handleStartConversation}
          >
            Start a Conversation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
