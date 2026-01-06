import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', position: 'relative', backgroundColor: '#000' }}>
      <Link href="/" className="fixed top-6 left-6 md:top-8 md:left-12 lg:top-10 lg:left-16 flex items-center gap-2 text-white text-sm md:text-base z-20 hover:opacity-80">
        <Image src="/seedimage.png" alt="seed" width={20} height={20} />
        jia chen
      </Link>

      <nav className="fixed top-6 right-6 md:top-8 md:right-12 lg:top-10 lg:right-16 flex items-center gap-4 text-white text-sm md:text-base z-20">
        <Link href="/about" className="hover:opacity-80">about</Link>
        <Link href="/friends" className="hover:opacity-80">friends</Link>
        <Link href="/writing" className="hover:opacity-80">writing</Link>
      </nav>

      <div className="relative z-10 min-h-screen p-8 md:p-16 lg:p-24">
        <div className="max-w-3xl mx-auto pt-8">
          <div className="text-white text-sm md:text-base leading-relaxed space-y-8">
            <h1 className="text-2xl md:text-3xl">who i am</h1>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl">my entire life story</h2>

            <p>
              since i was young, i couldn&apos;t keep my hands still.
            </p>

            <p>
              my earliest recollection of life was in preschool, counting beads with an abacus. there was a snack drawer with saltine crackers and cheddar cheese. i remember reading this book about sticky gum. from then on i read all the books and that started my journey of becoming an avid reader.
            </p>

            <p>
              i then moved to taiwan at age 5. and came back at 9.
            </p>

            <p>
              the dreams (ones i had when asleep, subconscious) i had at this point were adventurous. i remember stealing snacks and candy in my dream.
            </p>

            <p>
              in elementary school, i was imaginative and made up detailed scenarios at recess, drew comics and pretended i was a dragon. also a detailed 32 page story based off cat warriors that i co-wrote with two friends and a giant google slide doc where i invited all my friends to make their houses. i tried to do a youtube channel many times.
            </p>

            <p>
              something my mother told me at 16 changed the way i saw life. it was far from what anyone should say, and i&apos;ve viewed myself differently since then. i then spent all my time in the school cafeteria studying until 9pm every night to avoid being home.
            </p>

            <p>
              in high school, some of my favorite places back in my hometown of okemos, MI were hiawatha hill (the small lake behind it), the watertower, and the secret trail across from the high school with a field of flowers, also a field at night. the dunkin donuts open 24/7 by the highway.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl">18-20</h2>
            <p>
              i did a bunch of stuff during this time. grew content creation. the experience of having a short haircut. cptsd. worked at culvers. rejected from college.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl">present day (21-25)</h2>
            <p>
              this next chapter of life is 21-25. during these years, i want to build underground.
            </p>
            <p>
              my thoughts on SF: i moved to SF at 20 years old.
            </p>
            <p>
              how i feel in this moment: somehow, there is a deep sadness that i cannot understand. my friend told me she saw it in my eyes. i don&apos;t know where it came from. maybe it&apos;s the weight of achievement and existing active in a very capitalist industry, maybe it&apos;s the people i miss, or the constant anxiety of if i&apos;m ever enough.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl">the future</h2>
            <p><strong>25-30:</strong> i meet my wife, grow the company</p>
            <p><strong>30-40:</strong> my second company and/or expansion of my first</p>
            <p><strong>40-60:</strong> i keep on building and leading</p>
            <p><strong>60-80:</strong> i&apos;ll go and do a bunch of random stuff</p>
            <p><strong>80-90:</strong> i&apos;ll probably still be pretty upbeat</p>
            <p><strong>90 onwards:</strong> i think it&apos;s ggs and i&apos;ll spend my time resting and carefree. you had a good life jia</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl">quirks</h2>
            <p>
              some other quirks about me are that i am a big germaphobe. my friends keep teasing me about it but lowkey it probably does get annoying for them sometimes. i can&apos;t drink restaurant water without a piece of mind and i need to have it with a slice of lemon. then i proceed to eat the whole lemon slice with the rind. i love lemons a lot.
            </p>
            <p>
              day 507: 40 pull-ups a day
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl">what my exes (3.5) have said about me</h2>
            <ul className="space-y-2">
              <li>&quot;i can see you being a successful musician&quot; - the first song i ever released was about her</li>
              <li>&quot;be more grounded&quot; - 2/10, idk why this girl told me to dream smaller. that was a turn off. downvote.</li>
              <li>&quot;you&apos;ll end up making more money than me, haha&quot; - she&apos;s doing research at oxford rn lol what she even talking abt</li>
              <li>&quot;i know you&apos;ll succeed in the brutal tech scene&quot; - she was a sweetheart, in public health and deeply loyal</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl">some things i want</h2>
            <p>
              i want the petite bouquets at trader joes. i want more circle lamps from ikea. i want a live rabbit as a pet. i&apos;m not too sure if i want a family. i want more vivian westwood.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl">things i do for people i love</h2>
            <p>
              for my gf/fiance/wife i will buy or pick flowers or write a note at least once every month. whether it is a small flower from the side of the road or a big bouquet, a long handwritten letter or a small scribble. UNLESS they have a drastically different love language.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl">my family history</h2>
            <p>
              <strong>on my mom&apos;s side:</strong> great grandma started a pineapple farm in vietnam. matriarchal.
            </p>
            <p>
              <strong>on my dad&apos;s side:</strong> came from fishermen. royal lineage on my dad&apos;s side were phd linguists. that&apos;s why i have a way with words (horrendous run-on sentences).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl">what is the meaning of life?</h2>
            <p>
              the meaning of life is to understand the context of the past and to create context for the future. everything you touch feels instantaneous and fleeting, but it never will be. it will be held in space. every memory is never forgotten by time. if you had fallen in a forest and then died the universe would hear you and that moment is stored somewhere no one can see or comprehend. everything compounds and will be compounded to the future. any moment of joy you create for yourself ancestors had created to make it easier for you to create it now. someone had brought a bowl of rice to your great grandma and she smiled and with that smile she had the confidence to face the obstacles she had back then and the reason you&apos;re smiling now. let yourself be happy and let yourself be sad let yourself be angry shoot for your goals and push yourself to challenges.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl">mottos</h2>
            <p><strong>act like a person</strong></p>
            <ul className="space-y-2 ml-4">
              <li>A. beyond all these paragraphs, life is simple. remind yourself you are an animal. drink water, eat healthy, go to gym, talk to others.</li>
              <li>B. inputs and outputs - similar to coding and physics just look at what you are given and what you want out and search your brain for the equation and then execute</li>
              <li>C. do the bare minimum to keep going. something i learned from a friend in college. make things as easy as possible to do. outfit, tasks.</li>
            </ul>
            <p><strong>positive sum</strong></p>
          </section>
          </div>
        </div>
      </div>
    </div>
  );
}
