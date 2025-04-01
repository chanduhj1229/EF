
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MessageSquare, Users } from "lucide-react";
import { Link } from "react-router-dom";
import CtaSection from "@/components/CtaSection";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Eventify</h1>
            <p className="text-xl text-gray-600 mb-8">
              We create memorable event experiences with dedication, creativity, and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Founded in 2015, Eventify began with a simple mission: to transform event
                planning from a stressful experience into a seamless journey. Our founders,
                with over 20 years of combined experience in the events industry, saw a need
                for an end-to-end event management service that truly understood clients' visions.
              </p>
              <p className="text-gray-700 mb-6">
                Since then, we've grown from a small team of three to a full-service event
                management company with specialists in corporate functions, social gatherings,
                weddings, and large-scale conferences. We've successfully executed over 500
                events across the country, earning a reputation for reliability, creativity,
                and attention to detail.
              </p>
              <p className="text-gray-700">
                Today, we continue to innovate in the events space, bringing fresh ideas
                and seamless execution to every project we undertake.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
                alt="Event planning team"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-8 -left-8 hidden md:block">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <p className="font-bold text-3xl text-eventify-purple">500+</p>
                  <p className="text-gray-600">Successful Events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-eventify-lightPurple p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-eventify-purple" />
              </div>
              <h3 className="font-bold text-xl mb-3">Client-Centric</h3>
              <p className="text-gray-600">
                We put our clients at the center of everything we do, listening carefully to
                understand and execute their vision.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-eventify-lightPurple p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-eventify-purple" />
              </div>
              <h3 className="font-bold text-xl mb-3">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises, meeting deadlines and ensuring every detail is
                handled with care and precision.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-eventify-lightPurple p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-eventify-purple" />
              </div>
              <h3 className="font-bold text-xl mb-3">Adaptability</h3>
              <p className="text-gray-600">
                We embrace flexibility and creative problem-solving to overcome challenges
                and deliver exceptional events.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-eventify-lightPurple p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-eventify-purple" />
              </div>
              <h3 className="font-bold text-xl mb-3">Transparency</h3>
              <p className="text-gray-600">
                We maintain open communication throughout the planning process, ensuring
                clarity and trust in every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals behind Eventify's success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=400&q=80"
                alt="Team Member"
                className="rounded-full w-40 h-40 object-cover mx-auto mb-4"
              />
              <h3 className="font-bold text-xl mb-1">Jennifer Lee</h3>
              <p className="text-eventify-purple mb-3">Chief Executive Officer</p>
              <p className="text-gray-600">
                With over 15 years in the events industry, Jennifer brings vision and leadership to every project.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80"
                alt="Team Member"
                className="rounded-full w-40 h-40 object-cover mx-auto mb-4"
              />
              <h3 className="font-bold text-xl mb-1">Michael Rodriguez</h3>
              <p className="text-eventify-purple mb-3">Creative Director</p>
              <p className="text-gray-600">
                Michael's innovative approach and design expertise help create unique and memorable events.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80"
                alt="Team Member"
                className="rounded-full w-40 h-40 object-cover mx-auto mb-4"
              />
              <h3 className="font-bold text-xl mb-1">Sarah Thompson</h3>
              <p className="text-eventify-purple mb-3">Client Relations Manager</p>
              <p className="text-gray-600">
                Sarah ensures client satisfaction through attentive communication and personalized service.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button className="bg-eventify-purple hover:bg-eventify-darkPurple">
                Get to Know Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </Layout>
  );
};

export default About;
