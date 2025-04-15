import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function BlogPost() {
  const publishDate = "August 27, 2024";

  // Related articles
  const relatedArticles = [
    {
      title:
        "Whistler Snow Report: Record Snowfall Marks the Start of the 2024/2025 Ski Season",
      slug: "whistler-snow-report-record-snowfall-marks-the-start-of-the-2024-2025-ski-season",
      category: "Whistler Snow/Weather Report",
    },
    {
      title:
        "Luxury Whistler Vacation Redefined: How AceHost Whistler Caters to the 1% in Canada&apos;s Ultimate Playground",
      slug: "luxury-whistler-vacation-redefined-how-acehost-whistler-caters-to-the-1-in-canadas-ultimate-playground",
      category: "VIP Concierge | Luxury Vacation",
    },
    {
      title: "Find Your Dream Long-Term Luxury Rental in Whistler with AceHost",
      slug: "find-your-dream-long-term-luxury-rental-in-whistler-with-acehost",
      category: "Long-term, Property",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Top 5 Luxury Vacation Rental Homes/airbnbs in Whistler Canada |
          AceHost
        </title>
        <meta
          name="description"
          content="Discover the top 5 luxury rental homes in Whistler that promise an extraordinary vacation experience. Handpicked by AceHost for an unforgettable Whistler getaway."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Blog Header */}
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Top 5 Luxury Vacation Rental Homes/airbnbs in Whistler Canada
              </h1>
              <div className="flex items-center text-sm text-gray-600 mb-8">
                <span className="mr-4">Published: {publishDate}</span>
                <span className="mr-4">|</span>
                <span>13 min read</span>
              </div>
              <div className="relative w-full aspect-[16/9] mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/photos/post/whistlers-dream-rental-homes/hero.jpg"
                  alt="Luxury vacation rental homes in Whistler"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-2">Summary</h2>
                <p className="text-gray-700">
                  In this blog post, we unveil the top 5 luxury rental
                  homes/airbnb&apos;s in Whistler that promise an extraordinary
                  vacation experience. Immerse yourself in the opulence,
                  comfort, and stunning views offered by these magnificent
                  properties, handpicked by AceHost.ca for an unforgettable
                  Whistler getaway.
                </p>
              </div>

              <p className="text-xl leading-relaxed">
                Whistler is well-known for its breathtaking landscapes,
                world-class skiing, and vibrant culture. To truly experience the
                best of this iconic destination, staying in a luxurious vacation
                rental home is essential. With the help of AceHost Whistler,
                we&apos;ve curated a list of the top 5 luxury rental homes that
                combine elegance, comfort, and exceptional amenities, ensuring
                an unforgettable dream vacation in Whistler. Whether you are
                looking for a luxury Christmas rental property or a new years
                luxury home, or a ski in ski out luxury vacation, AceHost has
                you covered.
              </p>

              <p className="font-medium text-xl mt-6 mb-8">
                Introducing AceHost Whistler&apos;s top 5 luxury properties in
                Whistler, where luxury and convenience meet for an unforgettable
                vacation experience:
              </p>

              {/* Property 1 */}
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                1) Slope Side Chalet | Kadenwood
              </h2>

              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <p className="font-semibold">
                  Price per night: $2,000-$5,500. Christmas & New Years $8,500+
                </p>
                <p className="mt-4">
                  5025+ SQ FT | Ski-in/Ski-out access | Sleeps 16 | 7 Bedrooms |
                  12 Beds | 8 Baths | Hot Tub | Gym | Steam Shower
                </p>
              </div>

              <p>
                Introducing AceHost&apos;s Slope Side Chalet in Kadenwood, their
                top property featuring luxurious amenities and a convenient
                ski-in/ski-out access. This cozy home boasts a generous 5025+ sq
                ft space with 7 bedrooms, 12 beds, and 8 baths, perfect for
                accommodating groups of up to 16 people. Relax in the hot tub,
                enjoy the gym facilities, or indulge in a steam shower after a
                long day on the slopes.
              </p>

              <p className="text-blue-600 font-medium mt-2 mb-6">Airbnb Link</p>

              <div className="relative aspect-[16/9] my-10 rounded-lg overflow-hidden">
                <Image
                  src="/photos/post/whistlers-dream-rental-homes/1.jpg"
                  alt="Slope Side Chalet in Kadenwood"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
                  <p className="text-sm font-medium">SlopeSide Chalet</p>
                </div>
              </div>

              {/* Property 2 */}
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                2) Two Cedars | Kadenwood | Private Butler & cleaning every
                other day included
              </h2>

              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <p className="font-semibold">
                  Price per night: $7,000-$10,000. Christmas & New Years
                  $20,000+
                </p>
                <p className="mt-4">
                  10,000+ SQ FT | Ski-in/Ski-out access | Sleeps 17 | 7 Bedrooms
                  | 12 Beds | 8.5 Baths | Hot Tub | Infrared Sauna | Gym | Movie
                  theatre | Private butler included
                </p>
              </div>

              <p>
                Two Cedars, an award winning luxurious property offers
                ski-in/ski-out, boasting over 10,000 square feet of living
                space. With 7 bedrooms and 12 beds, it can comfortably
                accommodate up to 17 guests. Indulge in relaxation in the hot
                tub and infrared sauna, and maintain your fitness routine in the
                state-of-the-art gym. When it&apos;s time to unwind, enjoy a
                private movie theatre. The exclusive residence-only gondola
                ensures easy access to the slopes, while a dedicated butler
                enhances your stay with personalized service.
              </p>

              <p className="text-blue-600 font-medium mt-2 mb-6">Airbnb Link</p>

              <div className="relative aspect-[16/9] my-10 rounded-lg overflow-hidden">
                <Image
                  src="/photos/post/whistlers-dream-rental-homes/2.jpg"
                  alt="Two Cedars in Kadenwood"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
                  <p className="text-sm font-medium">Two Cedars | Kadenwood</p>
                </div>
              </div>

              {/* Property 3 */}
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                3) Altitude Retreat | Kadenwood | Private Butler included
              </h2>

              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <p className="font-semibold">
                  Price per night: $6,500-$10,000. Christmas & New Years
                  $21,000+
                </p>
                <p className="mt-4">
                  10,000+ SQ FT | Ski-in/Ski-out access | Sleeps 18 | 7 Bedrooms
                  | 9 Beds | 5.5 Baths | Hot Tub | Gym | Private butler included
                </p>
              </div>

              <p>
                Altitude Retreat, also located in the prestigious Kadenwood
                neighbourhood. Spanning over 10,000 square feet, this property
                features 7 bedrooms and 9 beds, accommodating up to 18 guests.
                Immerse yourself in the serenity of the surrounding mountains as
                you relax in the hot tub with mountain views. Stay in shape with
                the state-of-the-art gym equipment. The exclusive Kadenwood
                gondola provides unrivalled access to the world-class ski
                slopes. A complimentary butler is at your service to make your
                stay truly extraordinary.
              </p>

              <p className="text-blue-600 font-medium mt-2 mb-6">Airbnb Link</p>

              <div className="relative aspect-[16/9] my-10 rounded-lg overflow-hidden">
                <Image
                  src="/photos/post/whistlers-dream-rental-homes/3.jpg"
                  alt="Altitude Retreat in Kadenwood"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
                  <p className="text-sm font-medium">
                    Altitude Retreat | Kadenwood
                  </p>
                </div>
              </div>

              {/* Property 4 */}
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                4) Chalet La Forja | Kadenwood | Private Butler & cleaning every
                other day included
              </h2>

              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <p className="font-semibold">
                  Price per night: $7,000-$11,000. Christmas & New Years
                  $22,000+
                </p>
                <p className="mt-4">
                  10,000+ SQ FT | Ski-in/Ski-out access | Sleeps 12+4 | 8
                  Bedrooms | 14 Beds | 8 Bathrooms | Hot Tub | Pool | Gym |
                  Private butler included + Cleaning every other day
                </p>
              </div>

              <p>
                This stunning property is renowned among the locals as one of
                the most prestigious luxury rentals in all of Whistler. Boasting
                over 10,000 square feet of space, this chalet is perfect for 1
                or 2 families seeking their own bedrooms, with the option to
                accommodate even more guests if needed.
              </p>

              <p className="mt-4">
                To make your stay truly exceptional, we offer a complimentary
                butler service, dedicated to ensuring your every need is met and
                that your stay is nothing short of five-star.
              </p>

              <p className="mt-4">
                Inside the chalet, you&apos;ll find a gourmet chef&apos;s
                kitchen with a butler&apos;s pantry, two private offices,
                state-of-the-art electronics with built-in Sonos speaker systems
                in every room, a gym, a hot tub, a heated pool, a sauna, and
                even a private gondola. Plus, with ski-in/ski-out access, you
                can easily enjoy the slopes right from your front door. This
                unparalleled amenity allows you to make the most of your time on
                the slopes, ensuring a seamless and exhilarating skiing
                experience.
              </p>

              <p className="text-blue-600 font-medium mt-2 mb-6">Airbnb Link</p>

              <div className="relative aspect-[16/9] my-10 rounded-lg overflow-hidden">
                <Image
                  src="/photos/post/whistlers-dream-rental-homes/4.jpg"
                  alt="Chalet La Forja in Kadenwood"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
                  <p className="text-sm font-medium">
                    Chalet La Forja | Kadenwood
                  </p>
                </div>
              </div>

              {/* Property 5 */}
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                5) Falcon | Blueberry
              </h2>

              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <p className="font-semibold">Price per night: $1,000-$3,200</p>
                <p className="mt-4">
                  3000+ SQ FT | Sleeps 15 | 7 bedrooms | 13 beds | 3.5 baths |
                  Hot tub | BBQ
                </p>
              </div>

              <p>
                Located in the Blueberry Hill neighborhood of Whistler. It
                offers beautiful views of the mountain and is suitable for one
                or two families, accommodating up to 15 guests. The chalet is a
                25-minute walk to the village through scenic trails, or guests
                can take a local bus that stops right outside the front door
                every 15 minutes.
              </p>

              <p className="mt-4">
                Inside the chalet, guests will find a heated slate entrance with
                a unique West Coast native hand-carved front door. There are 7
                spacious bedrooms with 8 stylish beds and three and a half
                well-appointed bathrooms. The living room features a cozy
                fireplace, perfect for relaxing after a day of outdoor
                activities in Whistler.
              </p>

              <p className="mt-4">
                For outdoor enjoyment, the chalet offers a spacious deck with an
                outdoor dining area and a barbecue. There is also a hot tub for
                guests to unwind in. The driveway can accommodate up to four
                vehicles.
              </p>

              <p className="mt-4">
                Overall, this chalet provides the perfect spaces for a
                comfortable and memorable stay in Whistler.
              </p>

              <p className="text-blue-600 font-medium mt-2 mb-6">Airbnb Link</p>

              <div className="relative aspect-[16/9] my-10 rounded-lg overflow-hidden">
                <Image
                  src="/photos/post/whistlers-dream-rental-homes/5.jpg"
                  alt="Falcon in Blueberry"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
                  <p className="text-sm font-medium">Falcon | Blueberry</p>
                </div>
              </div>

              {/* Property 6 */}
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                6) Heron Views | Whistler Village
              </h2>

              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <p className="font-semibold">Price per night: $1,000-$3,200</p>
                <p className="mt-4">
                  4000+ SQ FT | Sleeps 11 | 5 bedrooms | 6 beds | 5.5 baths |
                  Hot tub | BBQ
                </p>
              </div>

              <p>
                Welcome to Heron Views, a beautiful traditional log chalet in
                the prestigious Blueberry neighborhood. This spectacular
                property offers breathtaking views of the Whistler Golf Course,
                Blackcomb, and Whistler Mountain. Spanning 7800 sq ft, this
                spacious retreat is known for its location and proximity to
                Whistler Village.
              </p>

              <p className="mt-4">
                Just a 3–4 minute drive to the village and slopes, or a
                15-minute walk through trails, with a local bus stop steps away.
                Enjoy AC during summer, a rare find in Whistler.
              </p>

              <p className="mt-4">
                Book your stay at this enchanting log chalet and experience the
                perfect blend of rustic charm and modern luxury in the heart of
                Blueberry Hill. Enjoy sweeping views, easy access to the Valley
                Trail and Whistler Village, and an unforgettable mountain
                retreat.
              </p>

              <p className="text-blue-600 font-medium mt-2 mb-6">Airbnb Link</p>

              <div className="relative aspect-[16/9] my-10 rounded-lg overflow-hidden">
                <Image
                  src="/photos/post/whistlers-dream-rental-homes/6.jpg"
                  alt="Heron Views in Whistler Village"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
                  <p className="text-sm font-medium">Heron Views</p>
                </div>
              </div>

              {/* Smaller Luxury Condos/Townhomes */}
              <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                Luxury Airbnb Condos/town-homes: in Whistler for smaller groups
                with a lower budget, yet looking for a luxurious experience.
              </h2>

              {/* Condo 1 */}
              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                1) Whistler Village Luxury 2 Bedroom | Ski-in/Ski-out
              </h3>

              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <p className="font-semibold">Price per night: $450-$1,200</p>
              </div>

              <p>
                This property is conveniently located in the heart of Whistler
                Village, just a short walk from the ski hill! It&apos;s perfect
                for families visiting Whistler, with 2 bedrooms and 2 bathrooms.
                The layout is spacious and offers views of Olympic Plaza and
                Blackcomb Mountain.
              </p>

              <p className="mt-4">
                The master bedroom has a queen bed, the second bedroom has 2
                single beds and a queen sofa bed. The kitchen is fully equipped
                and there is a washing machine and dryer in the suite. The
                complex also has a dip pool and hot tub. The property has
                recently been renovated and has all the comforts of home. Guests
                have access to the pool, hot tub, bike storage, ski/board
                storage, and one reserved parking spot. There are multiple
                entrances/exits and the stairs lead directly to the village. Our
                bedside table alarm clocks have USB ports, as do the backs of
                the sofa tables and under the island/bar. Please sign our guest
                book and if you have a bottle of wine with a cork, write your
                country on it and place it in the wine rack.
              </p>

              <p className="text-blue-600 font-medium mt-2 mb-6">Airbnb Link</p>

              <div className="relative aspect-[16/9] my-10 rounded-lg overflow-hidden">
                <Image
                  src="/photos/post/whistlers-dream-rental-homes/7.jpg"
                  alt="Whistler Village Luxury 2 Bedroom Condo"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
                  <p className="text-sm font-medium">
                    Whistler Village Luxury 2 Bedroom | Ski-in/Ski-out
                  </p>
                </div>
              </div>

              {/* Condo 2 */}
              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                2) Luxe 2 Bedroom The Aspens | Ski-in/Ski-out Upper Whistler
                Village
              </h3>

              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <p className="font-semibold">Price per night: $300-$850+</p>
              </div>

              <p>
                Ultimate ski-in, ski-out in Aspens. Ground-level unit steps from
                hot tub/pool, Blackcomb Mountain, and ski lifts. Main & Upper
                Whistler Village within walking distance. Nearby biking trails,
                2 golf courses, and Lost Lake make this spot perfect year-round!
              </p>

              <p className="mt-4">
                This exclusive unit offers ultimate convenience, making it the
                closest in the building to the hot tub/pool and the ski slopes.
              </p>

              <p className="mt-4">
                With three inviting hot tubs right on the ski mountain, creating
                the perfect ambiance for your Whistler retreat
              </p>

              <p className="text-blue-600 font-medium mt-2 mb-6">Airbnb Link</p>

              <div className="relative aspect-[16/9] my-10 rounded-lg overflow-hidden">
                <Image
                  src="/photos/post/whistlers-dream-rental-homes/8.jpg"
                  alt="The Aspens Luxury 2 Bedroom Condo"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
                  <p className="text-sm font-medium">
                    The Aspens | Luxe 2 Bed on Slopes
                  </p>
                </div>
              </div>

              {/* Condo 3 */}
              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                3) Luxe 2 Bedroom Le Chamois | Ski-in/Ski-out Upper Whistler
                Village
              </h3>

              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <p className="font-semibold">Price per night: $300-$700</p>
              </div>

              <p>
                Welcome to this modern apartment in the Le Chamois hotel,
                situated in the heart of Upper Village, across the street from
                Blackcomb Gondola. This cozy getaway is perfect for skiing and
                offers 1.5 beds and 2 baths. The kitchen is equipped with a
                stove top hob, fridge, air fryer, and microwave.
              </p>

              <p className="mt-4">
                The master bedroom features a stylish queen bed, ensuite
                bathroom with a spacious walk-in shower, a brand new Toto
                Japanese toilet, and faucets in both bathrooms. Additionally,
                the master bedroom includes a bright office desk and a large
                smart TV. The living room has a Murphy double bed that can be
                conveniently stored away when not in use. The second bathroom,
                located off the living space, features a shower and bathtub
              </p>

              <p className="text-blue-600 font-medium mt-2 mb-6">Airbnb Link</p>

              <div className="relative aspect-[16/9] my-10 rounded-lg overflow-hidden">
                <Image
                  src="/photos/post/whistlers-dream-rental-homes/9.jpg"
                  alt="Le Chamois Luxury 2 Bedroom Condo"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
                  <p className="text-sm font-medium">
                    Luxe 2 Bedroom Le Chamois
                  </p>
                </div>
              </div>

              {/* Condo 4 */}
              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                4) Luxe 5-bed | 3 bedroom Ski in Ski out in Whistler&apos;s
                Creekside Village
              </h3>

              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <p className="font-semibold">Price per night: $600-$1,800</p>
              </div>

              <p>
                Welcome to our beautiful luxury townhome, perched high above the
                valley floor offering total seclusion & VIEWS, yet exceptionally
                close proximity to everything you could possibly desire within
                town.
              </p>

              <p className="mt-4">
                LOCATION LOCATION LOCATION: Ski/Bike In & Out - This property is
                located within a 2 minute walk to the Creekside gondola, and
                there is also a great ski/bike in & out access point only 100
                metres up the hill - The choice is yours. Creekside Village is
                also only a short 2-3 minute walk away.
              </p>

              <p className="text-blue-600 font-medium mt-2 mb-6">Airbnb Link</p>

              <div className="relative aspect-[16/9] my-10 rounded-lg overflow-hidden">
                <Image
                  src="/photos/post/whistlers-dream-rental-homes/10.jpg"
                  alt="Creekside Village Luxury Townhome"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
                  <p className="text-sm font-medium">
                    Luxe 5-bed, 3 bedroom Ski in Ski out Creekside
                  </p>
                </div>
              </div>

              {/* VIP Concierge Services */}
              <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                AceHost Whistler Included VIP Concierge Services
              </h2>

              <p>
                We can help you create the ultimate Whistler vacation by
                organizing bespoke experiences such as guided wildlife tours,
                in-home cooking classes, private chefs, daily cleaning, airport
                transportation, private wine tastings, oyster shucking, heli
                experiences, etc... Whether you&apos;re seeking a
                family-friendly escape, a romantic retreat, or a group
                adventure, these top Whistler luxury rental homes promise to
                deliver an unparalleled vacation experience that will leave you
                with cherished memories for years to come.
              </p>

              <div className="bg-gray-100 p-8 rounded-xl my-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Experience Whistler&apos;s Luxury?
                </h2>
                <p className="mb-6">
                  For more home options on luxury properties, pricing, &
                  availability, please visit the AceHost Whistler website.
                </p>
                <Link
                  href="https://acehost.ca"
                  className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AceHost.ca
                </Link>
              </div>

              {/* Related Articles */}
              <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8">
                More Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((article, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <Link href={`/post/${article.slug}`} className="block">
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-3">
                          {article.category}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2">
                          {article.title}
                        </h3>
                        <span className="text-blue-600 font-medium hover:underline inline-flex items-center">
                          Read article
                          <svg
                            className="ml-1 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
