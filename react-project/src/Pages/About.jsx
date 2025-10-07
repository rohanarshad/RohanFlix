export const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6 py-12">
      {/* Header */}
      <h1 className="text-5xl font-bold mb-8 text-center">About RohanFlix</h1>

      {/* Mission Section */}
      <div className="max-w-3xl text-center space-y-6">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-gray-300 text-lg">
          At RohanFlix, our mission is simple: to bring the magic of movies to
          everyone, everywhere. We are dedicated to providing a seamless
          experience for discovering, exploring, and enjoying films of all
          genres.
        </p>
      </div>

      {/* Vision Section */}
      <div className="max-w-3xl text-center space-y-6 mt-12">
        <h2 className="text-2xl font-semibold">Our Vision</h2>
        <p className="text-gray-300 text-lg">
          We envision a world where every movie lover can find their perfect
          film easily. By curating the best content and presenting it in a
          clean, user-friendly way, we aim to make movie exploration effortless
          and enjoyable.
        </p>
      </div>

      {/* Values Section */}
      <div className="max-w-3xl text-center space-y-6 mt-12">
        <h2 className="text-2xl font-semibold">Our Values</h2>
        <p className="text-gray-300 text-lg">
          Creativity, quality, and accessibility drive everything we do. We
          believe in celebrating stories that inspire, entertain, and connect
          people around the world.
        </p>
      </div>
    </div>
  );
};
