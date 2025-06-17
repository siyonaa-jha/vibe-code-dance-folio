
import { User, Code, Music, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
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
            Hey, I'm Your Portfolio Creator
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
              <CardDescription>Beginner vibe but growing every day</CardDescription>
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
